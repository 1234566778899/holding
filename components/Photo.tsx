import Image from 'next/image'
import { T } from '@/components/T'
import type { Text } from '@/lib/content'

/** Foto de una línea dentro de un contenedor `relative`; si aún falta, deja el espacio resaltado como pendiente. */
export function Photo({ src, sizes, className = '' }: { src: Text; sizes: string; className?: string }) {
  if (typeof src !== 'string') {
    return <div className="absolute inset-0 flex items-center justify-center bg-haze text-[15px] text-navy"><T value={src} /></div>
  }
  return <Image src={src} alt="" fill sizes={sizes} className={className} />
}
