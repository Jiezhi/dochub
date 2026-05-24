#!/usr/bin/env python3
"""Generate index.html for the gh-pages build listing all sources."""
import json
import sys
from pathlib import Path

repo = sys.argv[1] if len(sys.argv) > 1 else "unknown/unknown"

links = ""
try:
    manifest = json.loads(
        (Path(__file__).resolve().parent.parent / "docs" / "manifest.json").read_text()
    )
    for name, s in sorted(manifest.get("sources", {}).items()):
        homepage = s.get("homepage", "#")
        count = s.get("file_count", "?")
        links += (
            f'<li><a href="{name}/">{name}</a>'
            f" &mdash; <a href=\"{homepage}\">{homepage}</a>"
            f" ({count} src files)</li>\n"
        )
except Exception as exc:
    links = f"<li>Error reading manifest: {exc}</li>"

html = f"""\
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><title>dochub</title>
<style>
body{{font-family:system-ui,sans-serif;max-width:640px;margin:2em auto;padding:1em;line-height:1.6}}
a{{color:#0969da}}
</style></head>
<body>
<h1>dochub</h1>
<p>Built documentation for browsing on restricted networks.
Raw source at <a href="https://github.com/{repo}">{repo}</a>.</p>
<ul>{links}</ul>
</body></html>
"""

print(html)
