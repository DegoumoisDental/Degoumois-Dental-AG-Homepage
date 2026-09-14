import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

// Live-Domain hier anpassen, sobald bekannt:
const SITE = "https://www.degoumoisdental.ch";

const isDev = process.env.NODE_ENV !== "production";

export default defineConfig({
  site: SITE,
  // Statischer Build für cyon (Upload des dist/-Ordners per FTP/SFTP).
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    react(),
    // Keystatic nur lokal (npm run dev → /keystatic). Im Produktions-Build
    // (statisch) nicht enthalten – Inhalte werden direkt auf GitHub gepflegt.
    ...(isDev ? [keystatic()] : []),
    sitemap({
      changefreq: "monthly",
      priority: 0.7,
      lastmod: new Date(),
      // Admin-/API-/Test-Routen nicht in die Sitemap aufnehmen
      filter: (page) =>
        !page.includes("/keystatic") &&
        !page.includes("/api/") &&
        !page.includes("/admin"),
    }),
  ],
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    domains: [],
  },
});
