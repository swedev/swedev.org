import { developmentSnapshot, type Project } from '@/data/projects'
import { brands } from './Marks'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ project }: { project: Project }) {
  const brand = brands[project.slug]
  const development = project.development
  const initials = project.name
    .replace('@swedev/', '')
    .split(/[\s-]+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
  const activity = development?.activity.slice(developmentSnapshot.startWeek - 1) ?? []
  const activityMax = Math.max(...activity, 1)
  const activityLabels = development
    ? activity.map((_, index) => `v.${index + developmentSnapshot.startWeek}`)
    : []
  const activityPeriod =
    activityLabels.length > 1
      ? `${activityLabels[0]} → ${activityLabels.at(-1)}`
      : activityLabels[0]
  const activityWidth = Math.min(210, Math.max(14, activityLabels.length * 6))
  const metrics = development
    ? [
        { value: development.commits.toString(), label: 'commits 2026' },
        { value: development.openIssues.toString(), label: 'öppna issues' },
        ...(development.version ? [{ value: development.version, label: 'version' }] : []),
        { value: development.lastCommit, label: 'senaste commit' },
      ]
    : []

  return (
    <article id={project.slug} className={`project-card project-accent-${project.slug}`}>
      <header className="project-card__header">
        {brand ? (
          <span
            aria-hidden="true"
            className="project-card__tile"
            style={{ background: brand.paper }}
          >
            {brand.mark}
          </span>
        ) : (
          <span aria-hidden="true" className="project-card__tile project-card__monogram">
            {initials}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="project-card__title">{project.name}</h3>
          <p className="project-card__tagline">{project.tagline}</p>
        </div>
        <StatusBadge status={project.status} />
      </header>

      <p className="project-card__description">{project.description}</p>

      <p className="project-card__stack">{project.stack.join(' · ')}</p>

      {development && (
        <div className="project-card__development">
          <dl className="project-card__metrics">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.label}</dt>
                <dd>{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="project-card__activity">
            <div
              className="project-card__bars"
              role="img"
              aria-label={`Commits per ${developmentSnapshot.granularity} under ${developmentSnapshot.period}: ${activityLabels.map((label, index) => `${label}: ${activity[index]}`).join(', ')}`}
              style={{ width: activityWidth }}
            >
              {activity.map((commits, index) => {
                const height = commits === 0 ? 2 : Math.max(4, Math.round((commits / activityMax) * 26))
                return (
                  <span
                    key={activityLabels[index]}
                    className={commits > 0 ? 'is-active' : undefined}
                    style={{ height }}
                    title={`${activityLabels[index]}: ${commits} commits`}
                  />
                )
              })}
            </div>
            <span>{activityPeriod}</span>
          </div>

          <p className="project-card__note">{development.note}</p>
        </div>
      )}

      {project.links.length > 0 && (
        <ul className="project-card__links">
          {project.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="project-card__link">
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
