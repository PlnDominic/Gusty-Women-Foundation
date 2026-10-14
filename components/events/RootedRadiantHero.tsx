import React from 'react'
import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { EventCountdown } from '@/components/events/EventCountdown'
import { rootedRadiant, ticketTiers, formatCedis } from '@/lib/events'

// Editorial serif accent for the event hero only — echoes the flyer's script lettering.
const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '800'],
  style: ['italic'],
  variable: '--font-serif',
  display: 'swap',
})

const FACTS = [
  { label: 'Date', text: rootedRadiant.dateShort },
  { label: 'Time', text: rootedRadiant.time },
  { label: 'Venue', text: rootedRadiant.venue },
]

// Ambient sparkles scattered behind the content
const SPARKS = [
  { top: '14%', left: '4%', size: 14, delay: '0s' },
  { top: '72%', left: '46%', size: 10, delay: '1.4s' },
  { top: '9%', left: '52%', size: 12, delay: '2.6s' },
  { top: '88%', left: '8%', size: 9, delay: '3.3s' },
  { top: '30%', left: '96%', size: 11, delay: '0.8s' },
]

const cheapestTier = ticketTiers.filter((t) => t.available).sort((a, b) => a.price - b.price)[0]

interface RootedRadiantHeroProps {
  ticketsHref: string
  detailsHref?: string
  headingLevel?: 'h1' | 'h2'
}

export function RootedRadiantHero({ ticketsHref, detailsHref, headingLevel = 'h1' }: RootedRadiantHeroProps) {
  const Heading = headingLevel
  const taglineWords = rootedRadiant.tagline.replace(/\./g, '').split(' ')

  return (
    <section className={`rr-hero ${serif.variable}`}>
      <div className="rr-hero-grain" aria-hidden="true" />
      {SPARKS.map((s, i) => (
        <span key={i} className="rr-spark" aria-hidden="true" style={{ top: s.top, left: s.left, animationDelay: s.delay }}>
          <Icon name="sparkles" size={s.size} />
        </span>
      ))}

      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'clamp(56px,7vw,104px) clamp(16px,4vw,40px)',
          display: 'grid',
          gridTemplateColumns: '1.08fr 0.92fr',
          gap: 'clamp(28px,5vw,64px)',
          alignItems: 'center',
          position: 'relative',
        }}
        className="hero-grid"
      >
        {/* Left column */}
        <div className="rr-hero-copy">
          <p className="rr-eyebrow">
            <span className="rr-eyebrow-line" />
            Gutsy Women Foundation presents
          </p>

          <Heading className="rr-title">
            <span className="rr-title-top">Rooted &amp;</span>
            <span className="rr-title-bottom">
              <span className="rr-radiant">Radiant</span>
              <span className="rr-version">2.0</span>
            </span>
          </Heading>

          <p className="rr-theme">&ldquo;{rootedRadiant.theme}&rdquo;</p>
          <p className="rr-tagline">
            {taglineWords.map((w, i) => (
              <React.Fragment key={w}>
                {i > 0 && <span className="rr-diamond" aria-hidden="true" />}
                {w}
              </React.Fragment>
            ))}
          </p>

          <div className="rr-glass">
            <div className="rr-facts">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <span className="rr-fact-label">{f.label}</span>
                  <span className="rr-fact-value">{f.text}</span>
                </div>
              ))}
            </div>
            <EventCountdown target={rootedRadiant.startISO} label="Countdown to December 4th" />
          </div>

          <div className="rr-ctas">
            <Link href={ticketsHref}>
              <Button
                variant="gold"
                size="lg"
                iconRight={<Icon name="arrow-right" size={18} />}
                style={{
                  background: 'linear-gradient(135deg,#FFE58A 0%,#F5C518 45%,#D9A70F 100%)',
                  borderColor: 'transparent',
                  boxShadow: '0 12px 32px rgba(245,197,24,.32), inset 0 1px 0 rgba(255,255,255,.55)',
                }}
              >
                Get Your Ticket
              </Button>
            </Link>
            {detailsHref && (
              <Link href={detailsHref} className="rr-link">
                Event details <Icon name="arrow-right" size={16} />
              </Link>
            )}
          </div>
          <p className="rr-pay-note">
            <Icon name="shield" size={14} />
            Pay securely with Mobile Money or card
          </p>
        </div>

        {/* Right column — staged flyer (stays visible on mobile) */}
        <div className="rr-stage">
          <div className="rr-flyer-wrap">
            <img src={rootedRadiant.flyer} alt="" aria-hidden="true" className="rr-flyer-glow" width={720} height={1080} />
            <span className="rr-flyer-frame" aria-hidden="true" />
            <Link href={ticketsHref} className="rr-flyer-link" aria-label={`Get tickets for ${rootedRadiant.title}`}>
              <img
                src={rootedRadiant.flyer}
                alt={`${rootedRadiant.title} flyer — ${rootedRadiant.theme}. ${rootedRadiant.dateShort} at ${rootedRadiant.venue}.`}
                width={720}
                height={1080}
                className="rr-flyer"
              />
            </Link>

            <div className="rr-badge" aria-hidden="true">
              <svg viewBox="0 0 120 120" className="rr-badge-ring">
                <defs>
                  <path id="rr-badge-circle" d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0" />
                </defs>
                <text textLength="280" lengthAdjust="spacing">
                  <textPath href="#rr-badge-circle">ROOTED IN HER POWER • RADIANT IN HER JOY •</textPath>
                </text>
              </svg>
              <span className="rr-badge-core">
                <Icon name="sparkles" size={20} />
              </span>
            </div>

            {cheapestTier && (
              <Link href={ticketsHref} className="rr-stub-wrap">
                <span className="rr-stub">
                  <span className="rr-stub-main">
                    <span className="rr-stub-label">Tickets from</span>
                    <span className="rr-stub-price">{formatCedis(cheapestTier.price)}</span>
                    <span className="rr-stub-tier">{cheapestTier.label}</span>
                  </span>
                  <span className="rr-stub-side">
                    <Icon name="ticket" size={22} />
                  </span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
