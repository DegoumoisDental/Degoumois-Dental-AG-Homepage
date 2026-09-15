import { useStoryblokApi } from "@storyblok/astro";

export interface NewsPost {
  slug: string;
  title: string;
  date: Date;
  category: string;
  excerpt: string;
  cover?: string;
  coverAlt?: string;
  content: unknown; // Storyblok-Richtext
}

/** Alle veröffentlichten News aus Storyblok, neueste zuerst. */
export async function getNews(): Promise<NewsPost[]> {
  const sb = useStoryblokApi();
  const { data } = await sb.get("cdn/stories", {
    starts_with: "news/",
    version: "published",
    per_page: 100,
  });
  return (data.stories as any[])
    .filter((s) => !s.is_folder)
    .map((s) => {
      const c = s.content;
      return {
        slug: s.slug as string,
        title: c.title as string,
        date: new Date(String(c.date || "").replace(" ", "T")),
        category: c.category as string,
        excerpt: c.excerpt as string,
        cover: c.cover?.filename || undefined,
        coverAlt: c.coverAlt || undefined,
        content: c.content,
      } satisfies NewsPost;
    })
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
