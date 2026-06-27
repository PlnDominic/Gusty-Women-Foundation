import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { hasErrors, validateApplication, type ApplicationPayload } from '@/lib/validation'

function toApplicationPayload(body: Partial<ApplicationPayload & { paymentRef?: string }>): ApplicationPayload & { paymentRef: string } {
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
    paymentRef: String(body.paymentRef || ''),
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

    const { name, email, age, location, phone, education, occupation, why, goals, paymentRef } = payload
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
              New Paid Application Received
            </h1>
          </div>
          <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
            ${paymentRef ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:12px 16px;margin-bottom:24px;font-size:14px;color:#166534"><strong>Payment Reference:</strong> ${paymentRef}</div>` : ''}
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

    // Payment confirmation email to participant
    await getTransporter().sendMail({
      from: `"Gutsy Women Foundation" <${GWF_EMAIL}>`,
      to: email,
      subject: `Payment Received — Welcome to the Gutsy Family, ${first}!`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#4a1a6e;padding:28px 32px">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:800;text-transform:uppercase;line-height:1.2">
              Gutsy Women Foundation
            </h1>
            <p style="color:#c9a84c;margin:10px 0 0;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em">
              Mentorship Programme · Cohort 2
            </p>
          </div>
          <div style="padding:36px 32px;border:1px solid #e5e7eb;border-top:none">
            <p style="font-size:16px;color:#111;line-height:1.7;margin:0 0 18px">
              Dear <strong>${first}</strong>,
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 18px">
              Payment for the <strong>Gutsy Women Foundation Mentorship Programme — Cohort 2</strong> has been successfully received.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 18px">
              <strong>Congratulations on securing your spot in this exciting and impactful programme!</strong> You are now part of a vibrant community of ambitious individuals ready to learn, grow, connect, and thrive.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 24px">
              Get ready for an amazing experience filled with mentorship, leadership training, networking opportunities, career guidance, personal development sessions, and access to industry experts who are ready to help shape your journey.
            </p>
            <div style="background:#f3f0f8;border-left:4px solid #4a1a6e;padding:20px 24px;margin:0 0 24px">
              <p style="margin:0;font-size:14px;color:#374151;line-height:1.7">
                We encourage you to come prepared, stay engaged, and make the most of every opportunity throughout the programme. Trust us, Cohort 2 is going to be <strong>inspiring, transformative, and worth every moment!</strong>
              </p>
            </div>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 28px">
              Further details and updates will be communicated soon.
            </p>
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0">
              Welcome to the Gutsy family!<br>
              …..<br><br>
              <strong>Gutsy Women Foundation</strong><br>
              <em style="color:#6b7280">Leveling the Playing Field</em>
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
