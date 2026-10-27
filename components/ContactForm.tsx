'use client'

import { useState, type FormEvent } from 'react'
import type { Content } from '@/lib/content'

/** Formulario de contacto. Aún no envía: falta definir a qué correo o sistema llegan los mensajes. */
export function ContactForm({ t }: { t: Content['contact']['form'] }) {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!e.currentTarget.reportValidity()) return
    // Google Analytics: cuenta el envío como oportunidad de venta (sin datos personales)
    ;(window as { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'generate_lead', { form: 'contacto' })
    setSent(true)
  }
  const field = 'w-full border border-line bg-white px-4 py-3 text-navy outline-none transition focus:border-navy'
  const label = 'grid gap-2 text-[15px] font-bold text-navy'
  if (sent) {
    return (
      <div className="border-l-[3px] border-navy bg-white p-8">
        <p className="font-display text-[22.6px] font-bold text-navy">{t.sentTitle}</p>
        <p className="mt-2 text-steel">{t.sentText}</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-[15px] font-bold text-navy underline underline-offset-4">{t.again}</button>
      </div>
    )
  }
  return (
    <form onSubmit={submit} className="grid gap-5 sm:grid-cols-2">
      <label className={label}>{t.name}<input id="c-nombre" required autoComplete="name" className={field} /></label>
      <label className={label}>{t.company}<input id="c-empresa" autoComplete="organization" className={field} /></label>
      <label className={label}>{t.email}<input id="c-correo" type="email" required autoComplete="email" className={field} /></label>
      <label className={label}>{t.phone}<input id="c-telefono" type="tel" autoComplete="tel" className={field} /></label>
      <label className={`${label} sm:col-span-2`}>{t.topic}
        <select id="c-motivo" className={field} defaultValue={t.topics[0]}>{t.topics.map((x) => <option key={x}>{x}</option>)}</select>
      </label>
      <label className={`${label} sm:col-span-2`}>{t.message}<textarea id="c-mensaje" required rows={5} className={field} /></label>
      <div className="sm:col-span-2">
        <button type="submit" className="bg-navy px-[34px] pb-[19px] pt-[22px] font-display text-[18.7px] text-white transition-colors hover:bg-steel">{t.submit}</button>
      </div>
    </form>
  )
}
