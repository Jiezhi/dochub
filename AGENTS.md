# AGENTS.md — dochub

Mirrors documentation from upstream OSS projects to GitHub so they can be read
from networks where only `github.com` is reachable. Raw markdown lives under
`docs/<source>/`; built HTML is deployed to GitHub Pages.

## Local dev

```bash
pip install -r scripts/requirements.txt
python scripts/fetch_docs.py                      # sync all sources
python scripts/fetch_docs.py --only opencode      # sync one source
python scripts/fetch_docs.py --only opencode --only mermaid  # sync multiple
```

Requires `gh` CLI authenticated (`gh auth status`).

## Source of truth

`scripts/sources.yaml` defines every upstream repo, include/exclude globs, and
the optional `build` config. `docs/manifest.json` is auto-generated — never
edit by hand.

## Adding a source

Append an entry to `scripts/sources.yaml`. If the source needs static HTML
on gh-pages, add a `build` block (see existing entries for tool/working_dir/
install/pre_build/script/output patterns).

## Build system (gh-pages)

- `update-docs.yml` — runs every 6h, mirrors raw markdown via `gh api`, commits
  only on diff.
- `build-docs.yml` — runs daily, clones upstream repos and builds HTML. Outputs
  go to the `gh-pages` branch via `gen-build-matrix.py` → matrix strategy.

`gen-build-matrix.py` reads `sources.yaml` and emits JSON matrix. In the matrix,
`pre_build` entries are joined with ` && ` — **the heredoc block must be the
last entry** in `pre_build` or the chained command breaks.

Build tools per source:
- opencode: `bun` (Astro static)
- mermaid: `pnpm` (VitePress)
- bruno, claude-code, fastmcp, langchain-docs: `pip` (MkDocs Material — Mintlify
  has no public static export)
- uv: `pip` (upstream's own MkDocs Material)

## Conventions

- The `docs/<source>/` tree is mirrored verbatim; `.md` and `.mdx` only.
- Stale files are pruned automatically by `fetch_docs.py`.
- The deploy step on `gh-pages` is selective: only subdirectories of rebuilt
  sources are replaced; other sources remain untouched.
- `_pages/.nojekyll` is required so directories starting with `_` (like
  `_astro/`) are served verbatim by GitHub Pages.