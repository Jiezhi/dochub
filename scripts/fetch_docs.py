#!/usr/bin/env python3
"""
Mirror documentation from upstream GitHub repositories into docs/<name>/.

Reads scripts/sources.yaml, downloads matching markdown files from each
upstream repo via ``gh api`` (GitHub CLI), and writes a manifest with the
current upstream commit SHA for each source.

All GitHub operations go through the ``gh`` CLI — no raw ``git`` or ``curl``.
"""
from __future__ import annotations

import argparse
import base64
import fnmatch
import json
import logging
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from datetime import datetime, timezone
from pathlib import Path
from typing import Iterable

import yaml

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s %(levelname)s %(message)s",
    datefmt="%H:%M:%S",
)
log = logging.getLogger("fetch_docs")

DEFAULT_INCLUDE = ("*.md", "*.mdx")
MANIFEST_NAME = "manifest.json"


@dataclass(frozen=True)
class Source:
    name: str
    repo: str
    ref: str
    paths: tuple[str, ...]
    strip: str | None = None
    include: tuple[str, ...] = DEFAULT_INCLUDE
    exclude: tuple[str, ...] = ()
    homepage: str | None = None


def load_sources(config_path: Path) -> list[Source]:
    data = yaml.safe_load(config_path.read_text())
    raw = data.get("sources", [])
    return [
        Source(
            name=s["name"],
            repo=s["repo"],
            ref=s.get("ref", "main"),
            paths=tuple(s["paths"]),
            strip=s.get("strip"),
            include=tuple(s.get("include", DEFAULT_INCLUDE)),
            exclude=tuple(s.get("exclude", ())),
            homepage=s.get("homepage"),
        )
        for s in raw
    ]


# ---------------------------------------------------------------------------
# gh helpers
# ---------------------------------------------------------------------------

def _gh(args: list[str]) -> str:
    """Run ``gh <args>``, return stdout, raise on failure."""
    cmd = ["gh"] + args
    log.debug("$ %s", " ".join(cmd))
    proc = subprocess.run(cmd, check=True, capture_output=True, text=True)
    return proc.stdout


def _gh_json(args: list[str]) -> object:
    return json.loads(_gh(args))


def _gh_commit_sha(repo: str, ref: str) -> str:
    return _gh(
        [
            "api",
            f"repos/{repo}/commits/{ref}",
            "--jq",
            ".sha",
        ]
    ).strip()


def _gh_list_dir(repo: str, path: str, ref: str) -> list[dict]:
    """Return the contents API listing for a *directory*."""
    entries: list[dict] = _gh_json(  # type: ignore[assignment]
        [
            "api",
            f"repos/{repo}/contents/{path}?ref={ref}",
            # --jq '.[]' would split the array into lines; stay with JSON array
        ]
    )
    return entries


def _gh_download_file(repo: str, path: str, ref: str) -> str:
    """Return the decoded text content of a single file."""
    b64 = _gh(
        [
            "api",
            f"repos/{repo}/contents/{path}?ref={ref}",
            "--jq",
            ".content",
        ]
    ).strip()
    return base64.b64decode(b64).decode("utf-8")


# ---------------------------------------------------------------------------
# pattern matching
# ---------------------------------------------------------------------------

def _matches_any(path: str, patterns: Iterable[str]) -> bool:
    for p in patterns:
        if fnmatch.fnmatch(path, p):
            return True
        # fnmatch doesn't support ** — fall back to pathlib
        if "*" in p:
            try:
                if Path(path).match(p):
                    return True
            except Exception:
                pass
    return False


def _should_skip(path: str, source: Source) -> bool:
    """True if this path should be excluded based on source config."""
    name = Path(path).name
    if not _matches_any(name, source.include) and not _matches_any(
        path, source.include
    ):
        return True
    if _matches_any(name, source.exclude) or _matches_any(path, source.exclude):
        return True
    return False


# ---------------------------------------------------------------------------
# directory walker
# ---------------------------------------------------------------------------

