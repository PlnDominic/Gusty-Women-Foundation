import type { Metadata } from 'next'
import { ApplicationForm } from '@/components/forms/ApplicationForm'

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Apply for the Gutsy Women Foundation Mentorship Program Masterclass Cohort 2.',
}

export default function ApplyPage() {
  return (
    <main style={{ background: 'var(--gwf-purple-100)', minHeight: 'calc(100vh - 72px)', padding: 'clamp(40px,6vw,80px) clamp(16px,4vw,40px)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto', marginBottom: 36, textAlign: 'center' }}>
        <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-magenta-600)' }}>
          Cohort 2: Applications Open
        </span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: 'var(--gwf-ink)', fontSize: 'clamp(30px,4vw,48px)', lineHeight: 1.04, margin: '12px 0 0' }}>
          Apply Now
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '14px auto 0', maxWidth: 500 }}>
          5th–7th August 2026 · Yota East, Legon · 8:00 AM each day
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--gwf-magenta-600)', margin: '10px auto 0', maxWidth: 500 }}>
          Application fee: GHS 550 · Payment details provided at the end of this form
        </p>
      </div>
      <ApplicationForm />
    </main>
  )
}
