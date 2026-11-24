import type { ReactNode } from 'react'
import Link from 'next/link'
import { Reveal } from '@/components/motion'

/** Título de sección con la barra corta de color debajo (en el color de acento de la sección). */
export function SectionTitle({ children, accent, light = false, eyebrow }: { children: ReactNode; accent: string; light?: boolean; eyebrow?: string }) {
  return (
    <Reveal>
      {eyebrow && <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em]" style={{ color: accent }}>{eyebrow}</p>}
      <h2 className={`font-display text-[30px] font-bold leading-[1.2] md:text-[38px] ${light ? 'text-white' : 'text-ink'}`}>{children}</h2>
      <span className="title-bar mt-5" style={{ color: accent }} />
    </Reveal>
  )
}

/** Botón con borde fino y flecha, como el «CONOCE MÁS >» de Grupo Romero. */
export function MoreLink({ href, children, light = false, external = false }: { href: string; children: ReactNode; light?: boolean; external?: boolean }) {
  const cls = `group inline-flex items-center gap-3 border px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] transition-colors duration-300 ${
    light ? 'border-white text-white hover:bg-white hover:text-ink' : 'border-ink text-ink hover:bg-ink hover:text-white'}`
  const arrow = <svg aria-hidden width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" /></svg>
  if (href.startsWith('#') || external) return <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>{children}{arrow}</a>
  return <Link href={href} className={cls}>{children}{arrow}</Link>
}
