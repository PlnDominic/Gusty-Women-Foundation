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
  title: {
    default: 'Gutsy Women Foundation',
    template: '%s | Gutsy Women Foundation',
  },
  description: 'Leveling the playing field for young women in Ghana through mentorship, training and community.',
  keywords: ['NGO', 'Ghana', 'women empowerment', 'mentorship', 'masterclass'],
  openGraph: {
    type: 'website',
    locale: 'en_GH',
    url: 'https://www.gutsywomenfoundation.org',
    siteName: 'Gutsy Women Foundation',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
