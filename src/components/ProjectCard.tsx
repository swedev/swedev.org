import type { Project } from '@/data/projects'
import { brands } from './Marks'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project }: { project: Project }) {
  const brand = brands[project.slug]
  return (
    <article
      id={project.slug}
      className="flex scroll-mt-24 flex-col gap-3 rounded-lg border border-line bg-card p-5"
      style={brand ? { borderTopWidth: 3, borderTopColor: brand.accent } : undefined}
    >
      <header className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {brand && (
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line"
              style={{ background: brand.paper }}
            >
              {brand.mark}
            </span>
          )}
          <div>
            <h3 className="font-display text-xl font-bold leading-tight">{project.name}</h3>
            <p className="mt-0.5 text-sm text-ink-soft">{project.tagline}</p>
          </div>
        </div>
        <StatusBadge status={project.status} />
      </header>

      <p className="text-[0.95rem] leading-relaxed">{project.description}</p>

      {project.links.length > 0 && (
        <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-1">
          {project.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-blue underline decoration-blue/30 underline-offset-4 hover:decoration-blue"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
