import Link from 'next/link'
import { Icon } from '@/components/ui/Icon'
import { impactMetrics } from '@/lib/data'

const BOTTOM_COLS = [
  {
    title: 'Our Mission',
    text: 'Empowering women, inspiring growth, creating lasting change across Ghana.',
  },
  {
    title: 'Building Futures',
    text: 'Nurturing potential, fostering growth, making a difference that lasts.',
  },
  {
    title: 'Transforming Communities',
    text: 'Bridging gaps, uplifting lives, driving impact in every corner.',
  },
  {
    title: 'A Brighter Tomorrow',
    text: 'Spreading kindness, fueling dreams, shaping a better world for all.',
  },
]

export function CommunityImpact() {
  const connected = impactMetrics.find((m) => m.label === 'Girls connected')
  const mentored = impactMetrics.find((m) => m.label === 'Girls mentored')
  const mentors = impactMetrics.find((m) => m.label === 'Mentors engaged')

  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(32px,5vw,58px)', lineHeight: 1.04, color: 'var(--gwf-ink)', margin: 0 }}>
            Mentorship &amp; Outcomes
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: '10px 0 0', letterSpacing: '0.04em' }}>
            Community &nbsp;/&nbsp; Impact
          </p>
        </div>

        {/* Main two-column block */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.35fr 0.65fr', marginTop: 36 }} className="hero-grid">

          {/* Left: dark image with overlay text */}
          <div style={{ position: 'relative', minHeight: 380 }}>
            <img
              src="/assets/gwf-community-outreach.jpg"
              alt="GWF community event"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,5,20,0.62)' }} />
            <div style={{ position: 'absolute', inset: 0, padding: 'clamp(28px,4vw,48px)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,3vw,38px)', lineHeight: 1.1, color: '#fff', margin: 0, maxWidth: 460 }}>
                Empowering Women,<br />Inspiring Growth,<br />Creating Change
              </h3>
              <Link
                href="/impact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 22, fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--gwf-gold-500)', textDecoration: 'none' }}
              >
                Learn More <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </div>

          {/* Right: gold stats panel */}
          <div style={{ background: 'var(--gwf-gold-500)', padding: 'clamp(32px,4vw,52px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(26,18,0,.6)', margin: '0 0 28px' }}>
              Achieve Tangible Results
            </p>
            {[connected, mentored, mentors].map((m) => m && (
              <div key={m.label} style={{ borderTop: '1px solid rgba(0,0,0,.15)', padding: '22px 0' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1, color: 'var(--gwf-ink)', margin: 0 }}>
                  {m.value}{m.suffix || ''}
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(26,18,0,.75)', margin: '6px 0 0' }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom four columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0, borderTop: '1px solid var(--border-subtle)', marginTop: 0 }} className="pillar-grid">
          {BOTTOM_COLS.map((col) => (
            <div key={col.title} style={{ padding: '28px 24px', borderRight: '1px solid var(--border-subtle)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gwf-ink)', margin: '0 0 10px' }}>{col.title}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: 0 }}>{col.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
