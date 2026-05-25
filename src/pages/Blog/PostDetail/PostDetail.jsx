import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NavBar from '../../../components/layout/NavBar/NavBar';
import CtaBanner from '../../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../../components/layout/Footer/Footer';
import { Icons } from '../../../components/ui/Icons';
import SEO from '../../../components/ui/SEO/SEO';
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

  const desc = post.excerpt.length > 155 ? post.excerpt.slice(0, 152) + '…' : post.excerpt;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: desc,
    image: {
      '@type': 'ImageObject',
      url: 'https://appnitytechnologies.com/og-image.png',
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Appnity Technologies',
      logo: {
        '@type': 'ImageObject',
        url: 'https://appnitytechnologies.com/Logo%20SVG%20New.svg',
        width: 200,
        height: 60,
      },
    },
    datePublished: new Date(post.date).toISOString().split('T')[0],
    dateModified: new Date(post.date).toISOString().split('T')[0],
    url: `https://appnitytechnologies.com/blog/${post.id}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://appnitytechnologies.com/blog/${post.id}`,
    },
  };

  return (
    <>
      <SEO
        title={post.title}
        description={desc}
        path={`/blog/${post.id}`}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>
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
            <div className="post-detail-hero__author-dot" style={{ background: post.accent }} />
            <span className="post-detail-hero__author-role">{post.role} · Appnity Technologies</span>
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
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                  className="post-detail-related__card"
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
                </Link>
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
