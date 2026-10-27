import type { MetadataRoute } from 'next'
import { defaultLocale, getContent, siteUrl } from '@/lib/content'

// Cada página en español e inglés, con su versión en el otro idioma (hreflang)
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['', ...getContent(defaultLocale).businesses.map((b) => `/negocios/${b.slug}`)]
  return paths.flatMap((path) => (['es', 'en'] as const).map((lang) => ({
    url: `${siteUrl}/${lang}${path}`,
    changeFrequency: 'monthly' as const,
    priority: path ? 0.8 : 1,
    alternates: { languages: { es: `${siteUrl}/es${path}`, en: `${siteUrl}/en${path}` } },
  })))
}
