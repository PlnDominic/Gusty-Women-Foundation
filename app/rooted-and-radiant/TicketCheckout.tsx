'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'
import { isValidEmail, isValidPhone } from '@/lib/validation'
import { rootedRadiant, ticketTiers, getTicketTier, formatCedis, MAX_TICKETS_PER_ORDER, MAX_PROOF_BYTES, MOMO, type TicketTier } from '@/lib/events'

interface IssuedTicket {
  code: string
  colorName: string
  colorHex: string
}

interface Booking {
  tickets: IssuedTicket[]
  tier: string
  quantity: number
  amount: number
  emailed: boolean
}

const label: React.CSSProperties = { fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--gwf-ink)', display: 'block', marginBottom: 6 }
const input: React.CSSProperties = { width: '100%', padding: '11px 14px', border: '1.5px solid var(--border-subtle)', fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--gwf-ink)', outline: 'none', boxSizing: 'border-box', background: '#fff' }
const required = <span style={{ color: 'var(--gwf-magenta-600)' }}>*</span>
const eyebrow: React.CSSProperties = { fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 18px' }

// Phone screenshots and photos can be several MB. Shrink them in the browser so the upload is
// quick on mobile data and always under the server's limit. Falls back to the original file.
function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => { URL.revokeObjectURL(url); resolve(img) }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('unreadable')) }
    img.src = url
  })
}

async function prepareProof(file: File): Promise<File> {
  try {
    const img = await loadImage(file)
    const scale = Math.min(1, 1800 / Math.max(img.naturalWidth, img.naturalHeight))
    const canvas = document.createElement('canvas')
    canvas.width = Math.max(1, Math.round(img.naturalWidth * scale))
    canvas.height = Math.max(1, Math.round(img.naturalHeight * scale))
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      for (const quality of [0.85, 0.7, 0.55]) {
        const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', quality))
        if (blob && blob.size <= MAX_PROOF_BYTES) return new File([blob], 'payment-screenshot.jpg', { type: 'image/jpeg' })
      }
    }
  } catch {}
  if (file.size <= MAX_PROOF_BYTES && /^image\/(jpeg|png|webp)$/.test(file.type)) return file
  throw new Error('unsupported')
}

function CopyButton({ value, text = 'Copy' }: { value: string; text?: string }) {
  const [copied, setCopied] = React.useState(false)
  function copy() {
    navigator.clipboard?.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }
  return (
    <button
      type="button"
      onClick={copy}
      style={{
        background: copied ? 'var(--gwf-purple-600)' : '#fff',
        color: copied ? '#fff' : 'var(--gwf-purple-600)',
        border: '1.5px solid var(--gwf-purple-200)',
        padding: '6px 10px',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        flexShrink: 0,
        transition: 'all 0.15s',
      }}
    >
      <Icon name={copied ? 'check' : 'copy'} size={13} />
      {copied ? 'Copied' : text}
    </button>
  )
}

