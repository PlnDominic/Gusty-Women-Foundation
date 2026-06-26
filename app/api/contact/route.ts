import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { hasErrors, validateContact, type ContactPayload } from '@/lib/validation'

function toContactPayload(body: Partial<ContactPayload>): ContactPayload {
  return {
    name: String(body.name || ''),
    email: String(body.email || ''),
    message: String(body.message || ''),
  }
}

export async function POST(req: NextRequest) {
  try {
    const payload = toContactPayload(await req.json())
    const errors = validateContact(payload)

    if (hasErrors(errors)) {
      return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 400 })
    }

    const { name, email, message } = payload

    await getTransporter().sendMail({
      from: `"GWF Website" <${GWF_EMAIL}>`,
      to: GWF_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#4a1a6e;padding:24px 32px">
            <h1 style="color:#fff;margin:0;font-size:20px;font-weight:800;text-transform:uppercase;letter-spacing:0.05em">
              New Contact Message
            </h1>
          </div>
          <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;color:#6b7280;width:110px;vertical-align:top;font-size:14px">Name</td>
                <td style="padding:10px 0;font-weight:600;color:#111;font-size:14px">${name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;font-size:14px">Email</td>
                <td style="padding:10px 0;font-size:14px">
                  <a href="mailto:${email}" style="color:#4a1a6e;font-weight:600">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#6b7280;vertical-align:top;font-size:14px">Message</td>
                <td style="padding:10px 0;color:#111;font-size:14px;line-height:1.7;white-space:pre-wrap">${message}</td>
              </tr>
            </table>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;color:#9ca3af;font-size:12px">
            Sent via the contact form at gutsywomenfoundation.org · Reply directly to this email to respond to ${name}.
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] Email error:', err)
    return NextResponse.json({ error: 'Failed to send your message. Please try again.' }, { status: 500 })
  }
}

