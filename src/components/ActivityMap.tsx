import { developmentSnapshot, projects } from '@/data/projects'

function intensity(commits: number, maximum: number) {
  if (commits === 0) return 0
  return Math.max(1, Math.ceil((commits / maximum) * 4))
}

export default function ActivityMap() {
  const activeProjects = projects.filter((project) => project.development)
  const startIndex = developmentSnapshot.startWeek - 1
  const weeks =
    activeProjects[0]?.development?.activity
      .slice(startIndex)
      .map((_, index) => index + developmentSnapshot.startWeek) ?? []

  return (
    <section id="aktivitet" className="activity-section scroll-mt-20" aria-labelledby="activity-title">
      <div className="activity-section__header">
        <p className="eyebrow">Vecka för vecka</p>
        <h2 id="activity-title">Aktivitetskarta</h2>
        <p>
          Commits per vecka och projekt under {developmentSnapshot.period}. Arbetet går i skov:
          en intensiv ruta betyder att fokus låg där just den veckan.
        </p>
      </div>

      <div className="activity-map__frame">
        <div className="activity-map__scroller">
          <div
            className="activity-map"
            role="table"
            aria-label={`Commits per projekt och vecka under ${developmentSnapshot.period}`}
            style={{ '--activity-columns': weeks.length } as React.CSSProperties}
          >
            {activeProjects.map((project) => {
              const development = project.development!
              const activity = development.activity.slice(startIndex)
              const maximum = Math.max(...activity, 1)

              return (
                <div
                  key={project.slug}
                  className={`activity-map__row project-accent-${project.slug}`}
                  role="row"
                >
                  <a
                    className="activity-map__project"
                    href={`#${project.slug}`}
                    role="rowheader"
                    title={project.name}
                  >
                    {project.name}
                  </a>
                  {activity.map((commits, index) => {
                    const week = index + developmentSnapshot.startWeek
                    return (
                      <span
                        key={week}
                        className={`activity-map__cell activity-map__cell--${intensity(commits, maximum)}`}
                        role="cell"
                        aria-label={`${project.name}, vecka ${week}: ${commits} commits`}
                        title={`${project.name} · v.${week} · ${commits} commits`}
                      />
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="activity-map__legend" aria-label="Färgskala">
        <span className="activity-map__legend-cell" />
        <span>ingen aktivitet</span>
        <span aria-hidden="true">·</span>
        <span>mörkare</span>
        {[1, 2, 3, 4].map((level) => (
          <span
            key={level}
            className={`activity-map__legend-cell activity-map__cell--${level}`}
            aria-hidden="true"
          />
        ))}
        <span>ljusare = fler commits</span>
      </div>
    </section>
  )
}
