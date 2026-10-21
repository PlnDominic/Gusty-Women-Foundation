import { NextRequest, NextResponse } from 'next/server'
import { randomBytes } from 'crypto'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { isValidEmail, isValidPhone } from '@/lib/validation'
import { rootedRadiant, getTicketTier, formatCedis, MAX_TICKETS_PER_ORDER, MAX_PROOF_BYTES, MOMO } from '@/lib/events'

export const runtime = 'nodejs'

// No 0/O/1/I so codes are easy to read out over the phone or at the gate.
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function makeTicketCode(prefix: string) {
  const bytes = randomBytes(6)
  let suffix = ''
  for (let i = 0; i < bytes.length; i++) suffix += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length]
  return `${prefix.toUpperCase()}-${suffix}`
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string))
}

// Single-line, trimmed, no control characters — safe for email subjects and headers.
function clean(value: FormDataEntryValue | null, max: number) {
  return (typeof value === 'string' ? value : '').replace(/[\u0000-\u001f\u007f]+/g, ' ').trim().slice(0, max)
}

// Identify the screenshot from its first bytes rather than trusting the browser-supplied type.
function sniffImage(buf: Buffer): { ext: string; mime: string } | null {
  if (buf.length < 12) return null
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return { ext: 'jpg', mime: 'image/jpeg' }
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return { ext: 'png', mime: 'image/png' }
  if (buf.subarray(0, 4).toString('ascii') === 'RIFF' && buf.subarray(8, 12).toString('ascii') === 'WEBP') return { ext: 'webp', mime: 'image/webp' }
  return null
}

function fail(error: string, status = 400) {
  return NextResponse.json({ error }, { status })
}

