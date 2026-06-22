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
  description: 'Explore GWF programmes: the Mentorship Program Masterclass and the Anti-Drug Abuse & Mentorship Program for young women and students in Ghana.',
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
            From intensive mentorship masterclasses to community outreach programmes, each initiative is designed to empower women and young people across Ghana.
          </p>
        </div>
      </section>

      {/* Featured — Cohort 2 banner */}
      <section style={{ background: 'var(--gwf-gold-100)', padding: 'clamp(24px,3vw,36px) clamp(16px,4vw,40px)', borderBottom: '1px solid var(--gwf-gold-300)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Capsule tone="gold" size="sm">Open Now</Capsule>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--gwf-ink)' }}>
              Cohort 2 Masterclass: 5-7 Aug 2026 · Yota East, Legon
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
          <SectionHeading eyebrow="All Programmes" title="Our Work in Action" style={{ marginBottom: 40 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 28, maxWidth: 860, margin: '0 auto' }} className="stat-grid">
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
                ctaLabel={p.status === 'open' ? 'Apply Now' : 'See Details'}
                href={`/programs/${p.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Our Programs In Action" title="Empowering Minds, Shaping Futures" style={{ marginBottom: 36 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', maxWidth: 640, margin: '0 auto 36px', textAlign: 'center' }}>
            A glimpse from our Anti-Drug Abuse &amp; Mentorship Program at the Ghana National Basic Inclusive School — meaningful conversations, inspiring young voices, and a community committed to purposeful futures.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 3 }} className="gallery-grid">
            <div style={{ gridColumn: 'span 2', height: 340, overflow: 'hidden' }}>
              <img src="/assets/gwf-antidrug-facilitator.jpg" alt="GWF facilitator leading the Anti-Drug Abuse program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ height: 340, overflow: 'hidden' }}>
              <img src="/assets/gwf-antidrug-student-speaker.jpg" alt="Student speaking at GWF Anti-Drug program" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ height: 280, overflow: 'hidden' }}>
              <img src="/assets/gwf-antidrug-audience.jpg" alt="Students attentively listening at the GWF program" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ height: 280, overflow: 'hidden' }}>
              <img src="/assets/gwf-antidrug-team.jpg" alt="GWF team member with students" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ height: 280, overflow: 'hidden' }}>
              <img src="/assets/gwf-antidrug-male-speaker.jpg" alt="Speaker addressing students at the GWF program" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
