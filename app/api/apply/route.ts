import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, age, location, email, phone, education, occupation, why, goals } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    // TODO: persist to database (MongoDB/PostgreSQL)
    console.log('[apply] New application received:', { name, email, location, age })

    return NextResponse.json({ success: true, message: 'Application received' })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
