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
    matrix.append(
        {
            "name": s["name"],
            "repo": s["repo"],
            "ref": s["ref"],
            "tool": build["tool"],
            "working_dir": build["working_dir"],
            "install": build["install"],
            "script": build["script"],
            "output": build["output"],
        }
    )

json.dump({"include": matrix}, sys.stdout, indent=2)
print()
