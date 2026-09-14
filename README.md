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
│  ├─ admin/         → Decap CMS (Admin-Panel unter /admin)
│  ├─ img/           → Logo, Favicon, OG-Bild, Poster
│  ├─ partner/       → Partner-/System-Logos
│  ├─ video/         → HEADER-VIDEO hier ablegen (hero.mp4 / hero.webm)
│  ├─ uploads/       → vom CMS hochgeladene Bilder
│  ├─ robots.txt
│  └─ _headers       → Security-Header (Netlify-Fallback)
├─ src/
│  ├─ components/    → Header, Footer, Hero, Seo, NewsCard, …
│  ├─ content/
│  │  ├─ news/       → News-Artikel (Markdown) — vom CMS gepflegt
│  │  └─ team/       → Teammitglieder (Markdown)
│  ├─ data/services.ts
│  ├─ layouts/BaseLayout.astro
│  ├─ pages/         → Start, Leistungen, Über uns, Team, News, Kontakt, …
│  ├─ site.ts        → ZENTRALE Stammdaten (Kontakt, Navigation)
│  └─ styles/global.css → Design-System (Farben, Typo)
├─ astro.config.mjs
└─ public/.htaccess  → Security-Header + HTTPS-Redirect (cyon/Apache)
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

## News / Team pflegen (direkt auf GitHub)

Kein CMS nötig. Jede News ist eine Markdown-Datei in `src/content/news/`, jedes
Teammitglied in `src/content/team/`.

- Datei auf **github.com** im Repo öffnen → Stift-Symbol (Bearbeiten) → Text ändern →
  **Commit changes**. Neue News: „Add file → Create new file" unter `src/content/news/`.
- Danach die Seite neu bauen (`npm run build`) und `dist/` zu cyon hochladen
  (oder via GitHub-Action automatisch).
- Optional lokal komfortabler: `npm run dev` → `http://localhost:4321/keystatic`
  (nur lokal, schreibt direkt in die Markdown-Dateien).

## Technik & Sicherheit

- **Astro (static output)** — kein Server/keine DB ⇒ minimale Angriffsfläche.
- **Security-Header** (CSP, HSTS, X-Frame-Options, Permissions-Policy) via
  `public/.htaccess` (Apache/cyon).
- **Schriften lokal gehostet** (`@fontsource`) — DSGVO/revDSG-konform, keine
  Google-Fonts-Calls.
- **SEO/GEO:** pro Seite Meta-Tags, Open Graph, Canonical, `JSON-LD` (Dentist/
  LocalBusiness), Geo-Meta, automatische Sitemap, KI-Crawler in `robots.txt` erlaubt.
