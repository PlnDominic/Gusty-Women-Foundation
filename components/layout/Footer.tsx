'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/ui/Icon'

const COLS = [
  { h: 'Explore', items: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Programs', href: '/programs' }, { label: 'Impact', href: '/impact' }, { label: 'Blog', href: '/blog' }, { label: 'Contact', href: '/contact' }] },
  { h: 'Programs', items: [{ label: 'Masterclass', href: '/programs/masterclass' }, { label: 'Anti-Drug Campaign', href: '/programs/anti-drug-mentorship' }, { label: 'IWD Mentorship', href: '/programs/iwd-mentorship-adenta' }, { label: 'Apply', href: '/apply' }] },
  { h: 'Community', items: [{ label: 'Mentors', href: '/mentors' }, { label: 'Alumni', href: '/alumni' }, { label: 'Impact Report', href: '/impact' }] },
  { h: 'Support Us', items: [{ label: 'Donate', href: '/donate' }, { label: 'Sponsor a Scholar', href: '/sponsor-a-scholar' }, { label: 'Partner With Us', href: '/partners' }] },
]

const SOCIALS = [
  { name: 'facebook', href: 'https://www.facebook.com/share/14bzn1Wny9S/?mibextid=wwXIfr' },
  { name: 'twitter', href: 'https://x.com/gwf_gutsy' },
  { name: 'instagram', href: 'https://www.instagram.com/gutsy_women_foundation?igsh=MW1mN2Z0cmZnMDVoZg==' },
  { name: 'music', href: 'https://www.tiktok.com/@gutsy.women.foundation' },
  { name: 'linkedin', href: 'https://www.linkedin.com/in/gutsy-women-foundation-884123347' },
]

export function Footer() {
  return (
    <footer style={{ background: 'var(--gwf-purple-900)', color: '#fff' }}>
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: 'clamp(48px,6vw,72px) clamp(16px,4vw,40px) 32px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr 1.2fr',
          gap: 'clamp(28px,4vw,48px)',
        }}
        className="footer-grid"
      >
        <div className="footer-logo">
          <div style={{ display: 'inline-block', background: '#fff', borderRadius: 6, padding: '8px 12px' }}>
            <Image
              src="/assets/gwf-logo-official.jpg"
              alt="Gutsy Women Foundation"
              width={160}
              height={48}
              style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
            />
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'rgba(255,255,255,.65)', margin: '18px 0 0', maxWidth: 280 }}>
            Leveling the playing field for young women in Ghana through mentorship, training and community.
          </p>
          <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
            {SOCIALS.map((s) => <SocialBtn key={s.name} name={s.name} href={s.href} />)}
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.h}>
            <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 16px' }}>
              {c.h}
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 11 }}>
              {c.items.map((it) => <li key={it.label}><FooterLink label={it.label} href={it.href} /></li>)}
            </ul>
          </div>
        ))}

        <div>
          <h4 style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gwf-gold-500)', margin: '0 0 16px' }}>
            Get in touch
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="mailto:gutsywomenfoundation@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14 }}>
              <Icon name="mail" size={17} color="var(--gwf-gold-500)" />
              gutsywomenfoundation@gmail.com
            </a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.8)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
              <Icon name="map-pin" size={17} color="var(--gwf-gold-500)" />
              Yota East, Legon · Accra
            </span>
            <a href="https://www.gutsywomenfoundation.org" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 9, color: 'rgba(255,255,255,.8)', textDecoration: 'none', fontFamily: 'var(--font-body)', fontSize: 14 }}>
              <Icon name="arrow-up-right" size={17} color="var(--gwf-gold-500)" />
              www.gutsywomenfoundation.org
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.12)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '20px clamp(16px,4vw,40px)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
            © 2026 Gutsy Women Foundation. All rights reserved.
          </span>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,.5)' }}>
            Leveling the Playing Field
          </span>
        </div>
      </div>
    </footer>
  )
}

function SocialBtn({ name, href }: { name: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: 38,
        height: 38,
        borderRadius: 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,.1)',
        color: '#fff',
        transition: 'all var(--dur-fast)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = 'var(--gwf-gold-500)'
        el.style.color = 'var(--gwf-ink)'
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = 'rgba(255,255,255,.1)'
        el.style.color = '#fff'
      }}
    >
      <Icon name={name} size={18} />
    </a>
  )
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, color: 'rgba(255,255,255,.72)', transition: 'color var(--dur-fast)' }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--gwf-gold-500)' }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,.72)' }}
    >
      {label}
    </Link>
  )
}
