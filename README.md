# dochub

Mirrors documentation from upstream OSS projects to GitHub so they can be read
from networks where only `github.com` is reachable.

Currently mirrored:

| Source         | Upstream                                                                 | Original site                                            |
| -------------- | ------------------------------------------------------------------------ | -------------------------------------------------------- |
| `opencode`     | [`sst/opencode`](https://github.com/sst/opencode)                        | https://opencode.ai/docs/                                |
| `bruno`        | [`usebruno/bruno-docs`](https://github.com/usebruno/bruno-docs)          | https://docs.usebruno.com/                               |
| `claude-code`  | [`ericbuess/claude-code-docs`](https://github.com/ericbuess/claude-code-docs) | https://docs.claude.com/en/docs/claude-code/overview |
| `fastmcp`      | [`jlowin/fastmcp`](https://github.com/jlowin/fastmcp)                    | https://gofastmcp.com/                                   |
| `mermaid`      | [`mermaid-js/mermaid`](https://github.com/mermaid-js/mermaid)            | https://mermaid.js.org/                                  |

Browse the mirrored markdown under [`docs/`](./docs/). GitHub renders the
`.md` / `.mdx` files inline.

**Built HTML** is deployed daily to
[GitHub Pages](https://jiezhi.github.io/dochub/) (`build-docs.yml` workflow).
opencode uses Astro, mermaid uses VitePress, and the Mintlify-only sources
(bruno, claude-code, fastmcp) are rendered through MkDocs Material.

## How it works

Two GitHub Actions workflows:

**`update-docs.yml`** (every 6 hours) — mirrors raw markdown source:
1. Reads [`scripts/sources.yaml`](./scripts/sources.yaml) for each upstream repo.
2. Downloads markdown files via `gh api` (GitHub Contents API).
3. Copies matching files into `docs/<source>/`, prunes removed files.
4. Writes [`docs/manifest.json`](./docs/manifest.json) with upstream commit SHA.
5. Commits and pushes only when something changed.

**`build-docs.yml`** (daily) — builds static HTML for sources with a `build` config:
1. Full clone of each upstream repo.
2. Installs dependencies (`bun install` / `pnpm install`).
3. Runs the build command (Astro, VitePress).
4. Deploys the built HTML to the `gh-pages` branch (served by GitHub Pages).

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
  build:             # optional: build static HTML via CI
    tool: bun
    working_dir: docs
    install: bun install
    script: bun run build
    output: dist
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
