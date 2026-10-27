import Image from 'next/image'
import Link from 'next/link'
import { T } from '@/components/T'
import type { Content, Locale } from '@/lib/content'

export function Footer({ lang, c }: { lang: Locale; c: Content }) {
  const container = 'mx-auto w-full max-w-7xl px-6'
  return (
    <footer className="bg-navy text-white/75">
      <div className={`${container} grid gap-10 py-14 md:grid-cols-[minmax(0,1.2fr)_repeat(2,minmax(0,1fr))]`}>
        <div>
          <Image src="/img/logo-grupo-hen-blanco.png" alt="Grupo HEN" width={1189} height={470} className="h-12 w-auto" />
          <p className="mt-5 max-w-sm text-sm">{c.footer.tagline}</p>
        </div>
        <nav aria-label={c.ui.footerNav}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{c.footer.group}</p>
          <ul className="mt-4 space-y-2 text-sm">{c.nav.map((n) => <li key={n.href}><a href={`/${lang}${n.href}`} className="hover:text-white">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{c.footer.businesses}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {c.businesses.map((b) => <li key={b.slug}><Link href={`/${lang}/negocios/${b.slug}`} className="hover:text-white">{b.tag}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className={`${container} flex flex-wrap justify-between gap-4 py-6 text-xs`}>
          <p>© 2026 <T value={c.company.legalName} /> · <T value={c.company.ruc} /></p>
          <p className="flex flex-wrap gap-5">{c.footer.legal.map((x) => <span key={x}>{x}</span>)}</p>
        </div>
      </div>
    </footer>
  )
}
