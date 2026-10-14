import { Playfair_Display } from 'next/font/google'

// Editorial serif accent for the Rooted & Radiant sections — echoes the flyer's script lettering.
// Apply `eventSerif.variable` on a section to expose it as var(--font-serif).
export const eventSerif = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
})
