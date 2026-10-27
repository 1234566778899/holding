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
    <span role="group" aria-label={label} className={`flex items-center gap-1.5 font-bold ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden className="text-navy/40">|</span>}
          {l === lang
            ? <span aria-current="true">{l.toUpperCase()}</span>
            // enlace normal: /es y /en tienen layouts raíz distintos, así que el navegador recarga la página
            : <a href={`/${l}${rest}`} hrefLang={l} lang={l} className="text-steel hover:text-navy">{l.toUpperCase()}</a>}
        </span>
      ))}
    </span>
  )
}

function Chevron() {
  return <svg aria-hidden width="10" height="6" viewBox="0 0 10 6" className="ml-2 inline-block"><path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
}

/** Encabezado como el de grupoargos.com: barra de utilidades (51 px) y barra principal (97 px) con el logo a la izquierda. */
export function Header({ lang, nav, utility, ui }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-haze md:block">
        <div className="gutter flex h-[51px] items-center justify-end gap-9 text-[15px] font-bold text-navy">
          {utility.map((u) => <a key={u.label} href={`/${lang}${u.href}`} className="hover:text-steel">{u.label}</a>)}
          <span className="h-5 w-[3px] bg-navy" aria-hidden />
          <LanguageSwitch lang={lang} label={ui.language} />
        </div>
      </div>
      <div className="bg-mist">
        <div className="gutter flex h-[76px] items-center justify-between gap-6 md:h-[97px]">
          <a href={`/${lang}`} aria-label={ui.home}>
            <Image src="/img/logo-hen.png" alt="HEN Holding Corp" width={872} height={387} priority className="h-11 w-auto md:h-[58px]" />
          </a>
          <nav aria-label={ui.mainNav} className="hidden h-full lg:block">
            <ul className="flex h-full items-stretch text-[17px] text-navy">
              {nav.map((n) => (
                <li key={n.href} className="flex">
                  <a href={`/${lang}${n.href}`} className="flex items-center border-b-[3px] border-transparent px-6 transition-colors hover:border-navy xl:px-8">
                    {n.label}<Chevron />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center gap-5 lg:hidden">
            <LanguageSwitch lang={lang} label={ui.language} className="text-[15px] text-navy md:hidden" />
            <button type="button" className="border border-navy px-4 py-2 text-[15px] font-bold text-navy"
              aria-expanded={open} aria-controls="menu-movil" onClick={() => setOpen(!open)}>
              {open ? ui.close : ui.menu}
            </button>
          </div>
        </div>
        {open && (
          <nav id="menu-movil" aria-label={ui.mainNav} className="border-t border-line lg:hidden">
            <ul className="gutter py-2">
              {[...nav, utility[0]].map((n) => (
                <li key={n.label}><a href={`/${lang}${n.href}`} onClick={() => setOpen(false)} className="block border-b border-line py-4 text-navy last:border-0">{n.label}</a></li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
