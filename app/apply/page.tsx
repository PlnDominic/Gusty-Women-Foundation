import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ApplicationForm } from '@/components/forms/ApplicationForm'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { APPLICATIONS_OPEN } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Apply for the Gutsy Women Foundation Mentorship Program Masterclass Cohort 2.',
}

export default function ApplyPage() {
  return (
    <main style={{ background: 'var(--gwf-purple-100)', minHeight: 'calc(100vh - 72px)', padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,40px)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', marginBottom: 36, textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <Image
            src="/assets/flyer-cohort2.jpg"
            alt="Gutsy Women Mentorship Program Masterclass Cohort 2 – 5th–7th August 2026"
            width={520}
            height={520}
            style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 520, height: 'auto' }}
            priority
          />
        </div>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>
          {APPLICATIONS_OPEN ? 'Cohort 2: Applications Open' : 'Cohort 2: Applications Closed'}
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gwf-ink)', fontSize: 'clamp(30px,4vw,48px)', lineHeight: 1.04, margin: '12px 0 0' }}>
          {APPLICATIONS_OPEN ? 'Apply Now' : 'Applications Closed'}
        </h1>
        {APPLICATIONS_OPEN ? (
          <>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '14px auto 0', maxWidth: 500 }}>
              5th–7th August 2026 · Yota East, Legon · 8:00 AM each day
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--gwf-magenta-600)', margin: '10px auto 0', maxWidth: 500 }}>
              Application fee: GHS 550 · Payment details provided at the end of this form
            </p>
          </>
        ) : (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '14px auto 0', maxWidth: 500 }}>
            Applications for the Cohort 2 Masterclass (5th–7th August 2026) have now closed. Thank you to everyone who applied — follow us to be the first to hear when applications for the next cohort open.
          </p>
        )}
      </div>
      {APPLICATIONS_OPEN ? (
        <ApplicationForm />
      ) : (
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          <Link href="/programs">
            <Button variant="primary" size="lg" iconRight={<Icon name="arrow-right" size={18} />}>Explore Our Programs</Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary" size="lg">Get in Touch</Button>
          </Link>
        </div>
      )}
    </main>
  )
}
