/**
 * Zentrale Stammdaten der Website.
 * Hier (und nur hier) Kontaktdaten, Navigation & SEO-Defaults pflegen.
 */
export const site = {
  name: "Degoumois Dental AG",
  legalName: "Degoumois Dental AG",
  tagline: "Zahntechnik aus Solothurn – seit 1972",
  description:
    "Degoumois Dental AG – Ihr innovatives Dentallabor in Solothurn. Präzise Zahntechnik, CAD/CAM, Implantatprothetik und Vollkeramik. Kompetenz, Ästhetik und Zuverlässigkeit seit 1972.",
  url: "https://www.degoumoisdental.ch",
  founded: "1972",
  address: {
    street: "Westbahnhofstrasse 1",
    zip: "4500",
    city: "Solothurn",
    country: "Schweiz",
    countryCode: "CH",
    // Koordinaten Solothurn Westbahnhof (für GEO/Maps – bei Bedarf präzisieren)
    lat: 47.2120,
    lng: 7.5290,
  },
  phone: "+41 32 625 48 48",
  phoneDisplay: "032 625 48 48",
  email: "info@degoumoisdental.ch",
  emailHin: "degoumoisdental@vzls-hin.ch",
  openingHours: [
    { days: "Mo – Fr", hours: "07:30 – 18:00" },
    { days: "Samstag", hours: "nach Vereinbarung" },
  ],
} as const;

export const nav = [
  { label: "Start", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Team", href: "/team" },
  { label: "News", href: "/news" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

/**
 * Partner-Firmen (Implantat- & Materialhersteller) für den Partner-Slider.
 * file = Logo-Pfad (null = Logo fehlt noch → Textplatzhalter). url = Firmen-Homepage.
 */
export const partners = [
  { name: "Straumann",       file: "/partner/straumann.jpg",       url: "https://www.straumann.com" },
  { name: "Nobel Biocare",   file: "/partner/nobelbiocare.png",    url: "https://www.nobelbiocare.com" },
  { name: "Thommen Medical", file: "/partner/thommen.jpg",         url: "https://www.thommenmedical.com" },
  { name: "Allshape",        file: "/partner/allshape.jpg",        url: "https://www.allshape.ch" },
  { name: "Ivoclar",         file: "/partner/ivoclar.png",         url: "https://www.ivoclar.com" },
  { name: "Z-Systems",       file: "/partner/z_system.png",        url: "https://www.zsystems.com" },
  { name: "Axera Dental",    file: "/partner/AxeraDental_Logo.png", url: "https://axeradental.ch" },
  { name: "Sipea",           file: "/partner/sipea-ch-logo.svg",   url: "https://sipea.ch" },
  { name: "Métaux Précieux", file: "/partner/cendres-metaux.svg",  url: "https://www.cmsa.ch" },
  { name: "Denseo",          file: "/partner/denseo.avif",         url: "https://www.denseo.de" },
  { name: "Astra",           file: "/partner/astratech.jpg",       url: "https://www.dentsplysirona.com" },
  { name: "Ankylos",         file: "/partner/Ankylos_logo.webp",   url: "https://www.dentsplysirona.com" },
  { name: "Neodent",         file: "/partner/neodent.webp",              url: "https://www.neodent.com" },
  { name: "Camlog",          file: "/partner/camlog.png",                url: "https://www.camlog.com" },
  { name: "Zimmer Biomet",   file: "/partner/Zimmer_Biomet-Logo.wine.png", url: "https://www.zimvie.com" },
] as const;
