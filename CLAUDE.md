# swedev.org — agent notes

Static public site for the swedev organisation. One page, Swedish copy.

## Workflow

- Branch + PR flow — never commit directly to `main`. PRs are squash-merged.
- CI (`Integrate`) must be green: `npm run lint && npm run typecheck && npm run build`.
- Every push to `main` deploys (rsync to saga) — merging is releasing.

## Stack

- Next 16, app router, `output: 'export'` — no server, no API routes, no
  `next/image` optimisation. `trailingSlash: true` so nginx `try_files` works.
- Tailwind 4 with tokens in `src/app/globals.css` (`@theme` + dark override
  via `prefers-color-scheme`). Use the tokens (`text-ink-soft`, `bg-card`,
  `border-line`, `text-blue`) — no raw hex in components.
- Fonts via `next/font/google` (Bricolage Grotesque display, IBM Plex Sans
  body, IBM Plex Mono labels) — downloaded at build time, self-hosted in `out/`.
- Content: `src/data/projects.ts` is the single source for projects, statuses,
  dependencies and links. Statuses mirror `~/repos/projects/README.md`; update both.
- The logo is an inline `currentColor` SVG (`src/components/Logo.tsx`).

## Deploy

`deploy/README.md` — nginx conf, certbot, deploy key, GitHub secrets.
