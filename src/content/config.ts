import { defineCollection, z } from "astro:content";

/**
 * News / Aktuelles — wird vom Team über das CMS (/admin) gepflegt.
 * Jeder Artikel ist eine Markdown-Datei unter src/content/news/.
 */
const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Kategorie steuert Filter/Badge auf der News-Seite
    category: z.enum(["Firmenanlass", "Lehrabgänger", "Auszeichnung", "Technologie", "Sponsoring"]),
    excerpt: z.string(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/**
 * Team — optional ebenfalls über das CMS pflegbar.
 */
const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(100),
    photo: z.string().optional(),
    photoZoom: z.number().optional(),
    lead: z.boolean().default(false),
  }),
});

export const collections = { news, team };
