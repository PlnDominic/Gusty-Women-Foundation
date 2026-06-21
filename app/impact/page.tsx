import type { Metadata } from 'next'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { StatCard } from '@/components/patterns/StatCard'
import { Newsletter } from '@/components/home/Newsletter'
import { impactMetrics } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Impact',
  description: 'Explore Gutsy Women Foundation impact metrics across applicants, accepted participants, launched ventures, mentors and sessions.',
}

export default function ImpactPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Impact Report</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>Mentorship Measured in Outcomes</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            We track more than attendance. We look at access, completion, ventures launched, mentor engagement and the confidence to keep building.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="By the Numbers" title="Current Impact Snapshot" align="center" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20 }} className="stat-grid">
            {impactMetrics.map((metric, index) => (
              <StatCard key={metric.label} value={metric.value} suffix={metric.suffix} label={metric.label} accent={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'gold' : 'magenta'} />
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, marginTop: 20 }} className="stat-grid">
            {impactMetrics.map((metric) => (
              <p key={metric.label} style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: 0, background: '#fff', padding: 18, boxShadow: 'var(--shadow-sm)' }}>
                {metric.description}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="hero-grid">
          <div>
            <SectionHeading eyebrow="What We Measure" title="Access, Confidence and Execution" align="left" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '20px 0 0' }}>
              Our impact model follows participants from application to alumni outcomes. We combine practical training, mentor accountability and peer support so young women can clarify ideas, test them and build durable networks.
            </p>
          </div>
          <div style={{ display: 'grid', gap: 14 }}>
            {['Applicant access and outreach', 'Accepted participant completion', 'Mentor participation and follow-up', 'Businesses, pilots and projects launched'].map((item) => (
              <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'center', background: 'var(--gwf-purple-100)', padding: 16 }}>
                <span style={{ width: 34, height: 34, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', background: 'var(--gwf-purple-600)', flexShrink: 0 }}><Icon name="check" size={18} /></span>
                <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--gwf-ink)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-900)', color: '#fff' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.05, margin: 0 }}>Help Scale the Next Outcomes</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.78)', margin: '18px 0 28px' }}>
            Partner with us to expand mentor access, increase cohort capacity and support more women-led ventures across Ghana.
          </p>
          <Link href="/contact"><Button variant="gold" iconRight={<Icon name="arrow-right" size={18} />}>Partner With Us</Button></Link>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
