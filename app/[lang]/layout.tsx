import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import { getContent, hasLocale, locales } from '@/lib/content'
import '../globals.css'

// Montserrat acompaña la tipografía geométrica del logotipo; Source Sans 3 para textos largos
const heading = Montserrat({ variable: '--font-heading', subsets: ['latin'], weight: ['500', '600', '700'] })
const body = Source_Sans_3({ variable: '--font-body', subsets: ['latin'] })

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: LayoutProps<'/[lang]'>): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = getContent(lang)
  return { title: meta.title, description: meta.description, alternates: { languages: { es: '/es', en: '/en' } } }
}

export default async function RootLayout({ children, params }: LayoutProps<'/[lang]'>) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  return (
    <html lang={lang} data-scroll-behavior="smooth" className={`${heading.variable} ${body.variable} antialiased`}>
      {/* suppressHydrationWarning: extensiones del navegador (p. ej. ColorZilla) agregan atributos al body */}
      <body className="min-h-full font-sans" suppressHydrationWarning>{children}</body>
    </html>
  )
}
