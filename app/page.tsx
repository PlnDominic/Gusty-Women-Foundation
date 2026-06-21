import { HeroSection } from '@/components/home/HeroSection'
import { StatStrip } from '@/components/home/StatStrip'
import { FeaturedProgram } from '@/components/home/FeaturedProgram'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import { Partners } from '@/components/home/Partners'
import { Newsletter } from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatStrip />
      <FeaturedProgram />
      <WhatWeDo />
      <TestimonialCarousel />
      <Partners />
      <Newsletter />
    </main>
  )
}
