'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'motion/react'
import { ease } from '@/components/motion'

// Posición de cada país sobre /img/mapa-america.png, en % del ancho y alto de la imagen
const points: Record<string, [number, number]> = {
  us: [49.6, 24.2], pa: [48.6, 40.6], co: [50.2, 44.8], ec: [46.9, 48.4], pe: [49.6, 57.6], cl: [51.2, 74.6],
}

/** Mapa con puntos que laten y una etiqueta al pasar el cursor, como el mapa de presencia de Grupo Romero. */
export function PresenceMap({ countries, hq }: { countries: Record<string, string>; hq: string }) {
  const [active, setActive] = useState<string | null>('pe')
  return (
    <div className="relative aspect-square w-full">
      <Image src="/img/mapa-america.png" alt="" fill sizes="(min-width: 1024px) 45vw, 90vw" className="object-contain" />
      {Object.entries(points).map(([key, [x, y]], i) => (
        <motion.button key={key} type="button" aria-label={countries[key]}
          onMouseEnter={() => setActive(key)} onFocus={() => setActive(key)} onClick={() => setActive(key)}
          className="absolute -translate-x-1/2 -translate-y-1/2 p-2" style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 + i * 0.12, ease }}>
          <span className="relative block h-3.5 w-3.5">
            <span className="animate-pulse-ring absolute inset-0 rounded-full bg-steel/60" style={{ animationDelay: `${i * 0.3}s` }} />
            <span className={`absolute inset-0 rounded-full border-2 border-white transition-colors ${key === 'pe' ? 'bg-gold' : 'bg-steel'} ${active === key ? 'scale-125' : ''}`} />
          </span>
          <AnimatePresence>
            {active === key && (
              <motion.span className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 whitespace-nowrap bg-ink px-3 py-1.5 text-[12px] text-white"
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ duration: 0.25 }}>
                {countries[key]}{key === 'pe' ? ` · ${hq}` : ''}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      ))}
    </div>
  )
}
