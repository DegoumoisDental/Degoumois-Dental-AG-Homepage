import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import { storyblok } from "@storyblok/astro";

// Live-Domain hier anpassen, sobald bekannt:
const SITE = "https://www.degoumoisdental.ch";

const isDev = process.env.NODE_ENV !== "production";

// Storyblok-Token aus .env (lokal) bzw. Umgebung (GitHub Action) laden.
const { STORYBLOK_TOKEN } = loadEnv(process.env.NODE_ENV ?? "", process.cwd(), "");

export default defineConfig({
  site: SITE,
  // Statischer Build für cyon (Upload des dist/-Ordners per FTP/SFTP).
  output: "static",
  trailingSlash: "ignore",
  integrations: [
    react(),
    // Storyblok = Quelle der News-Beiträge (Redaktion online, eigene Logins).
    storyblok({
      accessToken: STORYBLOK_TOKEN,
      apiOptions: { region: "eu" },
      bridge: isDev, // Live-Vorschau nur lokal; im Produktionsbuild aus
      components: {},
    }),
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