def _walk_dir(
    repo: str, ref: str, path: str, source: Source
) -> list[tuple[str, str]]:
    """Recursively list (repo_path, output_rel) for matching files under *path*."""
    out: list[tuple[str, str]] = []
    try:
        entries = _gh_list_dir(repo, path, ref)
    except subprocess.CalledProcessError:
        log.warning("[%s] cannot list %s", source.name, path)
        return out

    for entry in entries:
        entry_path: str = entry["path"]
        entry_type: str = entry["type"]

        if entry_type == "dir":
            # Check if directory name itself matches an exclude pattern
            # (e.g. locale dirs like "ar", "de")
            dir_name = Path(entry_path).name
            if _matches_any(dir_name, source.exclude) or _matches_any(
                entry_path + "/", source.exclude
            ):
                log.debug("[%s] skipping excluded dir: %s", source.name, entry_path)
                continue
            out += _walk_dir(repo, ref, entry_path, source)
        elif entry_type == "file":
            if not _should_skip(entry_path, source):
                # Compute output relative path
                if source.strip:
                    strip_prefix = source.strip.rstrip("/") + "/"
                    if entry_path.startswith(strip_prefix):
                        rel_out = entry_path[len(strip_prefix) :]
                    elif entry_path == source.strip:
                        rel_out = Path(entry_path).name
                    else:
                        rel_out = entry_path
                else:
                    rel_out = entry_path
                out.append((entry_path, rel_out))
    return out


# ---------------------------------------------------------------------------
# sync
# ---------------------------------------------------------------------------

def _sync_source(repo_root: Path, source: Source) -> dict:
    out_dir = repo_root / "docs" / source.name
    out_dir.mkdir(parents=True, exist_ok=True)

    sha = _gh_commit_sha(source.repo, source.ref)
    log.info(
        "[%s] %s@%s commit %s", source.name, source.repo, source.ref, sha[:8]
    )

    written: set[str] = set()
    for path in source.paths:
        for repo_path, rel_out in _walk_dir(source.repo, source.ref, path, source):
            try:
                content = _gh_download_file(source.repo, repo_path, source.ref)
            except subprocess.CalledProcessError:
                log.warning("[%s] failed to download %s", source.name, repo_path)
                continue
            dest = out_dir / rel_out
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_text(content, encoding="utf-8")
            written.add(rel_out)
            log.debug("[%s] saved %s", source.name, rel_out)

    _prune_stale(out_dir, written)

    log.info("[%s] synced %d files", source.name, len(written))
    return {
        "repo": source.repo,
        "ref": source.ref,
        "commit": sha,
        "homepage": source.homepage,
        "file_count": len(written),
        "synced_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
    }


def _prune_stale(out_dir: Path, kept: set[str]) -> None:
    preserved = {MANIFEST_NAME, "README.md"}
    for p in out_dir.rglob("*"):
        if not p.is_file():
            continue
        rel = str(p.relative_to(out_dir)).replace("\\", "/")
        if rel in preserved:
            continue
        if rel not in kept:
            p.unlink()
    for p in sorted(out_dir.rglob("*"), reverse=True):
        if p.is_dir() and not any(p.iterdir()):
            p.rmdir()


def _write_manifest(repo_root: Path, results: dict[str, dict]) -> None:
    dest = repo_root / "docs" / MANIFEST_NAME
    dest.parent.mkdir(exist_ok=True)
    payload = {
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "sources": results,
    }
    dest.write_text(json.dumps(payload, indent=2) + "\n", encoding="utf-8")


# ---------------------------------------------------------------------------
# main
# ---------------------------------------------------------------------------

def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--config", default="scripts/sources.yaml")
    parser.add_argument(
        "--only",
        action="append",
        default=[],
        help="Only sync the named source(s); repeatable",
    )
    args = parser.parse_args()

    repo_root = Path(__file__).resolve().parent.parent
    sources = load_sources(repo_root / args.config)

    if args.only:
        wanted = set(args.only)
        sources = [s for s in sources if s.name in wanted]
        missing = wanted - {s.name for s in sources}
        if missing:
            log.error("Unknown sources: %s", ", ".join(sorted(missing)))
            return 2

    results: dict[str, dict] = {}
    failures: list[str] = []

    for source in sources:
        try:
            results[source.name] = _sync_source(repo_root, source)
        except subprocess.CalledProcessError as exc:
            log.error(
                "[%s] gh failure: %s\nstderr:\n%s",
                source.name,
                " ".join(exc.cmd),
                exc.stderr,
            )
            failures.append(source.name)
        except Exception:
            log.exception("[%s] unexpected error", source.name)
            failures.append(source.name)

    _write_manifest(repo_root, results)

    if failures:
        log.error("Failed sources: %s", ", ".join(failures))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
