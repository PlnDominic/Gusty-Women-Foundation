import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function CEOSection() {
  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) 0', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '0 clamp(16px,4vw,40px)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '0.85fr 1.15fr',
            gap: 'clamp(40px,6vw,80px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Photo */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: 0,
                top: 16,
                left: 16,
                background: 'var(--gwf-gold-500)',
                zIndex: 0,
              }}
            />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <Image
                src="/assets/ceo-raynelle.jpg"
                alt="Miss Raynelle, Founder and Executive Director of Gutsy Women Foundation"
                width={480}
                height={580}
                style={{ width: '100%', height: 'auto', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>
              Meet the Founder
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                textTransform: 'uppercase',
                fontSize: 'clamp(28px,3.5vw,46px)',
                lineHeight: 1.04,
                color: 'var(--gwf-ink)',
                margin: '14px 0 0',
              }}
            >
              Miss Raynelle
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--gwf-purple-600)', margin: '8px 0 0', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Founder &amp; Executive Director
            </p>

            <div style={{ width: 48, height: 4, background: 'var(--gwf-gold-500)', margin: '20px 0' }} />

            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: 0 }}>
              Miss Raynelle founded the Gutsy Women Foundation with a singular belief: that every young woman in Ghana deserves access to the mentorship, training and networks that transform ambition into achievement.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '16px 0 0' }}>
              Her vision has brought together hundreds of women, world-class mentors and committed sponsors under one roof, building a movement that goes far beyond a single event. She leads GWF with purpose, passion and an unshakeable commitment to leveling the playing field.
            </p>

            <blockquote
              style={{
                margin: '28px 0 0',
                padding: '20px 24px',
                borderLeft: '4px solid var(--gwf-gold-500)',
                background: 'var(--gwf-purple-100)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontStyle: 'italic', fontSize: 18, color: 'var(--gwf-purple-700)', lineHeight: 1.4, margin: 0 }}>
                &ldquo;Stop dreaming. Start building. The world needs what you have.&rdquo;
              </p>
            </blockquote>

            <div style={{ marginTop: 32 }}>
              <Link href="/about">
                <Button variant="primary" iconRight={<Icon name="arrow-right" size={17} />}>
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
