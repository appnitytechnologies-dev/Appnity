import { Link } from 'react-router-dom';
import AuthorChip from '../AuthorChip/AuthorChip';
import CategoryBadge from '../CategoryBadge/CategoryBadge';
import { truncate } from '../../../utils/text';
import './PostCard.css';

export default function PostCard({ post }) {
  return (
    <Link className="post-card" to={`/blog/${post.slug}`}>
      <div
        className="post-card__accent-bar"
        style={{ background: `linear-gradient(90deg, ${post.accent}, ${post.accent}88)` }}
      />
      <div className="post-card__body">
        <div className="post-card__header">
          <CategoryBadge cat={post.cat} accent={post.accent} />
          <span className="post-card__read">{post.read}</span>
        </div>
        <h3 className="post-card__title">{post.title}</h3>
        <p className="post-card__excerpt">{truncate(post.excerpt, 120)}</p>
        <div className="post-card__footer">
          <AuthorChip post={post} />
          <span className="post-card__date">{post.date}</span>
        </div>
      </div>
    </Link>
  );
}
