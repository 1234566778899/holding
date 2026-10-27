'use client'

import { useState, type FormEvent } from 'react'
import type { Content } from '@/lib/content'

/** Formulario de contacto. Aún no envía: falta definir a qué correo o sistema llegan los mensajes. */
export function ContactForm({ t }: { t: Content['contact']['form'] }) {
  const [sent, setSent] = useState(false)
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.currentTarget.reportValidity()) setSent(true)
  }
  const field = 'w-full rounded-md border border-line bg-white px-4 py-3 text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15'
  const label = 'grid gap-2 text-sm font-semibold text-navy'
  if (sent) {
    return (
      <div className="rounded-lg border border-gold/50 bg-gold-soft/40 p-8">
        <p className="font-display text-xl font-semibold text-navy">{t.sentTitle}</p>
        <p className="mt-2 text-muted">{t.sentText}</p>
        <button type="button" onClick={() => setSent(false)} className="mt-6 text-sm font-semibold text-navy underline underline-offset-4">{t.again}</button>
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
        <button type="submit" className="rounded-md bg-navy px-7 py-3.5 font-semibold text-white transition hover:bg-navy-deep">{t.submit}</button>
      </div>
    </form>
  )
}
