'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'
import { isValidEmail, isValidPhone } from '@/lib/validation'
import { rootedRadiant, ticketTiers, getTicketTier, formatCedis, MAX_TICKETS_PER_ORDER, type TicketTier } from '@/lib/events'

function loadPaystack(): Promise<void> {
  return new Promise((resolve) => {
    if ((window as any).PaystackPop) { resolve(); return }
    let s = document.getElementById('paystack-inline') as HTMLScriptElement | null
    if (!s) {
      s = document.createElement('script')
      s.id = 'paystack-inline'
      s.src = 'https://js.paystack.co/v1/inline.js'
      document.head.appendChild(s)
    }
    s.addEventListener('load', () => resolve())
    s.addEventListener('error', () => resolve())
    // Don't hang the button if the script already failed earlier; the caller checks PaystackPop.
    setTimeout(resolve, 10000)
  })
}

interface Confirmation {
  reference: string
  tier: string
  quantity: number
  amount: number
  verified: boolean
  emailed: boolean
}

const label: React.CSSProperties = { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-ink)', display: 'block', marginBottom: 6 }
const input: React.CSSProperties = { width: '100%', padding: '11px 14px', border: '1.5px solid var(--border-subtle)', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gwf-ink)', outline: 'none', boxSizing: 'border-box', background: '#fff' }
const required = <span style={{ color: 'var(--gwf-magenta-600)' }}>*</span>

