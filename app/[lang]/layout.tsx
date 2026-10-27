import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import { brand, getContent, hasLocale, locales, siteUrl } from '@/lib/content'
import '../globals.css'

// Como grupoargos.com: Franklin Gothic en títulos (Libre Franklin es su equivalente libre) y Open Sans en el texto
const heading = Libre_Franklin({ variable: '--font-heading', subsets: ['latin'], weight: ['400', '500', '700'] })
const body = Open_Sans({ variable: '--font-body', subsets: ['latin'], weight: ['400', '700'] })

// Google Analytics 4 (propiedad «Grupo HEN - grupohen.com»). Solo en producción, para no contar las visitas de prueba.
const gaId = 'G-1QPC8D10CL'
const analytics = process.env.VERCEL_ENV === 'production'

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = getContent(lang)
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${lang}`, languages: { es: '/es', en: '/en', 'x-default': '/es' } },
    openGraph: {
      type: 'website', siteName: brand.name, url: `/${lang}`, title: meta.title, description: meta.description,
      locale: lang === 'es' ? 'es_PE' : 'en_US', alternateLocale: lang === 'es' ? 'en_US' : 'es_PE',
      images: [{ url: '/img/og-hen.png', width: 1200, height: 630, alt: brand.name }],
    },
    twitter: { card: 'summary_large_image', title: meta.title, description: meta.description, images: ['/img/og-hen.png'] },
    robots: { index: true, follow: true },
  }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${heading.variable} ${body.variable} antialiased`}>
      {/* suppressHydrationWarning: extensiones del navegador (p. ej. ColorZilla) agregan atributos al body */}
      <body className="min-h-full font-sans" suppressHydrationWarning>
        {children}
        {analytics && <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}
          </Script>
        </>}
      </body>
    </html>
  )
}
