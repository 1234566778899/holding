import type { Text } from '@/lib/content'

/** Muestra un texto del contenido; si está pendiente, lo resalta como «[Razón social]». */
export function T({ value }: { value: Text }) {
  if (typeof value === 'string') return <>{value}</>
  return <span className="pending">[{value.pending}]</span>
}
