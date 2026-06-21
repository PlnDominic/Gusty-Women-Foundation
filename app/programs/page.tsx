import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProgramCard } from '@/components/patterns/ProgramCard'
import { Capsule } from '@/components/ui/Capsule'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'
import { programs } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Explore GWF programs — Masterclass, Bootcamps, and Webinars for ambitious young women in Ghana.',
}

export default function ProgramsPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>What We Offer</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>Our Programs</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            From intensive masterclasses to monthly webinars — each programme is designed to move you forward.
          </p>
        </div>
      </section>

      {/* Featured — Cohort 2 banner */}
      <section style={{ background: 'var(--gwf-gold-100)', padding: 'clamp(24px,3vw,36px) clamp(16px,4vw,40px)', borderBottom: '1px solid var(--gwf-gold-300)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Capsule tone="gold" size="sm">Open Now</Capsule>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--gwf-ink)' }}>
              Cohort 2 Masterclass — 5–7 Aug 2026 · Yota East, Legon
            </span>
          </div>
          <Link href="/apply" style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--gwf-purple-700)', display: 'flex', alignItems: 'center', gap: 6 }}>
            Apply Now <Icon name="arrow-right" size={16} />
          </Link>
        </div>
      </section>

      {/* Program grid */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="All Programmes" title="Choose Your Path" style={{ marginBottom: 40 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className="stat-grid">
            {programs.map((p) => (
              <ProgramCard
                key={p.slug}
                image={p.image}
                title={p.title}
                description={p.description}
                status={p.status}
                statusLabel={p.statusLabel}
                meta={[
                  ...(p.dates ? [{ icon: <Icon name="calendar" size={15} />, text: p.dates }] : []),
                  ...(p.location ? [{ icon: <Icon name="map-pin" size={15} />, text: p.location }] : []),
                ]}
                ctaLabel={p.status === 'open' ? 'Learn More' : 'Find Out More'}
                onCta={undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
