import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { getPost } from '../lib/posts';

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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return (
      <div className="page">
        <div className="page-header">
          <h1>Post Not Found</h1>
          <p>This post doesn&rsquo;t exist or may have been removed.</p>
        </div>
        <div className="section-wrap" style={{ textAlign: 'center', paddingTop: 40 }}>
          <Link to="/blog" className="btn btn-outline">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      {post.category === 'Sponsor Spotlight' && post.sponsorName && (
        <div className="post-sponsor-hero">
          <span className="blog-sponsor-label">Sponsor Spotlight</span>
          <h2 className="post-sponsor-title">{post.sponsorName}</h2>
          <p className="post-sponsor-sub">Official partner of HABS Vortex</p>
        </div>
      )}

      <article className="post-wrap">
        <Link to="/blog" className="post-back">&larr; Back to Blog</Link>

        <div className="post-meta">
          <span
            className="blog-category-badge"
            style={{ background: CATEGORY_COLORS[post.category] ?? '#4a7fc1' }}
          >
            {post.category}
          </span>
          <span className="blog-date">{formatDate(post.date)}</span>
        </div>

        <h1 className="post-title">{post.title}</h1>

        <div className="post-content">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <div className="post-footer-nav">
          <Link to="/blog" className="btn btn-outline">Back to Blog</Link>
        </div>
      </article>
    </div>
  );
}
