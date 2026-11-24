'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react'
import { ease, getLenis } from '@/components/motion'

/**
 * Riel fijo del borde derecho, como en Grupo Romero: nombre vertical de la sección visible, barra de progreso
 * de la página y flecha para bajar. Lee las secciones marcadas con `data-rail="Nombre"` y `data-accent="#hex"`.
 */
export function SectionRail({ scrollLabel }: { scrollLabel: string }) {
  const [current, setCurrent] = useState<{ label: string; accent: string; dark: boolean } | null>(null)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-rail]')]
    const io = new IntersectionObserver((entries) => {
      const hit = entries.filter((e) => e.isIntersecting).at(-1)
      if (hit) {
        const el = hit.target as HTMLElement
        setCurrent({ label: el.dataset.rail!, accent: el.dataset.accent ?? '#b8893a', dark: el.dataset.dark === 'true' })
      }
    }, { rootMargin: '-45% 0px -45% 0px' })
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const next = () => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-rail]')]
    const target = sections.find((s) => s.getBoundingClientRect().top > 90)
    const lenis = getLenis()
    if (!target) return
    if (lenis) lenis.scrollTo(target)
    else target.scrollIntoView({ behavior: 'smooth' })
  }

  const color = current?.dark ? '#ffffff' : current?.accent ?? '#b8893a'
  return (
    <div aria-hidden className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-14 md:block">
      {/* progreso */}
      <div className="absolute right-0 top-0 h-full w-[3px] bg-black/5">
        <motion.div className="h-full w-full origin-top" style={{ scaleY: progress, backgroundColor: color }} />
      </div>
      {/* nombre de la sección */}
      <div className="absolute right-5 top-1/2 -translate-y-1/2">
        <AnimatePresence mode="wait">
          {current && (
            <motion.p key={current.label} className="whitespace-nowrap text-[12px] tracking-[0.12em] [writing-mode:vertical-rl]"
              style={{ color }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease }}>
              {current.label}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      {/* bajar */}
      <button type="button" tabIndex={-1} onClick={next} aria-label={scrollLabel}
        className="pointer-events-auto absolute bottom-6 right-3 transition-colors" style={{ color }}>
        <svg width="28" height="40" viewBox="0 0 28 40" fill="none" className="animate-nudge">
          <path d="M14 2v34M4 26l10 10 10-10" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  )
}
