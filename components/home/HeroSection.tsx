import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Capsule } from '@/components/ui/Capsule'
import { Icon } from '@/components/ui/Icon'
import { APPLICATIONS_OPEN } from '@/lib/data'
import { HeroSlider } from '@/components/home/HeroSlider'

export function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        background: 'linear-gradient(145deg,var(--gwf-purple-700) 0%,var(--gwf-purple-900) 70%)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glows */}
      <div style={{ position: 'absolute', top: -120, right: -80, width: 360, height: 360, background: 'radial-gradient(circle,rgba(245,197,24,.18),transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -140, left: -100, width: 380, height: 380, background: 'radial-gradient(circle,rgba(194,24,91,.22),transparent 70%)', pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'clamp(48px,7vw,96px) clamp(16px,4vw,40px)',
          display: 'grid',
          gridTemplateColumns: '1.05fr 0.95fr',
          gap: 'clamp(28px,5vw,72px)',
          alignItems: 'center',
          position: 'relative',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div>
          <div style={{ display: 'inline-flex' }}>
            <Capsule tone="outline" iconLeft={<Icon name="sparkles" size={15} />}>
              {APPLICATIONS_OPEN ? 'Cohort 2 · Applications Open' : 'Cohort 2 · Applications Closed'}
            </Capsule>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              textTransform: 'uppercase',
              color: '#fff',
              fontSize: 'clamp(40px,6vw,72px)',
              lineHeight: 0.98,
              letterSpacing: '-0.015em',
              margin: '20px 0 0',
            }}
          >
            Leveling
            <br />
            the{' '}
            <span style={{ position: 'relative', display: 'inline-block', color: 'var(--gwf-gold-500)' }}>
              Playing
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: '2%',
                  bottom: 4,
                  height: 9,
                  background: 'var(--gwf-gold-500)',
                  borderRadius: 0,
                  opacity: 0.35,
                  transform: 'rotate(-1.2deg)',
                }}
              />
            </span>{' '}
            Field
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px,1.4vw,19px)',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,.82)',
              maxWidth: 460,
              margin: '20px 0 0',
            }}
          >
            We empower women and girls across Ghana — raising awareness of their rights, promoting gender equity, and increasing their participation in economic and democratic processes to build a just and prosperous future.
          </p>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30 }}>
            <Link href={APPLICATIONS_OPEN ? '/apply' : '/programs'}>
              <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                {APPLICATIONS_OPEN ? 'Apply Now' : 'Explore Programs'}
              </Button>
            </Link>
            <Link href="/programs">
              <Button variant="outline-light" size="lg">Learn More</Button>
            </Link>
          </div>

          <div style={{ display: 'flex', gap: 26, marginTop: 36 }}>
            <MiniStat n="2" l="Cohorts Run" />
            <div style={{ width: 1, background: 'rgba(255,255,255,.2)' }} />
            <MiniStat n="250+" l="Women Empowered" />
            <div style={{ width: 1, background: 'rgba(255,255,255,.2)' }} />
            <MiniStat n="18" l="Partners" />
          </div>
        </div>

        {/* Right column — photo slider */}
        <div className="hero-photos">
          <HeroSlider />
        </div>
      </div>
    </section>
  )
}


function MiniStat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--gwf-gold-500)', lineHeight: 1 }}>{n}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,.7)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{l}</div>
    </div>
  )
}
