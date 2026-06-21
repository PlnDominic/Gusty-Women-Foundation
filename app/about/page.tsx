import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Newsletter } from '@/components/home/Newsletter'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Gutsy Women Foundation: our mission, vision, and the team behind the work.',
}

const TEAM = [
  { name: 'Founder & Executive Director', role: 'Visionary leader behind GWF', img: '/assets/event-participant.jpg' },
  { name: 'Program Lead', role: 'Designing transformative learning experiences', img: '/assets/event-audience.jpg' },
  { name: 'Partnerships Manager', role: 'Building the sponsor & mentor network', img: '/assets/event-hero.jpg' },
]

const TIMELINE = [
  { year: '2024', text: 'Gutsy Women Foundation founded with a mission to level the playing field for young women in Ghana.' },
  { year: '2025', text: 'Launched Cohort 1 of the Mentorship Program Masterclass: 40 women, 3 days, one city.' },
  { year: '2026', text: 'Cohort 2 announced with expanded programme, new mentors and a focus on Ignite • Build • Scale.' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Our Story</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>About Us</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            The Gutsy Women Foundation exists to level the playing field, giving young women in Ghana the mentorship, training and community they need to move beyond dreaming and start building.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="hero-grid">
          <div>
            <SectionHeading eyebrow="Our Purpose" title="Mission" align="left" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '20px 0 0' }}>
              To empower young women across Ghana by providing access to world-class mentorship, practical training and powerful networks, enabling them to build sustainable enterprises and lead in their communities.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Ambition" title="Vision" align="left" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '20px 0 0' }}>
              A Ghana and a continent where no young woman is held back by lack of access. Where ambition meets opportunity, and every dream has a pathway to reality.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Our Journey" title="Foundation Timeline" align="center" style={{ marginBottom: 48 }} />
          <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {TIMELINE.map((t, i) => (
              <div key={t.year} style={{ display: 'flex', gap: 28, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 0, background: 'var(--gwf-purple-600)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 14, flexShrink: 0 }}>{t.year}</div>
                  {i < TIMELINE.length - 1 && <div style={{ width: 2, flex: 1, background: 'var(--gwf-purple-200)', margin: '6px 0' }} />}
                </div>
                <div style={{ paddingBottom: i < TIMELINE.length - 1 ? 40 : 0, paddingTop: 12 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.65, color: 'var(--gwf-ink-soft)', margin: 0 }}>{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="The People" title="Our Team" align="center" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className="stat-grid">
            {TEAM.map((m) => (
              <div key={m.name} style={{ background: '#fff', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', textAlign: 'center' }}>
                <div style={{ height: 220, overflow: 'hidden' }}>
                  <img src={m.img} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px 20px 24px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 16, color: 'var(--gwf-ink)', margin: 0 }}>{m.name}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: '6px 0 0' }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
