import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const ref = req.nextUrl.searchParams.get('ref')
  if (!ref) return NextResponse.json({ error: 'Missing reference' }, { status: 400 })

  const secretKey = process.env.PAYSTACK_SECRET_KEY
  if (!secretKey) {
    return NextResponse.json({ error: 'Payment not configured' }, { status: 500 })
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(ref)}`,
      { headers: { Authorization: `Bearer ${secretKey}` } }
    )
    const data = await res.json()

    if (!res.ok || data.data?.status !== 'success') {
      return NextResponse.json({ error: 'Payment not verified', detail: data.message }, { status: 400 })
    }

    return NextResponse.json({
      status: 'success',
      amount: data.data.amount / 100,
      currency: data.data.currency,
      reference: data.data.reference,
      email: data.data.customer?.email,
    })
  } catch {
    return NextResponse.json({ error: 'Verification request failed' }, { status: 500 })
  }
}
