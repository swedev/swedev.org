export type Status = 'Alfa' | 'Publicerad' | 'Tidigt' | 'Proof-of-concept' | 'Idéfas'

export const developmentSnapshot = {
  compiledAt: '25 augusti 2026',
  period: 'vecka 8–35 2026',
  granularity: 'vecka',
  startWeek: 8,
} as const

export interface DevelopmentStats {
  commits: number
  openIssues: number
  version?: string
  lastCommit: string
  activity: number[]
  note: string
}

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  stack: string[]
  status: Status
  kind: 'app' | 'lib' | 'data'
  links: { label: string; href: string }[]
  development?: DevelopmentStats
}

export const projects: Project[] = [
  {
    slug: 'openvera',
    name: 'OpenVera',
    tagline: 'Bokföring för svenska småföretag',
    description:
      'Banktransaktioner via Enable Banking (PSD2) eller CSV, dokumentlagring med matchning mot transaktioner, leverantörsregister, rapporter och SIE4-export. Flask, Postgres och React. Tidig alfa som körs skarpt för ett bolag.',
    stack: ['Flask', 'Postgres', 'React', 'PSD2', 'SIE4'],
    status: 'Alfa',
    kind: 'app',
    links: [],
    development: {
      commits: 133,
      openIssues: 27,
      version: 'v0.1.9',
      lastCommit: '21 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 7, 0, 9, 0, 3, 0, 0, 0, 0, 1, 0, 0, 41, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 6, 12, 44, 0],
      note:
        '133 commits under 2026. Tyngsta veckan gav 44 commits, drivet av bland annat mobilanpassning, tätare listvyer och lösenordslös inloggning.',
    },
  },
  {
    slug: 'styrla',
    name: 'Styrla',
    tagline: 'Plattform för svenska föreningar och organisationer',
    description:
      'Ärendelogg, medlemsregister med inbjudningar och roller, sök och maskin-API med scopes. Byggs i fas 0 för en koloniförening och för ärendehantering i ett fåmansbolag; kallelser, protokoll och dokument är nästa steg.',
    stack: ['Ärenden', 'Medlemmar', 'Roller', 'API'],
    status: 'Alfa',
    kind: 'app',
    links: [],
    development: {
      commits: 25,
      openIssues: 3,
      version: 'v0.4.0',
      lastCommit: '23 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0],
      note:
        'Startat den 19 augusti 2026: 25 commits på fem dagar. Första riktiga konsumenten av parla och dess scopade tjänstekopplingar.',
    },
  },
  {
    slug: 'timla',
    name: 'Timla',
    tagline: 'Schemaläggning och bokning',
    description:
      'Arbetsschema med personal, pass, tillgänglighet, bemanningsbehov och publicering, plus resurser, tjänster och publik bokningssida. MVP för schemaläggning under utveckling, med pilotkunder.',
    stack: ['Schema', 'Bokning', 'Personal', 'Resurser'],
    status: 'Alfa',
    kind: 'app',
    links: [],
    development: {
      commits: 62,
      openIssues: 35,
      version: 'v0.1.0',
      lastCommit: '6 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 0, 0, 0, 29, 0, 0, 0],
      note:
        '62 commits under 2026, samlade i två intensiva veckor. Första milstolpen täcker personalschema och ett publikt boknings-API.',
    },
  },
  {
    slug: 'klartex',
    name: 'Klartex',
    tagline: 'PDF-dokument från JSON via LaTeX',
    description:
      'Python-bibliotek och CLI: strukturerad data in, typograferad PDF ut. Blockmotor med ett tjugotal blocktyper och färdiga recept för protokoll, faktura, kvitto och ekonomiska rapporter. klartex.se erbjuder ett HTTP-API ovanpå biblioteket.',
    stack: ['Python', 'CLI', 'LaTeX', 'HTTP API'],
    status: 'Publicerad',
    kind: 'lib',
    links: [
      { label: 'klartex.se', href: 'https://klartex.se' },
      { label: 'pypi: klartex', href: 'https://pypi.org/project/klartex/' },
      { label: 'swedev/klartex', href: 'https://github.com/swedev/klartex' },
    ],
    development: {
      commits: 70,
      openIssues: 4,
      version: 'v0.13.0',
      lastCommit: '7 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 10, 8, 1, 0, 0, 1, 7, 0, 0, 0, 8, 16, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 3, 0, 2, 0, 0, 0],
      note:
        '70 commits under 2026. v0.13.0 lade till kvittomall, svenskt sifferformat, avsändarblock, sidhuvudslogotyp och sidfot.',
    },
  },
  {
    slug: 'valsedel',
    name: 'Valsedel',
    tagline: 'Personliga valsedlar enligt Valmyndighetens spec',
    description:
      'Välj val, sök parti, rangordna kandidater och få en A6-valsedel som PDF i rätt format och färg. Data för 333 partier, 21 regioner och 290 kommuner. Next.js, Postgres och XeLaTeX.',
    stack: ['Next.js', 'Postgres', 'XeLaTeX'],
    status: 'Proof-of-concept',
    kind: 'app',
    links: [{ label: 'swedev/valsedel', href: 'https://github.com/swedev/valsedel' }],
    development: {
      commits: 0,
      openIssues: 1,
      version: 'v0.1.0',
      lastCommit: '30 aug 2022',
      activity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      note:
        'Ingen aktivitet under 2026. Proof-of-conceptets senaste commit gjordes i augusti 2022.',
    },
  },
  {
    slug: 'debira',
    name: 'Debira',
    tagline: 'Kundregister och fakturering',
    description:
      'Idé: offert till betald faktura, engångs och återkommande — avisering med OCR, påminnelser och betalningsmatchning. Steget före bokföringen.',
    stack: ['Offert', 'Faktura', 'OCR', 'Betalningar'],
    status: 'Idéfas',
    kind: 'app',
    links: [],
  },
  {
    slug: 'bovard',
    name: 'Bovard',
    tagline: 'Verksamhetssystem för små hyresvärdar',
    description:
      'Idé: objekt, hyresgäster, kontrakt, hyresjustering, felanmälan och underhåll för den som förvaltar några få till några tiotal objekt.',
    stack: ['Objekt', 'Kontrakt', 'Felanmälan', 'Underhåll'],
    status: 'Idéfas',
    kind: 'app',
    links: [],
  },
  {
    slug: 'fullinsyn',
    name: 'Fullinsyn',
    tagline: 'Verksamhetsinsikt för småföretag',
    description:
      'Idé: samlade vyer över ekonomi, kunder, tid och projekt, lästa från de system verksamheten redan använder.',
    stack: ['Ekonomi', 'Kunder', 'Tid', 'Projekt'],
    status: 'Idéfas',
    kind: 'app',
    links: [],
  },
  {
    slug: 'swedev-ui',
    name: '@swedev/ui',
    tagline: 'Delat komponentbibliotek',
    description:
      'Ett tjugotal React-komponenter ovanpå Radix Themes med semantiska props, Lucide-ikoner och Storybook. Samma gränssnitt i alla appar.',
    stack: ['React', 'Radix Themes', 'Lucide', 'Storybook'],
    status: 'Publicerad',
    kind: 'lib',
    links: [
      { label: 'npm: @swedev/ui', href: 'https://www.npmjs.com/package/@swedev/ui' },
      { label: 'swedev/ui', href: 'https://github.com/swedev/ui' },
    ],
    development: {
      commits: 20,
      openIssues: 1,
      version: 'v0.7.0',
      lastCommit: '5 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 6, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 7, 0, 0, 0],
      note:
        '20 commits under 2026. v0.7.0 lade om Button och Select till Radix storleksskala och förtydligade disabled-läget.',
    },
  },
  {
    slug: 'svensk',
    name: 'svensk',
    tagline: 'Svenska integrationer som npm-paket',
    description:
      'Monorepo under @svensk/ utan runtime-beroenden. Först ut: helgdagar (röda dagar, aftnar, vardagar). Swish, BankID, BankGiro, SIE och SMS är planerade.',
    stack: ['TypeScript', 'npm', 'Monorepo', 'Svenska API:er'],
    status: 'Tidigt',
    kind: 'lib',
    links: [{ label: 'swedev/svensk', href: 'https://github.com/swedev/svensk' }],
    development: {
      commits: 4,
      openIssues: 0,
      lastCommit: '18 feb',
      activity: [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      note:
        'Fyra commits i februari 2026 lade grunden och helgdagspaketet. Övriga svenska integrationer ligger kvar som planerade spår.',
    },
  },
  {
    slug: 'parla',
    name: 'parla',
    tagline: 'Tjänst-till-tjänst-kopplingar',
    description:
      'Python-paket för pairing, scopade tokens och rotation mellan apparna, med provider- och consumer-halva och adaptrar för Flask och FastAPI. Första integrationen är på gång.',
    stack: ['Python', 'Flask', 'FastAPI', 'Scopade tokens'],
    status: 'Tidigt',
    kind: 'lib',
    links: [],
    development: {
      commits: 3,
      openIssues: 0,
      version: 'v0.1.0',
      lastCommit: '23 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
      note:
        'Skapat 22 augusti. Styrla kopplade in sig inom tre dagar — infrastrukturbiten som resten av appfamiljen nu kan vila på.',
    },
  },
  {
    slug: 'partidata',
    name: 'Partidata',
    tagline: 'Öppen data om Sveriges politiska partier',
    description:
      'JSON-filer med registrerade partibeteckningar från val.se, partideltagande per val och valtyp, region- och kommunkoder från SCB, samt ett utkast till kandidatlistor.',
    stack: ['JSON', 'Valdata', 'SCB', 'Öppna data'],
    status: 'Tidigt',
    kind: 'data',
    links: [{ label: 'swedev/partidata', href: 'https://github.com/swedev/partidata' }],
    development: {
      commits: 14,
      openIssues: 16,
      lastCommit: '25 aug',
      activity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 3],
      note:
        '14 commits under 2026, fördelade över årets två senaste veckor. Arbetet gav valdata, partisymboler, CI-validering och en ny grafisk profil.',
    },
  },
]
