// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.alishlahtegal.net/',
      lastModified: new Date(),
    },
    {
      url: 'https://www.alishlahtegal.net/blog',
      lastModified: new Date(),
    },
  ]
}