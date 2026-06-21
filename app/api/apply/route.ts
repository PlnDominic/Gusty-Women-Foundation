import { NextRequest, NextResponse } from 'next/server'
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

export async function POST(req: NextRequest) {
  try {
    const payload = toApplicationPayload(await req.json())
    const errors = validateApplication(payload)

    if (hasErrors(errors)) {
      return NextResponse.json({ error: 'Please fix the highlighted fields.', errors }, { status: 400 })
    }

    // TODO: persist to database (MongoDB/PostgreSQL)
    console.log('[apply] New application received:', {
      name: payload.name,
      email: payload.email,
      location: payload.location,
      age: payload.age,
    })

    return NextResponse.json({ success: true, message: 'Application received' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
