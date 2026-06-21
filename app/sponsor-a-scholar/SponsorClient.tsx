'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

const PACKAGES = [
  {
    id: 'scholar',
    label: 'Sponsor 1 Scholar',
    amount: 500,
    description: 'Fully fund one participant\'s place in the 3-day Masterclass — covering programme fees, materials and daily lunch.',
    highlight: false,
  },
  {
    id: 'five',
    label: 'Sponsor 5 Scholars',
    amount: 2000,
    description: 'Empower a group of five women at a reduced rate of GHS 400 each — ideal for small businesses and teams.',
    highlight: true,
  },
  {
    id: 'cohort',
    label: 'Sponsor a Full Cohort',
    amount: 15000,
    description: 'Fund all 40 participants in a single cohort. Your name or brand becomes the named sponsor of that cohort.',
    highlight: false,
  },
]

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

export function SponsorClient() {
  const [selected, setSelected] = React.useState<string | null>(null)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [success, setSuccess] = React.useState<{ ref: string; amount: number; label: string } | null>(null)

  React.useEffect(() => { loadPaystack() }, [])

  const pkg = PACKAGES.find((p) => p.id === selected)

  async function handleSponsor() {
    if (!pkg) { setError('Please select a sponsorship package.'); return }
    if (!email) { setError('Please enter your email address.'); return }
    setError('')
    setLoading(true)
    await loadPaystack()
    setLoading(false)

    const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
    if (!key) {
      setError('Payment gateway is not yet configured. Please contact us at gutsywomenfoundation@gmail.com to complete your sponsorship.')
      return
    }

    const handler = (window as any).PaystackPop.setup({
      key,
      email,
      amount: Math.round(pkg.amount * 100),
      currency: 'GHS',
      ref: `gwf_scholar_${Date.now()}`,
      metadata: {
        custom_fields: [
          { display_name: 'Sponsor Name', variable_name: 'sponsor_name', value: name || 'Anonymous' },
          { display_name: 'Package', variable_name: 'package', value: pkg.label },
          { display_name: 'Purpose', variable_name: 'purpose', value: 'Scholar Sponsorship' },
        ],
      },
      callback: async (res: { reference: string }) => {
        try { await fetch(`/api/paystack/verify?ref=${res.reference}`) } catch {}
        setSuccess({ ref: res.reference, amount: pkg.amount, label: pkg.label })
      },
      onClose: () => {},
    })
    handler.openIframe()
  }

  if (success) {
    return (
      <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', padding: 'clamp(32px,5vw,56px)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ width: 72, height: 72, background: 'var(--gwf-gold-100)', color: 'var(--gwf-gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" size={36} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(20px,2.5vw,28px)', color: 'var(--gwf-ink)', margin: '20px 0 10px' }}>
          Sponsorship Received!
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 0 6px' }}>
          Thank you{name ? `, ${name.split(' ')[0]}` : ''}. Your <strong>{success.label}</strong> sponsorship of <strong>GHS {success.amount.toLocaleString()}</strong> will directly change lives.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '0 0 8px' }}>
          We will be in touch at <strong>{email}</strong> with your sponsorship confirmation and impact report.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gwf-ink-muted)', margin: 0 }}>
          Ref: {success.ref}
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Package cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 36 }} className="stat-grid">
        {PACKAGES.map((p) => (
          <button
            key={p.id}
            onClick={() => setSelected(p.id)}
            style={{
              textAlign: 'left',
              padding: 'clamp(20px,3vw,28px)',
              border: `2px solid ${selected === p.id ? 'var(--gwf-purple-600)' : p.highlight ? 'var(--gwf-gold-500)' : 'var(--border-subtle)'}`,
              background: selected === p.id ? 'var(--gwf-purple-600)' : p.highlight ? 'var(--gwf-gold-100)' : '#fff',
              cursor: 'pointer',
              transition: 'all var(--dur-fast)',
              position: 'relative',
            }}
          >
            {p.highlight && (
              <span style={{ position: 'absolute', top: -12, left: 20, background: 'var(--gwf-gold-500)', color: 'var(--gwf-ink)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 10px' }}>
                Popular
              </span>
            )}
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: selected === p.id ? 'rgba(255,255,255,.7)' : 'var(--gwf-ink-muted)', margin: '0 0 8px' }}>
              {p.label}
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: selected === p.id ? '#fff' : 'var(--gwf-ink)', margin: '0 0 12px', lineHeight: 1 }}>
              GHS {p.amount.toLocaleString()}
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: selected === p.id ? 'rgba(255,255,255,.8)' : 'var(--gwf-ink-soft)', margin: 0 }}>
              {p.description}
            </p>
            {selected === p.id && (
              <div style={{ marginTop: 14, color: 'var(--gwf-gold-500)', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13 }}>
                <Icon name="check" size={16} /> Selected
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Sponsor info */}
      {selected && (
        <div style={{ background: 'var(--gwf-purple-100)', padding: 'clamp(24px,4vw,36px)', marginBottom: 24 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 18px' }}>
            Your details
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="apply-grid">
            <div>
              <label style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-ink)', display: 'block', marginBottom: 6 }}>
                Name / Organisation <span style={{ color: 'var(--gwf-ink-muted)', fontWeight: 400 }}>(optional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name or company"
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
        </div>
      )}

      {error && (
        <div style={{ background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', padding: '11px 14px', marginBottom: 18, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>
          {error}
        </div>
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <button
          onClick={handleSponsor}
          disabled={loading || !selected || !email}
          style={{
            padding: '14px 28px',
            background: selected && email ? 'var(--gwf-purple-600)' : 'var(--gwf-purple-200)',
            color: '#fff',
            border: 'none',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 16,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            cursor: selected && email ? 'pointer' : 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            transition: 'background var(--dur-fast)',
          }}
        >
          {loading ? 'Loading…' : `Sponsor${pkg ? ` · GHS ${pkg.amount.toLocaleString()}` : ''}`}
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
