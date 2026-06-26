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
  fax: "+41 32 625 48 49",
  email: "info@degoumoisdental.ch",
  openingHours: [
    { days: "Mo – Fr", hours: "07:30 – 12:00, 13:00 – 17:00" },
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

/** Partner-Systeme (Implantat- & Materialhersteller) für die Logo-Leiste. */
export const partners = [
  { name: "Straumann", file: "/partner/straumann.jpg" },
  { name: "Nobel Biocare", file: "/partner/nobel-biocare.jpg" },
  { name: "Zeramex", file: "/partner/zeramex.jpg" },
  { name: "Dentalpoint", file: "/partner/dentalpoint.jpg" },
  { name: "SIC invent", file: "/partner/sic.jpg" },
  { name: "Astra Tech", file: "/partner/astratech.jpg" },
  { name: "Atlantis", file: "/partner/atlantis.jpg" },
  { name: "Thommen Medical", file: "/partner/thommen.jpg" },
  { name: "Xive", file: "/partner/xive.jpg" },
  { name: "Dentsply Friadent", file: "/partner/dentsply-friadent.jpg" },
  { name: "Allshape", file: "/partner/allshape.jpg" },
] as const;
