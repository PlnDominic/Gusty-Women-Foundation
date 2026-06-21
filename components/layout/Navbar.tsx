'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

const NAV = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Programs', href: '/programs' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(255,255,255,0.92)' : '#fff',
        backdropFilter: scrolled ? 'saturate(160%) blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'saturate(160%) blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'background var(--dur-base), border-color var(--dur-base)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 clamp(16px,4vw,40px)',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image
            src="/assets/logo-lockup.png"
            alt="Gutsy Women Foundation"
            width={140}
            height={42}
            style={{ height: 42, width: 'auto', objectFit: 'contain' }}
            priority
          />
        </Link>

        <nav
          style={{ marginLeft: 'auto', display: 'flex', gap: 28, alignItems: 'center' }}
          className="desktop-nav"
        >
          {NAV.map((n) => (
            <NavLink key={n.label} href={n.href} label={n.label} active={pathname === n.href} />
          ))}
        </nav>

        <div className="desktop-nav">
          <Link href="/apply">
            <Button variant="primary" size="sm">Apply Now</Button>
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mobile-menu-btn"
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--gwf-purple-700)',
            display: 'none',
            padding: 4,
          }}
          aria-label="Open menu"
        >
          <Icon name="menu" size={26} />
        </button>
      </div>

      {open && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: 'linear-gradient(150deg,var(--gwf-purple-600),var(--gwf-purple-900))',
            display: 'flex',
            flexDirection: 'column',
            padding: 24,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={() => setOpen(false)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}
              aria-label="Close menu"
            >
              <Icon name="x" size={28} />
            </button>
          </div>
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              marginTop: 24,
              alignItems: 'center',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            {NAV.map((n) => (
              <Link
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  fontSize: 30,
                  color: pathname === n.href ? 'var(--gwf-gold-500)' : '#fff',
                  padding: '8px 0',
                }}
              >
                {n.label}
              </Link>
            ))}
            <div style={{ marginTop: 24 }}>
              <Link href="/apply" onClick={() => setOpen(false)}>
                <Button variant="gold" size="lg">Apply Now</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  )
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hover, setHover] = React.useState(false)
  return (
    <Link
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 15,
        cursor: 'pointer',
        color: active ? 'var(--gwf-purple-700)' : hover ? 'var(--gwf-gold-600)' : 'var(--gwf-ink-soft)',
        position: 'relative',
        paddingBottom: 4,
        transition: 'color var(--dur-fast)',
      }}
    >
      {label}
      <span
        style={{
          position: 'absolute',
          left: 0,
          bottom: 0,
          height: 2.5,
          width: active || hover ? '100%' : '0%',
          background: active ? 'var(--gwf-purple-600)' : 'var(--gwf-gold-500)',
          borderRadius: 0,
          transition: 'width var(--dur-base) var(--ease-out)',
        }}
      />
    </Link>
  )
}
