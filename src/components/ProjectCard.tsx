import type { Project } from '@/data/projects'
import { bySlug, usedBy } from '@/data/projects'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      id={project.slug}
      className="flex scroll-mt-24 flex-col gap-3 rounded-lg border border-line bg-card p-5"
    >
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-bold leading-tight">{project.name}</h3>
          <p className="mt-0.5 text-sm text-ink-soft">{project.tagline}</p>
        </div>
        <StatusBadge status={project.status} />
      </header>

      <p className="text-[0.95rem] leading-relaxed">{project.description}</p>

      <Relations label="bygger på" items={project.dependsOn.map((slug) => bySlug[slug])} />
      <Relations label="används av" items={usedBy(project.slug)} />

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

function Relations({ label, items }: { label: string; items: Project[] }) {
  if (items.length === 0) return null
  return (
    <p className="font-mono text-xs text-ink-soft">
      {label}{' '}
      {items.map((p, i) => (
        <span key={p.slug}>
          {i > 0 && ', '}
          <a href={`#${p.slug}`} className="underline decoration-line underline-offset-4 hover:text-blue">
            {p.name}
          </a>
        </span>
      ))}
    </p>
  )
}
