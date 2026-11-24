'use client'

import { useState, type FormEvent } from 'react'
import type { Content } from '@/lib/content'

/** Formulario de contacto. Aún no envía: falta conectar el correo o sistema al que llegan los mensajes. */
export function ContactForm({ t }: { t: Content['contact']['form'] }) {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return
    // Google Analytics: cuenta el envío como oportunidad de venta (sin datos personales)
    ;(window as { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'generate_lead', { form: 'contacto' })
    setSent(true)
  }
  const field = 'w-full border-0 border-b border-ink/20 bg-transparent px-0 py-2.5 text-[16px] font-normal text-ink outline-none transition-colors focus:border-gold'
  const label = 'grid gap-1 text-[12px] font-bold uppercase tracking-[0.12em] text-muted'
  if (sent) {
    return (
      <div className="border-l-[3px] border-gold bg-white p-8">
        <p className="font-display text-[22px] font-bold text-ink">{t.sentTitle}</p>
        <p className="mt-2">{t.sentText}</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-[14px] font-bold text-navy underline underline-offset-4">{t.again}</button>
      </div>
    )
  }
  return (
    <form onSubmit={submit} className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
      <label className={label}>{t.name}<input id="c-nombre" required autoComplete="name" className={field} /></label>
      <label className={label}>{t.company}<input id="c-empresa" autoComplete="organization" className={field} /></label>
      <label className={label}>{t.email}<input id="c-correo" type="email" required autoComplete="email" className={field} /></label>
      <label className={label}>{t.phone}<input id="c-telefono" type="tel" autoComplete="tel" className={field} /></label>
      <label className={`${label} sm:col-span-2`}>{t.topic}
        <select id="c-motivo" className={field} defaultValue={t.topics[0]}>{t.topics.map((x) => <option key={x}>{x}</option>)}</select>
      </label>
      <label className={`${label} sm:col-span-2`}>{t.message}<textarea id="c-mensaje" required rows={5} className={field} /></label>
      <div className="sm:col-span-2">
        <button type="submit" className="group inline-flex items-center gap-3 bg-navy px-8 py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-gold">
          {t.submit}
          <svg aria-hidden width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform group-hover:translate-x-1"><path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" /></svg>
        </button>
      </div>
    </form>
  )
}
