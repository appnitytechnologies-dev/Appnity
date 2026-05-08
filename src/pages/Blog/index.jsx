import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar/NavBar';
import CtaBanner from '../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../components/layout/Footer/Footer';
import { Icons } from '../../components/ui/Icons';
import { POSTS, BLOG_CATS } from '../../constants/blog';
import FeaturedPost from './FeaturedPost/FeaturedPost';
import PostCard from './PostCard/PostCard';
import './Blog.css';

export default function BlogPage() {
  const navigate = useNavigate();
  const [activecat, setActivecat] = useState('All');

  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  const filtered = activecat === 'All' ? rest : rest.filter(p => p.cat === activecat);

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section className="blog-hero">
        <div className="ap-dot-bg blog-hero__dots" />
        <div className="blog-hero__container">
          <div>
            <div className="blog-hero__badge">
              <span className="blog-hero__badge-dot" />
              Insights &amp; Articles
            </div>
            <h1 className="blog-hero__title">
              The Appnity Blog.<br />
              <span className="blog-hero__title-gradient">Ideas that build businesses.</span>
            </h1>
            <p className="blog-hero__desc">
              Practical insights on mobile development, web technology, design,
              digital marketing, and cloud — from our team to yours.
            </p>
          </div>
          <button className="blog-hero__btn" onClick={() => navigate('/contact')}>
            Work with us <Icons.Arrow width="14" height="14" />
          </button>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="blog-featured">
          <div className="blog-featured__container">
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* Category filters */}
      <section className="blog-filters">
        <div className="blog-filters__container">
          {BLOG_CATS.map(c => (
            <button
              key={c}
              onClick={() => setActivecat(c)}
              className={`blog-filters__btn${activecat === c ? ' blog-filters__btn--active' : ''}`}
            >
              {c}
            </button>
          ))}
          <span className="blog-filters__count">
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Posts grid */}
      <section className="blog-grid">
        <div className="blog-grid__container">
          {filtered.length > 0 ? (
            <div className="blog-grid__posts">
              {filtered.map(post => (
                <PostCard key={post.id} post={post} onRead={() => navigate(`/blog/${post.id}`)} />
              ))}
            </div>
          ) : (
            <div className="blog-grid__empty">
              No articles in this category yet. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="blog-newsletter">
        <div className="blog-newsletter__container">
          <div className="blog-newsletter__card">
            <div>
              <div className="blog-newsletter__badge">
                <span className="blog-newsletter__badge-dot" />
                Stay updated
              </div>
              <h2 className="blog-newsletter__title">Have a project in mind?</h2>
              <p className="blog-newsletter__desc">
                We publish new insights every week. Meanwhile, if you'd like to discuss
                how we can help your business grow digitally — let's talk.
              </p>
            </div>
            <button className="blog-newsletter__btn" onClick={() => navigate('/contact')}>
              Get In Touch <Icons.Arrow width="14" height="14" />
            </button>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}