export function TicketCheckout() {
  const firstAvailable = ticketTiers.find((t) => t.available)
  const [tierId, setTierId] = React.useState<TicketTier['id'] | undefined>(firstAvailable?.id)
  const [quantity, setQuantity] = React.useState(1)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const [confirmation, setConfirmation] = React.useState<Confirmation | null>(null)

  // Pre-select the tier chosen on the home page (?tier=vip)
  React.useEffect(() => {
    const t = getTicketTier(new URLSearchParams(window.location.search).get('tier'))
    if (t?.available) setTierId(t.id)
    loadPaystack()
  }, [])

  const tier = getTicketTier(tierId)
  const total = tier ? tier.price * quantity : 0

  async function confirmPayment(reference: string, chosen: TicketTier, qty: number) {
    setLoading(true)
    try {
      const res = await fetch('/api/tickets/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference }),
      })
      const data = await res.json()
      if (res.ok && data.status === 'success') {
        setConfirmation({ reference, tier: data.tier, quantity: data.quantity, amount: data.amount, verified: true, emailed: data.emailed })
        return
      }
    } catch {}
    finally { setLoading(false) }
    // Paystack reported success but our check failed — still show the reference so the buyer can follow up.
    setConfirmation({ reference, tier: chosen.label, quantity: qty, amount: chosen.price * qty, verified: false, emailed: false })
  }

  async function handleCheckout() {
    if (!tier || !tier.available) { setError('Please choose a ticket.'); return }
    if (!name.trim()) { setError('Please enter your full name.'); return }
    if (!isValidEmail(email)) { setError('Please enter a valid email address — your ticket will be sent there.'); return }
    if (!phone.trim() || !isValidPhone(phone)) { setError('Please enter a valid phone number.'); return }
    setError('')
    setLoading(true)
    await loadPaystack()
    setLoading(false)

    const key = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY
    if (!key || !(window as any).PaystackPop) {
      setError(`Online payment is temporarily unavailable. Please call or WhatsApp ${rootedRadiant.enquiryPhone} to get your ticket.`)
      return
    }

    const chosen = tier
    const qty = quantity
    const handler = (window as any).PaystackPop.setup({
      key,
      email: email.trim(),
      amount: chosen.price * qty * 100,
      currency: 'GHS',
      ref: `gwf_rr2_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      metadata: {
        event: rootedRadiant.id,
        tier: chosen.id,
        quantity: qty,
        buyer_name: name.trim(),
        phone: phone.trim(),
        custom_fields: [
          { display_name: 'Event', variable_name: 'event', value: rootedRadiant.title },
          { display_name: 'Ticket', variable_name: 'ticket', value: `${qty} × ${chosen.label}` },
          { display_name: 'Name', variable_name: 'buyer_name', value: name.trim() },
          { display_name: 'Phone', variable_name: 'phone', value: phone.trim() },
        ],
      },
      callback: (res: { reference: string }) => { confirmPayment(res.reference, chosen, qty) },
      onClose: () => {},
    })
    handler.openIframe()
  }

  if (confirmation) {
    return (
      <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', padding: 'clamp(32px,5vw,56px)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
        <div style={{ width: 72, height: 72, background: 'var(--gwf-gold-100)', color: 'var(--gwf-gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" size={36} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.8vw,30px)', color: 'var(--gwf-ink)', margin: '20px 0 10px' }}>
          You&rsquo;re In, Sis!
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 0 6px' }}>
          Thank you{name ? `, ${name.trim().split(' ')[0]}` : ''}. Your <strong>{confirmation.quantity} × {confirmation.tier}</strong> ticket{confirmation.quantity > 1 ? 's' : ''} for <strong>{rootedRadiant.title}</strong> ({formatCedis(confirmation.amount)}) {confirmation.quantity > 1 ? 'are' : 'is'} secured.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: '0 0 6px' }}>
          {rootedRadiant.date} &middot; {rootedRadiant.time} &middot; {rootedRadiant.venue}
        </p>
        {confirmation.verified && confirmation.emailed ? (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: '12px 0 8px' }}>
            A confirmation has been sent to <strong>{email}</strong>. Please show it, or your reference below, at the entrance.
          </p>
        ) : (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: '12px 0 8px', lineHeight: 1.6 }}>
            Please screenshot this page and keep your reference. If you don&rsquo;t receive a confirmation email, call or WhatsApp <strong>{rootedRadiant.enquiryPhone}</strong> with your reference.
          </p>
        )}
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 15, color: 'var(--gwf-purple-700)', margin: '10px 0 0', letterSpacing: '0.03em', wordBreak: 'break-all' }}>
          Ref: {confirmation.reference}
        </p>
      </div>
    )
  }

  return (
    <div>
      {/* Tier cards */}
      <div role="radiogroup" aria-label="Ticket type" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 28 }} className="tier-grid">
        {ticketTiers.map((t) => {
          const selected = t.id === tierId
          return (
            <button
              key={t.id}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={!t.available}
              onClick={() => setTierId(t.id)}
              style={{
                textAlign: 'left',
                padding: 'clamp(18px,2.5vw,24px)',
                border: `2px solid ${selected ? 'var(--gwf-purple-600)' : 'var(--border-subtle)'}`,
                background: selected ? 'var(--gwf-purple-600)' : '#fff',
                cursor: t.available ? 'pointer' : 'not-allowed',
                opacity: t.available ? 1 : 0.5,
                transition: 'all var(--dur-fast)',
              }}
            >
              <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: selected ? 'rgba(255,255,255,.75)' : 'var(--gwf-ink-muted)', margin: '0 0 8px' }}>
                {t.label}
              </p>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(26px,3vw,32px)', color: selected ? '#fff' : 'var(--gwf-ink)', margin: '0 0 8px', lineHeight: 1 }}>
                {formatCedis(t.price)}
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: selected ? 'rgba(255,255,255,.82)' : 'var(--gwf-ink-soft)', margin: 0 }}>
                {t.available ? t.blurb : 'No longer available'}
              </p>
              {selected && (
                <div style={{ marginTop: 12, color: 'var(--gwf-gold-500)', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13 }}>
                  <Icon name="check" size={16} /> Selected
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Buyer details */}
      <div style={{ background: 'var(--gwf-purple-100)', padding: 'clamp(22px,4vw,32px)', marginBottom: 22 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 18px' }}>
          Your details
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="apply-grid">
          <div>
            <label htmlFor="rr-name" style={label}>Full Name {required}</label>
            <input id="rr-name" type="text" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" style={input} />
          </div>
          <div>
            <label htmlFor="rr-phone" style={label}>Phone / WhatsApp {required}</label>
            <input id="rr-phone" type="tel" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. 024 000 0000" style={input} />
          </div>
          <div>
            <label htmlFor="rr-email" style={label}>Email {required}</label>
            <input id="rr-email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" style={input} />
          </div>
          <div>
            <span style={label}>Number of Tickets</span>
            <div style={{ display: 'flex', alignItems: 'stretch', height: 46 }}>
              <QtyButton label="Remove a ticket" disabled={quantity <= 1} onClick={() => setQuantity((q) => Math.max(1, q - 1))}>&minus;</QtyButton>
              <div aria-live="polite" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderTop: '1.5px solid var(--border-subtle)', borderBottom: '1.5px solid var(--border-subtle)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, color: 'var(--gwf-ink)' }}>
                {quantity}
              </div>
              <QtyButton label="Add a ticket" disabled={quantity >= MAX_TICKETS_PER_ORDER} onClick={() => setQuantity((q) => Math.min(MAX_TICKETS_PER_ORDER, q + 1))}>+</QtyButton>
            </div>
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '14px 0 0', lineHeight: 1.5 }}>
          Coming with your girls? Buy up to {MAX_TICKETS_PER_ORDER} tickets in one order &mdash; your confirmation is sent to the email above.
        </p>
      </div>

      {error && (
        <div role="alert" style={{ background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', padding: '11px 14px', marginBottom: 18, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>
          {error}
        </div>
      )}

      {/* Total + pay */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 18, flexWrap: 'wrap', borderTop: '1px solid var(--border-subtle)', paddingTop: 22 }}>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: 0 }}>
            Total{tier ? ` · ${quantity} × ${tier.label}` : ''}
          </p>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--gwf-ink)', margin: '2px 0 0', lineHeight: 1.1 }}>{formatCedis(total)}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
          <button
            type="button"
            onClick={handleCheckout}
            disabled={loading || !tier}
            style={{
              padding: '15px 30px',
              background: 'var(--gwf-purple-600)',
              color: '#fff',
              border: 'none',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 16,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              cursor: loading ? 'wait' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? 'Please wait…' : `Pay ${formatCedis(total)}`}
            {!loading && <Icon name="arrow-right" size={18} />}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gwf-ink-muted)', fontFamily: 'var(--font-body)', fontSize: 13 }}>
            <Icon name="shield" size={15} />
            Mobile Money or card &middot; Secured by Paystack
          </div>
        </div>
      </div>
    </div>
  )
}

function QtyButton({ children, label, disabled, onClick }: { children: React.ReactNode; label: string; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      style={{
        width: 46,
        border: '1.5px solid var(--border-subtle)',
        background: '#fff',
        color: 'var(--gwf-purple-700)',
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 20,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.4 : 1,
      }}
    >
      {children}
    </button>
  )
}
