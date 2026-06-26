import { config, collection, fields } from "@keystatic/core";

const isProduction = process.env.NODE_ENV === "production";

export default config({
  storage: isProduction
    ? {
        kind: "github",
        repo: {
          owner: "DegoumoisDental",
          name:  "website",
        },
      }
    : { kind: "local" },

  ui: {
    brand: {
      name: "Degoumois Dental AG",
    },
  },
  collections: {
    news: collection({
      label: "News & Aktuelles",
      slugField: "title",
      path: "src/content/news/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: { label: "Titel" },
        }),
        date: fields.date({
          label: "Datum",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Kategorie",
          options: [
            { label: "Firmenanlass", value: "Firmenanlass" },
            { label: "Lehrabgänger", value: "Lehrabgänger" },
            { label: "Auszeichnung", value: "Auszeichnung" },
            { label: "Technologie", value: "Technologie" },
            { label: "Sponsoring", value: "Sponsoring" },
          ],
          defaultValue: "Firmenanlass",
        }),
        excerpt: fields.text({
          label: "Zusammenfassung",
          multiline: true,
          description: "1–2 Sätze für die News-Übersicht",
          validation: { isRequired: true, length: { min: 10 } },
        }),
        cover: fields.image({
          label: "Titelbild",
          directory: "public/img/news",
          publicPath: "/img/news/",
        }),
        coverAlt: fields.text({
          label: "Bild-Beschreibung",
          description: "Kurze Bildbeschreibung für Barrierefreiheit",
        }),
        draft: fields.checkbox({
          label: "Entwurf (nicht öffentlich)",
          defaultValue: false,
        }),
        content: fields.markdownEditor({
          label: "Inhalt",
        }),
      },
    }),
  },
});
