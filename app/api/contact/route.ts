import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email and message are required' }, { status: 400 })
    }

    // TODO: send email via Nodemailer to gutsywomenfoundation@gmail.com
    console.log('[contact] New message from:', name, email)

    return NextResponse.json({ success: true, message: 'Message sent' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
