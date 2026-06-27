import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { hasErrors, validateApplication, type ApplicationPayload } from '@/lib/validation'

function toApplicationPayload(body: Partial<ApplicationPayload>): ApplicationPayload {
  return {
    name: String(body.name || ''),
    age: String(body.age || ''),
    location: String(body.location || ''),
    email: String(body.email || ''),
    phone: String(body.phone || ''),
    education: String(body.education || ''),
    occupation: String(body.occupation || ''),
    why: String(body.why || ''),
    goals: String(body.goals || ''),
  }
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;color:#6b7280;width:130px;vertical-align:top;font-size:14px">${label}</td>
      <td style="padding:10px 0;color:#111;font-size:14px;font-weight:500">${value || '—'}</td>
    </tr>`
}

export async function POST(req: NextRequest) {
  try {
    const payload = toApplicationPayload(await req.json())
    const errors = validateApplication(payload)

    if (hasErrors(errors)) {
      return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 400 })
    }

    const { name, email, age, location, phone, education, occupation, why, goals } = payload
    const first = name.split(' ')[0]

    // Internal email to GWF team
    await getTransporter().sendMail({
      from: `"GWF Applications" <${GWF_EMAIL}>`,
      to: GWF_EMAIL,
      replyTo: email,
      subject: `New Cohort 2 Application — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto">
          <div style="background:#4a1a6e;padding:24px 32px">
            <p style="color:#c9a84c;margin:0;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em">Cohort 2 · 5–7 Aug 2026</p>
            <h1 style="color:#fff;margin:8px 0 0;font-size:22px;font-weight:800;text-transform:uppercase">
              New Application Received
            </h1>
          </div>
          <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
            <div style="background:#fefce8;border:1px solid #fde047;padding:12px 16px;margin-bottom:24px;font-size:14px;color:#713f12">
              <strong>Awaiting MoMo payment confirmation</strong> — applicant was instructed to send GHS 550 to 0530505645 (Gutsy Women Foundation / Raynelle BOADU).
            </div>
            <h2 style="font-size:16px;color:#4a1a6e;margin:0 0 18px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Personal Details</h2>
            <table style="width:100%;border-collapse:collapse">
              ${row('Full Name', name)}
              ${row('Age', age)}
              ${row('Location', location)}
              ${row('Email', `<a href="mailto:${email}" style="color:#4a1a6e">${email}</a>`)}
              ${row('Phone', phone)}
            </table>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">

            <h2 style="font-size:16px;color:#4a1a6e;margin:0 0 18px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Background</h2>
            <table style="width:100%;border-collapse:collapse">
              ${row('Education', education)}
              ${row('Occupation', occupation)}
            </table>

            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0">

            <h2 style="font-size:16px;color:#4a1a6e;margin:0 0 18px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Motivation</h2>
            <table style="width:100%;border-collapse:collapse">
              ${row('Why join Cohort 2?', `<span style="white-space:pre-wrap;line-height:1.7">${why}</span>`)}
              ${row('Goals', `<span style="white-space:pre-wrap;line-height:1.7">${goals}</span>`)}
            </table>
          </div>
          <div style="padding:16px 32px;background:#f9fafb;color:#9ca3af;font-size:12px">
            Application submitted via gutsywomenfoundation.org · Reply to this email to contact the applicant.
          </div>
        </div>
      `,
    })

    // Confirmation email to applicant
    await getTransporter().sendMail({
      from: `"Gutsy Women Foundation" <${GWF_EMAIL}>`,
      to: email,
      subject: `We've received your application, ${first}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#4a1a6e;padding:24px 32px">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;text-transform:uppercase">
              Application Received
            </h1>
            <p style="color:#c9a84c;margin:8px 0 0;font-size:13px;font-weight:600">GWF Mentorship Programme · Cohort 2</p>
          </div>
          <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
            <p style="font-size:16px;color:#111;line-height:1.7;margin:0">
              Hi <strong>${first}</strong>,
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:16px 0 0">
              Thank you for applying to <strong>Cohort 2 of the GWF Mentorship Programme</strong>.
              We've received your application and are excited to learn more about you.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:16px 0 0">
              Once we confirm your MoMo payment of <strong>GHS 550</strong> to <strong>0530505645</strong> (Gutsy Women Foundation / Raynelle BOADU), we will send you a full welcome email to confirm your spot.
            </p>
            <div style="margin:28px 0;padding:20px 24px;background:#f3f0f8;border-left:4px solid #4a1a6e">
              <p style="margin:0;font-size:14px;color:#4a1a6e;font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Event Details</p>
              <p style="margin:8px 0 0;font-size:14px;color:#374151;line-height:1.6">
                📅 5th – 7th August 2026<br>
                🕗 8:00 AM each day<br>
                📍 Yota East, Legon, Accra
              </p>
            </div>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0">
              We're rooting for you.<br><br>
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
    console.error('[apply] Email error:', err)
    return NextResponse.json({ error: 'Failed to submit your application. Please try again.' }, { status: 500 })
  }
}
