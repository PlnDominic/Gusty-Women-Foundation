import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Newsletter } from '@/components/home/Newsletter'
import { blogPosts } from '@/lib/data'
import { BlogCard } from './BlogCard'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Impact stories, mentor spotlights and insights from the Gutsy Women Foundation.',
}

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(64px,8vw,96px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--gwf-gold-500)' }}>Stories &amp; Insights</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(36px,5vw,64px)', lineHeight: 1, margin: '16px 0 0' }}>Blog</h1>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.6, color: 'rgba(255,255,255,.82)', margin: '20px 0 0' }}>
            Impact stories, mentor spotlights and practical wisdom from our community.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: 'clamp(56px,8vw,104px) clamp(16px,4vw,40px)', background: '#fff' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
          <SectionHeading eyebrow="Latest" title="From the Community" style={{ marginBottom: 44 }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 32 }} className="hero-grid">
            {blogPosts.map((post) => <BlogCard key={post.slug} post={post} />)}
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  )
}
