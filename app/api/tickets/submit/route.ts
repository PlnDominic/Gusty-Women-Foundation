import { NextRequest, NextResponse } from 'next/server'
import { randomBytes, randomInt } from 'crypto'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { isValidEmail, isValidPhone } from '@/lib/validation'
import { rootedRadiant, getTicketTier, formatCedis, MAX_TICKETS_PER_ORDER, MAX_PROOF_BYTES, MOMO, TEAM_COLORS } from '@/lib/events'

export const runtime = 'nodejs'

// No 0/O/1/I so codes are easy to read out over the phone or at the gate.
const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function makeTicketCode(prefix: string) {
  const bytes = randomBytes(6)
  let suffix = ''
  for (let i = 0; i < bytes.length; i++) suffix += CODE_ALPHABET[bytes[i] % CODE_ALPHABET.length]
  return `${prefix.toUpperCase()}-${suffix}`
}

interface Ticket {
  code: string
  colorName: string
  colorHex: string
}

// Every ticket gets its own randomly allocated team colour; the ticket code starts with it.
function allocateTickets(quantity: number): Ticket[] {
  const tickets: Ticket[] = []
  while (tickets.length < quantity) {
    const color = TEAM_COLORS[randomInt(TEAM_COLORS.length)]
    const code = makeTicketCode(color.name)
    if (tickets.some((t) => t.code === code)) continue
    tickets.push({ code, colorName: color.name, colorHex: color.hex })
  }
  return tickets
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

function confirmationEmail(tickets: Ticket[], tierLabel: string) {
  const many = tickets.length > 1
  const ticketBlocks = tickets
    .map(
      (t, i) => `
      <div style="border:2px solid ${t.colorHex};margin:0 0 14px;text-align:center">
        <div style="background:${t.colorHex};color:#fff;padding:8px 12px;font-size:12px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase">
          ${many ? `Ticket ${i + 1} of ${tickets.length} &middot; ` : ''}Team ${escapeHtml(t.colorName)}
        </div>
        <div style="padding:16px 12px">
          <div style="font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#6b7280">Ticket code</div>
          <div style="margin-top:6px;font-size:28px;font-weight:800;letter-spacing:0.1em;color:#2E1247">${t.code}</div>
          <div style="margin-top:8px;font-size:13px;color:#41415A">${escapeHtml(tierLabel)}</div>
        </div>
      </div>`
    )
    .join('')

  const p = 'margin:0 0 16px;font-size:15px;line-height:1.7;color:#1A1A2E'
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#4a1a6e;padding:28px 32px">
        <p style="color:#F5C518;margin:0 0 6px;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.14em">Gutsy Women Foundation</p>
        <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;text-transform:uppercase;letter-spacing:0.03em">${rootedRadiant.title}</h1>
        <p style="color:#FBE3ED;margin:8px 0 0;font-size:15px;font-style:italic">${rootedRadiant.theme}</p>
      </div>
      <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
        <p style="${p}">Dear Radiant,</p>
        <p style="${p}">Thank you for securing your spot at ${escapeHtml(rootedRadiant.title)}, Gutsy Women Foundation&rsquo;s exciting gathering happening on ${escapeHtml(rootedRadiant.dateShort)} at ${escapeHtml(rootedRadiant.arrivalTime)} at ${escapeHtml(rootedRadiant.venue)}.</p>
        <p style="${p}">Your ticket${many ? 's are' : ' is'} included below. Kindly check ${many ? 'them' : 'it'} and take note of your allocated team colour${many ? 's' : ''}, which ${many ? 'are' : 'is'} important for team-based activities on the day.</p>
        ${ticketBlocks}
        <p style="margin:22px 0 8px;font-size:15px;font-weight:700;color:#1A1A2E">Please keep in mind:</p>
        <ul style="margin:0 0 16px;padding-left:20px;font-size:15px;line-height:1.7;color:#1A1A2E">
          <li>Do not delete this email or misplace your ticket. Your ticket is required for entry and team assignments.</li>
          <li>Your team colour is unique to your ticket. For a smooth and enjoyable experience, avoid switching teams.</li>
        </ul>
        <p style="${p}">Come ready for a day filled with board games, food, drinks, talk, vibes, and awards, and of course, plenty of fun!</p>
        <p style="${p}">If you have any questions, please don&rsquo;t hesitate to contact us at <a href="mailto:${GWF_EMAIL}" style="color:#4a1a6e;font-weight:700">${GWF_EMAIL}</a>.</p>
        <p style="${p}">See you soon &ndash; let&rsquo;s make it unforgettable!</p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#1A1A2E">Warm regards,<br /><strong>The Gutsy Women Foundation Team.</strong></p>
      </div>
      <div style="padding:14px 32px;background:#f9fafb;color:#6b7280;font-size:12px;line-height:1.5">
        Tickets are confirmed once our team has verified your Mobile Money payment.
      </div>
    </div>`

  const text = [
    'Dear Radiant,',
    '',
    `Thank you for securing your spot at ${rootedRadiant.title}, Gutsy Women Foundation's exciting gathering happening on ${rootedRadiant.dateShort} at ${rootedRadiant.arrivalTime} at ${rootedRadiant.venue}.`,
    '',
    `Your ticket${many ? 's are' : ' is'} included below. Kindly check ${many ? 'them' : 'it'} and take note of your allocated team colour${many ? 's' : ''}, which ${many ? 'are' : 'is'} important for team-based activities on the day.`,
    '',
    ...tickets.map((t, i) => `${many ? `Ticket ${i + 1} of ${tickets.length}: ` : 'Ticket: '}${t.code} (Team ${t.colorName}, ${tierLabel})`),
    '',
    'Please keep in mind:',
    '- Do not delete this email or misplace your ticket. Your ticket is required for entry and team assignments.',
    '- Your team colour is unique to your ticket. For a smooth and enjoyable experience, avoid switching teams.',
    '',
    'Come ready for a day filled with board games, food, drinks, talk, vibes, and awards, and of course, plenty of fun!',
    '',
    `If you have any questions, please don't hesitate to contact us at ${GWF_EMAIL}.`,
    '',
    "See you soon - let's make it unforgettable!",
    '',
    'Warm regards,',
    'The Gutsy Women Foundation Team.',
    '',
    'Tickets are confirmed once our team has verified your Mobile Money payment.',
  ].join('\n')

  return { html, text }
}

