'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

const PRESETS = [50, 100, 200, 500, 1000]

type Step = 'form' | 'success'

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

export function DonateClient() {
  const [step, setStep] = React.useState<Step>('form')
  const [preset, setPreset] = React.useState<number | null>(null)
  const [custom, setCustom] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [paidAmount, setPaidAmount] = React.useState(0)
  const [ref, setRef] = React.useState('')

  React.useEffect(() => { loadPaystack() }, [])

  const amount = preset ?? (custom ? parseFloat(custom) : 0)

  async function handleDonate() {
    if (!email) { setError('Please enter your email address.'); return }
    if (!amount || amount < 1) { setError('Please select or enter a donation amount.'); return }
    setError('')
    setLoading(true)
    await loadPaystack()
    setLoading(false)

    const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
    if (!key) {
      setError('Payment gateway is not yet configured. Please donate via Mobile Money below or email us directly.')
      return
    }

    const handler = (window as any).PaystackPop.setup({
      key,
      email,
      amount: Math.round(amount * 100),
      currency: 'GHS',
      ref: `gwf_donate_${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: 'Donor Name', variable_name: 'donor_name', value: name || 'Anonymous' },
          { display_name: 'Purpose', variable_name: 'purpose', value: 'General Donation' },
        ],
      },
      callback: async (res: { reference: string }) => {
        try {
          await fetch(`/api/paystack/verify?ref=${res.reference}`)
        } catch {}
        setPaidAmount(amount)
        setRef(res.reference)
        setStep('success')
      },
      onClose: () => {},
    })
    handler.openIframe()
  }

  if (step === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: 'clamp(32px,5vw,56px) 0' }}>
        <div style={{ width: 72, height: 72, background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" size={36} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.5vw,30px)', color: 'var(--gwf-ink)', margin: '20px 0 12px' }}>
          Thank You{name ? `, ${name.split(' ')[0]}` : ''}!
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 0 6px' }}>
          Your donation of <strong>GHS {paidAmount.toLocaleString()}</strong> has been received.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '0 0 30px' }}>
          Ref: {ref}
        </p>
        <button
          onClick={() => { setStep('form'); setPreset(null); setCustom(''); setName(''); setEmail('') }}
          style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-purple-600)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Make another donation
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Amount selector */}
      <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: '0 0 14px' }}>
        Select amount (GHS)
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
        {PRESETS.map((p) => (
          <button
            key={p}
            onClick={() => { setPreset(p); setCustom('') }}
            style={{
              padding: '11px 20px',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 15,
              cursor: 'pointer',
              border: `2px solid ${preset === p ? 'var(--gwf-purple-600)' : 'var(--border-subtle)'}`,
              background: preset === p ? 'var(--gwf-purple-600)' : '#fff',
              color: preset === p ? '#fff' : 'var(--gwf-ink)',
              transition: 'all var(--dur-fast)',
            }}
          >
            {p.toLocaleString()}
          </button>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', border: `2px solid ${!preset && custom ? 'var(--gwf-purple-600)' : 'var(--border-subtle)'}`, padding: '0 12px', minWidth: 130, flex: 1 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', marginRight: 6, whiteSpace: 'nowrap' }}>GHS</span>
          <input
            type="number"
            placeholder="Custom"
            value={custom}
            min="1"
            onChange={(e) => { setCustom(e.target.value); setPreset(null) }}
            style={{ border: 'none', outline: 'none', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-ink)', background: 'transparent', width: '100%', padding: '11px 0' }}
          />
        </div>
      </div>

      {/* Donor info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }} className="apply-grid">
        <div>
          <label style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-ink)', display: 'block', marginBottom: 6 }}>
            Your name <span style={{ color: 'var(--gwf-ink-muted)', fontWeight: 400 }}>(optional)</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ama Mensah"
            style={{ width: '100%', padding: '11px 14px', border: '1.5px solid var(--border-subtle)', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gwf-ink)', outline: 'none', boxSizing: 'border-box', background: '#fff' }}
          />
        </div>
        <div>
          <label style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-ink)', display: 'block', marginBottom: 6 }}>
            Email <span style={{ color: 'var(--gwf-magenta-600)' }}>*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            style={{ width: '100%', padding: '11px 14px', border: '1.5px solid var(--border-subtle)', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gwf-ink)', outline: 'none', boxSizing: 'border-box', background: '#fff' }}
          />
        </div>
      </div>

      {error && (
        <div style={{ background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', padding: '11px 14px', marginBottom: 18, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>
          {error}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button
          onClick={handleDonate}
          disabled={loading || !amount || !email}
          style={{
            padding: '14px 28px',
            background: amount && email ? 'var(--gwf-purple-600)' : 'var(--gwf-purple-200)',
            color: '#fff',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            cursor: amount && email ? 'pointer' : 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            transition: 'background var(--dur-fast)',
          }}
        >
          {loading ? 'Loading…' : `Donate${amount ? ` · GHS ${amount.toLocaleString()}` : ''}`}
          {!loading && <Icon name="arrow-right" size={18} />}
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gwf-ink-muted)', fontFamily: 'var(--font-body)', fontSize: 13 }}>
          <Icon name="shield" size={15} />
          Secured by Paystack
        </div>
      </div>
    </div>
  )
}
