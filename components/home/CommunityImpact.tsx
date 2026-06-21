import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Icon } from '@/components/ui/Icon'
import { impactMetrics } from '@/lib/data'

const LINKS = [
  {
    title: 'Meet the Mentors',
    text: 'Explore the founders, operators and leaders guiding participants through practical next steps.',
    href: '/mentors',
    icon: 'users',
  },
  {
    title: 'Alumni Stories',
    text: 'Read how past participants moved from raw ideas into pilots, partnerships and launched ventures.',
    href: '/alumni',
    icon: 'sparkles',
  },
  {
    title: 'Impact Report',
    text: 'See the numbers behind applicant reach, accepted participants, businesses launched and sessions delivered.',
    href: '/impact',
    icon: 'award',
  },
]

export function CommunityImpact() {
  const launched = impactMetrics.find((metric) => metric.label === 'Businesses launched')
  const mentors = impactMetrics.find((metric) => metric.label === 'Mentors engaged')
  const participants = impactMetrics.find((metric) => metric.label === 'Accepted participants')

  return (
    <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <SectionHeading eyebrow="Mentorship & Outcomes" title="A Community That Keeps Building" align="center" style={{ marginBottom: 42 }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22, marginBottom: 28 }} className="stat-grid">
          {[
            { metric: participants, color: 'var(--gwf-purple-600)' },
            { metric: launched, color: 'var(--gwf-gold-600)' },
            { metric: mentors, color: 'var(--gwf-magenta-600)' },
          ].map(({ metric, color }) => metric && (
            <div key={metric.label} style={{ border: '1px solid var(--border-subtle)', padding: 24, background: 'var(--gwf-purple-100)' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 42, color, margin: 0 }}>{metric.value}{metric.suffix || ''}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 13, color: 'var(--gwf-ink)', margin: '6px 0 0' }}>{metric.label}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="stat-grid">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: 26, border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', background: '#fff' }}>
              <span style={{ width: 46, height: 46, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gwf-purple-600)', color: '#fff' }}>
                <Icon name={item.icon} size={22} />
              </span>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 20, color: 'var(--gwf-ink)' }}>{item.title}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--gwf-ink-soft)' }}>{item.text}</span>
              <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, color: 'var(--gwf-purple-700)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>Explore <Icon name="arrow-right" size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
