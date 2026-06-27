import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Live-Domain hier anpassen, sobald bekannt:
const SITE = "https://www.degoumoisdental.ch";

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  site: SITE,
  output: "hybrid",
  ...(isDev ? {} : { adapter: (await import("@astrojs/vercel/serverless")).default() }),
  trailingSlash: "ignore",
  integrations: [
    react(),
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
    domains: [],
  },
});
