import { HeroSection } from '@/components/home/HeroSection'
import { CEOSection } from '@/components/home/CEOSection'
import { FeaturedProgram } from '@/components/home/FeaturedProgram'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import { CommunityImpact } from '@/components/home/CommunityImpact'
import { PhotoGallery } from '@/components/home/PhotoGallery'
import { Partners } from '@/components/home/Partners'
import { Newsletter } from '@/components/home/Newsletter'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CEOSection />
      <FeaturedProgram />
      <WhatWeDo />
      <CommunityImpact />
      <TestimonialCarousel />
      <PhotoGallery />
      <Partners />
      <Newsletter />
    </main>
  )
}
