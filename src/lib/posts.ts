import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  sponsorName?: string;
  content: string;
}

// Vite loads all .md files in src/posts/ as raw strings at build time.
// Nothing is fetched at runtime — the result is baked into the static bundle.
const rawFiles = import.meta.glob('../posts/*.md', {
  query: '?raw',
  eager: true,
}) as Record<string, { default: string }>;

export const posts: Post[] = Object.entries(rawFiles)
  .map(([path, mod]) => {
    const { data, content } = matter(mod.default);
    const slug =
      typeof data.slug === 'string'
        ? data.slug
        : path.replace(/^.*\//, '').replace(/\.md$/, '');
    return {
      slug,
      title: typeof data.title === 'string' ? data.title : slug,
      date: data.date ? String(data.date).slice(0, 10) : '',
      category: typeof data.category === 'string' ? data.category : 'Update',
      sponsorName:
        typeof data.sponsorName === 'string' ? data.sponsorName : undefined,
      content: content.trim(),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
