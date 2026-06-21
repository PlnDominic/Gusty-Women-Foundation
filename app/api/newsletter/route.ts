import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // TODO: add to mailing list (Mailchimp / manual list)
    console.log('[newsletter] New subscriber:', email)

    return NextResponse.json({ success: true, message: 'Subscribed' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
