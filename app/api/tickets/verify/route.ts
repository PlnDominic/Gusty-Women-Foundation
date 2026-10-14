import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { rootedRadiant, getTicketTier, formatCedis, MAX_TICKETS_PER_ORDER } from '@/lib/events'

interface TicketMetadata {
  event?: string
  tier?: string
  quantity?: number | string
  buyer_name?: string
  phone?: string
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

function parseMetadata(raw: unknown): TicketMetadata {
  if (typeof raw === 'string') {
    try { return JSON.parse(raw) } catch { return {} }
  }
  return raw && typeof raw === 'object' ? (raw as TicketMetadata) : {}
}

// Verifies a ticket payment with Paystack and checks the amount paid matches the
// ticket price on the server — the amount is set in the browser, so it can't be trusted.
export async function POST(req: NextRequest) {
  let reference = ''
  try {
    reference = String((await req.json()).reference || '')
  } catch {}
  if (!reference) return NextResponse.json({ error: 'Missing reference' }, { status: 400 })

  const secretKey = process.env.PAYSTACK_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Payment not configured' }, { status: 500 })
  }

  let tx
  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secretKey}` }, cache: 'no-store' }
    )
    const data = await res.json()
    if (!res.ok || data.data?.status !== 'success') {
      return NextResponse.json({ error: 'Payment not verified', detail: data.message }, { status: 400 })
    }
    tx = data.data
  } catch {
    return NextResponse.json({ error: 'Verification request failed' }, { status: 500 })
  }

  const meta = parseMetadata(tx.metadata)
  const tier = getTicketTier(meta.tier)
  const quantity = Number(meta.quantity)

  if (meta.event !== rootedRadiant.id || !tier || !Number.isInteger(quantity) || quantity < 1 || quantity > MAX_TICKETS_PER_ORDER) {
    console.error('[tickets] Unrecognised ticket payment', { reference, meta })
    return NextResponse.json({ error: 'This payment is not a valid ticket order' }, { status: 400 })
  }

  const expectedPesewas = tier.price * quantity * 100
  if (tx.currency !== 'GHS' || tx.amount !== expectedPesewas) {
    console.error('[tickets] Amount mismatch', { reference, paid: tx.amount, currency: tx.currency, expectedPesewas })
    return NextResponse.json({ error: 'Amount paid does not match the ticket price' }, { status: 400 })
  }

  const buyerName = String(meta.buyer_name || '').trim() || 'Guest'
  const phone = String(meta.phone || '').trim()
  const email = String(tx.customer?.email || '')
  const total = formatCedis(tier.price * quantity)
  const ticketLine = `${quantity} × ${tier.label}`

  // Payment is confirmed at this point — email failures shouldn't block the buyer's confirmation.
  let emailed = false
  try {
    const transporter = getTransporter()
    const details = `
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:8px 0;color:#6b7280;width:120px;font-size:14px">Name</td><td style="padding:8px 0;font-weight:600;color:#111;font-size:14px">${escapeHtml(buyerName)}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Tickets</td><td style="padding:8px 0;font-weight:600;color:#111;font-size:14px">${escapeHtml(ticketLine)}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Amount paid</td><td style="padding:8px 0;font-weight:600;color:#111;font-size:14px">${escapeHtml(total)}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Reference</td><td style="padding:8px 0;font-weight:600;color:#111;font-size:14px">${escapeHtml(reference)}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Date</td><td style="padding:8px 0;color:#111;font-size:14px">${rootedRadiant.date}, ${rootedRadiant.time}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Venue</td><td style="padding:8px 0;color:#111;font-size:14px">${rootedRadiant.venue}</td></tr>
      </table>`

    const sends: Promise<unknown>[] = [
      transporter.sendMail({
        from: `"GWF Website" <${GWF_EMAIL}>`,
        to: GWF_EMAIL,
        replyTo: email || undefined,
        subject: `New ticket sale: ${ticketLine} — ${buyerName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#4a1a6e;padding:24px 32px">
              <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em">New ${rootedRadiant.title} Ticket Sale</h1>
            </div>
            <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
              ${details}
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;color:#6b7280;width:120px;font-size:14px">Email</td><td style="padding:8px 0;font-size:14px"><a href="mailto:${escapeHtml(email)}" style="color:#4a1a6e;font-weight:600">${escapeHtml(email)}</a></td></tr>
                <tr><td style="padding:8px 0;color:#6b7280;font-size:14px">Phone</td><td style="padding:8px 0;font-weight:600;color:#111;font-size:14px">${escapeHtml(phone)}</td></tr>
              </table>
            </div>
            <div style="padding:16px 32px;background:#f9fafb;color:#9ca3af;font-size:12px">
              Payment verified with Paystack. Reply directly to this email to reach ${escapeHtml(buyerName)}.
            </div>
          </div>
        `,
      }),
    ]

    if (email) {
      sends.push(
        transporter.sendMail({
          from: `"Gutsy Women Foundation" <${GWF_EMAIL}>`,
          to: email,
          replyTo: GWF_EMAIL,
          subject: `You're in! Your ${rootedRadiant.title} ticket`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
              <div style="background:#4a1a6e;padding:28px 32px">
                <p style="color:#F5C518;margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em">Ticket Confirmed</p>
                <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;text-transform:uppercase;letter-spacing:0.03em">${rootedRadiant.title}</h1>
                <p style="color:#FBE3ED;margin:8px 0 0;font-size:15px;font-style:italic">${rootedRadiant.theme}</p>
              </div>
              <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
                <p style="font-size:16px;color:#111;margin:0 0 18px">Hi ${escapeHtml(buyerName.split(' ')[0])}, your spot is secured! Keep this email &mdash; please show it (or your reference) at the entrance.</p>
                ${details}
                <p style="font-size:14px;color:#41415A;line-height:1.6;margin:22px 0 0">Gather your girls, pick your outfit, and come ready to laugh, connect, glow and make unforgettable memories. December 4th, we are outside!</p>
              </div>
              <div style="padding:16px 32px;background:#f9fafb;color:#6b7280;font-size:12px">
                Questions? Call or WhatsApp ${rootedRadiant.enquiryPhone} or reply to this email.
              </div>
            </div>
          `,
        })
      )
    }

    await Promise.all(sends)
    emailed = true
  } catch (err) {
    console.error('[tickets] Email error:', err)
  }

  return NextResponse.json({
    status: 'success',
    reference: tx.reference,
    tier: tier.label,
    quantity,
    amount: tx.amount / 100,
    email,
    emailed,
  })
}
