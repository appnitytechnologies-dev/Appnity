import './AuthorChip.css';

export default function AuthorChip({ post }) {
  return (
    <div className="author-chip">
      <div className="author-chip__dot" style={{ background: post.accent }} />
      <span className="author-chip__role">{post.role}</span>
    </div>
  );
}
