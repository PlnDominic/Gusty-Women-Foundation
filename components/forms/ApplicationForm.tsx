'use client'

import React from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Capsule } from '@/components/ui/Capsule'
import { Icon } from '@/components/ui/Icon'
import {
  getApplicationStepErrors,
  hasErrors,
  validateApplication,
  type ApplicationPayload,
  type ValidationErrors,
} from '@/lib/validation'

const APPLICATION_FEE_GHS = 550
const STEPS = ['Personal', 'Background', 'Motivation', 'Review'] as const

const EMPTY: ApplicationPayload = {
  name: '', age: '', location: '', email: '', phone: '',
  education: '', occupation: '', why: '', goals: '',
}

function loadPaystack(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).PaystackPop) { resolve(); return }
    if (document.getElementById('paystack-inline')) { resolve(); return }
    const s = document.createElement('script')
    s.id = 'paystack-inline'
    s.src = 'https://js.paystack.co/v1/inline.js'
    s.onload = () => resolve()
    document.head.appendChild(s)
  })
}

export function ApplicationForm() {
  const [step, setStep] = React.useState(0)
  const [done, setDone] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [f, setF] = React.useState<ApplicationPayload>(EMPTY)
  const [errors, setErrors] = React.useState<ValidationErrors<ApplicationPayload>>({})
  const [formError, setFormError] = React.useState('')

  React.useEffect(() => { loadPaystack() }, [])

  const set = (k: keyof ApplicationPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value
    const next = { ...f, [k]: value }
    const nextErrors = validateApplication(next)
    setF(next)
    setErrors((current) => ({ ...current, [k]: nextErrors[k] }))
    setFormError('')
  }

  const pct = ((step + 1) / STEPS.length) * 100
  const currentStepErrors = getApplicationStepErrors(f, step)
  const cannotContinue = submitting || hasErrors(currentStepErrors)

  function goNext() {
    const stepErrors = getApplicationStepErrors(f, step)
    setErrors((p) => ({ ...p, ...stepErrors }))

    if (hasErrors(stepErrors)) {
      setFormError('Please fix the highlighted fields before continuing.')
      return
    }

    setFormError('')
    setStep(step + 1)
  }

  async function submitAfterPayment(paymentRef: string) {
    setSubmitting(true)
    setFormError('')

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, paymentRef }),
      })

      const result = await response.json().catch(() => null)

      if (!response.ok) {
        if (result?.errors) setErrors(result.errors)
        setFormError(result?.error || 'Your payment was received but we could not record your application. Please contact us.')
        return
      }

      setDone(true)
    } catch {
      setFormError('Your payment was received but there was a network error. Please contact gutsywomenfoundation@gmail.com.')
    } finally {
      setSubmitting(false)
    }
  }

  async function openPayment() {
    if (submitting) return

    const validationErrors = validateApplication(f)
    setErrors(validationErrors)

    if (hasErrors(validationErrors)) {
      setFormError('Please fix the highlighted fields before proceeding to payment.')
      return
    }

    const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
    if (!key) {
      setFormError('Payment gateway is not configured. Please contact gutsywomenfoundation@gmail.com to complete your application.')
      return
    }

    setFormError('')
    setSubmitting(true)
    await loadPaystack()
    setSubmitting(false)

    const handler = (window as any).PaystackPop.setup({
      key,
      email: f.email,
      amount: APPLICATION_FEE_GHS * 100,
      currency: 'GHS',
      ref: `gwf_apply_${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: 'Applicant Name', variable_name: 'applicant_name', value: f.name },
          { display_name: 'Purpose', variable_name: 'purpose', value: 'Cohort 2 Application Fee' },
        ],
      },
      callback: (res: { reference: string }) => {
        submitAfterPayment(res.reference)
      },
      onClose: () => {
        setSubmitting(false)
      },
    })
    handler.openIframe()
  }

  if (done) return <Success name={f.name} onReset={() => { setDone(false); setStep(0); setF(EMPTY) }} />

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))', padding: '28px clamp(24px,4vw,40px) 24px', color: '#fff' }}>
        <div>
          <Capsule tone="gold" size="sm">Cohort 2 Application</Capsule>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 26, margin: '14px 0 0' }}>
            {STEPS[step]} details
          </h2>
        </div>
        <div style={{ marginTop: 22 }}>
          <div style={{ height: 8, borderRadius: 0, background: 'rgba(255,255,255,.18)', overflow: 'hidden' }}>
            <div style={{ width: pct + '%', height: '100%', background: 'var(--gwf-gold-500)', borderRadius: 0, transition: 'width var(--dur-slow) var(--ease-out)' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
            {STEPS.map((s, i) => (
              <span key={s} style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: i <= step ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.55)' }}>
                {i + 1}. {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 'clamp(24px,4vw,40px)' }}>
        {step === 0 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="apply-grid">
            <Input label="Full name" placeholder="Ama Mensah" value={f.name} onChange={set('name')} error={errors.name} required />
            <Input label="Age" type="number" placeholder="22" value={f.age} onChange={set('age')} error={errors.age} min="16" max="40" />
            <Input label="Location" placeholder="Accra, Ghana" value={f.location} onChange={set('location')} error={errors.location} required />
            <Input label="Email" type="email" placeholder="you@example.com" value={f.email} onChange={set('email')} error={errors.email} required />
            <Input label="Phone" placeholder="+233 ..." value={f.phone} onChange={set('phone')} error={errors.phone} />
          </div>
        )}

        {step === 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }} className="apply-grid">
            <Input label="Highest education" placeholder="BSc, University of Ghana" value={f.education} onChange={set('education')} error={errors.education} required />
            <Input label="Current occupation" placeholder="Student / Founder / Employed" value={f.occupation} onChange={set('occupation')} error={errors.occupation} required />
          </div>
        )}

        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Input label="Why do you want to join Cohort 2?" multiline rows={4} placeholder="Tell us about the idea you want to build..." value={f.why} onChange={set('why')} error={errors.why} required />
            <Input label="What goals do you hope to achieve?" multiline rows={4} placeholder="Where do you want to be in 12 months?" value={f.goals} onChange={set('goals')} error={errors.goals} required />
          </div>
        )}

        {step === 3 && <Review f={f} onEdit={setStep} />}

        {formError && (
          <div role="alert" style={{ marginTop: 22, background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', border: '1px solid rgba(194,24,91,.25)', padding: '12px 14px', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>
            {formError}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 30, gap: 12 }}>
          <Button variant="ghost" onClick={() => step > 0 ? setStep(step - 1) : undefined}>
            {step === 0 ? '' : 'Back'}
          </Button>
          {step < STEPS.length - 1 ? (
            <Button variant="primary" iconRight={<Icon name="arrow-right" size={18} />} onClick={goNext} disabled={cannotContinue}>
              Continue
            </Button>
          ) : (
            <Button variant="gold" iconRight={<Icon name="arrow-right" size={18} />} onClick={openPayment} disabled={submitting}>
              {submitting ? 'Processing…' : `Pay & Submit · GHS ${APPLICATION_FEE_GHS}`}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

function Review({ f, onEdit }: { f: ApplicationPayload; onEdit: (step: number) => void }) {
  const sections = [
    { title: 'Personal', step: 0, items: [['Name', f.name], ['Age', f.age], ['Location', f.location], ['Email', f.email], ['Phone', f.phone]] },
    { title: 'Background', step: 1, items: [['Education', f.education], ['Occupation', f.occupation]] },
    { title: 'Motivation', step: 2, items: [['Why', f.why], ['Goals', f.goals]] },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {sections.map(({ title, step, items }) => (
        <div key={title} style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 15, color: 'var(--gwf-purple-700)' }}>{title}</span>
            <button
              onClick={() => onEdit(step)}
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-magenta-600)', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
            >
              Edit
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {items.map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 12, fontFamily: 'var(--font-body)', fontSize: 14 }}>
                <span style={{ width: 96, color: 'var(--gwf-ink-muted)', flexShrink: 0 }}>{k}</span>
                <span style={{ color: 'var(--gwf-ink)', fontWeight: 500 }}>
                  {v || <em style={{ color: 'var(--gwf-ink-muted)', fontWeight: 400 }}>N/A</em>}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function Success({ name, onReset }: { name: string; onReset: () => void }) {
  const first = name.split(' ')[0]
  return (
    <div style={{ maxWidth: 580, margin: '0 auto', background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))', padding: 'clamp(32px,5vw,48px)' }}>
        <span style={{ width: 76, height: 76, background: 'rgba(255,255,255,.15)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
          <Icon name="check" size={40} color="#fff" />
        </span>
        <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,3vw,30px)', color: '#fff', margin: '18px 0 6px' }}>
          Welcome to the Gutsy Family!
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14, color: 'var(--gwf-gold-400)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Payment Confirmed · Cohort 2
        </p>
      </div>
      <div style={{ padding: 'clamp(28px,4vw,44px)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.7, color: 'var(--gwf-ink)', margin: '0 0 16px', fontWeight: 600 }}>
          Congratulations{first ? `, ${first}` : ''}! Your spot in Cohort 2 is secured.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '0 0 16px' }}>
          You are now part of a vibrant community of ambitious individuals ready to learn, grow, connect, and thrive.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '0 0 24px' }}>
          Get ready for mentorship, leadership training, networking opportunities, career guidance, and access to industry experts. Further details and updates will be communicated soon.
        </p>
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 28 }}>
          {['facebook', 'twitter', 'instagram', 'linkedin'].map((s) => (
            <span key={s} style={{ width: 42, height: 42, background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name={s} size={19} />
            </span>
          ))}
        </div>
        <Button variant="primary" onClick={onReset}>Back to Home</Button>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gwf-ink-muted)', margin: '18px 0 0' }}>
          Gutsy Women Foundation · Leveling the Playing Field
        </p>
      </div>
    </div>
  )
}
