'use client'

// Piezas de animación reutilizables (Motion + Lenis). Todas respetan «reducir movimiento» del sistema.
import { useEffect, useRef, useState, type ReactNode } from 'react'
import Lenis from 'lenis'
import { MotionConfig, animate, motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react'

export const ease = [0.16, 1, 0.3, 1] as const

let instance: Lenis | null = null
/** Instancia de Lenis activa (null si el usuario prefiere reducir el movimiento). */
export const getLenis = () => instance

/** Scroll suave y configuración global de Motion. Va una sola vez en el layout. */
export function MotionProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, anchors: true, autoRaf: true })
    instance = lenis
    return () => { lenis.destroy(); instance = null }
  }, [])
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

/** Sube y aparece al entrar en pantalla. */
export function Reveal({ children, delay = 0, y = 40, x = 0, className, as = 'div' }: {
  children: ReactNode; delay?: number; y?: number; x?: number; className?: string; as?: 'div' | 'li' | 'article' | 'p' | 'span'
}) {
  const Tag = motion[as]
  return (
    <Tag className={className} initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }} transition={{ duration: 0.9, delay, ease }}>
      {children}
    </Tag>
  )
}

/** Bloque de color que crece desde un lado, como los rectángulos de acento de Grupo Romero. */
export function GrowBlock({ className, origin = 'left', delay = 0 }: { className?: string; origin?: 'left' | 'right' | 'top'; delay?: number }) {
  const scale = origin === 'top' ? { scaleY: 0 } : { scaleX: 0 }
  return (
    <motion.div aria-hidden className={className} style={{ transformOrigin: origin }}
      initial={scale} whileInView={{ scaleX: 1, scaleY: 1 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 1.2, delay, ease }} />
  )
}

/** Imagen que se descubre con una cortina y luego se mueve en parallax. Requiere un padre con tamaño. */
export function RevealImage({ children, className = '', delay = 0, from = 'left' }: { children: ReactNode; className?: string; delay?: number; from?: 'left' | 'right' | 'bottom' }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const clip = { left: 'inset(0 100% 0 0)', right: 'inset(0 0 0 100%)', bottom: 'inset(100% 0 0 0)' }[from]
  return (
    <motion.div ref={ref} className={`overflow-hidden ${className}`} initial={{ clipPath: clip }} whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 1.3, delay, ease }}>
      <motion.div className="absolute inset-[-7%_0]" style={{ y }}>{children}</motion.div>
    </motion.div>
  )
}

/** Titular que aparece palabra por palabra (efecto de la portada de Grupo Romero). */
export function WordsReveal({ text, className, delay = 0, as = 'h1' }: { text: string; className?: string; delay?: number; as?: 'h1' | 'h2' | 'p' }) {
  const Tag = motion[as]
  return (
    <Tag className={className} aria-label={text} initial="hidden" whileInView="show" viewport={{ once: true }}
      transition={{ staggerChildren: 0.07, delayChildren: delay }}>
      {text.split(' ').map((w, i) => (
        <motion.span key={i} aria-hidden className="inline-block whitespace-pre"
          variants={{ hidden: { opacity: 0, y: '0.6em', filter: 'blur(8px)' }, show: { opacity: 1, y: 0, filter: 'blur(0px)' } }}
          transition={{ duration: 0.9, ease }}>
          {w}{' '}
        </motion.span>
      ))}
    </Tag>
  )
}

/** Número que cuenta desde 0 cuando entra en pantalla. */
export function Counter({ value, suffix = '', locale }: { value: number; suffix?: string; locale: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduce = useReducedMotion()
  const fmt = (n: number) => Math.round(n).toLocaleString(locale === 'es' ? 'es-PE' : 'en-US')
  const [shown, setShown] = useState(fmt(0))
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: reduce ? 0 : 2, ease, onUpdate: (v) => setShown(fmt(v)) })
    return () => c.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, value, reduce])
  return <span ref={ref} className="tabular-nums">{shown}{suffix}</span>
}
