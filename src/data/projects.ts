export type Status =
  | 'I drift'
  | 'Aktiv utveckling'
  | 'Proof-of-concept'
  | 'Design'
  | 'Idéfas'

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  status: Status
  kind: 'app' | 'lib'
  dependsOn: string[]
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: 'openvera',
    name: 'OpenVera',
    tagline: 'Bokföring för svenska småföretag',
    description:
      'Banktransaktioner via PSD2 och CSV, kvitton och fakturor, matchning, leverantörsregister och SIE4-export. Webb-UI först, agent som komplement.',
    status: 'I drift',
    kind: 'app',
    dependsOn: ['klartex', 'svensk'],
    links: [{ label: 'openvera.se', href: 'https://openvera.se' }],
  },
  {
    slug: 'styrla',
    name: 'Styrla',
    tagline: 'Plattform för svenska föreningar',
    description:
      'Ärendelogg, medlemsregister med GDPR-rutin, kallelser och protokoll — självbeskrivande moduler som kombineras efter föreningens behov. Byggs först för en koloniförening.',
    status: 'Aktiv utveckling',
    kind: 'app',
    dependsOn: ['klartex', 'openvera', 'timla', 'svensk', 'swedev-ui'],
    links: [{ label: 'app.styrla.se', href: 'https://app.styrla.se' }],
  },
  {
    slug: 'timla',
    name: 'Timla',
    tagline: 'Tid, bokning och schemaläggning',
    description:
      'En composable tidsmotor: arbetsschema, tidsbokning, resursbokning, tidsrapportering. Lagret under verktyg som Calendly, Planday och Doodle.',
    status: 'Aktiv utveckling',
    kind: 'app',
    dependsOn: ['klartex', 'openvera', 'svensk'],
    links: [],
  },
  {
    slug: 'klartex',
    name: 'Klartex',
    tagline: 'PDF-dokument via LaTeX',
    description:
      'Strukturerad data in, professionella dokument ut. Kärnan är ett Python-paket med CLI och HTTP-server; klartex.se blir en WYSIWYG-webbapp ovanpå den.',
    status: 'I drift',
    kind: 'app',
    dependsOn: [],
    links: [
      { label: 'swedev/klartex', href: 'https://github.com/swedev/klartex' },
      { label: 'swedev/klartex.se', href: 'https://github.com/swedev/klartex.se' },
    ],
  },
  {
    slug: 'valsedel',
    name: 'Valsedel',
    tagline: 'Personliga valsedlar enligt Valmyndighetens spec',
    description:
      'Välj val, sök parti, rangordna kandidater och få en PDF i exakt rätt format — A6, färgkodad per valtyp, 333 partier och 104 partilogotyper.',
    status: 'Proof-of-concept',
    kind: 'app',
    dependsOn: ['klartex'],
    links: [
      { label: 'valsedel.se', href: 'https://valsedel.se' },
      { label: 'swedev/valsedel', href: 'https://github.com/swedev/valsedel' },
    ],
  },
  {
    slug: 'debira',
    name: 'Debira',
    tagline: 'Kundregister och fakturering',
    description:
      'Offert till betald faktura, engångs och återkommande: avisering med OCR, påminnelser, dröjsmålsränta och betalningsmatchning. Överlämnar fordringar till OpenVera.',
    status: 'Idéfas',
    kind: 'app',
    dependsOn: ['klartex', 'svensk', 'openvera'],
    links: [],
  },
  {
    slug: 'bovard',
    name: 'Bovard',
    tagline: 'Verksamhetssystem för små hyresvärdar',
    description:
      'Objekt, hyresgäster, kontrakt, hyresjustering, felanmälan och underhåll — med hyreslagens regler inbyggda. Aviserar via Debira.',
    status: 'Idéfas',
    kind: 'app',
    dependsOn: ['debira', 'klartex', 'svensk', 'swedev-ui'],
    links: [],
  },
  {
    slug: 'fullinsyn',
    name: 'Fullinsyn',
    tagline: 'Verksamhetsinsikt för småföretag',
    description:
      'Samlade vyer över ekonomi, kunder, tid och projekt — läser från systemen du redan använder. Ingen egen datainmatning.',
    status: 'Idéfas',
    kind: 'app',
    dependsOn: ['openvera', 'timla', 'debira', 'bovard', 'klartex', 'svensk'],
    links: [],
  },
  {
    slug: 'svensk',
    name: 'svensk',
    tagline: 'Svenska integrationer som bibliotek',
    description:
      'Swish, BankID, BankGiro, SIE4, SMS, organisations- och personnummer, röda dagar. Aktivt underhållet, säkert by default, agentvänligt.',
    status: 'Idéfas',
    kind: 'lib',
    dependsOn: [],
    links: [{ label: 'swedev/svensk', href: 'https://github.com/swedev/svensk' }],
  },
  {
    slug: 'parla',
    name: 'parla',
    tagline: 'Tjänst-till-tjänst-kopplingar',
    description:
      'Pairing, tokens, scopes och rotation mellan apparna. Hemligheten går server till server och passerar aldrig en människa — samtycket är ett klick.',
    status: 'Design',
    kind: 'lib',
    dependsOn: [],
    links: [],
  },
  {
    slug: 'swedev-ui',
    name: '@swedev/ui',
    tagline: 'Delat komponentbibliotek',
    description:
      'Radix Themes med semantiska wrappers, Lucide-ikoner och Tailwind 4. Samma gränssnitt oavsett om modulerna kommer från Styrla, OpenVera eller Timla.',
    status: 'Aktiv utveckling',
    kind: 'lib',
    dependsOn: [],
    links: [{ label: 'swedev/ui', href: 'https://github.com/swedev/ui' }],
  },
]

export const bySlug = Object.fromEntries(projects.map((p) => [p.slug, p])) as Record<string, Project>

export function usedBy(slug: string): Project[] {
  return projects.filter((p) => p.dependsOn.includes(slug))
}
