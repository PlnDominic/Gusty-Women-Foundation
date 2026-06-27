import { NextRequest, NextResponse } from 'next/server'
import { getTransporter, GWF_EMAIL } from '@/lib/mailer'
import { hasErrors, validateApplication, type ApplicationPayload } from '@/lib/validation'

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:10px 0;color:#6b7280;width:130px;vertical-align:top;font-size:14px">${label}</td>
      <td style="padding:10px 0;color:#111;font-size:14px;font-weight:500">${value || '—'}</td>
    </tr>`
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const payload: ApplicationPayload = {
      name: String(formData.get('name') || ''),
      age: String(formData.get('age') || ''),
      location: String(formData.get('location') || ''),
      email: String(formData.get('email') || ''),
      phone: String(formData.get('phone') || ''),
      education: String(formData.get('education') || ''),
      occupation: String(formData.get('occupation') || ''),
      why: String(formData.get('why') || ''),
      goals: String(formData.get('goals') || ''),
    }

    const errors = validateApplication(payload)
    if (hasErrors(errors)) {
      return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 400 })
    }

    const screenshotFile = formData.get('screenshot')
    let screenshotAttachment: { filename: string; content: Buffer; contentType: string } | null = null

    if (screenshotFile && screenshotFile instanceof Blob) {
      const arrayBuffer = await screenshotFile.arrayBuffer()
      screenshotAttachment = {
        filename: (screenshotFile as File).name || 'momo-payment.png',
        content: Buffer.from(arrayBuffer),
        contentType: screenshotFile.type || 'image/png',
      }
    }

    const { name, email, age, location, phone, education, occupation, why, goals } = payload
    const first = name.split(' ')[0]

    // Internal email to GWF team — includes screenshot attachment
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
            ${screenshotAttachment
              ? `<div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:12px 16px;margin-bottom:24px;font-size:14px;color:#166534">
                   ✓ MoMo payment screenshot attached — <strong>${screenshotAttachment.filename}</strong>
                 </div>`
              : `<div style="background:#fefce8;border:1px solid #fde047;padding:12px 16px;margin-bottom:24px;font-size:14px;color:#713f12">
                   ⚠ No screenshot attached. Verify MoMo payment manually to 0530505645.
                 </div>`
            }
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
      attachments: screenshotAttachment
        ? [{ filename: screenshotAttachment.filename, content: screenshotAttachment.content, contentType: screenshotAttachment.contentType }]
        : [],
    })

    // Welcome email to participant
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
            <p style="font-size:15px;color:#374151;line-height:1.7;margin:0 0 18px">
              Dear Participant,
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
              <p style="margin:0;font-size:15px;color:#374151;line-height:1.7">
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
    console.error('[apply] Error:', err)
    return NextResponse.json({ error: 'Failed to submit your application. Please try again.' }, { status: 500 })
  }
}
