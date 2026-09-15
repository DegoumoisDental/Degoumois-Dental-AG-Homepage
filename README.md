# Degoumois Dental AG — Website

Moderne, statische Website (Astro) für das Dentallabor Degoumois Dental AG, Solothurn.
Clean, hygiene-orientiertes Design, native Seiten-Transitions, starkes SEO/GEO, hohe
Sicherheit (rein statisch — kein Server, keine Datenbank) und ein Git-basiertes CMS
für selbst erfassbare News.

## Schnellstart

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # erzeugt /dist (statisch, deploybar)
npm run preview  # Build lokal prüfen
```

## Projektstruktur

```
website/
├─ public/
│  ├─ img/           → Logo, Favicon, OG-Bild, Poster
│  ├─ partner/       → Partner-/System-Logos
│  ├─ video/         → HEADER-VIDEO hier ablegen (hero.mp4 / hero.webm)
│  ├─ robots.txt
│  └─ .htaccess      → Security-Header + HTTPS-Redirect (cyon/Apache)
├─ src/
│  ├─ components/    → Header, Footer, Hero, Seo, NewsCard, …
│  ├─ content/team/  → Teammitglieder (Markdown)
│  ├─ lib/news.ts    → News-Abruf aus Storyblok (Online-CMS)
│  ├─ data/services.ts
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/         → Start, Leistungen, Über uns, Team, News, Kontakt, …
│  ├─ site.ts        → ZENTRALE Stammdaten (Kontakt, Navigation)
│  └─ styles/global.css → Design-System (Farben, Typo)
├─ .env             → STORYBLOK_TOKEN (nicht im Git)
└─ astro.config.mjs
```

## Aufgaben für den Live-Gang (Platzhalter ersetzen)

1. **Header-Video:** Finale Sequenz als `public/video/hero.mp4` (+ optional `hero.webm`)
   ablegen. Spielt dann automatisch im Header. Aktuell läuft ein animierter Verlauf
   als Platzhalter.
2. **Logo:** `public/img/logo-degoumois.svg` (+ `…-white.svg`) durch die offizielle
   Logodatei ersetzen (gleiche Dateinamen → kein Code-Anpassen nötig).
3. **Domain:** In `astro.config.mjs` und `public/robots.txt` die finale URL setzen.
4. **OG-Bild:** Optional `public/img/og-default.svg` durch ein 1200×630-Bild ersetzen.
5. **Team-Fotos / News-Bilder:** Bei Bedarf ergänzen (aktuell Initialen-Avatare).

## Deployment auf cyon (statisch, per FTP/SFTP)

Die Seite wird statisch gebaut und der Inhalt von `dist/` in das Web-Wurzelverzeichnis
von cyon hochgeladen.

```bash
npm ci
npm run build          # erzeugt dist/
```

Dann `dist/` (inkl. der Datei `.htaccess`) per FTP/SFTP in den Webordner von cyon
kopieren (z. B. `/public_html/` bzw. den in cyon konfigurierten Domain-Ordner).
`.htaccess` setzt HTTPS-Redirect, Security-Header und Caching.

> Tipp: Der Upload lässt sich mit einem GitHub-Action-Workflow automatisieren
> (bei jedem Push auf `main` → Build → SFTP-Upload zu cyon). Bei Bedarf einrichten.

## News pflegen (Storyblok – Online-CMS)

Die News werden im **Storyblok**-CMS online bearbeitet (eigene Logins pro Person):

- Einloggen auf [app.storyblok.com](https://app.storyblok.com) → Space **„Degoumois Dental News"**
  → Ordner **News** → Beitrag bearbeiten oder **+ Entry** (Typ `news`).
- **Publish** = veröffentlicht. Danach muss die Seite neu gebaut/hochgeladen werden
  (manuell `npm run build` + Upload, oder automatisch per Webhook → GitHub-Action).
- Token: `STORYBLOK_TOKEN` (Public, read-only) in `.env` (lokal) bzw. als GitHub-Secret.
  Astro liest die News beim Build über `src/lib/news.ts`.

**Team** wird weiterhin als Markdown unter `src/content/team/` gepflegt
(direkt auf github.com editierbar).

## Technik & Sicherheit

- **Astro (static output)** — kein Server/keine DB ⇒ minimale Angriffsfläche.
- **Security-Header** (CSP, HSTS, X-Frame-Options, Permissions-Policy) via
  `public/.htaccess` (Apache/cyon).
- **Schriften lokal gehostet** (`@fontsource`) — DSGVO/revDSG-konform, keine
  Google-Fonts-Calls.
- **SEO/GEO:** pro Seite Meta-Tags, Open Graph, Canonical, `JSON-LD` (Dentist/
  LocalBusiness), Geo-Meta, automatische Sitemap, KI-Crawler in `robots.txt` erlaubt.
