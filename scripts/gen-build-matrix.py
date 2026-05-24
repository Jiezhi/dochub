#!/usr/bin/env python3
"""Read sources.yaml and emit a JSON matrix for GitHub Actions build jobs."""
import json
import sys
from pathlib import Path

import yaml

repo_root = Path(__file__).resolve().parent.parent
sources = yaml.safe_load((repo_root / "scripts" / "sources.yaml").read_text())

matrix = []
for s in sources["sources"]:
    build = s.get("build")
    if not build:
        continue
    # pre_build is a list of shell commands; chain with `&&` so the matrix
    # value stays a single line (multi-line matrix strings break GHA YAML
    # expansion in `env:` blocks) and any failure short-circuits the rest.
    pre_build = " && ".join(build.get("pre_build") or [])
    matrix.append(
        {
            "name": s["name"],
            "repo": s["repo"],
            "ref": s["ref"],
            "tool": build["tool"],
            "working_dir": build["working_dir"],
            "install": build["install"],
            "pre_build": pre_build,
            "script": build["script"],
            "output": build["output"],
            "landing": build.get("landing", ""),
        }
    )

json.dump({"include": matrix}, sys.stdout, indent=2)
print()
