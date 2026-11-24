'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'
import { WordsReveal, ease } from '@/components/motion'

/** Portada a pantalla completa: foto oscurecida con acercamiento lento, parallax al bajar y titular palabra por palabra. */
export function Hero({ title, text, primary, secondary, alt, rail }: {
  title: string; text: string; primary: string; secondary: string; alt: string; rail: string
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const lift = useTransform(scrollYProgress, [0, 1], ['0%', '-25%'])

  return (
    <section ref={ref} id="inicio" data-rail={rail} data-dark="true" className="relative isolate flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden bg-navy-deep">
      <motion.div className="absolute inset-0 -z-20" style={{ y }}>
        <Image src="/img/hero-lima.jpg" alt={alt} fill priority sizes="100vw" className="animate-kenburns object-cover" />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(1,18,44,.55),rgba(1,18,44,.82))]" />
      <motion.div className="gutter max-w-[1100px] text-center" style={{ opacity: fade, y: lift }}>
        <WordsReveal text={title} delay={0.3} className="font-display text-[36px] font-bold leading-[1.18] text-white md:text-[56px]" />
        <motion.p className="mx-auto mt-7 max-w-[640px] text-[17px] text-white/80 md:text-[19px]"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.2, ease }}>
          {text}
        </motion.p>
        <motion.div className="mt-10 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.45, ease }}>
          <a href="#negocios" className="group inline-flex items-center gap-3 bg-gold px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold-light">
            {primary}
            <svg aria-hidden width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" /></svg>
          </a>
          <a href="#contacto" className="inline-flex items-center border border-white/70 px-7 py-3.5 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white hover:text-ink">{secondary}</a>
        </motion.div>
      </motion.div>
    </section>
  )
}
