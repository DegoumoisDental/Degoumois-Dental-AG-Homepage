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

### Automatischer Deploy (GitHub Actions)

`.github/workflows/deploy.yml` baut die Seite und lädt `dist/` per **FTPS** zu cyon –
bei jedem Push auf `main`, per manuellem Knopf (GitHub → **Actions** → *Build & Deploy → cyon*
→ **Run workflow**) und automatisch alle ~2 Std. während der Geschäftszeiten (holt in
Storyblok veröffentlichte News live).

**Einmalig einzurichten:** GitHub → Repo **Settings → Secrets and variables → Actions →
New repository secret**. Diese 5 Secrets anlegen (Werte sieht nur GitHub, nicht im Code):

| Secret | Wert |
|---|---|
| `STORYBLOK_TOKEN` | der Public-Token aus Storyblok |
| `CYON_FTP_SERVER` | FTP-Host von cyon (z. B. `wwwXX.cyon.net` oder deine Domain) |
| `CYON_FTP_USERNAME` | cyon-FTP-Benutzer |
| `CYON_FTP_PASSWORD` | cyon-FTP-Passwort |
| `CYON_FTP_DIR` | Zielordner **mit** Schrägstrich am Ende, z. B. `/public_html/` |

Host/User/Passwort stehen im **cyon-Panel → FTP/SSH**. Danach einmal *Run workflow* testen.

**Optional – sofort statt alle 2 Std.:** In Storyblok (*Settings → Webhooks*) einen Webhook
auf „Story published/unpublished" einrichten, der GitHub triggert
(`repository_dispatch`, Event `storyblok-publish`). Da GitHub dafür einen Auth-Header
braucht, ist meist ein kleiner Relay (z. B. Cloudflare Worker) nötig – sag Bescheid,
wenn du echtes Instant-Deploy willst.

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
