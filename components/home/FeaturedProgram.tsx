import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Capsule } from '@/components/ui/Capsule'
import { Icon } from '@/components/ui/Icon'

const FACTS = [
  { icon: 'calendar', text: '5th - 7th August 2026' },
  { icon: 'clock', text: '8:00AM Each Day' },
  { icon: 'map-pin', text: 'Yota East, Legon' },
]

export function FeaturedProgram() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>
        <div
          style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))',
            boxShadow: 'var(--shadow-lg)',
            display: 'grid',
            gridTemplateColumns: '1fr 0.85fr',
          }}
          className="featured-grid"
        >
          {/* Content */}
          <div style={{ padding: 'clamp(32px,4vw,56px)' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <Capsule tone="gold" size="sm">Featured Programme</Capsule>
              <Capsule tone="outline" size="sm">Cohort 2</Capsule>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#fff',
                fontSize: 'clamp(26px,3vw,40px)',
                lineHeight: 1.04,
                margin: '18px 0 0',
              }}
            >
              Mentorship Program
              <br />
              Masterclass
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 800,
                color: 'var(--gwf-gold-500)',
                fontSize: 'clamp(15px,1.6vw,20px)',
                margin: '14px 0 0',
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
              }}
            >
              Ignite • Build • Scale
            </p>

            <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,.82)', fontSize: 16, lineHeight: 1.6, margin: '8px 0 0', maxWidth: 420 }}>
              Turning Dreams Into Reality. For young women ready to move beyond dreaming and start building.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, margin: '26px 0 30px' }}>
              {FACTS.map((f) => (
                <div key={f.text} style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
                  <span
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: 0,
                      background: 'rgba(255,255,255,.12)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gwf-gold-500)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon name={f.icon} size={18} />
                  </span>
                  <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15.5 }}>{f.text}</span>
                </div>
              ))}
            </div>

            <Link href="/apply">
              <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Apply Now</Button>
            </Link>
          </div>

          {/* Flyer image */}
          <div style={{ position: 'relative', minHeight: 360 }}>
            <img
              src="/assets/flyer-cohort2-alt.jpg"
              alt="Cohort 2 Masterclass flyer"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
