import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'

export const metadata: Metadata = {
  title: 'Partner With Us',
  description: 'Partner with the Gutsy Women Foundation to invest in the next generation of Ghana\'s women leaders. Explore Bronze, Silver, Gold and Platinum partnership tiers.',
}

const TIERS = [
  {
    name: 'Bronze',
    amount: 'GHS 2,000',
    period: 'per year',
    color: '#CD7F32',
    benefits: [
      'Logo on GWF website for 12 months',
      'Social media shoutout (3 posts)',
      '2 event tickets per cohort',
      'Certificate of partnership',
    ],
  },
  {
    name: 'Silver',
    amount: 'GHS 5,000',
    period: 'per year',
    color: '#C0C0C0',
    highlight: false,
    benefits: [
      'All Bronze benefits',
      'Logo on all programme materials',
      '5 event tickets per cohort',
      'Feature in the GWF email newsletter',
      '1 speaking slot at a GWF event',
    ],
  },
  {
    name: 'Gold',
    amount: 'GHS 10,000',
    period: 'per year',
    color: 'var(--gwf-gold-500)',
    highlight: true,
    benefits: [
      'All Silver benefits',
      'Named sponsorship of a masterclass session',
      '10 event tickets per cohort',
      'Dedicated blog feature and interview',
      'Co-branded marketing materials',
      'Early access to GWF talent pool',
    ],
  },
  {
    name: 'Platinum',
    amount: 'Custom',
    period: 'per agreement',
    color: '#8B5CF6',
    benefits: [
      'All Gold benefits',
      'Cohort naming rights',
      'Dedicated mentorship slot',
      'Priority access to all GWF events',
      'Annual impact report with your branding',
      'Bespoke partnership structure',
    ],
  },
]

const STEPS = [
  { n: '01', title: 'Express Interest', body: 'Fill in the form below or email us directly with your name, organisation and the tier you are interested in.' },
  { n: '02', title: 'Discovery Call', body: 'We schedule a short call to understand your goals and align on the partnership structure that works best for both parties.' },
  { n: '03', title: 'Agreement', body: 'We formalise the partnership with a simple agreement letter and payment — then your involvement begins immediately.' },
  { n: '04', title: 'Activation', body: 'We onboard you into our network, brief our team, and activate all your partnership benefits for the cohort cycle ahead.' },
]

export default function PartnersPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Corporate Partnerships</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>
            Invest in Ghana&apos;s<br />Future Women Leaders
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 32px' }}>
            Partner with GWF to build your brand, connect with top female talent, and create visible, measurable impact in the communities you operate in.
          </p>
          <Link href="#tiers">
            <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
              View Partnership Tiers
            </Button>
          </Link>
        </div>
      </section>

      {/* Why partner */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(36px,6vw,80px)', alignItems: 'center' }} className="hero-grid">
          <div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>Why Partner With GWF</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,40px)', lineHeight: 1.04, color: 'var(--gwf-ink)', margin: '14px 0 20px' }}>
              Real Impact.<br />Real Visibility.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '0 0 16px' }}>
              GWF partners are not just sponsors — they are co-builders of a movement. Your brand is associated with ambition, growth and tangible outcomes for young women across Ghana.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: 0 }}>
              From brand visibility and talent access to employee engagement and community leadership, partnership with GWF delivers value that goes far beyond a logo on a banner.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, background: 'var(--border-subtle)' }}>
            {[
              { icon: 'trending-up', title: 'Brand Visibility', text: 'Reach 240+ applicants and their networks each cohort cycle.' },
              { icon: 'users', title: 'Talent Access', text: 'First look at Ghana\'s most ambitious emerging women founders and leaders.' },
              { icon: 'heart', title: 'Social Impact', text: 'Measurable contribution to women\'s economic empowerment in Ghana.' },
              { icon: 'star', title: 'Community Trust', text: 'Association with a purpose-driven foundation that communities trust.' },
            ].map((b) => (
              <div key={b.title} style={{ background: '#fff', padding: 24 }}>
                <span style={{ color: 'var(--gwf-purple-600)', display: 'block', marginBottom: 10 }}><Icon name={b.icon} size={24} /></span>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 14, color: 'var(--gwf-ink)', margin: '0 0 8px' }}>{b.title}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership tiers */}
      <section id="tiers" style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-purple-600)' }}>Partnership Tiers</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.04, color: 'var(--gwf-ink)', margin: '12px 0 0' }}>
              Choose Your Level of Investment
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="pillar-grid">
            {TIERS.map((t) => (
              <div
                key={t.name}
                style={{
                  background: t.highlight ? 'var(--gwf-purple-900)' : '#fff',
                  border: t.highlight ? '2px solid var(--gwf-gold-500)' : '1px solid var(--border-subtle)',
                  padding: 'clamp(24px,3vw,32px)',
                  position: 'relative',
                  boxShadow: t.highlight ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                }}
              >
                {t.highlight && (
                  <span style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'var(--gwf-gold-500)', color: 'var(--gwf-ink)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 14px', whiteSpace: 'nowrap' }}>
                    Most Popular
                  </span>
                )}
                <div style={{ width: 20, height: 4, background: t.color, marginBottom: 16 }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 18, color: t.highlight ? '#fff' : 'var(--gwf-ink)', margin: '0 0 6px' }}>{t.name}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,2.5vw,32px)', color: t.highlight ? 'var(--gwf-gold-500)' : 'var(--gwf-purple-700)', margin: '0 0 2px', lineHeight: 1 }}>{t.amount}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: t.highlight ? 'rgba(255,255,255,.5)' : 'var(--gwf-ink-muted)', margin: '0 0 20px' }}>{t.period}</p>
                <div style={{ width: '100%', height: 1, background: t.highlight ? 'rgba(255,255,255,.12)' : 'var(--border-subtle)', marginBottom: 20 }} />
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {t.benefits.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <Icon name="check" size={15} color={t.highlight ? 'var(--gwf-gold-500)' : 'var(--gwf-purple-600)'} />
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: t.highlight ? 'rgba(255,255,255,.8)' : 'var(--gwf-ink-soft)' }}>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)' }}>The Process</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(26px,3.5vw,42px)', lineHeight: 1.04, color: 'var(--gwf-ink)', margin: '12px 0 0' }}>
              How Partnership Works
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="pillar-grid">
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ padding: 'clamp(24px,3vw,32px)', borderRight: i < STEPS.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 13, color: 'var(--gwf-gold-500)', letterSpacing: '0.1em' }}>{s.n}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 18, color: 'var(--gwf-ink)', margin: '10px 0 10px' }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--gwf-ink-soft)', margin: 0 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-900)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(28px,4vw,44px)', lineHeight: 1.04, color: '#fff', margin: '0 0 16px' }}>
            Ready to Partner With Us?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,.78)', margin: '0 0 32px' }}>
            Contact us to discuss your partnership goals or to express your interest in a specific tier. We respond within 48 hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact">
              <Button variant="gold" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>
                Express Interest
              </Button>
            </Link>
            <a href="mailto:gutsywomenfoundation@gmail.com?subject=Partnership%20Enquiry">
              <Button variant="outline-light" size="lg">
                Email Us Directly
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
