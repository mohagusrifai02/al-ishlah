import { getServerSideSitemap } from 'next-sitemap'

export async function GET() {
  const urls = [
    {
      loc: 'https://www.alishlahtegal.net/',
      lastmod: new Date().toISOString(),
    },
    {
      loc: 'https://www.alishlahtegal.net/blog',
      lastmod: new Date().toISOString(),
    },
    // Tambahkan URL lain sesuai kebutuhan
  ]

  return getServerSideSitemap(urls)
}