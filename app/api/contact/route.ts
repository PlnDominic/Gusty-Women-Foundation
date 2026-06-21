import { NextRequest, NextResponse } from 'next/server'
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

    // TODO: send email via Nodemailer to gutsywomenfoundation@gmail.com
    console.log('[contact] New message from:', payload.name, payload.email)

    return NextResponse.json({ success: true, message: 'Message sent' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
