import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Capsule } from '@/components/ui/Capsule'
import { Icon } from '@/components/ui/Icon'
import { rootedRadiant, formatCedis, LOWEST_TICKET_PRICE } from '@/lib/events'

const FACTS = [
  { icon: 'calendar', text: rootedRadiant.dateShort },
  { icon: 'clock', text: rootedRadiant.time },
  { icon: 'map-pin', text: rootedRadiant.venue },
]

interface RootedRadiantHeroProps {
  ticketsHref: string
  detailsHref?: string
  headingLevel?: 'h1' | 'h2'
}

export function RootedRadiantHero({ ticketsHref, detailsHref, headingLevel = 'h1' }: RootedRadiantHeroProps) {
  const Heading = headingLevel

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
      <div style={{ position: 'absolute', bottom: -140, left: -100, width: 380, height: 380, background: 'radial-gradient(circle,rgba(224,69,127,.28),transparent 70%)', pointerEvents: 'none' }} />

      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'clamp(48px,7vw,96px) clamp(16px,4vw,40px)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
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
              Gutsy Women Presents
            </Capsule>
          </div>

          <Heading
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
            Rooted &amp;
            <br />
            <span style={{ position: 'relative', display: 'inline-block', color: 'var(--gwf-gold-500)' }}>
              Radiant
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: '2%',
                  bottom: 4,
                  height: 9,
                  background: 'var(--gwf-gold-500)',
                  opacity: 0.35,
                  transform: 'rotate(-1.2deg)',
                }}
              />
            </span>{' '}
            2.0
          </Heading>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 800,
              color: 'var(--gwf-magenta-100)',
              fontSize: 'clamp(16px,1.7vw,21px)',
              lineHeight: 1.35,
              margin: '18px 0 0',
            }}
          >
            &ldquo;{rootedRadiant.theme}&rdquo;
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: 13,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--gwf-gold-500)',
              margin: '8px 0 0',
            }}
          >
            {rootedRadiant.tagline}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(16px,1.4vw,19px)',
              lineHeight: 1.55,
              color: 'rgba(255,255,255,.82)',
              maxWidth: 480,
              margin: '20px 0 0',
            }}
          >
            This December, we&rsquo;re not just having a picnic &mdash; we&rsquo;re creating an experience. A celebration of womanhood, sisterhood, growth, joy and the unapologetic power of being yourself.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 22px', marginTop: 24 }}>
            {FACTS.map((f) => (
              <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 9, color: '#fff' }}>
                <span style={{ width: 34, height: 34, background: 'rgba(255,255,255,.12)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gwf-gold-500)', flexShrink: 0 }}>
                  <Icon name={f.icon} size={17} />
                </span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15 }}>{f.text}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 30, alignItems: 'center' }}>
            <Link href={ticketsHref}>
              <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                Get Your Ticket
              </Button>
            </Link>
            {detailsHref && (
              <Link href={detailsHref}>
                <Button variant="outline-light" size="lg">Event Details</Button>
              </Link>
            )}
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.7)', margin: '14px 0 0' }}>
            Tickets from <strong style={{ color: '#fff' }}>{formatCedis(LOWEST_TICKET_PRICE)}</strong> &middot; Pay securely with Mobile Money or card
          </p>
        </div>

        {/* Right column — event flyer (stays visible on mobile) */}
        <div className="event-flyer" style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href={ticketsHref} aria-label={`Get tickets for ${rootedRadiant.title}`} style={{ display: 'block', width: '100%', maxWidth: 400 }}>
            <img
              src={rootedRadiant.flyer}
              alt={`${rootedRadiant.title} flyer — ${rootedRadiant.theme}. ${rootedRadiant.dateShort} at ${rootedRadiant.venue}.`}
              width={720}
              height={1080}
              style={{ width: '100%', height: 'auto', display: 'block', border: '4px solid rgba(255,255,255,.85)', boxShadow: 'var(--shadow-pop)' }}
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
