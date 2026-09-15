import { defineCollection, z } from "astro:content";

/**
 * News / Aktuelles werden über Storyblok gepflegt (Online-CMS mit eigenen Logins),
 * nicht mehr als Markdown – siehe src/lib/news.ts.
 *
 * Team — als Markdown unter src/content/team/ (direkt auf GitHub bearbeitbar).
 */
const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(100),
    photo: z.string().optional(),
    photoZoom: z.number().optional(),
    photoScale: z.number().optional(),
    email: z.string().email().optional(),
    lead: z.boolean().default(false),
    vitae: z.array(z.string()).optional(),
    quote: z.string().optional(),
    quoteAuthor: z.string().optional(),
  }),
});

export const collections = { team };
