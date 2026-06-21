import type { MetadataRoute } from 'next'
import { blogPosts, programs } from '@/lib/data'

const SITE_URL = 'https://www.gutsywomenfoundation.org'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = ['', '/about', '/programs', '/mentors', '/alumni', '/impact', '/blog', '/apply', '/contact'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))

  const programRoutes: MetadataRoute.Sitemap = programs.map((program) => ({
    url: `${SITE_URL}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: program.status === 'open' ? 0.9 : 0.7,
  }))

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticRoutes, ...programRoutes, ...blogRoutes]
}
