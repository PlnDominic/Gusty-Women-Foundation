'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import type { BlogPost } from '@/lib/data'

export function BlogCard({ post }: { post: BlogPost }) {
  const [hover, setHover] = React.useState(false)

  return (
    <Link href={`/blog/${post.slug}`} style={{ display: 'block' }}>
      <article
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: '#fff',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
          transform: hover ? 'translateY(-6px)' : 'none',
          transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
          cursor: 'pointer',
        }}
      >
        <div style={{ height: 220, overflow: 'hidden' }}>
          <img
            src={post.image}
            alt={post.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hover ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform var(--dur-slow) var(--ease-out)',
            }}
          />
        </div>
        <div style={{ padding: '22px 24px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Badge tone="info">{post.category}</Badge>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gwf-ink-muted)' }}>
              {new Date(post.date).toLocaleDateString('en-GH', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', fontSize: 20, lineHeight: 1.12, color: 'var(--gwf-ink)', margin: 0 }}>
            {post.title}
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--gwf-ink-soft)', margin: 0 }}>
            {post.excerpt}
          </p>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: hover ? 'var(--gwf-gold-600)' : 'var(--gwf-purple-600)', display: 'flex', alignItems: 'center', gap: 6, transition: 'color var(--dur-fast)' }}>
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
