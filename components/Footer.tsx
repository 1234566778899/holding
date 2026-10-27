import Image from 'next/image'
import Link from 'next/link'
import { T } from '@/components/T'
import type { Content, Locale } from '@/lib/content'

/** Pie como el de grupoargos.com: datos de contacto y redes a la izquierda, mapa del sitio y negocios. */
export function Footer({ lang, c }: { lang: Locale; c: Content }) {
  const heading = 'font-display text-[18.7px] font-bold uppercase text-white'
  return (
    <footer className="bg-navy text-white">
      <div className="gutter grid gap-12 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] md:py-20">
        <div className="space-y-6">
          <Image src="/img/logo-hen-blanco.png" alt="HEN Holding Corp" width={872} height={387} className="h-14 w-auto" />
          <p className="max-w-xs"><T value={c.company.address} /></p>
          <p className="font-bold"><T value={c.company.phone} /></p>
          <div>
            <p className={heading}>{c.home.social}</p>
            <p className="mt-3 text-white/75"><T value={{ pending: 'LinkedIn · Facebook · Instagram' }} /></p>
          </div>
        </div>
        <nav aria-label={c.ui.footerNav}>
          <p className={heading}>{c.home.sitemap}</p>
          <ul className="mt-5 space-y-3">{c.nav.map((n) => <li key={n.href}><a href={`/${lang}${n.href}`} className="hover:underline">{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <p className={heading}>{c.footer.businesses}</p>
          <ul className="mt-5 space-y-3">
            {c.businesses.map((b) => <li key={b.slug}><Link href={`/${lang}/negocios/${b.slug}`} className="hover:underline">{b.tag}</Link></li>)}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="gutter flex flex-wrap justify-between gap-4 py-6 text-[15px] text-white/75">
          <p>© 2026 <T value={c.company.legalName} /> · <T value={c.company.ruc} /></p>
          <p className="flex flex-wrap gap-6">{c.footer.legal.map((x) => <span key={x}>{x}</span>)}</p>
        </div>
      </div>
    </footer>
  )
}
