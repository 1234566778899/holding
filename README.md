# Grupo HEN · sitio corporativo

Sitio web del holding Grupo HEN (Hub Earth Nexus), en español e inglés.

- Next.js 16 (App Router, `cacheComponents`), React 19, Tailwind CSS 4.
- Rutas: `/es`, `/en` y una página por línea de negocio en `/[idioma]/negocios/[línea]`. `proxy.ts` envía `/` al idioma del navegador.
- Textos: `lib/content.ts` (portada) y `lib/lines.ts` (páginas de cada línea). Los datos pendientes se marcan con `pending(...)` y se ven resaltados en la web.
- Imágenes en `public/img` (fotos generadas con ChatGPT, logotipo en azul y en blanco).

```sh
npm install
npm run dev     # http://localhost:3000
npm run build
```
