export type Status = 'Alfa' | 'Publicerad' | 'Tidigt' | 'Proof-of-concept' | 'Idéfas'

export interface Project {
  slug: string
  name: string
  tagline: string
  description: string
  status: Status
  kind: 'app' | 'lib' | 'data'
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    slug: 'openvera',
    name: 'OpenVera',
    tagline: 'Bokföring för svenska småföretag',
    description:
      'Banktransaktioner via Enable Banking (PSD2) eller CSV, dokumentlagring med matchning mot transaktioner, leverantörsregister, rapporter och SIE4-export. Flask, Postgres och React. Tidig alfa som körs skarpt för ett bolag.',
    status: 'Alfa',
    kind: 'app',
    links: [],
  },
  {
    slug: 'styrla',
    name: 'Styrla',
    tagline: 'Plattform för svenska föreningar och organisationer',
    description:
      'Ärendelogg, medlemsregister med inbjudningar och roller, sök och maskin-API med scopes. Byggs i fas 0 för en koloniförening och för ärendehantering i ett fåmansbolag; kallelser, protokoll och dokument är nästa steg.',
    status: 'Alfa',
    kind: 'app',
    links: [],
  },
  {
    slug: 'timla',
    name: 'Timla',
    tagline: 'Schemaläggning och bokning',
    description:
      'Arbetsschema med personal, pass, tillgänglighet, bemanningsbehov och publicering, plus resurser, tjänster och publik bokningssida. MVP för schemaläggning under utveckling, med pilotkunder.',
    status: 'Alfa',
    kind: 'app',
    links: [],
  },
  {
    slug: 'klartex',
    name: 'Klartex',
    tagline: 'PDF-dokument från JSON via LaTeX',
    description:
      'Python-bibliotek och CLI: strukturerad data in, typograferad PDF ut. Blockmotor med ett tjugotal blocktyper och färdiga recept för protokoll, faktura, kvitto och ekonomiska rapporter. klartex.se erbjuder ett HTTP-API ovanpå biblioteket.',
    status: 'Publicerad',
    kind: 'lib',
    links: [
      { label: 'klartex.se', href: 'https://klartex.se' },
      { label: 'pypi: klartex', href: 'https://pypi.org/project/klartex/' },
      { label: 'swedev/klartex', href: 'https://github.com/swedev/klartex' },
    ],
  },
  {
    slug: 'valsedel',
    name: 'Valsedel',
    tagline: 'Personliga valsedlar enligt Valmyndighetens spec',
    description:
      'Välj val, sök parti, rangordna kandidater och få en A6-valsedel som PDF i rätt format och färg. Data för 333 partier, 21 regioner och 290 kommuner. Next.js, Postgres och XeLaTeX.',
    status: 'Proof-of-concept',
    kind: 'app',
    links: [{ label: 'swedev/valsedel', href: 'https://github.com/swedev/valsedel' }],
  },
  {
    slug: 'debira',
    name: 'Debira',
    tagline: 'Kundregister och fakturering',
    description:
      'Idé: offert till betald faktura, engångs och återkommande — avisering med OCR, påminnelser och betalningsmatchning. Steget före bokföringen.',
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
    status: 'Publicerad',
    kind: 'lib',
    links: [
      { label: 'npm: @swedev/ui', href: 'https://www.npmjs.com/package/@swedev/ui' },
      { label: 'swedev/ui', href: 'https://github.com/swedev/ui' },
    ],
  },
  {
    slug: 'svensk',
    name: 'svensk',
    tagline: 'Svenska integrationer som npm-paket',
    description:
      'Monorepo under @svensk/ utan runtime-beroenden. Först ut: helgdagar (röda dagar, aftnar, vardagar). Swish, BankID, BankGiro, SIE och SMS är planerade.',
    status: 'Tidigt',
    kind: 'lib',
    links: [{ label: 'swedev/svensk', href: 'https://github.com/swedev/svensk' }],
  },
  {
    slug: 'parla',
    name: 'parla',
    tagline: 'Tjänst-till-tjänst-kopplingar',
    description:
      'Python-paket för pairing, scopade tokens och rotation mellan apparna, med provider- och consumer-halva och adaptrar för Flask och FastAPI. Första integrationen är på gång.',
    status: 'Tidigt',
    kind: 'lib',
    links: [],
  },
  {
    slug: 'partidata',
    name: 'Partidata',
    tagline: 'Öppen data om Sveriges politiska partier',
    description:
      'JSON-filer med registrerade partibeteckningar från val.se, partideltagande per val och valtyp, region- och kommunkoder från SCB, samt ett utkast till kandidatlistor.',
    status: 'Tidigt',
    kind: 'data',
    links: [{ label: 'swedev/partidata', href: 'https://github.com/swedev/partidata' }],
  },
]

