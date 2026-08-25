# swedev.org — agent notes

Static public site for the swedev organisation. One page, Swedish copy.

## Workflow

- Branch + PR flow — never commit directly to `main`. PRs are squash-merged.
- CI (`Integrate`) must be green: `npm run lint && npm run typecheck && npm run build`.
- Deploys happen on `v*` tags only (`git tag v0.2.0 && git push origin v0.2.0`);
  merging to `main` does not deploy.

## Stack

- Next 16, app router, `output: 'export'` — no server, no API routes, no
  `next/image` optimisation. `trailingSlash: true` so nginx `try_files` works.
- Tailwind 4 with the dark visual system and tokens in `src/app/globals.css`
  (`@theme`). Use the tokens (`text-ink-soft`, `bg-card`,
  `border-line`, `text-blue`) — no raw hex in components.
- Fonts via `next/font/google` (Instrument Serif display, Inter Tight body,
  JetBrains Mono labels) — downloaded at build time, self-hosted in `out/`.
- Content: `src/data/projects.ts` is the single source for projects, statuses,
  links and dated development snapshots. Verify facts against the actual repos,
  not planning docs.
- The logo is an inline `currentColor` SVG (`src/components/Logo.tsx`).

## Deploy

`deploy/README.md` — nginx conf, certbot, deploy key, GitHub secrets.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
