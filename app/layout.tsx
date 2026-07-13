import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const SITE_URL = 'https://www.gustywomenfoundation.org'
const OG_IMAGE = `${SITE_URL}/assets/gwf-logo-official.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Gutsy Women Foundation',
    template: '%s | Gutsy Women Foundation',
  },
  description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
  keywords: ['NGO', 'Ghana', 'women empowerment', 'mentorship', 'masterclass'],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: SITE_URL,
    siteName: 'Gutsy Women Foundation',
    title: 'Gutsy Women Foundation',
    description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
    images: [
      {
        url: OG_IMAGE,
        width: 1500,
        height: 1500,
        alt: 'Gutsy Women Foundation — Leveling the Playing Field',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Gutsy Women Foundation',
    description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
    images: [OG_IMAGE],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Gutsy Women Foundation',
    url: 'https://www.gutsywomenfoundation.org',
    logo: 'https://www.gutsywomenfoundation.org/assets/gwf-logo-official.jpg',
    description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
    email: 'gutsywomenfoundation@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressCountry: 'GH',
    },
    sameAs: [
      'https://www.facebook.com/share/14bzn1Wny9S/',
      'https://x.com/gwf_gutsy',
      'https://www.instagram.com/gutsy_women_foundation',
      'https://www.tiktok.com/@gutsy.women.foundation',
      'https://www.linkedin.com/in/gutsy-women-foundation-884123347',
    ],
  }

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
