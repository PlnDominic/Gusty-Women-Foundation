'use client'

import React from 'react'
import { Icon } from '@/components/ui/Icon'

const SOCIALS = [
  { icon: 'facebook', href: 'https://facebook.com/GutsyWomenFoundation', label: 'Facebook' },
  { icon: 'twitter', href: 'https://twitter.com/GutsyWomenFoundation', label: 'X / Twitter' },
  { icon: 'instagram', href: 'https://instagram.com/GutsyWomenFoundation', label: 'Instagram' },
  { icon: 'music', href: 'https://tiktok.com/@GutsyWomenFoundation', label: 'TikTok' },
  { icon: 'linkedin', href: 'https://linkedin.com/company/GutsyWomenFoundation', label: 'LinkedIn' },
]

export function ContactSocials() {
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {SOCIALS.map((s) => <SocialBtn key={s.icon} {...s} />)}
    </div>
  )
}

function SocialBtn({ icon, href, label }: { icon: string; href: string; label: string }) {
  const [hover, setHover] = React.useState(false)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: hover ? 'var(--gwf-purple-600)' : 'var(--gwf-purple-100)',
        color: hover ? '#fff' : 'var(--gwf-purple-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--dur-fast)',
      }}
    >
      <Icon name={icon} size={20} />
    </a>
  )
}
