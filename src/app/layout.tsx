import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const sans = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'swedev — öppen källkod för svenska verksamheter',
  description:
    'swedev bygger verktyg för svenska föreningar och småföretag: bokföring, föreningsdrift, schemaläggning, dokument och de bibliotek som knyter ihop dem.',
  metadataBase: new URL('https://www.swedev.org'),
  openGraph: {
    title: 'swedev',
    description: 'Öppen källkod för svenska verksamheter.',
    url: 'https://www.swedev.org',
    locale: 'sv_SE',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sv" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
