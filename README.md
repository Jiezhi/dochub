# dochub

Mirrors documentation from upstream OSS projects to GitHub so they can be read
from networks where only `github.com` is reachable.

Currently mirrored:

| Source         | Upstream                                                                 | Original site                   |
| -------------- | ------------------------------------------------------------------------ | ------------------------------- |
| `opencode`     | [`sst/opencode`](https://github.com/sst/opencode)                        | https://opencode.ai/docs/       |
| `bruno`        | [`usebruno/bruno-docs`](https://github.com/usebruno/bruno-docs)          | https://docs.usebruno.com/      |
| `mermaid`      | [`mermaid-js/mermaid`](https://github.com/mermaid-js/mermaid)            | https://mermaid.js.org/         |

Browse the mirrored markdown under [`docs/`](./docs/). GitHub renders the
`.md` / `.mdx` files inline.

## How it works

A GitHub Actions workflow runs every 6 hours and:

1. Reads [`scripts/sources.yaml`](./scripts/sources.yaml) to find each upstream
   repo, branch, and the paths under it to mirror.
2. Sparse-checkouts only those paths via `git`.
3. Copies the matching markdown into `docs/<source>/`, pruning anything that
   was removed upstream.
4. Writes [`docs/manifest.json`](./docs/manifest.json) recording the upstream
   commit SHA used for each source.
5. Commits and pushes only when something changed.

## Adding a new source

Append an entry to `scripts/sources.yaml`:

```yaml
- name: somelib
  repo: owner/repo
  ref: main
  homepage: https://somelib.example/docs/
  paths:
    - docs
  strip: docs       # optional: drop this prefix from the output path
  include:
    - "**/*.md"
  exclude:
    - "node_modules/**"
```

Then either wait for the cron, or trigger the workflow manually
(`Actions -> Update Docs -> Run workflow`, optionally scoped via the `only`
input).

## Running locally

```bash
pip install -r scripts/requirements.txt
python scripts/fetch_docs.py            # sync everything
python scripts/fetch_docs.py --only mermaid --only bruno
```

## License

This repository contains mirrored documentation. Each `docs/<source>/`
directory is governed by its upstream project's license — see the linked
repos above. The mirror infrastructure itself (scripts, workflows) is
released under the MIT License; see [`LICENSE`](./LICENSE).
