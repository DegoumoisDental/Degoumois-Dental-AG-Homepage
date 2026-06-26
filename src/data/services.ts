/** Fachgebiete / Leistungen – zentral gepflegt, genutzt auf Start- und Leistungsseite. */
export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  points: string[];
  icon: string; // Key für das Icon-Set in components/Icon.astro
}

export const services: Service[] = [
  {
    slug: "cad-cam",
    title: "CAD/CAM-Technologie",
    short: "Hochpräzise digitale Konstruktion und Fertigung.",
    description:
      "Modernste CAD/CAM-Technologie für Zirkon, Aluminiumoxid und Titan – auf mehreren Systemen für maximale Flexibilität.",
    points: ["Etkon / Straumann", "Zenotec Wieland", "inLab Sirona", "3D-Druck (NextDent 5100, Anycubic)"],
    icon: "cube",
  },
  {
    slug: "implantatprothetik",
    title: "Implantatprothetik",
    short: "Kompetenz mit über 10 Implantatsystemen.",
    description:
      "Von individuellen Abutments bis zur komplexen implantatgetragenen Versorgung – kompetent über alle gängigen Systeme hinweg.",
    points: ["Custom Abutments", "Straumann, Nobel Biocare, Zeramex", "Keramikimplantate", "3D-Implantatplanung"],
    icon: "implant",
  },
  {
    slug: "vollkeramik",
    title: "Vollkeramik & Ästhetik",
    short: "Natürliche Ästhetik mit modernsten Keramiken.",
    description:
      "Vollkeramische Restaurationen, die in Ästhetik und Funktion keine Wünsche offen lassen.",
    points: ["IPS e.max (Ivoclar) & GC", "Zirkonoxid", "Vita Enamic", "Telio CAD, PEEK"],
    icon: "tooth",
  },
  {
    slug: "prothetik",
    title: "Allgemeine Prothetik",
    short: "Bewährtes Handwerk in allen Disziplinen.",
    description:
      "Das ganze Spektrum klassischer Zahntechnik – präzise umgesetzt von erfahrenen Spezialistinnen und Spezialisten.",
    points: ["Fräs-, Geschiebe- & Teleskoptechnik", "Modellguss- & Totalprothetik", "Gold- & NEM-Verblendtechnik", "Lasertechnik (Bego)"],
    icon: "crown",
  },
  {
    slug: "digitaler-workflow",
    title: "Digitaler Workflow",
    short: "Nahtlos von der Praxis ins Labor.",
    description:
      "Senden Sie uns Ihre Daten direkt aus der Intraoralkamera – wir arbeiten mit vollständig digitalisierten Patienten.",
    points: ["Sirona Connect", "Intraoral-Scanning", "Digitale Patientendokumentation", "Datenverarbeitung & Datencontainer"],
    icon: "scan",
  },
  {
    slug: "beratung-service",
    title: "Beratung & Service",
    short: "Spürbare Entlastung im Praxisalltag.",
    description:
      "Erfahrung und Kompetenz seit über 50 Jahren – mit einem Service, der weit über die reine Fertigung hinausgeht.",
    points: ["Farbbestimmung im Labor oder in der Praxis", "Falldokumentationen & Kostenberechnungen", "Eigener Kurierdienst", "Planbesprechungen mit Zahnärzten"],
    icon: "support",
  },
];
