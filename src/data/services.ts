/** Fachgebiete / Leistungen – zentral gepflegt, genutzt auf Start- und Leistungsseite. */
export interface Service {
  slug: string;
  icon: string; // Key für das Icon-Set in components/Icon.astro
  title: string; // Card-Titel (Startseite)
  short: string; // Card-Text (Startseite)
  h2: string; // Überschrift der Leistungssektion
  subheadline?: string; // Subheadline (h3) der Leistungssektion
  body: string[]; // Fliesstext der Leistungssektion (Absätze)
  points: string[]; // Systeme / Materialien / Leistungen
  note?: string; // optionaler Hinweis nach der Liste
  link?: { href: string; label: string }; // optionaler externer Link nach der Liste
  image?: string; // Hintergrundbild der Startseiten-Card
  homepage?: boolean; // false = nur auf der Leistungsseite anzeigen
}

export const services: Service[] = [
  {
    slug: "cad-cam",
    icon: "cube",
    title: "CAD/CAM-Technologie",
    short:
      "Digitale Konstruktion und präzise Fertigung von zahntechnischen Restaurationen aus Zirkon, Chrom-Kobalt, Titan und weiteren modernen Werkstoffen.",
    h2: "CAD/CAM-Zahntechnik",
    subheadline: "Digitale Konstruktion trifft präzise Fertigung",
    image: "/img/labor/komprimiert/Keyvisual_Labor_Startseite_1.jpg",
    body: [
      "CAD/CAM ist ein zentraler Bestandteil unserer digitalen Zahntechnik. Zahntechnische Restaurationen werden digital konstruiert und mit modernen Fertigungsverfahren präzise umgesetzt.",
      "Je nach Indikation verarbeiten wir unter anderem Zirkon, Chrom-Kobalt, Titan, PMMA, Nylon/Eldy, Hybridkeramik, e.max sowie Peek.",
      "Dabei arbeiten wir mit mehreren Systemen, damit wir flexibel auf unterschiedliche Anforderungen und bestehende Praxis-Workflows reagieren können.",
    ],
    points: [
      "Etkon / Straumann",
      "PrograMill PM7",
      "3Shape und Exocad",
      "3D-Druck",
      "digitale Konstruktion",
      "digitale Datenverarbeitung",
    ],
  },
  {
    slug: "implantatprothetik",
    icon: "implant",
    title: "Implantatprothetik",
    short:
      "Individuelle implantatgetragene Lösungen, Custom Abutments und komplexe Versorgungen auf mehr als zehn verschiedenen Implantatsystemen.",
    h2: "Implantatprothetik",
    subheadline: "Individuelle Lösungen für implantatgetragenen Zahnersatz",
    image: "/img/labor/komprimiert/zahnmodell_1.jpg",
    body: [
      "Implantatprothetische Versorgungen verlangen präzise Planung, hohe Passgenauigkeit und eine enge Abstimmung zwischen Zahnarztpraxis und Dentallabor.",
      "Wir begleiten implantatprothetische Fälle von der Planung bis zur fertigen Versorgung und arbeiten mit mehr als zehn Implantatsystemen.",
      "Unser Spektrum reicht von individuellen Abutments bis zu komplexeren implantatgetragenen prothetischen Lösungen.",
    ],
    points: [
      "Custom Abutments",
      "implantatgetragene Restaurationen",
      "Straumann",
      "Nobel Biocare",
      "Thommen Medical",
      "Ankylos",
      "Zeramex",
      "weitere etablierte Implantatsysteme",
      "Keramikimplantate",
      "3D-Implantatplanung",
    ],
  },
  {
    slug: "vollkeramik",
    icon: "tooth",
    title: "Vollkeramik & Ästhetik",
    short:
      "Hochwertige vollkeramische Restaurationen mit Fokus auf natürliche Zahnästhetik, präzise Passung und zuverlässige Funktion.",
    h2: "Vollkeramik & ästhetische Zahntechnik",
    subheadline: "Natürlich wirkender Zahnersatz mit modernen Keramiken",
    image: "/img/labor/degoumois_2.jpg",
    body: [
      "Bei ästhetischen Restaurationen kommt es auf jedes Detail an. Zahnform, Oberflächenstruktur, Transluzenz und Farbwirkung müssen harmonisch zusammenspielen.",
      "Wir fertigen vollkeramische Lösungen mit modernen Materialien und kombinieren digitale Präzision mit zahntechnischem Feingefühl.",
    ],
    points: [
      "Kronen und Brücken – geschichtet und monolithisch",
      "Implantatkronen und -brücken",
      "Veneers",
      "Inlay/Overlay",
      "Maryland- und Klebebrücken",
      "Wurzelstiftkappen und Stiftaufbauten",
      "IPS e.max von Ivoclar",
      "GC-Keramiken",
      "Zirkonoxid",
      "Vita Enamic",
      "PMMA",
      "PEEK",
    ],
    note: "Für anspruchsvolle ästhetische Fälle bieten wir nach Absprache auch eine persönliche Farbbestimmung im Labor an.",
  },
  {
    slug: "prothetik",
    icon: "crown",
    title: "Allgemeine Prothetik",
    short:
      "Von Modellguss und Teilprothetik bis zu Fräs-, Geschiebe- und Teleskoptechnik – klassische Zahntechnik präzise und individuell umgesetzt.",
    h2: "Allgemeine Prothetik",
    subheadline: "Bewährte Zahntechnik für individuelle Versorgungen",
    image: "/img/labor/komprimiert/Degumois-09112013_0969_1.jpg",
    body: [
      "Neben digitalen Verfahren beherrschen wir das gesamte Spektrum klassischer Zahntechnik.",
      "Unsere erfahrenen Zahntechnikerinnen und Zahntechniker fertigen festsitzende und herausnehmbare prothetische Lösungen individuell nach den Anforderungen der jeweiligen Versorgung.",
    ],
    points: [
      "Frästechnik",
      "Geschiebetechnik",
      "Teleskoptechnik",
      "Modellguss und Teilprothetik",
      "Valplast/Nylon",
      "Totalprothetik mit individueller Anprobe am Patienten im Labor",
      "Gold-Verblendtechnik",
      "NEM-Verblendtechnik",
      "Lasertechnik mit Bego",
    ],
  },
  {
    slug: "digitaler-workflow",
    icon: "scan",
    title: "Digitaler Workflow",
    short:
      "Digitale Patientendaten und Intraoralscans direkt aus der Zahnarztpraxis ins Labor übertragen – für effiziente und durchgängige digitale Prozesse.",
    h2: "Digitaler Workflow für Zahnarztpraxen",
    subheadline: "Vom Intraoralscan direkt ins Dentallabor",
    image: "/img/labor/komprimiert/digitaler_workflow_1.1.2.jpg",
    body: [
      "Beginnend mit der Auftragserfassung über Condent erhalten wir Ihren digitalen Auftrag inklusive aller Daten, Fotos und Scans.",
      "Das bringt Vorteile für Praxis und Labor: eine chronologische, digitale Patientendokumentation, Chatten in Echtzeit und eine deutlich einfachere Kommunikation zwischen Zahnarztpraxis und Labor.",
      "Alles digital, alles in der Cloud – Swiss Made.",
    ],
    points: [
      "Condent",
      "Sirona Connect",
      "Verarbeitung von Intraoralscans",
      "digitale Patientendokumentation",
      "CAD/CAM-Konstruktion",
      "digitale Datenverarbeitung",
      "Datencontainer",
      "3D-Druck",
    ],
    link: { href: "https://www.condent.ch/de/", label: "Zur Condent Dentallabor-Software" },
  },
  {
    slug: "kieferorthopaedie",
    icon: "tooth",
    title: "Kieferorthopädie & Schienentherapie",
    short: "Kieferorthopädische Apparaturen, individuelle Schienen und umfassende Schienentherapie.",
    h2: "Kieferorthopädie & Schienentherapie",
    subheadline: "Apparaturen, Zahnspangen und individuelle Schienen",
    homepage: false,
    body: [],
    points: [
      "Individuelle Protrusionsschienen / Silensor / Schnarchschiene",
      "GNE analog und digital",
      "Herausnehmbare Zahnspangen",
      "Retainer digital und analog",
      "Herbstscharnier",
      "Schienentherapie",
      "Michiganschienen",
      "Knirsch- und Aufbissschienen",
      "Retentionsschienen",
      "Bleichschienen",
      "NTI-Schienen",
      "Sportschutzschienen",
      "Bohrschablonen",
    ],
  },
  {
    slug: "beratung-service",
    icon: "support",
    title: "Beratung & Service",
    short:
      "Farbbestimmung, Fallplanung, Kostenberechnung, Dokumentation und eigener Kurierdienst: persönliche Unterstützung weit über die reine Fertigung hinaus.",
    h2: "Beratung und zahntechnischer Service",
    subheadline: "Mehr als reine Fertigung",
    image: "/img/labor/farbbestimmung_2.jpg",
    body: [
      "Zahntechnik funktioniert am besten als Zusammenarbeit.",
      "Deshalb unterstützen wir Zahnarztpraxen bereits bei der Planung komplexer Fälle und stehen während des gesamten Prozesses als persönlicher Ansprechpartner zur Verfügung.",
    ],
    points: [
      "persönliche Planbesprechungen",
      "Farbbestimmung im Labor mit professioneller Fotodokumentation",
      "individuelle Anprobe und Anpassung im Labor",
      "Falldokumentationen",
      "detaillierte Kostenberechnungen",
      "Variantenplanung",
      "3D-Implantatplanung",
      "professioneller Patientenraum mit Wartebereich",
      "flexible Unterstützung bei kurzfristigen Abgabeterminen",
      "eigener Kurierdienst in der Region Solothurn und Bern",
    ],
  },
];
