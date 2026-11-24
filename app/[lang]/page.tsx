import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionRail } from '@/components/SectionRail'
import { Carousel } from '@/components/Carousel'
import { PresenceMap } from '@/components/PresenceMap'
import { ContactForm } from '@/components/ContactForm'
import { Counter, GrowBlock, Reveal, RevealImage } from '@/components/motion'
import { MoreLink, SectionTitle } from '@/components/ui'
import { brand, getContent, hasLocale, siteUrl } from '@/lib/content'

// Acento de cada sección (como Grupo Romero, que cambia de color en cada bloque)
const accent = { about: '#b8893a', business: '#477995', presence: '#7b8bd0', foundation: '#7fae5a', news: '#b8893a', contact: '#021d49' }

// La URL se lee dentro de <Suspense> para que la navegación sea instantánea (Next 16 con cacheComponents)
export default function Home({ params }: PageProps<'/[lang]'>) {
  return <Suspense fallback={null}><HomeContent params={params} /></Suspense>
}

async function HomeContent({ params }: { params: PageProps<'/[lang]'>['params'] }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const c = getContent(lang)
  const { company, businesses, home } = c
  // Datos estructurados para buscadores (schema.org)
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Organization', name: brand.name, alternateName: brand.fullName,
    url: siteUrl, logo: `${siteUrl}/img/logo-hen-holding-corp.png`, description: c.meta.description,
    email: company.email, telephone: company.phone, address: company.address, sameAs: company.social.map((s) => s.href),
  }

  return (
    <>
      <Header lang={lang} c={c} />
      <SectionRail scrollLabel={home.scroll} />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
        <Hero title={c.hero.title} text={c.hero.text} primary={c.hero.primary} secondary={c.hero.secondary} alt={c.hero.alts[0]} rail={home.rail.inicio} />

        {/* Quiénes somos: panel gris con esquina cortada, bloque dorado desplazado detrás de la foto y texto a la derecha */}
        <section id="nosotros" data-rail={home.rail.nosotros} data-accent={accent.about} className="relative overflow-hidden bg-white">
          <div className="absolute inset-y-0 left-0 hidden w-[36%] bg-paper chamfer-br lg:block" aria-hidden />
          <div className="gutter relative grid items-center gap-14 py-24 md:py-32 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-20">
            <div className="relative">
              <GrowBlock className="absolute -bottom-8 -left-[9vw] top-12 w-[45%] bg-gold" delay={0.1} />
              <RevealImage className="relative aspect-[4/3] w-full" delay={0.25}>
                <Image src="/img/torre-hen.jpg" alt={c.hero.alts[0]} fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-cover" />
              </RevealImage>
              <span aria-hidden className="absolute -top-6 left-0 h-[calc(100%+48px)] w-px bg-gold/60" />
            </div>
            <div>
              <SectionTitle accent={accent.about}>{home.aboutTitle}</SectionTitle>
              <Reveal delay={0.15} className="mt-8 max-w-[520px] space-y-4 text-[16px] leading-[1.7]">
                <p><strong className="font-bold text-ink">{brand.name}</strong> ({brand.fullName}) {c.about.p1}</p>
              </Reveal>
              <Reveal delay={0.25} className="mt-9"><MoreLink href="#negocios">{home.more}</MoreLink></Reveal>
            </div>
          </div>
          <div className="gutter relative grid gap-10 pb-24 md:grid-cols-3 md:pb-32">
            {c.about.pillars.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.12} className="border-t border-line pt-6">
                <p className="font-display text-[13px] font-bold uppercase tracking-[0.16em] text-gold">0{i + 1}</p>
                <p className="mt-3 font-display text-[22px] font-bold text-ink">{t}</p>
                <p className="mt-3 text-[15px] leading-[1.7]">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Cifras: franja azul con contadores animados */}
        <section aria-label={c.figuresLabel} data-rail={home.rail.nosotros} data-dark="true" className="relative overflow-hidden bg-navy text-white">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rotate-45 border border-white/10" />
          <div className="gutter grid grid-cols-2 gap-y-14 py-20 md:grid-cols-4 md:py-24">
            {c.figures.map((f, i) => (
              <Reveal key={f.label} delay={i * 0.1} className={`px-4 md:px-8 ${i ? 'md:border-l md:border-white/15' : ''}`}>
                <p className="font-display text-[44px] font-bold leading-none text-gold-light md:text-[56px]"><Counter value={f.value} suffix={f.suffix} locale={lang} /></p>
                <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.14em]">{f.label}</p>
                <p className="mt-2 text-[14px] text-white/60">{f.note}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Nuestros negocios: texto a la izquierda y carrusel de tarjetas sobre panel gris a la derecha */}
        <section id="negocios" data-rail={home.rail.negocios} data-accent={accent.business} className="relative overflow-hidden bg-white py-24 md:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)]">
            <div className="gutter lg:pr-0">
              <SectionTitle accent={accent.business}>{home.businesses}</SectionTitle>
              <Reveal delay={0.15} className="mt-8 max-w-[360px] text-[16px] leading-[1.7]"><p>{c.businessesSection.text}</p></Reveal>
              <Reveal delay={0.25} className="mt-9"><MoreLink href="#contacto">{c.businessesSection.ctaLink}</MoreLink></Reveal>
            </div>
            <Reveal x={80} y={0} className="relative bg-paper py-14 pl-8 pr-[max(20px,9vw)] chamfer-tl md:pl-14 lg:pr-[9vw]">
              <Carousel prev={home.prev} next={home.next}>
                {businesses.map((b, i) => (
                  <Link key={b.slug} href={`/${lang}/negocios/${b.slug}`}
                    className="group relative aspect-[3/4] w-[78%] shrink-0 snap-start overflow-hidden bg-navy sm:w-[46%] xl:w-[31%]">
                    <Image src={b.image} alt="" fill sizes="(min-width: 1280px) 22vw, (min-width: 640px) 35vw, 75vw" className="object-cover transition duration-[1.2s] ease-out-expo group-hover:scale-110" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent transition-opacity duration-500 group-hover:from-navy group-hover:via-navy/70" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                      <p className="font-display text-[13px] font-bold tracking-[0.16em] text-gold-light">{String(i + 1).padStart(2, '0')}</p>
                      <h3 className="mt-2 font-display text-[22px] font-bold leading-tight text-white">{b.tag}</h3>
                      <p className="grid grid-rows-[0fr] text-[14px] leading-[1.6] text-white/80 transition-all duration-500 group-hover:mt-3 group-hover:grid-rows-[1fr]">
                        <span className="overflow-hidden">{b.description}</span>
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em]">
                        {home.explore}<span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    </div>
                  </Link>
                ))}
                {/* última tarjeta: llamado a nuevos socios */}
                <a href="#contacto" className="group flex aspect-[3/4] w-[78%] shrink-0 snap-start flex-col justify-end bg-navy p-7 text-white sm:w-[46%] xl:w-[31%]">
                  <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-light">{c.businessesSection.ctaEyebrow}</p>
                  <p className="mt-3 font-display text-[26px] font-bold leading-[1.2]">{c.businessesSection.ctaTitle}</p>
                  <p className="mt-4 text-[14px] leading-[1.6] text-white/75">{c.businessesSection.ctaText}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em]">{c.businessesSection.ctaLink}<span aria-hidden className="transition-transform group-hover:translate-x-1">→</span></span>
                </a>
              </Carousel>
            </Reveal>
          </div>
        </section>

        {/* Presencia: mapa con puntos */}
        <section id="presencia" data-rail={home.rail.presencia} data-accent={accent.presence} className="relative overflow-hidden bg-white pb-24 md:pb-32">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="gutter lg:pr-0">
              <SectionTitle accent={accent.presence} eyebrow={c.presence.eyebrow}>{c.presence.title}</SectionTitle>
              <Reveal delay={0.15} className="mt-8 max-w-[440px] text-[16px] leading-[1.7]"><p>{c.presence.text}</p></Reveal>
              <Reveal delay={0.25}>
                <ul className="mt-8 grid max-w-[440px] grid-cols-2 gap-x-6 gap-y-3 text-[15px] text-ink">
                  {Object.entries(c.presence.countries).map(([k, v]) => (
                    <li key={k} className="flex items-center gap-3"><span className={`h-2 w-2 rounded-full ${k === 'pe' ? 'bg-gold' : 'bg-steel'}`} />{v}</li>
                  ))}
                </ul>
                <p className="mt-6 text-[13px] uppercase tracking-[0.12em] text-muted">{c.presence.cities}</p>
              </Reveal>
            </div>
            <Reveal x={80} y={0} className="bg-paper px-6 py-10 chamfer-tl md:px-16">
              <div className="mx-auto max-w-[560px]"><PresenceMap countries={c.presence.countries} hq={c.presence.hq} /></div>
            </Reveal>
          </div>
        </section>

        {/* Fundación: bloque verde con carrusel de programas a la izquierda y texto a la derecha */}
        <section id="fundacion" data-rail={home.rail.fundacion} data-accent={accent.foundation} className="relative overflow-hidden bg-white pb-24 md:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
            <div className="relative py-12 pl-[max(20px,9vw)] pr-[max(20px,4vw)]">
              <GrowBlock className="absolute inset-y-0 left-0 right-0 bg-sage chamfer-tr" />
              <Reveal className="relative">
                <Carousel prev={home.prev} next={home.next} tone="light">
                  {c.foundation.programs.map((p) => (
                    <article key={p.title} className="relative aspect-[4/3.4] w-full shrink-0 snap-start overflow-hidden">
                      <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                        <h3 className="font-display text-[22px] font-bold text-white">{p.title}</h3>
                        <p className="mt-2 max-w-[420px] text-[14px] leading-[1.6] text-white/85">{p.text}</p>
                      </div>
                    </article>
                  ))}
                </Carousel>
              </Reveal>
            </div>
            <div className="gutter lg:pl-0">
              <SectionTitle accent={accent.foundation} eyebrow={c.foundation.eyebrow}>{c.foundation.title}</SectionTitle>
              <Reveal delay={0.15} className="mt-8 max-w-[480px] text-[16px] leading-[1.7]"><p>{c.foundation.text}</p></Reveal>
              <Reveal delay={0.25} className="mt-9"><MoreLink href={`/${lang}/negocios/fundacion`}>{home.more}</MoreLink></Reveal>
            </div>
          </div>
        </section>

        {/* Noticias: texto a la izquierda y carrusel de notas sobre panel gris */}
        <section id="noticias" data-rail={home.rail.noticias} data-accent={accent.news} className="relative overflow-hidden bg-white pb-24 md:pb-32">
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)]">
            <div className="gutter lg:pr-0">
              <SectionTitle accent={accent.news} eyebrow={c.newsSection.eyebrow}>{home.news}</SectionTitle>
              <Reveal delay={0.2} className="mt-9"><MoreLink href="#contacto">{c.contact.title}</MoreLink></Reveal>
            </div>
            <Reveal x={80} y={0} className="bg-paper py-14 pl-8 pr-[max(20px,9vw)] chamfer-tl md:pl-14 lg:pr-[9vw]">
              <Carousel prev={home.prev} next={home.next}>
                {c.news.map((n) => (
                  <article key={n.title} className="group w-[78%] shrink-0 snap-start sm:w-[46%] xl:w-[31%]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={n.image} alt="" fill sizes="(min-width: 1280px) 22vw, (min-width: 640px) 35vw, 75vw" className="object-cover transition duration-[1.2s] ease-out-expo group-hover:scale-110" />
                      <span className="absolute bottom-0 left-4 bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-white">{n.tag}</span>
                    </div>
                    <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-muted">{n.date}</p>
                    <h3 className="mt-2 font-display text-[18px] font-bold leading-[1.35] text-ink transition-colors group-hover:text-navy">{n.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.6]">{n.excerpt}</p>
                  </article>
                ))}
              </Carousel>
            </Reveal>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" data-rail={home.rail.contacto} data-accent={accent.contact} className="relative overflow-hidden bg-white pb-24 md:pb-32">
          <div className="gutter grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]">
            <Reveal x={-60} y={0} className="relative bg-navy p-10 text-white chamfer-tl md:p-14">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-gold-light">{c.contact.eyebrow}</p>
              <h2 className="mt-3 font-display text-[30px] font-bold leading-[1.2] text-white md:text-[38px]">{c.contact.title}</h2>
              <span className="title-bar mt-5 text-gold" />
              <p className="mt-8 text-white/75">{c.contact.text}</p>
              <dl className="mt-10 space-y-6">
                {([['address', company.address], ['email', company.email], ['phone', company.phone]] as const).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.14em] text-gold-light">{c.contact.labels[k]}</dt>
                    <dd className="mt-1 text-[16px] text-white">
                      {k === 'email' ? <a href={`mailto:${v}`} className="hover:underline">{v}</a> : k === 'phone' ? <a href={`tel:${v.replace(/\s/g, '')}`} className="hover:underline">{v}</a> : v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={0.15} className="bg-paper p-8 sm:p-12"><ContactForm t={c.contact.form} /></Reveal>
          </div>
        </section>
      </main>
      <Footer lang={lang} c={c} />
    </>
  )
}

