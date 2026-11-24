'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Reveal, getLenis } from '@/components/motion'
import type { Content, Locale } from '@/lib/content'

/** Pie como el de Grupo Romero: fondo gris claro, logo centrado sobre una línea, columnas de enlaces y «subir». */
export function Footer({ lang, c }: { lang: Locale; c: Content }) {
  const heading = 'text-[13px] font-bold uppercase tracking-[0.14em] text-gold'
  const link = 'text-[14px] text-ink/75 transition-colors hover:text-navy'
  const up = () => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0)
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <footer className="bg-paper">
      <div className="gutter pb-10 pt-16">
        <div className="flex items-center gap-6">
          <span className="h-px flex-1 bg-line" />
          <Image src="/img/logo-hen-holding-corp.png" alt="HEN Holding Corp" width={872} height={387} className="h-14 w-auto" />
          <span className="h-px flex-1 bg-line" />
        </div>
        <Reveal className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label={c.ui.footerNav}>
            <p className={heading}>{c.home.sitemap}</p>
            <ul className="mt-5 space-y-2.5">{c.nav.map((n) => <li key={n.href}><a href={`/${lang}${n.href}`} className={link}>{n.label}</a></li>)}</ul>
          </nav>
          <div>
            <p className={heading}>{c.footer.businesses}</p>
            <ul className="mt-5 space-y-2.5">
              {c.businesses.map((b) => <li key={b.slug}><Link href={`/${lang}/negocios/${b.slug}`} className={link}>{b.tag}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className={heading}>{c.contact.eyebrow}</p>
            <ul className="mt-5 space-y-2.5 text-[14px] text-ink/75">
              <li>{c.company.address}</li>
              <li><a href={`tel:${c.company.phone.replace(/\s/g, '')}`} className={link}>{c.company.phone}</a></li>
              <li><a href={`mailto:${c.company.email}`} className={link}>{c.company.email}</a></li>
            </ul>
          </div>
          <div>
            <p className={heading}>{c.home.social}</p>
            <ul className="mt-5 space-y-2.5">
              {c.company.social.map((s) => <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" className={link}>{s.label}</a></li>)}
            </ul>
            <p className={`${heading} mt-8`}>{c.home.legalTitle}</p>
            <ul className="mt-5 space-y-2.5">{c.footer.legal.map((x) => <li key={x} className="text-[14px] text-ink/75">{x}</li>)}</ul>
          </div>
        </Reveal>
        <button type="button" onClick={up} className="group mx-auto mt-16 flex flex-col items-center gap-2 text-[13px] text-gold">
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="transition-transform group-hover:-translate-y-1"><path d="M2 14 14 2l12 12" stroke="currentColor" strokeWidth="1.5" /></svg>
          {c.home.up}
        </button>
      </div>
      <div className="border-t border-line">
        <p className="gutter py-5 text-center text-[12px] uppercase tracking-[0.1em] text-ink/60">© 2026 HEN Holding Corp · {c.footer.tagline}</p>
      </div>
    </footer>
  )
}
