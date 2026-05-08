import './AuthorChip.css';

export default function AuthorChip({ post }) {
  return (
    <div className="author-chip">
      <div
        className="author-chip__avatar"
        style={{ background: `${post.accent}22`, color: post.accent }}
      >
        {post.init}
      </div>
      <div>
        <div className="author-chip__name">{post.author}</div>
        <div className="author-chip__role">{post.role}</div>
      </div>
    </div>
  );
}
