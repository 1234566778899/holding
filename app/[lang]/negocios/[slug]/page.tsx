import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { T } from '@/components/T'
import { getContent, hasLocale, locales } from '@/lib/content'
import { getLineDetail, lineUi } from '@/lib/lines'

const h2 = 'font-display text-[34px] font-bold leading-none text-navy md:text-[45px]'

export function generateStaticParams() {
  return locales.flatMap((lang) => getContent(lang).businesses.map((b) => ({ lang, slug: b.slug })))
}

function load(lang: string, slug: string) {
  if (!hasLocale(lang)) return null
  const c = getContent(lang)
  const line = c.businesses.find((b) => b.slug === slug)
  const detail = getLineDetail(lang, slug)
  return line && detail ? { lang, c, line, detail, ui: lineUi[lang] } : null
}

export async function generateMetadata({ params }: PageProps<'/[lang]/negocios/[slug]'>): Promise<Metadata> {
  const { lang, slug } = await params
  const d = load(lang, slug)
  if (!d) return {}
  const title = `${d.line.tag} · HEN Holding Corp`
  const url = `/${lang}/negocios/${slug}`
  return {
    title,
    description: d.line.description,
    alternates: { canonical: url, languages: { es: `/es/negocios/${slug}`, en: `/en/negocios/${slug}`, 'x-default': `/es/negocios/${slug}` } },
    openGraph: { title, description: d.line.description, url, images: [{ url: d.line.image, alt: d.line.title }] },
    twitter: { card: 'summary_large_image', title, description: d.line.description, images: [d.line.image] },
  }
}

// La URL se lee dentro de <Suspense> para que la navegación sea instantánea (Next 16 con cacheComponents)
export default function LinePage({ params }: PageProps<'/[lang]/negocios/[slug]'>) {
  return <Suspense fallback={null}><LinePageContent params={params} /></Suspense>
}

