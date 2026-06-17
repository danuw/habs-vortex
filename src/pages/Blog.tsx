import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';

const CATEGORY_COLORS: Record<string, string> = {
  'Competition Update': '#4a7fc1',
  'Sponsor Spotlight':  '#e0a520',
  'Build Update':       '#9dc928',
  'Team News':          '#3ab8e0',
};

function formatDate(iso: string) {
  if (!iso) return '';
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
  return (
    <div className="page">
      <section className="page-header">
        <h1>Blog</h1>
        <p>Competition updates, team news, and sponsor spotlights from HABS Vortex.</p>
      </section>

      <section className="section-wrap">
        {posts.length === 0 && (
          <div className="blog-state">No posts yet &mdash; check back soon!</div>
        )}

        {posts.length > 0 && (
          <div className="blog-grid">
            {posts.map(post => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className={`blog-card${post.category === 'Sponsor Spotlight' ? ' blog-card--sponsor' : ''}`}
              >
                {post.category === 'Sponsor Spotlight' && post.sponsorName && (
                  <div className="blog-sponsor-banner">
                    <span className="blog-sponsor-label">Sponsor Spotlight</span>
                    <span className="blog-sponsor-name">{post.sponsorName}</span>
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
                    <span className="blog-date">{formatDate(post.date)}</span>
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
