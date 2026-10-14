import { HeroSection } from '@/components/home/HeroSection'
import { CEOSection } from '@/components/home/CEOSection'
import { FeaturedProgram } from '@/components/home/FeaturedProgram'
import { WhatWeDo } from '@/components/home/WhatWeDo'
import { TestimonialCarousel } from '@/components/home/TestimonialCarousel'
import { CommunityImpact } from '@/components/home/CommunityImpact'
import { PhotoGallery } from '@/components/home/PhotoGallery'
import { Partners } from '@/components/home/Partners'
import { OurBankers } from '@/components/home/OurBankers'
import { Newsletter } from '@/components/home/Newsletter'
import { RootedRadiantHero } from '@/components/events/RootedRadiantHero'
import { RootedRadiantInvite } from '@/components/events/RootedRadiantInvite'
import { rootedRadiant, TICKET_SALES_OPEN } from '@/lib/events'

export default function HomePage() {
  return (
    <main>
      {TICKET_SALES_OPEN ? (
        <>
          <RootedRadiantHero ticketsHref={`${rootedRadiant.path}#tickets`} detailsHref={rootedRadiant.path} />
          <RootedRadiantInvite showTiers />
        </>
      ) : (
        <HeroSection />
      )}
      <CEOSection />
      <FeaturedProgram />
      <WhatWeDo />
      <CommunityImpact />
      <TestimonialCarousel />
      <PhotoGallery />
      <Partners />
      <OurBankers />
      <Newsletter />
    </main>
  )
}