export function TicketCheckout() {
  const firstAvailable = ticketTiers.find((t) => t.available)
  const [tierId, setTierId] = React.useState<TicketTier['id'] | undefined>(firstAvailable?.id)
  const [quantity, setQuantity] = React.useState(1)
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [company, setCompany] = React.useState('') // honeypot — real visitors never see or fill this
  const [proof, setProof] = React.useState<File | null>(null)
  const [preview, setPreview] = React.useState<string | null>(null)
  const [preparing, setPreparing] = React.useState(false)
  const [submitting, setSubmitting] = React.useState(false)
  const [error, setError] = React.useState('')
  const [booking, setBooking] = React.useState<Booking | null>(null)

  // Pre-select the tier chosen on the home page (?tier=vip)
  React.useEffect(() => {
    const t = getTicketTier(new URLSearchParams(window.location.search).get('tier'))
    if (t?.available) setTierId(t.id)
  }, [])

  React.useEffect(() => {
    if (!proof) { setPreview(null); return }
    const url = URL.createObjectURL(proof)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [proof])

  const tier = getTicketTier(tierId)
  const total = tier ? tier.price * quantity : 0

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setError('')
    setPreparing(true)
    try {
      setProof(await prepareProof(file))
    } catch {
      setProof(null)
      setError('We could not read that file. Please upload your payment screenshot as a JPG or PNG image.')
    } finally {
      setPreparing(false)
    }
  }

  async function handleSubmit() {
    if (!tier || !tier.available) { setError('Please choose a ticket.'); return }
    if (!name.trim()) { setError('Please enter your full name.'); return }
    if (!phone.trim() || !isValidPhone(phone)) { setError('Please enter a valid phone number.'); return }
    if (!isValidEmail(email)) { setError('Please enter a valid email address — your ticket code will be sent there.'); return }
    if (!proof) { setError('Please attach a screenshot of your Mobile Money payment.'); return }
    setError('')
    setSubmitting(true)
    try {
      const body = new FormData()
      body.set('tier', tier.id)
      body.set('quantity', String(quantity))
      body.set('name', name.trim())
      body.set('email', email.trim())
      body.set('phone', phone.trim())
      body.set('company', company)
      body.set('screenshot', proof)
      const res = await fetch('/api/tickets/submit', { method: 'POST', body })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) {
        setError(data.error || `Something went wrong. Please try again or WhatsApp your screenshot to ${rootedRadiant.enquiryPhone}.`)
        return
      }
      setBooking(data)
    } catch {
      setError('We could not reach the server. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (booking) {
    return (
      <div style={{ padding: 'clamp(8px,3vw,36px) 0', textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, background: 'var(--gwf-gold-100)', color: 'var(--gwf-gold-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="check" size={36} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(22px,2.8vw,30px)', color: 'var(--gwf-ink)', margin: '20px 0 10px' }}>
          Booking Received!
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 0 22px' }}>
          Thank you{name ? `, ${name.trim().split(' ')[0]}` : ''}. We&rsquo;ve received your payment screenshot for <strong>{booking.quantity} × {booking.tier}</strong> ({formatCedis(booking.amount)}).
        </p>

        <div style={{ display: 'grid', gap: 14, maxWidth: 420, margin: '0 auto' }}>
          {booking.tickets.map((t, i) => (
            <div key={t.code} style={{ border: `2px solid ${t.colorHex}` }}>
              <div style={{ background: t.colorHex, color: '#fff', padding: '8px 12px', fontFamily: 'var(--font-body)', fontWeight: 800, fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
                {booking.tickets.length > 1 ? `Ticket ${i + 1} of ${booking.tickets.length} · ` : ''}Team {t.colorName}
              </div>
              <div style={{ padding: '16px 12px' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-ink-muted)', margin: 0 }}>Ticket code</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(22px,6vw,30px)', letterSpacing: '0.08em', color: 'var(--gwf-purple-900)', margin: '6px 0 12px', wordBreak: 'break-all' }}>{t.code}</p>
                <CopyButton value={t.code} text="Copy code" />
              </div>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '18px auto 0', maxWidth: 420 }}>
          Take note of your <strong>team colour</strong> &mdash; it&rsquo;s unique to your ticket and used for team activities on the day. Please don&rsquo;t switch teams.
        </p>

        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: '22px 0 8px', lineHeight: 1.6 }}>
          {booking.emailed
            ? <>Your ticket{booking.tickets.length > 1 ? 's have' : ' has'} been sent to <strong>{email}</strong>. Our team will verify your payment and get in touch if anything needs sorting.</>
            : <>We couldn&rsquo;t send your confirmation email, so please <strong>screenshot this page</strong> and keep your code{booking.tickets.length > 1 ? 's' : ''}. Our team will verify your payment and contact you.</>}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gwf-ink-muted)', margin: 0 }}>
          {rootedRadiant.date} &middot; {rootedRadiant.time} &middot; {rootedRadiant.venue}
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '10px 0 0' }}>
          Questions? Call or WhatsApp <strong>{rootedRadiant.enquiryPhone}</strong>.
        </p>
      </div>
    )
  }

  const busy = submitting || preparing

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
        <p style={eyebrow}>1 &middot; Your details</p>
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
        {/* Honeypot: hidden from people, tempting to bots */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
          <label>Company<input type="text" tabIndex={-1} autoComplete="off" value={company} onChange={(e) => setCompany(e.target.value)} /></label>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '14px 0 0', lineHeight: 1.5 }}>
          Coming with your girls? Buy up to {MAX_TICKETS_PER_ORDER} tickets in one order. Use the number you&rsquo;ll pay from if you can, so we can match your payment.
        </p>
      </div>

      {/* Pay by Mobile Money */}
      <div style={{ border: '1.5px solid var(--gwf-gold-300)', background: 'var(--gwf-gold-100)', padding: 'clamp(22px,4vw,32px)', marginBottom: 22 }}>
        <p style={eyebrow}>2 &middot; Pay with Mobile Money</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '0 0 16px' }}>
          Send <strong style={{ color: 'var(--gwf-ink)' }}>{formatCedis(total)}</strong> by Mobile Money to the number below.
        </p>
        <div style={{ background: '#fff', border: '1px solid var(--gwf-gold-300)', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: 0 }}>MoMo number</p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, letterSpacing: '0.06em', color: 'var(--gwf-ink)', margin: '2px 0 0' }}>{MOMO.number}</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '2px 0 0' }}>{MOMO.accountName}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <CopyButton value={MOMO.number} text="Copy number" />
            <CopyButton value={String(total)} text="Copy amount" />
          </div>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: '14px 0 0' }}>
          Once the payment goes through, take a <strong>screenshot of the confirmation</strong> and upload it below.
        </p>
      </div>

      {/* Screenshot upload */}
      <div style={{ border: '1.5px dashed var(--gwf-purple-300)', padding: 'clamp(18px,3vw,26px)', marginBottom: 22 }}>
        <p style={eyebrow}>3 &middot; Upload your payment screenshot {required}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          {preview && (
            <img src={preview} alt="Your payment screenshot" style={{ width: 84, height: 112, objectFit: 'cover', border: '1px solid var(--border-subtle)', flexShrink: 0 }} />
          )}
          <div style={{ minWidth: 0 }}>
            <label
              htmlFor="rr-proof"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '11px 18px', background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-700)', border: '1.5px solid var(--gwf-purple-200)', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, cursor: busy ? 'wait' : 'pointer' }}
            >
              <Icon name="upload" size={16} />
              {preparing ? 'Preparing…' : proof ? 'Change screenshot' : 'Choose screenshot'}
            </label>
            <input id="rr-proof" type="file" accept="image/*" onChange={handleFile} disabled={busy} style={{ position: 'absolute', width: 1, height: 1, opacity: 0, overflow: 'hidden' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '8px 0 0' }}>
              {proof ? 'Screenshot attached.' : 'A JPG or PNG of your MoMo confirmation message.'}
            </p>
          </div>
        </div>
      </div>

      {error && (
        <div role="alert" style={{ background: 'var(--gwf-magenta-100)', color: 'var(--gwf-magenta-700)', padding: '11px 14px', marginBottom: 18, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}>
          {error}
        </div>
      )}

      {/* Total + submit */}
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
            onClick={handleSubmit}
            disabled={busy || !tier}
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
              cursor: busy ? 'wait' : 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              opacity: busy ? 0.7 : 1,
            }}
          >
            {submitting ? 'Submitting…' : 'Submit Payment Proof'}
            {!busy && <Icon name="arrow-right" size={18} />}
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--gwf-ink-muted)', fontFamily: 'var(--font-body)', fontSize: 13 }}>
            <Icon name="mail" size={15} />
            Your ticket code is emailed to you
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
