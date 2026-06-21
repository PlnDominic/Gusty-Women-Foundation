import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Newsletter } from '@/components/home/Newsletter'
import { blogPosts, getBlogPost } from '@/lib/data'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.gutsywomenfoundation.org${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'NGO',
      name: 'Gutsy Women Foundation',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.gutsywomenfoundation.org/assets/logo-lockup.png',
      },
    },
    mainEntityOfPage: `https://www.gutsywomenfoundation.org/blog/${post.slug}`,
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* Hero */}
      <section style={{ background: 'linear-gradient(145deg,var(--gwf-purple-700),var(--gwf-purple-900))', padding: 'clamp(56px,7vw,88px) clamp(16px,4vw,40px)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 20 }}>
            <Link href="/blog" style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.7)', textDecoration: 'none' }}>
              <Icon name="chevron-left" size={16} />
              Blog
            </Link>
            <span style={{ color: 'rgba(255,255,255,.3)' }}>·</span>
            <Badge tone="info">{post.category}</Badge>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, textTransform: 'uppercase', color: '#fff', fontSize: 'clamp(28px,4vw,48px)', lineHeight: 1.04, margin: 0 }}>{post.title}</h1>
          <div style={{ display: 'flex', gap: 16, marginTop: 20, fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,.65)' }}>
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-GH', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <div style={{ maxWidth: 760, margin: '-32px auto 0', padding: '0 clamp(16px,4vw,40px)', position: 'relative', zIndex: 2 }}>
        <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 360, objectFit: 'cover' }} />
        </div>
      </div>

      {/* Content */}
      <article style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(36px,5vw,56px) clamp(16px,4vw,40px)' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, lineHeight: 1.7, color: 'var(--gwf-ink-soft)', margin: '0 0 24px', fontWeight: 500 }}>{post.excerpt}</p>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: 16.5, lineHeight: 1.75, color: 'var(--gwf-ink-soft)', borderTop: '1px solid var(--border-subtle)', paddingTop: 28 }}>
          {post.content.split('\n\n').map((para, i) => (
            <p key={i} style={{ margin: '0 0 20px' }}>{para}</p>
          ))}
        </div>
        <div style={{ marginTop: 40, paddingTop: 32, borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <Link href="/blog">
            <Button variant="ghost" iconLeft={<Icon name="chevron-left" size={16} />}>Back to Blog</Button>
          </Link>
          <Link href="/apply">
            <Button variant="primary" iconRight={<Icon name="arrow-right" size={16} />}>Apply for Cohort 2</Button>
          </Link>
        </div>
      </article>

      <Newsletter />
    </main>
  )
}
