import { Suspense } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { T } from '@/components/T'
import { brand, getContent, hasLocale, siteUrl } from '@/lib/content'

// Medidas tomadas de grupoargos.com: títulos de sección de 45 px, textos de 17 px, botón azul recto
const h2 = 'font-display text-[34px] font-bold leading-none text-navy md:text-[45px]'
const button = 'inline-block bg-navy px-[34px] pb-[19px] pt-[22px] font-display text-[18.7px] text-white transition-colors hover:bg-steel'

function Arrow() {
  return <span aria-hidden className="ml-1 inline-block transition-transform group-hover:translate-x-1">→</span>
}

// La URL se lee dentro de <Suspense> para que la navegación sea instantánea (Next 16 con cacheComponents)
export default function Home({ params }: PageProps<'/[lang]'>) {
  return <Suspense fallback={null}><HomeContent params={params} /></Suspense>
}

async function HomeContent({ params }: { params: PageProps<'/[lang]'>['params'] }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const c = getContent(lang)
  const { company, businesses } = c
  const [lead, ...restNews] = c.news
  // Datos estructurados para buscadores (schema.org)
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Organization', name: brand.name, alternateName: brand.fullName,
    url: siteUrl, logo: `${siteUrl}/img/logo-hen-holding-corp.png`, description: c.meta.description,
  }

  return (
    <>
      <Header lang={lang} nav={c.nav} utility={c.utility} ui={c.ui} />
      <main id="inicio">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        {/* Portada: texto a la izquierda y la imagen pegada al borde derecho, como en Argos */}
        <section className="grid bg-white lg:min-h-[679px] lg:grid-cols-[minmax(0,1fr)_48.6vw]">
          <div className="flex flex-col px-[max(20px,3.05vw)] py-14 lg:pb-16 lg:pl-[max(20px,6.45vw)] lg:pr-16 lg:pt-[85px]">
            <h1 className="font-display text-[38px] font-bold leading-[1.15] text-navy md:text-[56.1px] md:leading-[71.4px]">{c.hero.title}</h1>
            <p className="mt-6 max-w-[679px] text-steel">{c.hero.text}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#negocios" className={button}>{c.hero.primary}</a>
              <a href="#contacto" className="inline-block border border-navy px-[34px] pb-[19px] pt-[22px] font-display text-[18.7px] text-navy transition-colors hover:bg-navy hover:text-white">{c.hero.secondary}</a>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            {/* mosaico de 2 × 2 hasta tener una foto de portada en alta resolución */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[3px] bg-white">
              {[['/img/inmobiliaria.jpg', c.hero.alts[0]], ['/img/comercio.jpg', c.hero.alts[1]], ['/img/tecnologia.jpg', c.hero.alts[2]], ['/img/industria.jpg', '']].map(([src, alt], i) => (
                <div key={src} className="relative overflow-hidden">
                  <Image src={src} alt={alt} fill priority={i < 2} sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 right-0 w-full max-w-[374px] bg-navy px-6 py-6 text-white">
              <p className="font-display text-[22.6px] font-medium leading-none">{c.hero.cardEyebrow}</p>
              <p className="mt-4 text-[15px] leading-snug text-white/85">{c.hero.card}</p>
            </div>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section id="nosotros" className="bg-white">
          <div className="gutter py-20 md:py-28">
            <h2 className={h2}>{c.home.about}</h2>
            <p className="mt-10 max-w-[1100px] text-[18px] leading-[1.35] text-steel md:text-[20.4px]">
              <strong className="font-bold text-navy">{brand.name}</strong> ({brand.fullName}) {c.about.p1}
            </p>
            <p className="mt-4 max-w-[1100px] text-steel">{c.about.legal[0]} <T value={company.legalName} /> {c.about.legal[1]} <T value={company.ruc} />.</p>
            <div className="mt-12 grid max-w-[1100px] gap-8 md:grid-cols-3">
              {c.about.pillars.map(([t, d]) => (
                <div key={t} className="border-t-[3px] border-navy pt-5">
                  <p className="font-display text-[22.6px] font-medium text-navy">{t}</p>
                  <p className="mt-3 text-[15px] leading-[22px] text-navy">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cifras: franja azul de 414 px con divisiones verticales */}
        <section aria-label={c.figuresLabel} className="bg-navy text-white">
          <div className="gutter grid grid-cols-2 gap-y-12 py-20 md:min-h-[414px] md:grid-cols-4 md:content-center md:py-0">
            {c.figures.map((f, i) => (
              <div key={f.label} className={`flex justify-center ${i % 2 ? 'border-l border-white/60' : ''} ${i === 2 ? 'md:border-l md:border-white/60' : ''}`}>
                <div className="px-6">
                  <p className="font-display text-[15px] font-medium uppercase leading-none">{f.label}</p>
                  <p className="mt-2 font-display text-[34px] font-bold leading-[41px] tabular-nums"><T value={f.value} /></p>
                  <p className="text-[15.3px] leading-[18px]">{f.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nuestros negocios: tarjetas con foto vertical de 400 × 451 */}
        <section id="negocios" className="bg-mist">
          <div className="gutter py-20 md:py-[70px]">
            <h2 className={h2}>{c.home.businesses}</h2>
            <p className="mt-6 max-w-[760px] text-steel">{c.businessesSection.text}</p>
            <div className="mt-12 grid gap-x-[25px] gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
              {businesses.map((b) => (
                <Link key={b.slug} id={b.slug} href={`/${lang}/negocios/${b.slug}`} className="group flex flex-col">
                  <div className="relative aspect-[400/451] overflow-hidden">
                    <Image src={b.image} alt="" fill sizes="(min-width: 1024px) 23vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <h3 className="mt-7 font-display text-[22.6px] font-medium leading-[1.15] text-navy">{b.title}</h3>
                  <p className="mt-3 text-[11.9px] font-bold uppercase leading-[17.85px] text-steel">{b.tag}</p>
                  <p className="mt-3 text-[15.1px] leading-[22px] text-navy">{b.description}</p>
                  <ul className="mt-3 space-y-1 text-[15.1px] text-navy">
                    {b.companies.map((x, i) => <li key={i}><T value={x} /></li>)}
                  </ul>
                  <span className="mt-5 font-display text-[17px] font-medium text-steel group-hover:text-navy">{c.home.readMore}<Arrow /></span>
                </Link>
              ))}
              {/* octava casilla: llamado a nuevos socios, del mismo alto que una foto */}
              <div className="flex aspect-[400/451] flex-col justify-end bg-navy p-8 text-white">
                <p className="text-[11.9px] font-bold uppercase text-steel-light">{c.businessesSection.ctaEyebrow}</p>
                <p className="mt-3 font-display text-[27px] font-bold leading-[1.15]">{c.businessesSection.ctaTitle}</p>
                <p className="mt-4 text-[15px] leading-[22px] text-white/80">{c.businessesSection.ctaText}</p>
                <a href="#contacto" className="group mt-6 font-display text-[17px] text-white">{c.businessesSection.ctaLink}<Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        {/* Últimas noticias: una grande y dos pequeñas, como en Argos */}
        <section id="noticias" className="bg-white">
          <div className="gutter py-20 md:py-[70px]">
            <h2 className={h2}>{c.home.news}</h2>
            <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.9fr)_minmax(0,1fr)_minmax(0,1fr)]">
              <article className="bg-white">
                <div className="relative aspect-[825/420]"><Image src={lead.image} alt="" fill sizes="(min-width: 1024px) 46vw, 100vw" className="object-cover" /></div>
                <h3 className="mt-6 font-display text-[22px] font-bold leading-tight text-navy md:text-[27.2px]"><T value={lead.title} /></h3>
                <p className="mt-3 text-[15px] font-bold uppercase text-steel"><T value={lead.date} /></p>
                <p className="mt-3 text-steel">{lead.excerpt}</p>
              </article>
              <article className="flex flex-col bg-navy text-white">
                <div className="flex-1 p-6">
                  <h3 className="font-display text-[22.1px] font-bold leading-[30.6px]"><T value={restNews[0].title} /></h3>
                  <p className="mt-4 text-[15px] font-bold uppercase text-steel-light"><T value={restNews[0].date} /></p>
                </div>
                <div className="relative aspect-[400/320]"><Image src={restNews[0].image} alt="" fill sizes="(min-width: 1024px) 23vw, 100vw" className="object-cover" /></div>
              </article>
              <article>
                <div className="relative aspect-[400/320]"><Image src={restNews[1].image} alt="" fill sizes="(min-width: 1024px) 23vw, 100vw" className="object-cover" /></div>
                <h3 className="mt-6 font-display text-[22.1px] font-bold leading-[30.6px] text-navy"><T value={restNews[1].title} /></h3>
                <p className="mt-3 text-[15px] font-bold uppercase text-steel"><T value={restNews[1].date} /></p>
              </article>
            </div>
          </div>
        </section>

        {/* Explora más: inversionistas, sostenibilidad y sala de prensa */}
        <section id="inversionistas" className="bg-mist">
          <div className="gutter py-20 md:py-[70px]">
            <h2 className={h2}>{c.home.explore}</h2>
            <div id="sostenibilidad" className="mt-14 grid gap-12 md:grid-cols-3">
              {c.explore.map((col) => (
                <div key={col.title} className="border-l-[3px] border-navy pl-6">
                  <h3 className="font-display text-[22.6px] font-bold leading-none text-navy">{col.title}</h3>
                  <ul className="mt-8 space-y-[18px]">
                    {col.items.map((x) => <li key={x} className="text-[18.7px] leading-[28px] text-steel">{x}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
              <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px]">
                <Image src="/img/fundacion.jpg" alt={c.sustainability.alt} fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center bg-white p-8 md:p-12">
                <p className="text-[11.9px] font-bold uppercase text-steel">{c.sustainability.eyebrow}</p>
                <h3 className="mt-3 font-display text-[27.2px] font-bold leading-tight text-navy">{c.sustainability.title}</h3>
                <p className="mt-4 text-steel">{c.sustainability.text[0]} <T value={businesses[6].companies[0]} /> {c.sustainability.text[1]}</p>
                <Link href={`/${lang}/negocios/fundacion`} className="group mt-6 font-display text-[17px] text-navy">{c.home.readMore}<Arrow /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="bg-white">
          <div className="gutter grid gap-14 py-20 md:py-[70px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <div>
              <h2 className={h2}>{c.contact.title}</h2>
              <p className="mt-6 text-steel">{c.contact.text}</p>
              <dl className="mt-10 space-y-6">
                {([['address', company.address], ['email', company.email], ['phone', company.phone]] as const).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[11.9px] font-bold uppercase text-steel">{c.contact.labels[k]}</dt>
                    <dd className="mt-1 text-[18.7px] text-navy"><T value={v} /></dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bg-mist p-6 sm:p-10"><ContactForm t={c.contact.form} /></div>
          </div>
        </section>
      </main>
      <Footer lang={lang} c={c} />
    </>
  )
}
