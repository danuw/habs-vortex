export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  sponsorName?: string;
  content: string;
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };
  const data: Record<string, string> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':');
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const val = line.slice(colon + 1).trim().replace(/^["']|["']$/g, '');
    if (key) data[key] = val;
  }
  return { data, content: match[2] };
}

const rawFiles = import.meta.glob('../posts/*.md', {
  query: '?raw',
  eager: true,
}) as Record<string, { default: string }>;

export const posts: Post[] = Object.entries(rawFiles)
  .map(([path, mod]) => {
    const { data, content } = parseFrontmatter(mod.default);
    const slug =
      data.slug ??
      path.replace(/^.*\//, '').replace(/\.md$/, '');
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ? data.date.slice(0, 10) : '',
      category: data.category ?? 'Update',
      sponsorName: data.sponsorName ?? undefined,
      content: content.trim(),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