// Receives a Mobile Money ticket order with a payment screenshot, emails the NGO the proof
// for verification, and emails the buyer their ticket code.
export async function POST(req: NextRequest) {
  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return fail('We could not read your submission. Please try again.')
  }

  // Hidden field real visitors never fill in; bots do. Pretend it worked.
  if (clean(form.get('company'), 50)) return NextResponse.json({ ok: true })

  const tier = getTicketTier(form.get('tier'))
  const quantity = Number(form.get('quantity'))
  const name = clean(form.get('name'), 100)
  const email = clean(form.get('email'), 254)
  const phone = clean(form.get('phone'), 30)
  const proof = form.get('screenshot')

  if (!tier || !tier.available) return fail('Please choose a ticket.')
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > MAX_TICKETS_PER_ORDER) return fail('Please choose between 1 and ' + MAX_TICKETS_PER_ORDER + ' tickets.')
  if (name.length < 2) return fail('Please enter your full name.')
  if (!isValidEmail(email)) return fail('Please enter a valid email address.')
  if (!phone || !isValidPhone(phone)) return fail('Please enter a valid phone number.')
  if (!(proof instanceof File) || proof.size === 0) return fail('Please attach a screenshot of your Mobile Money payment.')
  if (proof.size > MAX_PROOF_BYTES) return fail('That screenshot is too large. Please upload a smaller image.')

  const buf = Buffer.from(await proof.arrayBuffer())
  const image = sniffImage(buf)
  if (!image) return fail('Please upload your payment screenshot as a JPG or PNG image.')

  // The amount is always worked out here from the configured price — never taken from the browser.
  const amount = tier.price * quantity
  const total = formatCedis(amount)
  const code = makeTicketCode(tier.color.name)
  const ticketLine = `${quantity} × ${tier.label}`
  const when = `${rootedRadiant.date}, ${rootedRadiant.time}`

  const row = (label: string, value: string, strong = true) =>
    `<tr><td style="padding:8px 0;color:#6b7280;width:130px;vertical-align:top;font-size:14px">${label}</td><td style="padding:8px 0;color:#111;font-size:14px;${strong ? 'font-weight:600' : ''}">${value}</td></tr>`

  const orderRows = [
    row('Name', escapeHtml(name)),
    row('Tickets', escapeHtml(ticketLine)),
    row('Amount', escapeHtml(total)),
    row('Ticket code', `<span style="letter-spacing:0.08em">${code}</span>`),
  ].join('')

  const transporter = (() => {
    try { return getTransporter() } catch (err) { console.error('[tickets] Mail not configured:', err); return null }
  })()
  if (!transporter) {
    return fail(`We couldn't submit your booking right now. Please WhatsApp your payment screenshot to ${rootedRadiant.enquiryPhone}.`, 500)
  }

  // 1. The NGO must get the proof — if this fails, the buyer must not see a success screen.
  try {
    await transporter.sendMail({
      from: `"GWF Website" <${GWF_EMAIL}>`,
      to: GWF_EMAIL,
      replyTo: email,
      subject: `New ticket booking: ${ticketLine} — ${name} — ${code}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#4a1a6e;padding:24px 32px">
            <p style="color:#F5C518;margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em">Verify Mobile Money payment</p>
            <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em">${rootedRadiant.title} — new booking</h1>
          </div>
          <div style="padding:28px 32px;border:1px solid #e5e7eb;border-top:none">
            <p style="margin:0 0 16px;font-size:15px;color:#111;line-height:1.6">
              Check that <strong>${escapeHtml(total)}</strong> arrived on <strong>${MOMO.number}</strong> (${MOMO.accountName}), then compare with the screenshot below.
            </p>
            <table style="width:100%;border-collapse:collapse">
              ${orderRows}
              ${row('Ticket colour', `${escapeHtml(tier.color.name)}`)}
              ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#4a1a6e">${escapeHtml(email)}</a>`)}
              ${row('Phone', escapeHtml(phone))}
            </table>
            <p style="margin:22px 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Payment screenshot</p>
            <img src="cid:payment-proof" alt="Payment screenshot" style="max-width:100%;border:1px solid #e5e7eb" />
          </div>
          <div style="padding:16px 32px;background:#f9fafb;color:#9ca3af;font-size:12px">
            The buyer has been emailed this ticket code. Reply to this email to reach ${escapeHtml(name)}.
          </div>
        </div>
      `,
      attachments: [{ filename: `payment-${code}.${image.ext}`, content: buf, contentType: image.mime, cid: 'payment-proof' }],
    })
  } catch (err) {
    console.error('[tickets] Could not email the payment proof:', err)
    return fail(`We couldn't submit your booking right now. Please WhatsApp your payment screenshot to ${rootedRadiant.enquiryPhone}.`, 500)
  }

  // 2. The buyer's confirmation. The NGO already has the proof, so a failure here is reported, not fatal.
  let emailed = true
  try {
    await transporter.sendMail({
      from: `"Gutsy Women Foundation" <${GWF_EMAIL}>`,
      to: email,
      replyTo: GWF_EMAIL,
      subject: `Your ${rootedRadiant.title} ticket code: ${code}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#4a1a6e;padding:28px 32px">
            <p style="color:#F5C518;margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em">Booking received</p>
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;text-transform:uppercase;letter-spacing:0.03em">${rootedRadiant.title}</h1>
            <p style="color:#FBE3ED;margin:8px 0 0;font-size:15px;font-style:italic">${rootedRadiant.theme}</p>
          </div>
          <div style="height:10px;background:${tier.color.hex}"></div>
          <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
            <p style="font-size:16px;color:#111;margin:0 0 20px;line-height:1.6">
              Hi ${escapeHtml(name.split(' ')[0])}, thank you! We've received your Mobile Money payment screenshot. Our team will check it against our account and get in touch if anything needs sorting.
            </p>
            <div style="border:2px solid ${tier.color.hex};padding:18px 20px;margin:0 0 22px;text-align:center">
              <p style="margin:0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em;color:#6b7280">Your ticket code</p>
              <p style="margin:8px 0 0;font-size:30px;font-weight:800;letter-spacing:0.1em;color:#2E1247">${code}</p>
              <p style="margin:10px 0 0;font-size:14px;font-weight:700;color:${tier.color.hex}">${escapeHtml(tier.color.name)} &middot; ${escapeHtml(tier.label)}</p>
            </div>
            <table style="width:100%;border-collapse:collapse">
              ${row('Tickets', escapeHtml(ticketLine))}
              ${row('Amount paid', escapeHtml(total))}
              ${row('Date', escapeHtml(when), false)}
              ${row('Venue', escapeHtml(rootedRadiant.venue), false)}
            </table>
            <p style="font-size:14px;color:#41415A;line-height:1.6;margin:22px 0 0">
              Keep this email and show your ticket code at the entrance${quantity > 1 ? ` &mdash; it admits ${quantity} guests` : ''}. Gather your girls, pick your outfit, and come ready to laugh, connect and glow. December 4th, we are outside!
            </p>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;color:#6b7280;font-size:12px">
            Questions? Call or WhatsApp ${rootedRadiant.enquiryPhone}, or reply to this email.
          </div>
        </div>
      `,
    })
  } catch (err) {
    console.error('[tickets] Could not email the buyer:', err)
    emailed = false
  }

  return NextResponse.json({
    ok: true,
    code,
    tier: tier.label,
    colorName: tier.color.name,
    colorHex: tier.color.hex,
    quantity,
    amount,
    emailed,
  })
}
