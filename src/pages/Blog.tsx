import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase, type Post } from '../lib/supabase';

const CATEGORY_COLORS: Record<string, string> = {
  'Competition Update': '#4a7fc1',
  'Sponsor Spotlight':  '#e0a520',
  'Build Update':       '#9dc928',
  'Team News':          '#3ab8e0',
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function excerpt(content: string, max = 160) {
  const trimmed = content.trim();
  return trimmed.length <= max ? trimmed : trimmed.slice(0, max).trimEnd() + '…';
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase
      .from('posts')
      .select('id,title,slug,content,category,sponsor_name,published_at')
      .order('published_at', { ascending: false })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else setPosts(data ?? []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page">
      <section className="page-header">
        <h1>Blog</h1>
        <p>Competition updates, team news, and sponsor spotlights from HABS Vortex.</p>
      </section>

      <section className="section-wrap">
        {loading && (
          <div className="blog-state">Loading posts&hellip;</div>
        )}

        {error && (
          <div className="blog-state blog-state--error">
            Could not load posts. Please try again later.
          </div>
        )}

        {!loading && !error && posts.length === 0 && (
          <div className="blog-state">No posts yet &mdash; check back soon!</div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="blog-grid">
            {posts.map(post => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className={`blog-card${post.category === 'Sponsor Spotlight' ? ' blog-card--sponsor' : ''}`}
              >
                {post.category === 'Sponsor Spotlight' && post.sponsor_name && (
                  <div className="blog-sponsor-banner">
                    <span className="blog-sponsor-label">Sponsor Spotlight</span>
                    <span className="blog-sponsor-name">{post.sponsor_name}</span>
                  </div>
                )}

                <div className="blog-card-body">
                  <div className="blog-card-meta">
                    <span
                      className="blog-category-badge"
                      style={{ background: CATEGORY_COLORS[post.category] ?? '#4a7fc1' }}
                    >
                      {post.category}
                    </span>
                    <span className="blog-date">{formatDate(post.published_at)}</span>
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{excerpt(post.content)}</p>
                </div>

                <div className="blog-card-footer">
                  <span className="blog-read-more">Read more &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
