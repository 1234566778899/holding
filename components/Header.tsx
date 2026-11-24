'use client'

import { useEffect, useState, type MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ease, getLenis } from '@/components/motion'
import { locales, type Content, type Locale } from '@/lib/content'

type Props = { lang: Locale; c: Content }

/** Desplaza con Lenis si está activo; si no, con el navegador. */
export function scrollToHash(hash: string) {
  const el = document.querySelector(hash)
  if (!el) return false
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(el)
  else el.scrollIntoView({ behavior: 'smooth' })
  history.replaceState(null, '', hash)
  return true
}

/** ES | EN: abre la misma página en el otro idioma. */
function LanguageSwitch({ lang, label, className = '' }: { lang: Locale; label: string; className?: string }) {
  const rest = usePathname().replace(/^\/[a-z]{2}(?=\/|$)/, '')
  return (
    <span role="group" aria-label={label} className={`flex items-center gap-2 text-[13px] tracking-[0.12em] ${className}`}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-2">
          {i > 0 && <span aria-hidden className="opacity-40">|</span>}
          {l === lang
            ? <span aria-current="true" className="font-bold">{l.toUpperCase()}</span>
            // enlace normal: /es y /en tienen layouts raíz distintos, así que el navegador recarga la página
            : <a href={`/${l}${rest}`} hrefLang={l} lang={l} className="opacity-70 transition-opacity hover:opacity-100">{l.toUpperCase()}</a>}
        </span>
      ))}
    </span>
  )
}

/**
 * Encabezado al estilo de Grupo Romero: transparente sobre la portada, con el logo a la izquierda y el botón
 * «MENÚ» a la derecha, que abre un panel a pantalla completa. Al bajar se vuelve blanco y se esconde; al subir reaparece.
 */
export function Header({ lang, c }: Props) {
  const pathname = usePathname()
  const isHome = pathname === `/${lang}`
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setSolid(y > 60)
    setHidden(y > 400 && y > prev)
  })

  // bloquea el scroll de fondo mientras el menú está abierto
  useEffect(() => {
    const lenis = getLenis()
    if (open) { lenis?.stop(); document.documentElement.style.overflow = 'hidden' }
    else { lenis?.start(); document.documentElement.style.overflow = '' }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const go = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false)
    if (!isHome) return
    e.preventDefault()
    // espera a que el menú suelte el scroll antes de desplazar
    setTimeout(() => scrollToHash(href), open ? 350 : 0)
  }
  const light = !solid && !open

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${solid ? 'bg-white/95 shadow-[0_1px_0_rgba(2,29,73,.08)] backdrop-blur' : 'bg-transparent'}`}
        animate={{ y: hidden && !open ? '-100%' : '0%' }} transition={{ duration: 0.45, ease }}>
        <div className="gutter flex h-[72px] items-center justify-between md:h-[84px]">
          <Link href={`/${lang}`} aria-label={c.ui.home} className="relative block h-10 w-[92px] md:h-12 md:w-[110px]">
            <Image src="/img/logo-hen-holding-corp-blanco.png" alt="HEN Holding Corp" fill priority sizes="110px"
              className={`object-contain object-left transition-opacity duration-500 ${light ? 'opacity-100' : 'opacity-0'}`} />
            <Image src="/img/logo-hen-holding-corp.png" alt="" fill priority sizes="110px"
              className={`object-contain object-left transition-opacity duration-500 ${light ? 'opacity-0' : 'opacity-100'}`} />
          </Link>
          <div className={`flex items-center gap-6 transition-colors duration-500 ${light ? 'text-white' : 'text-navy'}`}>
            <LanguageSwitch lang={lang} label={c.ui.language} className="hidden sm:flex" />
            <span aria-hidden className="hidden h-4 w-px bg-current opacity-30 sm:block" />
            <button type="button" onClick={() => setOpen(true)} aria-expanded={open} aria-controls="menu-principal"
              className="group flex flex-col items-end gap-[5px]">
              <span className="block h-[2px] w-7 bg-gold transition-all group-hover:w-5" />
              <span className="block h-[2px] w-5 bg-gold transition-all group-hover:w-7" />
              <span className="block h-[2px] w-7 bg-gold transition-all group-hover:w-4" />
              <span className="mt-0.5 text-[10px] uppercase tracking-[0.18em]">{c.ui.menu}</span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div key="menu" className="fixed inset-0 z-[60]" initial="closed" animate="open" exit="closed">
            <motion.button type="button" aria-label={c.ui.close} onClick={() => setOpen(false)} className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
              variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }} transition={{ duration: 0.5 }} />
            <motion.nav id="menu-principal" aria-label={c.ui.mainNav}
              className="absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-ink px-8 pb-10 pt-6 text-white sm:w-[460px] sm:px-12"
              variants={{ closed: { x: '100%' }, open: { x: 0 } }} transition={{ duration: 0.7, ease }}>
              <div className="flex items-center justify-between">
                <LanguageSwitch lang={lang} label={c.ui.language} />
                <button type="button" onClick={() => setOpen(false)} className="group flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.18em]">
                  <span className="relative block h-7 w-7 transition-transform duration-500 group-hover:rotate-90">
                    <span className="absolute left-0 top-1/2 h-[2px] w-7 rotate-45 bg-white" />
                    <span className="absolute left-0 top-1/2 h-[2px] w-7 -rotate-45 bg-white" />
                  </span>
                  {c.ui.close}
                </button>
              </div>
              <motion.ul className="mt-14 space-y-1" variants={{ open: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } } }}>
                {[{ href: '#inicio', label: c.home.rail.inicio }, ...c.nav].map((n) => (
                  <motion.li key={n.href} variants={{ closed: { opacity: 0, x: 40 }, open: { opacity: 1, x: 0 } }} transition={{ duration: 0.6, ease }}>
                    <a href={isHome ? n.href : `/${lang}${n.href}`} onClick={(e) => go(e, n.href)}
                      className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-[26px] font-medium transition-colors hover:text-gold-light">
                      {n.label}
                      <span aria-hidden className="h-2 w-2 scale-0 rounded-full bg-gold transition-transform duration-300 group-hover:scale-100" />
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div className="mt-10" variants={{ closed: { opacity: 0, y: 20 }, open: { opacity: 1, y: 0 } }} transition={{ duration: 0.6, delay: 0.6, ease }}>
                <p className="text-[12px] uppercase tracking-[0.18em] text-gold-light">{c.home.businesses}</p>
                <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[14px] text-white/70">
                  {c.businesses.map((b) => (
                    <li key={b.slug}><Link href={`/${lang}/negocios/${b.slug}`} onClick={() => setOpen(false)} className="transition-colors hover:text-white">{b.tag}</Link></li>
                  ))}
                </ul>
              </motion.div>
              <motion.div className="mt-auto pt-10 text-[14px] text-white/60" variants={{ closed: { opacity: 0 }, open: { opacity: 1 } }} transition={{ duration: 0.6, delay: 0.75 }}>
                <p>{c.company.address}</p>
                <p className="mt-1">{c.company.phone} · <a href={`mailto:${c.company.email}`} className="hover:text-white">{c.company.email}</a></p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
