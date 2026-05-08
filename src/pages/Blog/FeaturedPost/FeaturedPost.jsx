import { useNavigate } from 'react-router-dom';
import { Icons } from '../../../components/ui/Icons';
import AuthorChip from '../AuthorChip/AuthorChip';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import './FeaturedPost.css';

export default function FeaturedPost({ post }) {
  const navigate = useNavigate();

  return (
    <div className="featured-post">
      <div
        className="featured-post__visual"
        style={{ background: `linear-gradient(135deg, ${post.accent}18 0%, ${post.accent}35 100%)` }}
      >
        <div
          className="featured-post__visual-blob"
          style={{ background: `${post.accent}20` }}
        />
        <div className="featured-post__visual-inner">
          <div
            className="featured-post__visual-icon"
            style={{ background: post.accent, boxShadow: `0 12px 32px ${post.accent}50` }}
          >
            <Icons.Mobile width="38" height="38" style={{ color: '#fff' }} />
          </div>
          <div
            className="featured-post__visual-label"
            style={{ color: post.accent }}
          >
            Featured Article
          </div>
        </div>
      </div>

      <div className="featured-post__content">
        <div>
          <div className="featured-post__meta">
            <CategoryBadge cat={post.cat} accent={post.accent} />
            <span className="featured-post__meta-date">{post.date}</span>
            <span className="featured-post__meta-sep">·</span>
            <span className="featured-post__meta-read">{post.read}</span>
          </div>
          <h2 className="featured-post__title">{post.title}</h2>
          <p className="featured-post__excerpt">{post.excerpt}</p>
        </div>
        <div className="featured-post__footer">
          <AuthorChip post={post} />
          <button
            className="featured-post__btn"
            style={{ background: post.accent, boxShadow: `0 4px 14px ${post.accent}40` }}
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            Read article <Icons.Arrow width="13" height="13" />
          </button>
        </div>
      </div>
    </div>
  );
}
