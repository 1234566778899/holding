import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Libre_Franklin, Open_Sans } from 'next/font/google'
import { getContent, hasLocale, locales } from '@/lib/content'
import '../globals.css'

// Como grupoargos.com: Franklin Gothic en títulos (Libre Franklin es su equivalente libre) y Open Sans en el texto
const heading = Libre_Franklin({ variable: '--font-heading', subsets: ['latin'], weight: ['400', '500', '700'] })
const body = Open_Sans({ variable: '--font-body', subsets: ['latin'], weight: ['400', '700'] })

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
