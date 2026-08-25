import ActivityMap from '@/components/ActivityMap'
import Logo from '@/components/Logo'
import ProjectCard from '@/components/ProjectCard'
import { developmentSnapshot, projects, type Project } from '@/data/projects'

const community = [
  { label: 'GitHub', detail: 'github.com/swedev', href: 'https://github.com/swedev' },
  { label: 'Reddit', detail: 'r/swedev', href: 'https://reddit.com/r/swedev' },
  { label: 'X', detail: '@swedevorg', href: 'https://x.com/swedevorg' },
  { label: 'E-post', detail: 'hello@swedev.org', href: 'mailto:hello@swedev.org' },
]

function ProjectGroup({
  title,
  description,
  projects,
  tone,
}: {
  title: string
  description: string
  projects: Project[]
  tone: string
}) {
  return (
    <div className={`project-group project-group--${tone}`}>
      <div className="project-group__header">
        <h2>{title}</h2>
        <p>{description}</p>
        <span>{projects.length} projekt</span>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const apps = projects.filter((p) => p.kind === 'app')
  const libs = projects.filter((p) => p.kind === 'lib')
  const data = projects.filter((p) => p.kind === 'data')

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-7">
          <a href="#" aria-label="swedev" className="block w-24">
            <Logo className="block h-auto w-full" />
          </a>
          <nav className="flex gap-5 font-mono text-sm">
            <a href="#projekt" className="hover:text-blue">projekt</a>
            <a href="#community" className="hover:text-blue">community</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 md:px-7">
        <section className="hero py-20 md:py-28">
          <h1 className="max-w-5xl font-display text-5xl font-normal leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
            Öppen källkod för<br /> <em>svenska verksamheter.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            swedev bygger verktyg för föreningar och småföretag — bokföring, föreningsdrift,
            schemaläggning, dokument — och de bibliotek som knyter ihop dem. Svenska regler
            och integrationer inbyggda, webb-UI först.
          </p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <a href="https://github.com/swedev" className="underline decoration-line underline-offset-4 hover:text-blue">
              github.com/swedev ↗
            </a>
          </p>
        </section>

        <section id="projekt" className="projects-section scroll-mt-20 border-t border-line py-16">
          <div className="projects-intro">
            <h2>Verktygen vi bygger</h2>
            <p>
              Från färdiga bibliotek till tidiga produktspår. Varje kort visar vad projektet
              gör, var det befinner sig och vilka delar det består av.
            </p>
            <p className="projects-snapshot">
              <span>Utvecklingsstatistik</span>
              Git commits {developmentSnapshot.period} · staplar per {developmentSnapshot.granularity} ·{' '}
              sammanställd {developmentSnapshot.compiledAt}
            </p>
          </div>

          <ProjectGroup
            title="Applikationer"
            description="Produkter för det dagliga arbetet i svenska föreningar och småföretag"
            projects={apps}
            tone="apps"
          />
          <ProjectGroup
            title="Bibliotek"
            description="Delade byggblock och integrationer som gör applikationerna enklare att bygga"
            projects={libs}
            tone="libraries"
          />
          <ProjectGroup
            title="Öppna data"
            description="Strukturerade svenska datakällor, fria att använda och bygga vidare på"
            projects={data}
            tone="data"
          />

          <ActivityMap />
        </section>

        <section id="community" className="scroll-mt-20 border-t border-line py-16">
          <h2 className="font-display text-4xl font-normal md:text-5xl">Var med</h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            swedev är en community för svenska utvecklare, designers, arkitekter och andra
            IT-proffs som tror på öppen källkod och öppna data — inte minst inom offentlig sektor.
            Koden är öppen, diskussionen också.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {community.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  className="block rounded-lg border border-line bg-card p-4 transition-colors hover:border-blue"
                >
                  <span className="block text-lg font-semibold">{c.label}</span>
                  <span className="mt-1 block font-mono text-sm text-ink-soft">{c.detail}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-ink-soft">
          <span>swedev.org</span>
          <a href="https://github.com/swedev/swedev.org" className="hover:text-blue">
            källkoden till den här sidan ↗
          </a>
        </div>
      </footer>
    </>
  )
}
