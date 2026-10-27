'use client'

import { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { locales, type Content, type Locale } from '@/lib/content'

type Props = { lang: Locale; nav: Content['nav']; utility: Content['utility']; ui: Content['ui'] }

/** ES | EN: abre la misma página en el otro idioma. */
function LanguageSwitch({ lang, label, className = '' }: { lang: Locale; label: string; className?: string }) {
  const rest = usePathname().replace(/^\/[a-z]{2}(?=\/|$)/, '')
  return (
    <span role="group" aria-label={label} className={`flex items-center gap-1 ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span aria-hidden className="text-muted">|</span>}
          {l === lang
            ? <b aria-current="true">{l.toUpperCase()}</b>
            // enlace normal: /es y /en tienen layouts raíz distintos, así que el navegador recarga la página
            : <a href={`/${l}${rest}`} hrefLang={l} lang={l} className="text-muted hover:text-gold">{l.toUpperCase()}</a>}
        </span>
      ))}
    </span>
  )
}

export function Header({ lang, nav, utility, ui }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50">
      {/* barra de utilidades, como en los sitios de holdings */}
      <div className="hidden bg-mist md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-6 px-6 py-2 text-[13px] font-medium text-navy">
          {utility.map((u) => <a key={u.label} href={`/${lang}${u.href}`} className="hover:text-gold">{u.label}</a>)}
          <span className="h-4 w-px bg-navy/30" aria-hidden />
          <LanguageSwitch lang={lang} label={ui.language} />
        </div>
      </div>
      <div className="border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <a href={`/${lang}`} className="flex items-center gap-3" aria-label={ui.home}>
            <Image src="/img/logo-grupo-hen.png" alt="Grupo HEN" width={1189} height={470} priority className="h-11 w-auto" />
          </a>
          <nav aria-label={ui.mainNav} className="hidden lg:block">
            <ul className="flex items-center gap-8 text-[15px] font-medium text-navy">
              {nav.map((n) => <li key={n.href}><a href={`/${lang}${n.href}`} className="border-b-2 border-transparent py-2 transition-colors hover:border-gold">{n.label}</a></li>)}
            </ul>
          </nav>
          <div className="flex items-center gap-4 lg:hidden">
            <LanguageSwitch lang={lang} label={ui.language} className="text-sm text-navy md:hidden" />
            <button type="button" className="rounded-md border border-line px-3 py-2 text-sm font-semibold text-navy"
              aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen(!open)}>
              {open ? ui.close : ui.menu}
            </button>
          </div>
        </div>
        {open && (
          <nav id="menu-movil" aria-label={ui.mainNav} className="border-t border-line lg:hidden">
            <ul className="mx-auto max-w-7xl px-6 py-2">
              {[...nav, utility[0]].map((n) => (
                <li key={n.label}><a href={`/${lang}${n.href}`} onClick={() => setOpen(false)} className="block border-b border-line py-3 font-medium text-navy last:border-0">{n.label}</a></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
