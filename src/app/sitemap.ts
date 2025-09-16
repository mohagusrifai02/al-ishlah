import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://alishlahtegal.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://alishlahtegal.vercel.app/about',
      lastModified: new Date(),
    },
  ]
}