import { NextResponse, type NextRequest } from 'next/server'
import { defaultLocale, getContent, hasLocale, locales, type Locale } from '@/lib/content'

const slugs = new Set(getContent(defaultLocale).businesses.map((b) => b.slug))

/** Idioma preferido según el navegador (Accept-Language); español si no pide inglés antes. */
function preferred(request: NextRequest): Locale {
  const header = request.headers.get('accept-language') ?? ''
  const ranked = header.split(',')
    .map((part) => { const [tag, q] = part.trim().split(';q='); return { lang: tag.slice(0, 2).toLowerCase(), q: q ? Number(q) : 1 } })
    .sort((a, b) => b.q - a.q)
  return ranked.map((r) => r.lang).find(hasLocale) ?? defaultLocale
}

/** Las rutas sin idioma (p. ej. «/») se envían a /es o /en. */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    // línea de negocio inexistente: 404 real (la página se renderiza en streaming y ya no podría cambiar el código)
    const line = pathname.match(/^\/[a-z]{2}\/negocios\/([^/]+)\/?$/)
    if (line && !slugs.has(line[1])) return NextResponse.rewrite(request.nextUrl, { status: 404 })
    return
  }
  request.nextUrl.pathname = `/${preferred(request)}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  // no tocar archivos internos ni estáticos (imágenes, ícono)
  matcher: ['/((?!_next|img/|icon|.*\\..*).*)'],
}
