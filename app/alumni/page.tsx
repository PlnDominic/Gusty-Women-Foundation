import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'
import { alumniStories } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Alumni',
  description: 'Read Gutsy Women Foundation alumni success stories from young women building businesses, projects and leadership paths.',
}

export default function AlumniPage() {
  return (
    <main>
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Alumni Stories</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>From Ideas to Action</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            Our alumni show what happens when ambition meets mentorship, community and a practical plan for execution.
          </p>
        </div>
      </section>

      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Success Stories" title="Building Beyond the Masterclass" align="center" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }} className="stat-grid">
            {alumniStories.map((story) => (
              <article key={story.name} style={{ background: '#fff', border: '1px solid var(--border-subtle)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
                <Image src={story.image} alt={story.name} width={600} height={750} sizes="(max-width: 640px) 100vw, (max-width: 860px) 50vw, 33vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ padding: 24 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-600)', margin: 0 }}>{story.cohort}</p>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 21, color: 'var(--gwf-ink)', margin: '10px 0 0' }}>{story.name}</h2>
                  <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--gwf-purple-700)', margin: '6px 0 0' }}>{story.venture}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--gwf-ink-soft)', margin: '14px 0 0' }}>{story.story}</p>
                  <div style={{ marginTop: 18, padding: 14, background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, lineHeight: 1.5 }}>
                    {story.outcome}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: 'clamp(48px,7vw,88px) clamp(16px,4vw,40px)', background: 'var(--gwf-gold-100)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <SectionHeading eyebrow="Next Cohort" title="Ready to Write Your Story?" align="center" />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '18px 0 28px' }}>
            Apply for Cohort 2 and join a community of women turning ambition into visible outcomes.
          </p>
          <Link href="/apply"><Button variant="primary" iconRight={<Icon name="arrow-right" size={18} />}>Apply Now</Button></Link>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
