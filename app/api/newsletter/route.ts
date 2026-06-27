import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { isValidEmail } from '@/lib/validation'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const email = String(body.email || '').trim()

    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
    }

    // Notify GWF team
    await getTransporter().sendMail({
      from: `"GWF Website" <${GWF_EMAIL}>`,
      to: GWF_EMAIL,
      subject: `New Newsletter Subscriber — ${email}`,
      html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto">
          <div style="background:#4a1a6e;padding:20px 28px">
            <h1 style="color:#fff;margin:0;font-size:18px;font-weight:800;text-transform:uppercase">New Subscriber</h1>
          </div>
          <div style="padding:24px 28px;border:1px solid #e5e7eb;border-top:none">
            <p style="font-size:15px;color:#374151;margin:0">
              <strong>${email}</strong> just subscribed to the Gutsy Women Foundation newsletter.
            </p>
          </div>
        </div>
      `,
    })

    // Thank-you email to subscriber
    await getTransporter().sendMail({
      from: `"Gutsy Women Foundation" <${GWF_EMAIL}>`,
      to: email,
      subject: "You're in! Welcome to the GWF Community",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#4a1a6e;padding:28px 32px">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;text-transform:uppercase;line-height:1.2">
              Gutsy Women Foundation
            </h1>
            <p style="color:#c9a84c;margin:10px 0 0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">
              Leveling the Playing Field
            </p>
          </div>
          <div style="padding:36px 32px;border:1px solid #e5e7eb;border-top:none">
            <p style="font-size:16px;color:#111;line-height:1.7;margin:0 0 16px">
              Thank you for subscribing!
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 16px">
              You will now be the first to hear about cohort openings, events, mentor spotlights, and impact stories from the Gutsy Women Foundation community.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 28px">
              In the meantime, learn more about our work and upcoming programmes at <a href="https://gutsywomenfoundation.org" style="color:#4a1a6e;font-weight:600">gutsywomenfoundation.org</a>.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0">
              Stay gutsy,<br><br>
              <strong>The Gutsy Women Foundation Team</strong>
            </p>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;color:#9ca3af;font-size:12px">
            © 2026 Gutsy Women Foundation · Leveling the Playing Field<br>
            Yota East, Legon · Accra, Ghana · <a href="mailto:gutsywomenfoundation@gmail.com" style="color:#9ca3af">gutsywomenfoundation@gmail.com</a>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[newsletter] Email error:', err)
    return NextResponse.json({ error: 'Could not process your subscription. Please try again.' }, { status: 500 })
  }
}
