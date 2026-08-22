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
there to add a project, change a status or a link.

## Deploy

Static export (`next build` → `out/`) rsynced to the `saga` server on every
push to `main`. See [`deploy/README.md`](deploy/README.md).
