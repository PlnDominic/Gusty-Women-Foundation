'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

const BANK = {
  name: 'First Atlantic Bank',
  branch: 'North Ridge',
  accountName: 'GUTSY WOMEN FOUNDATION LBG',
  ghs: '2301972751017',
  usd: '2301971112012',
  momo: '0530505645',
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false)
  function copy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button
      onClick={copy}
      title="Copy"
      style={{
        background: copied ? 'var(--gwf-purple-600)' : 'var(--gwf-purple-100)',
        color: copied ? '#fff' : 'var(--gwf-purple-600)',
        border: 'none',
        borderRadius: 0,
        padding: '6px 10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 700,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5,
        flexShrink: 0,
        transition: 'all 0.15s',
      }}
    >
      <Icon name={copied ? 'check' : 'copy'} size={13} />
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}

function AccountRow({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 2px' }}>{label}</p>
        <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--gwf-ink)', margin: 0, letterSpacing: '0.05em' }}>{value}</p>
      </div>
      <CopyButton value={value} />
    </div>
  )
}

export function DonateClient() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>

      {/* GHS Bank Transfer */}
      <div style={{ border: '1.5px solid var(--gwf-purple-200)', padding: 'clamp(20px,3vw,32px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 36, height: 36, background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="landmark" size={18} />
          </span>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: 0 }}>GHS Bank Transfer</p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--gwf-ink)', margin: 0 }}>{BANK.name} · {BANK.branch}</p>
          </div>
        </div>

        <div style={{ marginBottom: 6 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 2px' }}>Account Name</p>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-ink)', margin: '0 0 12px' }}>{BANK.accountName}</p>
        </div>
        <AccountRow label="GHS Account Number" value={BANK.ghs} />
      </div>

      {/* USD Bank Transfer */}
      <div style={{ border: '1.5px solid var(--gwf-purple-200)', padding: 'clamp(20px,3vw,32px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <span style={{ width: 36, height: 36, background: 'var(--gwf-purple-100)', color: 'var(--gwf-purple-600)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="landmark" size={18} />
          </span>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: 0 }}>USD Bank Transfer</p>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 16, color: 'var(--gwf-ink)', margin: 0 }}>{BANK.name} · {BANK.branch}</p>
          </div>
        </div>

        <div style={{ marginBottom: 6 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gwf-ink-muted)', margin: '0 0 2px' }}>Account Name</p>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: 'var(--gwf-ink)', margin: '0 0 12px' }}>{BANK.accountName}</p>
        </div>
        <AccountRow label="USD Account Number" value={BANK.usd} />
      </div>

      {/* MoMo */}
      <div style={{ border: '1.5px solid var(--gwf-gold-300,#e8c84a)', background: 'var(--gwf-gold-100,#fdf9e3)', padding: 'clamp(20px,3vw,32px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
          <span style={{ width: 36, height: 36, background: 'rgba(245,197,24,.18)', color: 'var(--gwf-gold-600,#b58b00)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="smartphone" size={18} />
          </span>
          <p style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-ink-muted)', margin: 0 }}>Mobile Money (MoMo)</p>
        </div>
        <AccountRow label="MoMo Number" value={BANK.momo} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)', margin: '12px 0 0', lineHeight: 1.5 }}>
          Send to <strong>{BANK.momo}</strong> — registered under <strong>{BANK.accountName}</strong>.
          After sending, please email us your payment screenshot at{' '}
          <a href="mailto:gutsywomenfoundation@gmail.com" style={{ color: 'var(--gwf-purple-600)', fontWeight: 600 }}>gutsywomenfoundation@gmail.com</a>.
        </p>
      </div>

    </div>
  )
}