async function LinePageContent({ params }: { params: PageProps<'/[lang]/negocios/[slug]'>['params'] }) {
  const { lang: rawLang, slug } = await params
  const d = load(rawLang, slug)
  if (!d) notFound()
  const { lang, c, line, detail, ui } = d
  const index = c.businesses.findIndex((b) => b.slug === slug)
  const others = c.businesses.filter((b) => b.slug !== slug)

  return (
    <>
      <Header lang={lang} nav={c.nav} utility={c.utility} ui={c.ui} />
      <main>
        {/* Banner de la línea: foto atenuada con el nombre encima */}
        <section className="relative isolate overflow-hidden bg-navy text-white">
          <Image src={line.image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-35" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" aria-hidden />
          <div className="px-[max(20px,3.05vw)] py-16 md:py-24 lg:pl-[max(20px,6.45vw)]">
            <nav aria-label="Breadcrumb" className="text-[15px] text-white/75">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href={`/${lang}`} className="hover:text-white">HEN Holding Corp</Link></li>
                <li aria-hidden>/</li>
                <li><Link href={`/${lang}#negocios`} className="hover:text-white">{ui.breadcrumb}</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="font-bold text-white">{line.tag}</li>
              </ol>
            </nav>
            <p className="mt-12 text-[11.9px] font-bold uppercase tracking-wide text-steel-light">{String(index + 1).padStart(2, '0')} / {String(c.businesses.length).padStart(2, '0')} · {line.tag}</p>
            <h1 className="mt-4 max-w-[1000px] font-display text-[38px] font-bold leading-[1.15] md:text-[56.1px] md:leading-[71.4px]">{line.title}</h1>
            <p className="mt-6 max-w-[679px] text-white/85">{line.description}</p>
            <a href="#contacto-linea" className="mt-10 inline-block bg-white px-[34px] pb-[19px] pt-[22px] font-display text-[18.7px] text-navy transition-colors hover:bg-haze">{ui.cta}</a>
          </div>
        </section>

        {/* La línea: presentación y enfoque */}
        <section className="bg-white">
          <div className="gutter grid gap-12 py-20 md:py-[70px] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <div>
              <h2 className={h2}>{ui.about}</h2>
              <div className="mt-10 max-w-[1100px] space-y-5 text-[18px] leading-[1.35] text-steel md:text-[20.4px]">{detail.intro.map((p) => <p key={p}>{p}</p>)}</div>
            </div>
            <blockquote className="self-end border-l-[3px] border-navy bg-mist p-8">
              <p className="font-display text-[22.6px] font-medium leading-[1.3] text-navy">{detail.focus}</p>
            </blockquote>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="bg-mist">
          <div className="gutter py-20 md:py-[70px]">
            <h2 className={h2}>{ui.services}</h2>
            <div className="mt-12 grid gap-[25px] sm:grid-cols-2 lg:grid-cols-4">
              {detail.services.map((s) => (
                <article key={s.title} className="border-t-[3px] border-navy bg-white p-8">
                  <h3 className="font-display text-[22.6px] font-medium leading-[1.15] text-navy">{s.title}</h3>
                  <p className="mt-4 text-[15.1px] leading-[22px] text-navy">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos: proceso en orden */}
        <section className="bg-white">
          <div className="gutter py-20 md:py-[70px]">
            <h2 className={h2}>{ui.process}</h2>
            <ol className="mt-12 grid gap-10 md:grid-cols-4">
              {ui.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="font-display text-[34px] font-bold leading-none text-steel-light">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-4 font-display text-[22.6px] font-medium text-navy">{s.title}</h3>
                  <p className="mt-3 text-[15.1px] leading-[22px] text-steel">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cifras de la línea: franja azul como en la portada */}
        <section aria-label={ui.figures} className="bg-navy text-white">
          <div className="gutter grid grid-cols-2 gap-y-12 py-20 md:min-h-[300px] md:grid-cols-4 md:content-center md:py-0">
            {ui.figureLabels.map((label, i) => (
              <div key={label} className={`flex justify-center ${i % 2 ? 'border-l border-white/60' : ''} ${i === 2 ? 'md:border-l md:border-white/60' : ''}`}>
                <div className="px-6">
                  <p className="font-display text-[15px] font-medium uppercase leading-none">{label}</p>
                  <p className="mt-2 font-display text-[34px] font-bold leading-[41px] tabular-nums"><T value={ui.figureValue} /></p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sectores y empresas */}
        <section className="bg-white">
          <div className="gutter grid gap-14 py-20 md:py-[70px] lg:grid-cols-2">
            <div>
              <h2 className={h2}>{ui.sectors}</h2>
              <ul className="mt-10 flex flex-wrap gap-3">
                {detail.sectors.map((s) => <li key={s} className="border border-navy px-5 py-2.5 text-[15px] font-bold text-navy">{s}</li>)}
              </ul>
            </div>
            <div>
              <h2 className={h2}>{ui.companies}</h2>
              <ul className="mt-10 border-t border-line">
                {line.companies.map((x, i) => (
                  <li key={i} className="border-b border-line py-5 font-display text-[22.6px] font-medium text-navy"><T value={x} /></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contacto con el equipo de la línea */}
        <section id="contacto-linea" className="bg-mist">
          <div className="gutter py-16">
            <div className="flex flex-col items-start justify-between gap-8 bg-navy p-10 text-white md:flex-row md:items-center md:p-14">
              <div className="max-w-2xl">
                <h2 className="font-display text-[27.2px] font-bold leading-tight md:text-[34px]">{ui.ctaTitle(line.tag)}</h2>
                <p className="mt-4 text-white/80">{ui.ctaText}</p>
              </div>
              <a href={`/${lang}#contacto`} className="shrink-0 bg-white px-[34px] pb-[19px] pt-[22px] font-display text-[18.7px] text-navy transition-colors hover:bg-haze">{ui.cta}</a>
            </div>
          </div>
        </section>

        {/* Otras líneas: mismas tarjetas que la portada, más pequeñas */}
        <section className="bg-white">
          <div className="gutter py-20 md:py-[70px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={h2}>{ui.others}</h2>
              <Link href={`/${lang}#negocios`} className="font-display text-[17px] font-medium text-steel hover:text-navy">{ui.back} →</Link>
            </div>
            <div className="mt-12 grid gap-x-[25px] gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
              {others.map((b) => (
                <Link key={b.slug} href={`/${lang}/negocios/${b.slug}`} className="group">
                  <div className="relative aspect-[400/451] overflow-hidden">
                    <Image src={b.image} alt="" fill sizes="(min-width: 1024px) 16vw, 33vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <p className="mt-4 text-[11.9px] font-bold uppercase text-steel">{b.tag}</p>
                  <p className="mt-1 font-display text-[17px] font-medium leading-snug text-navy group-hover:underline">{b.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} c={c} />
    </>
  )
}
