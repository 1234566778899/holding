import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // La línea «Nuevos mercados» se retiró al pasar a diez líneas; su URL ya estaba publicada
  async redirects() {
    return [{ source: "/:lang(es|en)/negocios/nuevos-mercados", destination: "/:lang#negocios", permanent: true }];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
