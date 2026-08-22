import Logo from '@/components/Logo'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const community = [
  { label: 'GitHub', detail: 'github.com/swedev', href: 'https://github.com/swedev' },
  { label: 'Reddit', detail: 'r/swedev', href: 'https://reddit.com/r/swedev' },
  { label: 'X', detail: '@swedevorg', href: 'https://x.com/swedevorg' },
  { label: 'E-post', detail: 'hello@swedev.org', href: 'mailto:hello@swedev.org' },
]

export default function Home() {
  const apps = projects.filter((p) => p.kind === 'app')
  const libs = projects.filter((p) => p.kind === 'lib')
  const data = projects.filter((p) => p.kind === 'data')

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" aria-label="swedev" className="block w-24">
            <Logo className="block h-auto w-full" />
          </a>
          <nav className="flex gap-5 font-mono text-sm">
            <a href="#projekt" className="hover:text-blue">projekt</a>
            <a href="#community" className="hover:text-blue">community</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        <section className="py-20 md:py-28">
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Öppen källkod för svenska verksamheter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            swedev bygger verktyg för föreningar och småföretag — bokföring, föreningsdrift,
            schemaläggning, dokument — och de bibliotek som knyter ihop dem. Svenska regler
            och integrationer inbyggda, webb-UI först.
          </p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
            <a href="#projekt" className="text-blue underline underline-offset-4">se projekten ↓</a>
            <a href="https://github.com/swedev" className="underline decoration-line underline-offset-4 hover:text-blue">
              github.com/swedev ↗
            </a>
          </p>
        </section>

        <section id="projekt" className="scroll-mt-20 border-t border-line py-16">
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Applikationer</h2>
            <p className="font-mono text-xs text-ink-soft">{apps.length} st</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {apps.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mb-8 mt-16 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Bibliotek</h2>
            <p className="font-mono text-xs text-ink-soft">{libs.length} st</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {libs.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>

          <div className="mb-8 mt-16 flex items-baseline justify-between">
            <h2 className="font-display text-2xl font-bold md:text-3xl">Öppna data</h2>
            <p className="font-mono text-xs text-ink-soft">{data.length} st</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <section id="community" className="scroll-mt-20 border-t border-line py-16">
          <h2 className="font-display text-2xl font-bold md:text-3xl">Var med</h2>
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
                  <span className="block font-display font-bold">{c.label}</span>
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
