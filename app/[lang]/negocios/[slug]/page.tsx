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

const container = 'mx-auto w-full max-w-7xl px-6'
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.18em] text-gold'
const h2 = 'font-display text-3xl font-semibold text-navy sm:text-4xl'

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
  return {
    title: `${d.line.tag} · Grupo HEN`,
    description: d.line.description,
    alternates: { languages: { es: `/es/negocios/${slug}`, en: `/en/negocios/${slug}` } },
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
        {/* Portada de la línea: foto de fondo con el nombre encima */}
        <section className="relative isolate overflow-hidden bg-navy-deep text-white">
          <Image src={line.image} alt="" fill priority sizes="100vw" className="-z-10 object-cover opacity-45" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" aria-hidden />
          <div className={`${container} py-16 sm:py-24`}>
            <nav aria-label="Breadcrumb" className="text-sm text-white/70">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href={`/${lang}`} className="hover:text-white">Grupo HEN</Link></li>
                <li aria-hidden>/</li>
                <li><Link href={`/${lang}#negocios`} className="hover:text-white">{ui.breadcrumb}</Link></li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white">{line.tag}</li>
              </ol>
            </nav>
            <p className={`${eyebrow} mt-10`}>{String(index + 1).padStart(2, '0')} / {String(c.businesses.length).padStart(2, '0')} · {line.tag}</p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.12] sm:text-5xl">{line.title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{line.description}</p>
            <a href="#contacto-linea" className="mt-9 inline-block rounded-md bg-gold px-7 py-3.5 font-semibold text-navy-deep transition hover:bg-gold-soft">{ui.cta}</a>
          </div>
        </section>

        {/* La línea: presentación y enfoque */}
        <section className="bg-white">
          <div className={`${container} grid gap-12 py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]`}>
            <div>
              <p className={eyebrow}>{ui.about}</p>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted">{detail.intro.map((p) => <p key={p}>{p}</p>)}</div>
            </div>
            <blockquote className="self-start border-l-4 border-gold bg-mist p-8">
              <p className="font-display text-xl font-semibold leading-snug text-navy">{detail.focus}</p>
            </blockquote>
          </div>
        </section>

        {/* Qué hacemos */}
        <section className="bg-mist">
          <div className={`${container} py-20`}>
            <p className={eyebrow}>{line.tag}</p>
            <h2 className={`${h2} mt-4`}>{ui.services}</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {detail.services.map((s) => (
                <article key={s.title} className="rounded-lg bg-white p-8 ring-1 ring-line">
                  <span className="block h-1 w-10 bg-gold" aria-hidden />
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos: proceso en orden */}
        <section className="bg-white">
          <div className={`${container} py-20`}>
            <p className={eyebrow}>{ui.process}</p>
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {ui.steps.map((s, i) => (
                <li key={s.title} className="border-t-2 border-navy pt-5">
                  <span className="font-display text-sm font-semibold text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Cifras de la línea */}
        <section aria-label={ui.figures} className="bg-navy text-white">
          <div className={`${container} py-14`}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{ui.figures}</p>
            <div className="mt-8 grid grid-cols-2 gap-y-8 md:grid-cols-4">
              {ui.figureLabels.map((label, i) => (
                <div key={label} className={`px-6 first:pl-0 ${i ? 'border-l border-white/20' : ''} ${i === 2 ? 'max-md:border-l-0 max-md:pl-0' : ''}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{label}</p>
                  <p className="mt-2 font-display text-4xl font-semibold tabular-nums"><T value={ui.figureValue} /></p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectores y empresas */}
        <section className="bg-white">
          <div className={`${container} grid gap-12 py-20 lg:grid-cols-2`}>
            <div>
              <p className={eyebrow}>{ui.sectors}</p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {detail.sectors.map((s) => <li key={s} className="rounded-full border border-navy/20 px-4 py-2 text-sm font-medium text-navy">{s}</li>)}
              </ul>
            </div>
            <div>
              <p className={eyebrow}>{ui.companies}</p>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {line.companies.map((x, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 py-4">
                    <span className="font-display font-semibold text-navy"><T value={x} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contacto con el equipo de la línea */}
        <section id="contacto-linea" className="bg-mist">
          <div className={`${container} py-16`}>
            <div className="flex flex-col items-start justify-between gap-8 rounded-lg bg-navy p-10 text-white md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl font-semibold sm:text-3xl">{ui.ctaTitle(line.tag)}</h2>
                <p className="mt-3 text-white/75">{ui.ctaText}</p>
              </div>
              <a href={`/${lang}#contacto`} className="shrink-0 rounded-md bg-gold px-7 py-3.5 font-semibold text-navy-deep transition hover:bg-gold-soft">{ui.cta}</a>
            </div>
          </div>
        </section>

        {/* Otras líneas */}
        <section className="bg-white">
          <div className={`${container} py-20`}>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={h2}>{ui.others}</h2>
              <Link href={`/${lang}#negocios`} className="font-semibold text-navy underline underline-offset-4">{ui.back}</Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((b) => (
                <Link key={b.slug} href={`/${lang}/negocios/${b.slug}`} className="group flex items-center gap-4 rounded-lg p-3 ring-1 ring-line transition hover:shadow-md">
                  <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-md">
                    <Image src={b.image} alt="" fill sizes="96px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{b.tag}</p>
                    <p className="mt-1 font-display font-semibold leading-snug text-navy group-hover:underline">{b.title}</p>
                  </div>
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
