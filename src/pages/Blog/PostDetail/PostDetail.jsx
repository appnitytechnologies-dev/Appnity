import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../../../components/layout/NavBar/NavBar';
import CtaBanner from '../../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../../components/layout/Footer/Footer';
import { Icons } from '../../../components/ui/Icons';
import { POSTS } from '../../../constants/blog';
import BodyBlock from './BodyBlock/BodyBlock';
import './PostDetail.css';

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <>
        <NavBar />
        <div className="post-detail-notfound">
          <h1 className="post-detail-notfound__title">Article not found.</h1>
          <button className="post-detail-notfound__btn" onClick={() => navigate('/blog')}>
            Back to Blog
          </button>
        </div>
        <Footer />
      </>
    );
  }

  const related = POSTS.filter(p => p.cat === post.cat && p.id !== post.id).slice(0, 2);

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="post-detail-hero">
        <div
          className="post-detail-hero__blob"
          style={{ background: `radial-gradient(circle, ${post.accent}18, transparent 60%)` }}
        />
        <div className="post-detail-hero__container">
          <button className="post-detail-hero__back" onClick={() => navigate('/blog')}>
            <span className="post-detail-hero__back-arrow"><Icons.Arrow width="14" height="14" /></span>
            Back to Blog
          </button>

          <div className="post-detail-hero__meta">
            <span
              className="post-detail-hero__cat"
              style={{ background: `${post.accent}15`, color: post.accent }}
            >
              {post.cat}
            </span>
            <span className="post-detail-hero__date">{post.date}</span>
            <span className="post-detail-hero__sep">·</span>
            <span className="post-detail-hero__read">{post.read}</span>
          </div>

          <h1 className="post-detail-hero__title">{post.title}</h1>
          <p className="post-detail-hero__excerpt">{post.excerpt}</p>

          <div className="post-detail-hero__author">
            <div
              className="post-detail-hero__author-avatar"
              style={{ background: `${post.accent}20`, color: post.accent }}
            >
              {post.init}
            </div>
            <div>
              <div className="post-detail-hero__author-name">{post.author}</div>
              <div className="post-detail-hero__author-role">{post.role} · Appnity Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="post-detail__divider-wrap">
        <div className="post-detail__divider" />
      </div>

      {/* Article body */}
      <section className="post-detail-body">
        <div className="post-detail-body__container">
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          <div className="post-detail-body__cta">
            <div>
              <div className="post-detail-body__cta-title">Ready to build something great?</div>
              <div className="post-detail-body__cta-desc">Talk to our team — we reply within 24 hours.</div>
            </div>
            <button className="post-detail-body__cta-btn" onClick={() => navigate('/contact')}>
              Get In Touch <Icons.Arrow width="14" height="14" />
            </button>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="post-detail-related">
          <div className="post-detail-related__container">
            <div className="post-detail-related__label">More in {post.cat}</div>
            <div
              className="post-detail-related__grid"
              style={{ gridTemplateColumns: `repeat(${related.length}, 1fr)` }}
            >
              {related.map(r => (
                <div
                  key={r.id}
                  className="post-detail-related__card"
                  onClick={() => navigate(`/blog/${r.id}`)}
                >
                  <span
                    className="post-detail-related__card-cat"
                    style={{ background: `${r.accent}15`, color: r.accent }}
                  >
                    {r.cat}
                  </span>
                  <div className="post-detail-related__card-title">{r.title}</div>
                  <div className="post-detail-related__card-link" style={{ color: r.accent }}>
                    Read article <Icons.Arrow width="13" height="13" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
      <Footer />
    </>
  );
}
