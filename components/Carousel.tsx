'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'

/**
 * Carrusel horizontal con flechas y una barra de progreso entre ellas, como los de Grupo Romero.
 * Usa scroll-snap nativo, así que también se arrastra con el dedo o el trackpad.
 */
export function Carousel({ children, prev, next, tone = 'dark', className = '' }: {
  children: ReactNode; prev: string; next: string; tone?: 'dark' | 'light'; className?: string
}) {
  const track = useRef<HTMLDivElement>(null)
  const [state, setState] = useState({ progress: 0, size: 1 })

  useEffect(() => {
    const el = track.current!
    const update = () => {
      const max = el.scrollWidth - el.clientWidth
      setState({ progress: max > 0 ? el.scrollLeft / max : 0, size: Math.min(1, el.clientWidth / el.scrollWidth) })
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { el.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [])

  const move = (dir: 1 | -1) => {
    const el = track.current!
    const item = el.firstElementChild as HTMLElement | null
    const step = item ? item.offsetWidth + parseFloat(getComputedStyle(el).columnGap || '0') : el.clientWidth
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const ink = tone === 'dark' ? 'text-ink' : 'text-white'
  const rail = tone === 'dark' ? 'bg-ink/15' : 'bg-white/30'
  const bar = tone === 'dark' ? 'bg-ink' : 'bg-white'
  return (
    <div className={className}>
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain">
        {children}
      </div>
      <div className={`mt-8 flex items-center gap-5 ${ink}`}>
        <button type="button" onClick={() => move(-1)} aria-label={prev} className="shrink-0 transition-transform hover:-translate-x-1">
          <svg width="36" height="14" viewBox="0 0 36 14" fill="none"><path d="M35 7H2M8 1 2 7l6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
        <div className={`relative h-px flex-1 ${rail}`}>
          <motion.div className={`absolute -top-px h-[3px] ${bar}`}
            animate={{ left: `${state.progress * (1 - state.size) * 100}%`, width: `${state.size * 100}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 30 }} />
        </div>
        <button type="button" onClick={() => move(1)} aria-label={next} className="shrink-0 transition-transform hover:translate-x-1">
          <svg width="36" height="14" viewBox="0 0 36 14" fill="none"><path d="M1 7h33M28 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" /></svg>
        </button>
      </div>
    </div>
  )
}
