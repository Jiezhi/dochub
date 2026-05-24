#!/usr/bin/env python3
"""Filter JSON build matrix to only include named sources. Reads JSON from
stdin, writes filtered JSON to stdout."""
import json
import sys

if len(sys.argv) < 2:
    json.dump(json.load(sys.stdin), sys.stdout, indent=2)
    sys.exit(0)

wanted = set(sys.argv[1].split(","))
data = json.load(sys.stdin)
data["include"] = [i for i in data["include"] if i["name"] in wanted]
json.dump(data, sys.stdout, indent=2)
print()
