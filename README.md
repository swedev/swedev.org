# swedev.org

Public website for [swedev](https://github.com/swedev) — open source for
Swedish organisations. One static page: the projects, how they depend on each
other, and where to join.

## Dev

```bash
npm install
npm run dev          # http://localhost:3000
npm run precommit    # lint + typecheck + build (what CI runs)
```

Project data lives in [`src/data/projects.ts`](src/data/projects.ts); edit
there to add a project or change its status, description, stack, links or
development snapshot. Commit totals and weekly bars cover the current calendar
year to the compilation date; issue counts and versions are dated snapshots.
Everything is deliberately static so the public overview can be updated by hand.

## Deploy

Static export (`next build` → `out/`) rsynced to the `saga` server when a
`v*` tag is pushed. See [`deploy/README.md`](deploy/README.md).