// Receives a Mobile Money ticket order with a payment screenshot, emails the NGO the proof
// for verification, and emails the buyer their tickets with their team colours.
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
  const tickets = allocateTickets(quantity)
  const ticketLine = `${quantity} × ${tier.label}`

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 0;color:#6b7280;width:130px;vertical-align:top;font-size:14px">${label}</td><td style="padding:8px 0;color:#111;font-size:14px;font-weight:600">${value}</td></tr>`

  const transporter = (() => {
    try { return getTransporter() } catch (err) { console.error('[tickets] Mail not configured:', err); return null }
  })()
  if (!transporter) {
    return fail(`We couldn't submit your booking right now. Please WhatsApp your payment screenshot to ${rootedRadiant.enquiryPhone}.`, 500)
  }

  // 1. The NGO must get the proof — if this fails, the buyer must not see a success screen.
  const ticketList = tickets
    .map((t) => `<div style="margin:0 0 4px"><span style="display:inline-block;width:10px;height:10px;background:${t.colorHex};margin-right:8px"></span>${t.code} &middot; Team ${escapeHtml(t.colorName)}</div>`)
    .join('')
  try {
    await transporter.sendMail({
      from: `"GWF Website" <${GWF_EMAIL}>`,
      to: GWF_EMAIL,
      replyTo: email,
      subject: `New ticket booking: ${ticketLine} — ${name} — ${tickets[0].code}${quantity > 1 ? ` (+${quantity - 1})` : ''}`,
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
              ${row('Name', escapeHtml(name))}
              ${row('Tickets', escapeHtml(ticketLine))}
              ${row('Amount', escapeHtml(total))}
              ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#4a1a6e">${escapeHtml(email)}</a>`)}
              ${row('Phone', escapeHtml(phone))}
              ${row(quantity > 1 ? 'Tickets issued' : 'Ticket issued', ticketList)}
            </table>
            <p style="margin:22px 0 8px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:0.1em;font-weight:700">Payment screenshot</p>
            <img src="cid:payment-proof" alt="Payment screenshot" style="max-width:100%;border:1px solid #e5e7eb" />
          </div>
          <div style="padding:16px 32px;background:#f9fafb;color:#9ca3af;font-size:12px">
            The buyer has been emailed these ticket codes and team colours. Reply to this email to reach ${escapeHtml(name)}.
          </div>
        </div>
      `,
      attachments: [{ filename: `payment-${tickets[0].code}.${image.ext}`, content: buf, contentType: image.mime, cid: 'payment-proof' }],
    })
  } catch (err) {
    console.error('[tickets] Could not email the payment proof:', err)
    return fail(`We couldn't submit your booking right now. Please WhatsApp your payment screenshot to ${rootedRadiant.enquiryPhone}.`, 500)
  }

  // 2. The buyer's confirmation. The NGO already has the proof, so a failure here is reported, not fatal.
  let emailed = true
  try {
    const { html, text } = confirmationEmail(tickets, tier.label)
    await transporter.sendMail({
      from: `"Gutsy Women Foundation" <${GWF_EMAIL}>`,
      to: email,
      replyTo: GWF_EMAIL,
      subject: quantity > 1 ? `Your ${rootedRadiant.title} tickets` : `Your ${rootedRadiant.title} ticket: ${tickets[0].code}`,
      html,
      text,
    })
  } catch (err) {
    console.error('[tickets] Could not email the buyer:', err)
    emailed = false
  }

  return NextResponse.json({ ok: true, tickets, tier: tier.label, quantity, amount, emailed })
}
