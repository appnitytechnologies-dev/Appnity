import './CategoryBadge.css';

export default function CategoryBadge({ cat, accent }) {
  return (
    <span
      className="category-badge"
      style={{ background: `${accent}15`, color: accent }}
    >
      {cat}
    </span>
  );
}
