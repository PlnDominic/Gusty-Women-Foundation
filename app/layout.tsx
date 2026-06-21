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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gutsywomenfoundation.org'),
  title: {
    default: 'Gutsy Women Foundation',
    template: '%s | Gutsy Women Foundation',
  },
  description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
  keywords: ['NGO', 'Ghana', 'women empowerment', 'mentorship', 'masterclass'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://www.gutsywomenfoundation.org',
    siteName: 'Gutsy Women Foundation',
    title: 'Gutsy Women Foundation',
    description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
    images: [
      {
        url: '/assets/event-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Gutsy Women Foundation mentorship programme event',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gutsy Women Foundation',
    description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
    images: ['/assets/event-hero.jpg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    name: 'Gutsy Women Foundation',
    url: 'https://www.gutsywomenfoundation.org',
    logo: 'https://www.gutsywomenfoundation.org/assets/logo-lockup.png',
    description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
    email: 'gutsywomenfoundation@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Accra',
      addressCountry: 'GH',
    },
    sameAs: [
      'https://facebook.com/GutsyWomenFoundation',
      'https://twitter.com/GutsyWomenFoundation',
      'https://instagram.com/GutsyWomenFoundation',
      'https://tiktok.com/@GutsyWomenFoundation',
      'https://linkedin.com/company/GutsyWomenFoundation',
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
