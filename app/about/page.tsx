import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Newsletter } from '@/components/home/Newsletter'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Gutsy Women Foundation: our mission, vision, and the team behind the work.',
}

const TEAM = [
  { name: 'Founder & Executive Director', role: 'Visionary leader behind GWF', img: '/assets/gwf-podium.jpg' },
  { name: 'Program Lead', role: 'Designing transformative learning experiences', img: '/assets/gwf-speaker-mic.jpg' },
  { name: 'Partnerships Manager', role: 'Building the sponsor & mentor network', img: '/assets/gwf-community-outreach.jpg' },
]

const GALLERY = [
  { src: '/assets/gwf-school-visit.jpg', alt: 'GWF school visit' },
  { src: '/assets/gwf-group-photo.jpg', alt: 'GWF community group photo' },
  { src: '/assets/gwf-purple-mic.jpg', alt: 'GWF speaker with microphone' },
  { src: '/assets/gwf-cake-cutting.jpg', alt: 'GWF celebration ceremony' },
  { src: '/assets/gwf-mentorship-convo.jpg', alt: 'GWF one-on-one mentorship' },
  { src: '/assets/gwf-team-tshirts.jpg', alt: 'GWF team in branded t-shirts' },
  { src: '/assets/gwf-podium.jpg', alt: 'GWF speaker at podium' },
  { src: '/assets/gwf-speaker-mic.jpg', alt: 'GWF speaker seated with mic' },
  { src: '/assets/gwf-community-outreach.jpg', alt: 'GWF community outreach' },
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
            The GUTSY Women&apos;s Foundation is a not-for-profit organisation dedicated to empowering women and girls. We work to raise awareness about women&apos;s rights, promote gender equity, and increase women&apos;s participation in economic and democratic processes — a three-pronged approach that is our foundation for achieving sustainable development and fostering peace in Ghana.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }} className="hero-grid">
          <div>
            <SectionHeading eyebrow="Our Purpose" title="Mission" align="left" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '20px 0 0' }}>
              To cultivate a society where women and girls are recognised, respected, and empowered to reach their full potential.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Ambition" title="Vision" align="left" />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '20px 0 0' }}>
              A Ghana where women are equal partners in shaping a just, peaceful, and prosperous future.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="What We Work Towards" title="Our Objectives" align="center" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20, maxWidth: 900, margin: '0 auto' }} className="stat-grid">
            {[
              { n: '01', text: 'Educate the public on women\'s rights, gender equality, and the importance of women\'s participation in democracy.' },
              { n: '02', text: 'Advocate for policies and practices that ensure equal opportunities and outcomes for women and girls in all spheres of life.' },
              { n: '03', text: 'Empower women and girls to actively participate in decision-making processes at the community and national levels.' },
              { n: '04', text: 'Implement projects and programmes focused on women\'s health and wellbeing, including reproductive health, mental health and the fight against violence and abuse in all forms.' },
            ].map((obj) => (
              <div key={obj.n} style={{ background: '#fff', padding: 'clamp(24px,3vw,36px)', boxShadow: 'var(--shadow-sm)', display: 'flex', gap: 20, alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--gwf-purple-200)', lineHeight: 1, flexShrink: 0 }}>{obj.n}</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: 0 }}>{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Areas */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Where We Focus" title="Priority Areas" align="center" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }} className="stat-grid">
            {[
              {
                title: 'Mentorship',
                body: 'Through the GUTSY Women Mentoring Programme (GWMP), we connect young women with experienced mentors who provide guidance, support and inspiration on their personal and professional journeys.',
                accent: 'var(--gwf-purple-600)',
              },
              {
                title: 'Advocacy',
                body: 'We actively advocate for policies that promote gender equality and women\'s rights, working with policymakers, civil society organisations and the media to drive meaningful change.',
                accent: 'var(--gwf-gold-500)',
              },
              {
                title: 'Education',
                body: 'We develop and deliver educational programmes that raise awareness about women\'s rights and empower women to claim their rightful place in society.',
                accent: 'var(--gwf-magenta-600)',
              },
              {
                title: "Women's Health",
                body: 'We advocate for access to quality healthcare services for women, including reproductive health and mental health, recognising that wellbeing is foundational to full participation in society.',
                accent: 'var(--gwf-purple-600)',
              },
              {
                title: 'Gender-Based Research',
                body: 'We support and promote gender-based research to identify and address inequalities faced by women and girls. This research informs our advocacy efforts and programme development for a more equitable future.',
                accent: 'var(--gwf-gold-500)',
              },
            ].map((area) => (
              <div key={area.title} style={{ background: 'var(--gwf-purple-100)', padding: 'clamp(24px,3vw,36px)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 5, height: '100%', background: area.accent }} />
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 18, color: 'var(--gwf-ink)', margin: '0 0 14px', letterSpacing: '-0.01em' }}>{area.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: 0 }}>{area.body}</p>
              </div>
            ))}
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

      {/* Gallery */}
      <section style={{ padding: 'clamp(56px,7vw,96px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="In Action" title="Moments That Matter" align="center" style={{ marginBottom: 36 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 3 }} className="gallery-grid">
            {/* Row 1: wide + narrow */}
            <div style={{ gridColumn: 'span 2', height: 300, overflow: 'hidden' }}>
              <img src={GALLERY[0].src} alt={GALLERY[0].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ height: 300, overflow: 'hidden' }}>
              <img src={GALLERY[1].src} alt={GALLERY[1].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            {/* Row 2: three equal */}
            {GALLERY.slice(2, 5).map((g) => (
              <div key={g.src} style={{ height: 240, overflow: 'hidden' }}>
                <img src={g.src} alt={g.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
            {/* Row 3: narrow + wide */}
            <div style={{ height: 280, overflow: 'hidden' }}>
              <img src={GALLERY[5].src} alt={GALLERY[5].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div style={{ gridColumn: 'span 2', height: 280, overflow: 'hidden' }}>
              <img src={GALLERY[6].src} alt={GALLERY[6].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            {/* Row 4: two + one */}
            <div style={{ gridColumn: 'span 2', height: 260, overflow: 'hidden' }}>
              <img src={GALLERY[7].src} alt={GALLERY[7].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
            <div style={{ height: 260, overflow: 'hidden' }}>
              <img src={GALLERY[8].src} alt={GALLERY[8].alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
