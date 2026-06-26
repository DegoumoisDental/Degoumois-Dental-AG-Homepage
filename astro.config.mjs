import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import keystatic from "@keystatic/astro";

// Live-Domain hier anpassen, sobald bekannt:
const SITE = "https://www.degoumoisdental.ch";

export default defineConfig({
  site: SITE,
  output: "hybrid",
  adapter: vercel(),
  trailingSlash: "ignore",
  integrations: [
    keystatic(),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    // Schutz: nur eigene Domain als Bildquelle
    domains: [],
  },
});
