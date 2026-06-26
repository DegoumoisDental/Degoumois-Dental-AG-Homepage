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
└─ vercel.json       → Security-Header (Vercel)
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

## News selbst erfassen (CMS)

Das Team pflegt News über **Decap CMS** (Open Source, kostenlos, Git-basiert).

**Lokal testen (ohne Login):**
```bash
npx decap-server      # Terminal 1
npm run dev           # Terminal 2  →  http://localhost:4321/admin/
```

**Produktiv (empfohlen):** GitHub als Backend + ein kleiner OAuth-Proxy, damit sich
das Team per GitHub-Login anmelden kann.
- Repo bei GitHub anlegen, in `public/admin/config.yml` `repo:` eintragen,
  `local_backend: true` entfernen.
- OAuth-Proxy: z. B. das kostenlose Vercel-Template `decap-proxy` deployen und in
  der config als `base_url`/`auth_endpoint` hinterlegen.
- Alternativ ohne GitHub-Konten fürs Team: **Sveltia CMS** oder ein gehostetes
  Backend (Tina/Sanity) — siehe Notizen.

Jede News ist eine Markdown-Datei in `src/content/news/`. Speichern im CMS = Commit
ins Git = automatischer Re-Deploy.

## Technik & Sicherheit

- **Astro (static output)** — kein Server/keine DB ⇒ minimale Angriffsfläche.
- **Security-Header** (CSP, HSTS, X-Frame-Options, Permissions-Policy) via
  `vercel.json` bzw. `public/_headers`.
- **Schriften lokal gehostet** (`@fontsource`) — DSGVO/revDSG-konform, keine
  Google-Fonts-Calls.
- **SEO/GEO:** pro Seite Meta-Tags, Open Graph, Canonical, `JSON-LD` (Dentist/
  LocalBusiness), Geo-Meta, automatische Sitemap, KI-Crawler in `robots.txt` erlaubt.
