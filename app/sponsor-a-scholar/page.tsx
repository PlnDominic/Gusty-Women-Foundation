import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'
import { SponsorClient } from './SponsorClient'

export const metadata: Metadata = {
  title: 'Sponsor a Scholar',
  description: 'Fund a young woman\'s place in the Gutsy Women Foundation Masterclass. Sponsoring a scholar directly covers programme fees, materials and meals for the full 3-day event.',
}

const COVERS = [
  { icon: 'book-open', label: 'Programme fee', detail: 'Full registration for the 3-day Masterclass' },
  { icon: 'file-text', label: 'Materials & workbook', detail: 'Printed resources and digital tools for each participant' },
  { icon: 'coffee', label: 'Meals & refreshments', detail: 'Breakfast and lunch across all three days' },
  { icon: 'users', label: 'Mentorship pairing', detail: 'One-to-one time with an experienced mentor' },
]

export default function SponsorAScholarPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,104px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Sponsor a Scholar</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>
            Invest in a<br />Woman&apos;s Future
          </h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0', maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' }}>
            For as little as GHS 500, you can fully fund a young woman&apos;s seat at the GWF Masterclass — the event that launches futures.
          </p>
        </div>
      </section>

      {/* What sponsorship covers */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'center' }} className="hero-grid">
          <div>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>What Your Sponsorship Covers</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(24px,3vw,38px)', lineHeight: 1.04, color: 'var(--gwf-ink)', margin: '14px 0 24px' }}>
              Every Pesewa Goes Directly to a Participant
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {COVERS.map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 20px', background: 'var(--gwf-purple-100)' }}>
                  <span style={{ width: 40, height: 40, background: 'var(--gwf-purple-600)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={c.icon} size={18} />
                  </span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-ink)', margin: '0 0 4px' }}>{c.label}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-soft)', margin: 0, lineHeight: 1.5 }}>{c.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'var(--gwf-purple-900)', padding: 'clamp(28px,4vw,44px)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 6px' }}>Alumni voice</p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontStyle: 'italic', fontSize: 'clamp(18px,2.2vw,24px)', lineHeight: 1.35, color: '#fff', margin: '0 0 24px' }}>
              &ldquo;I could not have attended without the scholarship support. Three months later I have my first paying customers.&rdquo;
            </p>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: '#fff', margin: 0 }}>Naa K.</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.55)', margin: '2px 0 0' }}>Cohort 1 — BrightPath Tutoring</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,.12)', marginTop: 28, paddingTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[['100%', 'of funds reach participants'], ['40', 'scholars per cohort'], ['3', 'days that change trajectories']].slice(0, 2).map(([n, l]) => (
                <div key={l}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, color: 'var(--gwf-gold-500)', margin: 0, lineHeight: 1 }}>{n}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.6)', margin: '4px 0 0', lineHeight: 1.4 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship packages */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: 'var(--gwf-purple-100)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-purple-600)' }}>Choose Your Package</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(26px,3.5vw,42px)', lineHeight: 1.04, color: 'var(--gwf-ink)', margin: '12px 0 12px' }}>
              Select a Package &amp; Pay Securely
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', maxWidth: 480, margin: '0 auto' }}>
              Select the package that fits your capacity. Every amount makes a direct difference.
            </p>
          </div>
          <SponsorClient />
        </div>
      </section>

      {/* Large-scale enquiry */}
      <section style={{ padding: 'clamp(48px,7vw,80px) clamp(16px,4vw,40px)', background: 'var(--gwf-gold-100)', borderTop: '1px solid var(--gwf-gold-300)' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', gap: 'clamp(24px,4vw,48px)', alignItems: 'center', flexWrap: 'wrap' }} >
          <div style={{ flex: 1, minWidth: 260 }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(18px,2.5vw,26px)', color: 'var(--gwf-ink)', margin: '0 0 10px' }}>
              Larger Sponsorship?
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: 0 }}>
              Want to fund an entire cohort or build a named scholarship programme? Get in touch and we will design a package around your goals.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary" iconRight={<Icon name="arrow-right" size={17} />}>
              Talk to Us
            </Button>
          </Link>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
