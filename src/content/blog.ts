/**
 * Articolele de blog.
 * Textele reale urmează; structura este pregătită — adaugă un obiect nou aici
 * și pagina `/blog/<slug>` apare automat, împreună cu secțiunea de întrebări.
 */
export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Paragrafele articolului, în ordine. */
  body: string[];
};

export const posts: BlogPost[] = [];

export function findPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
