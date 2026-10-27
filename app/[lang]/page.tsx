import { Suspense } from 'react'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { T } from '@/components/T'
import { brand, getContent, hasLocale } from '@/lib/content'

const container = 'mx-auto w-full max-w-7xl px-6'
const eyebrow = 'text-xs font-semibold uppercase tracking-[0.18em] text-gold'
const h2 = 'font-display text-3xl font-semibold text-navy sm:text-4xl'

function Arrow() {
  return <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">→</span>
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

  return (
    <>
      <Header lang={lang} nav={c.nav} utility={c.utility} ui={c.ui} />
      <main id="inicio">
        {/* Portada: texto a la izquierda y mosaico de los negocios a la derecha */}
        <section className="overflow-hidden bg-white">
          <div className={`${container} grid items-center gap-12 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:py-24`}>
            <div>
              <p className={eyebrow}>{brand.fullName}</p>
              <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-navy sm:text-5xl lg:text-[3.6rem]">{c.hero.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{c.hero.text}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#negocios" className="group rounded-md bg-navy px-7 py-3.5 font-semibold text-white transition hover:bg-navy-deep">{c.hero.primary} <Arrow /></a>
                <a href="#contacto" className="rounded-md border border-navy/25 px-7 py-3.5 font-semibold text-navy transition hover:border-navy">{c.hero.secondary}</a>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-3 grid-rows-2 gap-3">
                <div className="relative col-span-2 row-span-2 min-h-[22rem] overflow-hidden rounded-lg">
                  <Image src="/img/inmobiliaria.jpg" alt={c.hero.alts[0]} fill priority sizes="(min-width: 1024px) 36vw, 66vw" className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <Image src="/img/comercio.jpg" alt={c.hero.alts[1]} fill sizes="(min-width: 1024px) 18vw, 33vw" className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-lg">
                  <Image src="/img/tecnologia.jpg" alt={c.hero.alts[2]} fill sizes="(min-width: 1024px) 18vw, 33vw" className="object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-lg bg-navy p-5 text-white shadow-xl sm:left-auto sm:right-8 sm:w-72">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">{c.hero.cardEyebrow}</p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug">{c.hero.card}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quiénes somos */}
        <section id="nosotros" className="bg-white">
          <div className={`${container} grid gap-10 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)]`}>
            <div>
              <p className={eyebrow}>{c.about.eyebrow}</p>
              <h2 className={`${h2} mt-4`}>{c.about.title}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p><strong className="font-semibold text-navy">{brand.name}</strong> ({brand.fullName}) {c.about.p1}</p>
              <p>{c.about.legal[0]} <T value={company.legalName} /> {c.about.legal[1]} <T value={company.ruc} />.</p>
              <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
                {c.about.pillars.map(([t, d]) => (
                  <div key={t} className="bg-white p-5">
                    <p className="font-display text-sm font-semibold uppercase tracking-wider text-navy">{t}</p>
                    <p className="mt-2 text-base">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cifras */}
        <section aria-label={c.figuresLabel} className="bg-navy text-white">
          <div className={`${container} grid grid-cols-2 gap-y-10 py-16 md:grid-cols-4`}>
            {c.figures.map((f, i) => (
              <div key={f.label} className={`px-6 ${i % 2 ? 'border-l border-white/20' : ''} ${i === 2 ? 'md:border-l md:border-white/20' : ''}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{f.label}</p>
                <p className="mt-2 font-display text-4xl font-semibold tabular-nums"><T value={f.value} /></p>
                <p className="mt-1 text-sm text-white/60">{f.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nuestros negocios */}
        <section id="negocios" className="bg-mist">
          <div className={`${container} py-20`}>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-2xl">
                <p className={eyebrow}>{c.businessesSection.eyebrow}</p>
                <h2 className={`${h2} mt-4`}>{c.businessesSection.title}</h2>
              </div>
              <p className="max-w-md text-muted">{c.businessesSection.text}</p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {businesses.map((b) => (
                <Link key={b.slug} id={b.slug} href={`/${lang}/negocios/${b.slug}`} className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-line transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={b.image} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{b.tag}</p>
                    <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-navy">{b.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted">{b.description}</p>
                    <ul className="mt-4 space-y-1 border-t border-line pt-4 text-sm text-ink">
                      {b.companies.map((x, i) => <li key={i}><T value={x} /></li>)}
                    </ul>
                    <span className="mt-auto pt-5 text-sm font-semibold text-navy">{c.businessesSection.more} <Arrow /></span>
                  </div>
                </Link>
              ))}
              {/* octava casilla: llamado a nuevos socios */}
              <article className="flex flex-col justify-between rounded-lg bg-navy p-8 text-white">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">{c.businessesSection.ctaEyebrow}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-snug">{c.businessesSection.ctaTitle}</h3>
                  <p className="mt-3 text-white/75">{c.businessesSection.ctaText}</p>
                </div>
                <a href="#contacto" className="group mt-8 font-semibold text-gold">{c.businessesSection.ctaLink} <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* Inversionistas y gobierno corporativo */}
        <section id="inversionistas" className="bg-white">
          <div className={`${container} grid gap-12 py-20 lg:grid-cols-2`}>
            <div>
              <p className={eyebrow}>{c.investors.eyebrow}</p>
              <h2 className={`${h2} mt-4`}>{c.investors.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{c.investors.text}</p>
              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                {c.investors.roles.map((role) => (
                  <div key={role} className="rounded-lg border border-line p-5">
                    <dt className="text-sm text-muted">{role}</dt>
                    <dd className="mt-1 font-semibold text-navy"><T value={c.investors.name} /></dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-lg bg-mist p-8">
              <h3 className="font-display text-xl font-semibold text-navy">{c.investors.docsTitle}</h3>
              <ul className="mt-6 divide-y divide-line">
                {c.investors.docs.map((d, i) => (
                  <li key={i} className="flex items-center justify-between gap-4 py-4">
                    <span className="font-medium text-ink"><T value={d} /></span>
                    <span className="text-xs"><T value={c.investors.pdf} /></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sostenibilidad y fundación */}
        <section id="sostenibilidad" className="bg-navy-deep text-white">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[22rem]">
              <Image src="/img/fundacion.jpg" alt={c.sustainability.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
              <p className={eyebrow}>{c.sustainability.eyebrow}</p>
              <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">{c.sustainability.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-white/75">
                {c.sustainability.text[0]} <T value={businesses[6].companies[0]} /> {c.sustainability.text[1]}
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {c.sustainability.pillars.map((x) => <li key={x} className="border-t-2 border-gold pt-3 font-display font-semibold">{x}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Sala de prensa */}
        <section id="noticias" className="bg-white">
          <div className={`${container} py-20`}>
            <p className={eyebrow}>{c.newsSection.eyebrow}</p>
            <h2 className={`${h2} mt-4`}>{c.newsSection.title}</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {c.news.map((n, i) => (
                <article key={i} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                    <Image src={n.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-muted"><T value={n.date} /></p>
                  <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-navy"><T value={n.title} /></h3>
                  <p className="mt-2 text-muted">{n.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="border-t border-line bg-mist">
          <div className={`${container} grid gap-12 py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]`}>
            <div>
              <p className={eyebrow}>{c.contact.eyebrow}</p>
              <h2 className={`${h2} mt-4`}>{c.contact.title}</h2>
              <p className="mt-5 text-lg text-muted">{c.contact.text}</p>
              <dl className="mt-10 space-y-6">
                {([['address', company.address], ['email', company.email], ['phone', company.phone]] as const).map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{c.contact.labels[k]}</dt>
                    <dd className="mt-1 text-lg text-navy"><T value={v} /></dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-line sm:p-10"><ContactForm t={c.contact.form} /></div>
          </div>
        </section>
      </main>

      <Footer lang={lang} c={c} />
    </>
  )
}
