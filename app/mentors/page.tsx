import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'
import { mentors } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Mentors',
  description: 'Meet the mentors guiding Gutsy Women Foundation participants through leadership, business building and personal growth.',
}

export default function MentorsPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Meet the Mentors</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>Guides Who Help Women Build</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            Our mentors bring practical experience in entrepreneurship, leadership, finance and brand building so participants can move with clarity and confidence.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Mentor Network" title="Practical Support, Real Accountability" align="center" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }} className="pillar-grid">
            {mentors.map((mentor) => (
              <article key={mentor.name} style={{ background: '#fff', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: 220 }}>
                  <Image src={mentor.image} alt={mentor.name} fill sizes="(max-width: 860px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: 22 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-magenta-600)', margin: 0 }}>{mentor.expertise}</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 20, color: 'var(--gwf-ink)', margin: '10px 0 0' }}>{mentor.name}</h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--gwf-purple-700)', margin: '6px 0 0' }}>{mentor.role}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--gwf-ink-soft)', margin: '14px 0 0' }}>{mentor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <SectionHeading eyebrow="Join the Network" title="Become a Mentor" align="center" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '18px 0 28px' }}>
            If you are a founder, operator or leader who wants to support ambitious young women, we would love to hear from you.
          </p>
          <Link href="/contact"><Button variant="primary" iconRight={<Icon name="arrow-right" size={18} />}>Partner With Us</Button></Link>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
