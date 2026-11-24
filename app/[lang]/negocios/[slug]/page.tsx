import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { SectionRail } from '@/components/SectionRail'
import { Counter, GrowBlock, Reveal, RevealImage, WordsReveal } from '@/components/motion'
import { MoreLink, SectionTitle } from '@/components/ui'
import { getContent, hasLocale, locales } from '@/lib/content'
import { getLineDetail, lineFigures, lineUi, type Slug } from '@/lib/lines'

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
  const images = [d.line.image]
  return {
    title,
    description: d.line.description,
    alternates: { canonical: url, languages: { es: `/es/negocios/${slug}`, en: `/en/negocios/${slug}`, 'x-default': `/es/negocios/${slug}` } },
    openGraph: { title, description: d.line.description, url, images: images.map((src) => ({ url: src, alt: d.line.title })) },
    twitter: { card: 'summary_large_image', title, description: d.line.description, images },
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
  const figures = lineFigures[slug as Slug]
  const gold = '#b8893a'

  return (
    <>
      <Header lang={lang} c={c} />
      <SectionRail scrollLabel={c.home.scroll} />
      <main>
        {/* Portada de la línea: foto a pantalla casi completa, oscurecida, con el nombre encima */}
        <section data-rail={line.tag} data-dark="true" className="relative isolate flex min-h-[86svh] items-end overflow-hidden bg-navy-deep text-white">
          <Image src={line.image} alt="" fill priority sizes="100vw" className="animate-kenburns -z-20 object-cover opacity-60" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" aria-hidden />
          <div className="gutter w-full pb-20 pt-36 md:pb-28">
            <Reveal y={20}>
              <nav aria-label="Breadcrumb" className="text-[13px] text-white/70">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href={`/${lang}`} className="hover:text-white">HEN Holding Corp</Link></li>
                  <li aria-hidden>/</li>
                  <li><Link href={`/${lang}#negocios`} className="hover:text-white">{ui.breadcrumb}</Link></li>
                  <li aria-hidden>/</li>
                  <li aria-current="page" className="font-bold text-white">{line.tag}</li>
                </ol>
              </nav>
              <p className="mt-10 text-[12px] font-bold uppercase tracking-[0.16em] text-gold-light">{String(index + 1).padStart(2, '0')} / {String(c.businesses.length).padStart(2, '0')} · {line.tag}</p>
            </Reveal>
            <WordsReveal text={line.title} delay={0.2} className="mt-4 max-w-[1000px] font-display text-[32px] font-bold leading-[1.2] text-white md:text-[50px]" />
            <Reveal delay={0.8} className="mt-6 max-w-[640px] text-[17px] text-white/80"><p>{line.description}</p></Reveal>
            <Reveal delay={1} className="mt-10"><MoreLink href="#contacto-linea" light>{ui.cta}</MoreLink></Reveal>
          </div>
        </section>

        {/* La línea: foto con bloque dorado y presentación */}
        <section data-rail={ui.about} data-accent={gold} className="relative overflow-hidden bg-white">
          <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-paper chamfer-tl lg:block" aria-hidden />
          <div className="gutter relative grid items-center gap-14 py-24 md:py-32 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
            <div>
              <SectionTitle accent={gold}>{ui.about}</SectionTitle>
              <Reveal delay={0.15} className="mt-8 space-y-5 text-[16px] leading-[1.75]">{detail.intro.map((p) => <p key={p}>{p}</p>)}</Reveal>
              <Reveal delay={0.25}>
                <blockquote className="mt-10 border-l-[3px] border-gold pl-6 font-display text-[20px] font-medium leading-[1.45] text-ink">{detail.focus}</blockquote>
              </Reveal>
            </div>
            <div className="relative">
              <GrowBlock origin="right" className="absolute -bottom-8 -right-[9vw] top-12 w-[45%] bg-gold" delay={0.1} />
              <RevealImage from="right" className="relative aspect-[4/5] w-full" delay={0.25}>
                <Image src={line.image} alt={line.title} fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
              </RevealImage>
            </div>
          </div>
        </section>

        {/* Cifras de la línea */}
        <section aria-label={ui.figures} data-rail={ui.figures} data-dark="true" className="bg-navy text-white">
          <div className="gutter grid grid-cols-2 gap-y-14 py-20 md:grid-cols-4 md:py-24">
            {ui.figureLabels.map((label, i) => (
              <Reveal key={label} delay={i * 0.1} className={`px-4 md:px-8 ${i ? 'md:border-l md:border-white/15' : ''}`}>
                <p className="font-display text-[44px] font-bold leading-none text-gold-light md:text-[52px]"><Counter value={figures[i]} locale={lang} /></p>
                <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em]">{label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Qué hacemos */}
        <section data-rail={ui.services} data-accent="#477995" className="bg-paper">
          <div className="gutter py-24 md:py-32">
            <SectionTitle accent="#477995">{ui.services}</SectionTitle>
            {/* 3 columnas si los servicios llenan las filas; si no, 2. Un servicio con sub-ítems ocupa toda la fila */}
            <div className={`mt-14 grid gap-6 md:grid-cols-2 ${detail.services.length % 3 === 0 ? 'lg:grid-cols-3' : ''}`}>
              {detail.services.map((s, i) => (
                <Reveal key={s.title} as="article" delay={(i % 3) * 0.1}
                  className={`group relative bg-white p-8 transition-shadow duration-500 hover:shadow-[0_20px_50px_-20px_rgba(2,29,73,.25)] md:p-10 ${s.items ? 'md:col-span-full' : ''}`}>
                  <span aria-hidden className="absolute left-0 top-0 h-[3px] w-12 bg-steel transition-all duration-500 group-hover:w-full" />
                  <p className="font-display text-[13px] font-bold tracking-[0.16em] text-steel">{String(i + 1).padStart(2, '0')}</p>
                  <h3 className="mt-3 font-display text-[21px] font-bold leading-[1.3] text-ink">{s.title}</h3>
                  <p className="mt-4 max-w-[1100px] text-[15px] leading-[1.7]">{s.text}</p>
                  {s.items && (
                    <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                      {s.items.map((x) => (
                        <li key={x.title} className="border-l-2 border-steel-light pl-5">
                          <p className="font-display text-[16px] font-bold text-ink">{x.title}</p>
                          <p className="mt-2 text-[14px] leading-[1.6]">{x.text}</p>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos: proceso con una línea que se dibuja */}
        <section data-rail={ui.process} data-accent={gold} className="bg-white">
          <div className="gutter py-24 md:py-32">
            <SectionTitle accent={gold}>{ui.process}</SectionTitle>
            <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
              <GrowBlock className="absolute left-0 right-0 top-[22px] hidden h-px bg-line md:block" />
              {ui.steps.map((s, i) => (
                <Reveal as="li" key={s.title} delay={0.15 + i * 0.15} className="relative">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-white font-display text-[15px] font-bold text-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-6 font-display text-[21px] font-bold text-ink">{s.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7]">{s.text}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Sectores y empresas */}
        <section data-rail={ui.companies} data-accent="#477995" className="bg-white pb-24 md:pb-32">
          <div className="gutter grid gap-16 lg:grid-cols-2">
            <div>
              <SectionTitle accent="#477995">{ui.sectors}</SectionTitle>
              <ul className="mt-10 flex flex-wrap gap-3">
                {detail.sectors.map((s, i) => (
                  <Reveal as="li" key={s} delay={i * 0.04} y={16} className="border border-ink/25 px-4 py-2 text-[14px] text-ink transition-colors hover:border-navy hover:bg-navy hover:text-white">{s}</Reveal>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle accent="#477995">{ui.companies}</SectionTitle>
              <ul className="mt-10 border-t border-line">
                {line.companies.map((x, i) => (
                  <Reveal as="li" key={x.name} delay={i * 0.1} className="border-b border-line">
                    {x.url
                      ? <a href={x.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-5 font-display text-[21px] font-bold text-ink transition-colors hover:text-navy">
                          {x.name}<span aria-hidden className="text-gold transition-transform group-hover:translate-x-1">↗</span>
                        </a>
                      : <p className="py-5 font-display text-[21px] font-bold text-ink">{x.name}</p>}
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contacto con el equipo de la línea */}
        <section id="contacto-linea" data-rail={ui.cta} data-dark="true" className="relative overflow-hidden bg-navy">
          <div aria-hidden className="absolute -left-20 -top-20 h-72 w-72 rotate-45 border border-white/10" />
          <div className="gutter relative flex flex-col items-start justify-between gap-8 py-20 md:flex-row md:items-center">
            <Reveal className="max-w-2xl">
              <h2 className="font-display text-[28px] font-bold leading-tight text-white md:text-[36px]">{ui.ctaTitle(line.tag)}</h2>
              <p className="mt-4 text-white/75">{ui.ctaText}</p>
            </Reveal>
            <Reveal delay={0.2}><MoreLink href={`/${lang}#contacto`} light>{ui.cta}</MoreLink></Reveal>
          </div>
        </section>

        {/* Otras líneas */}
        <section data-rail={ui.others} data-accent={gold} className="bg-white">
          <div className="gutter py-24 md:py-32">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle accent={gold}>{ui.others}</SectionTitle>
              <MoreLink href={`/${lang}#negocios`}>{ui.back}</MoreLink>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {others.map((b, i) => (
                <Reveal key={b.slug} delay={(i % 5) * 0.08}>
                  <Link href={`/${lang}/negocios/${b.slug}`} className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden bg-navy">
                      <Image src={b.image} alt="" fill sizes="(min-width: 1024px) 19vw, (min-width: 640px) 33vw, 50vw" className="object-cover transition duration-[1.2s] ease-out-expo group-hover:scale-110" />
                      <div aria-hidden className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/30" />
                    </div>
                    <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.14em] text-gold">{b.tag}</p>
                    <p className="mt-1 font-display text-[15px] font-bold leading-snug text-ink group-hover:text-navy">{b.title}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} c={c} />
    </>
  )
}
