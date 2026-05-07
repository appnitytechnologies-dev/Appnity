import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import CtaBanner from '../../components/layout/CtaBanner';
import Footer from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { POSTS, BLOG_CATS } from '../../constants/blog';
import { useResponsive } from '../../hooks/useResponsive';

function AuthorChip({ post }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{
        width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
        background: `${post.accent}22`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, fontWeight: 700, color: post.accent,
        fontFamily: BRAND.display,
      }}>
        {post.init}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: BRAND.ink }}>{post.author}</div>
        <div style={{ fontSize: 11, color: BRAND.inkMute }}>{post.role}</div>
      </div>
    </div>
  );
}

function CategoryBadge({ cat, accent }) {
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, padding: '4px 10px',
      borderRadius: 999, background: `${accent}15`, color: accent,
      letterSpacing: '0.04em', textTransform: 'uppercase',
    }}>
      {cat}
    </span>
  );
}

function FeaturedPost({ post }) {
  const navigate = useNavigate();
  const { isMobile } = useResponsive();

  return (
    <div style={{
      borderRadius: 20, overflow: 'hidden',
      background: '#fff', border: `1px solid ${BRAND.border}`,
      boxShadow: BRAND.shadowLg,
      display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.1fr',
    }}>
      {/* Top — visual (left on desktop, top on mobile) */}
      <div style={{
        background: `linear-gradient(135deg, ${post.accent}18 0%, ${post.accent}35 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: isMobile ? 180 : 340, position: 'relative', overflow: 'hidden',
        padding: 48,
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 240, height: 240, borderRadius: '50%',
          background: `${post.accent}20`, filter: 'blur(40px)',
        }} />
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{
            width: 80, height: 80, borderRadius: 20, margin: '0 auto',
            background: post.accent, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 12px 32px ${post.accent}50`,
          }}>
            <Icons.Mobile width="38" height="38" style={{ color: '#fff' }} />
          </div>
          <div style={{
            marginTop: 24, fontSize: 13, fontWeight: 600,
            color: post.accent, letterSpacing: '0.08em', textTransform: 'uppercase',
          }}>
            Featured Article
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: isMobile ? '28px 24px' : '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
            <CategoryBadge cat={post.cat} accent={post.accent} />
            <span style={{ fontSize: 12, color: BRAND.inkSubtle }}>{post.date}</span>
            <span style={{ fontSize: 12, color: BRAND.inkSubtle }}>·</span>
            <span style={{ fontSize: 12, color: BRAND.inkSubtle }}>{post.read}</span>
          </div>
          <h2 style={{
            fontSize: isMobile ? 24 : 32, fontFamily: BRAND.display, fontWeight: 700,
            letterSpacing: '-0.025em', lineHeight: 1.2, color: BRAND.ink,
          }}>
            {post.title}
          </h2>
          <p style={{ marginTop: 16, fontSize: 15, color: BRAND.inkMute, lineHeight: 1.65 }}>
            {post.excerpt}
          </p>
        </div>
        <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <AuthorChip post={post} />
          <button
            onClick={() => navigate(`/blog/${post.id}`)}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '10px 18px', borderRadius: 10, border: 0,
              fontSize: 13, fontWeight: 600, cursor: 'pointer',
              color: '#fff', background: post.accent, fontFamily: BRAND.body,
              boxShadow: `0 4px 14px ${post.accent}40`,
              transition: 'transform .15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
          >
            Read article <Icons.Arrow width="13" height="13" />
          </button>
        </div>
      </div>
    </div>
  );
}

function PostCard({ post, onRead }) {
  return (
    <div
      onClick={onRead}
      style={{
        borderRadius: 16, overflow: 'hidden',
        background: '#fff', border: `1px solid ${BRAND.border}`,
        display: 'flex', flexDirection: 'column',
        transition: 'transform .2s, box-shadow .2s, border-color .2s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; e.currentTarget.style.borderColor = BRAND.paperEdge; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = BRAND.border; }}
    >
      <div style={{
        height: 6,
        background: `linear-gradient(90deg, ${post.accent}, ${post.accent}88)`,
      }} />

      <div style={{ padding: '24px 26px 28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <CategoryBadge cat={post.cat} accent={post.accent} />
          <span style={{ fontSize: 11, color: BRAND.inkSubtle, marginLeft: 'auto' }}>{post.read}</span>
        </div>

        <h3 style={{
          fontSize: 18, fontFamily: BRAND.display, fontWeight: 700,
          letterSpacing: '-0.02em', lineHeight: 1.3, color: BRAND.ink,
          flex: 1,
        }}>
          {post.title}
        </h3>

        <p style={{ marginTop: 12, fontSize: 13.5, color: BRAND.inkMute, lineHeight: 1.6, flex: 1 }}>
          {post.excerpt.substring(0, 120)}…
        </p>

        <div style={{ marginTop: 24, paddingTop: 18, borderTop: `1px solid ${BRAND.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <AuthorChip post={post} />
          <span style={{ fontSize: 11, color: BRAND.inkSubtle }}>{post.date}</span>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const navigate = useNavigate();
  const [activecat, setActivecat] = useState('All');
  const { isMobile, isTablet } = useResponsive();

  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured);
  const filtered = activecat === 'All' ? rest : rest.filter(p => p.cat === activecat);

  const cols = isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)';
  const pad = isMobile ? '0 20px' : '0 64px';

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section style={{ padding: isMobile ? '40px 20px 36px' : '64px 64px 48px', position: 'relative', overflow: 'hidden' }}>
        <div className="ap-dot-bg" style={{
          position: 'absolute', inset: 0,
          maskImage: 'radial-gradient(ellipse at 40% 0%, #000 25%, transparent 65%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 40% 0%, #000 25%, transparent 65%)',
        }} />
        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
                fontSize: 12, fontWeight: 500, color: BRAND.inkMute,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Insights & Articles
              </div>
              <h1 style={{
                fontSize: isMobile ? 44 : 72, marginTop: 20, letterSpacing: '-0.035em',
                fontWeight: 800, fontFamily: BRAND.display, lineHeight: 1.05, color: BRAND.ink,
              }}>
                The Appnity Blog.<br />
                <span style={{ background: BRAND.grad, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
                  Ideas that build businesses.
                </span>
              </h1>
              <p style={{ marginTop: 22, fontSize: isMobile ? 15 : 18, color: BRAND.inkMute, maxWidth: 560, lineHeight: 1.6 }}>
                Practical insights on mobile development, web technology, design,
                digital marketing, and cloud — from our team to yours.
              </p>
            </div>
            {!isMobile && (
              <button
                onClick={() => navigate('/contact')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '12px 20px', borderRadius: 10, border: 0,
                  fontSize: 14, fontWeight: 600, cursor: 'pointer',
                  color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
                  boxShadow: '0 6px 20px rgba(11,31,58,0.18)',
                  transition: 'transform .15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
              >
                Work with us <Icons.Arrow width="14" height="14" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section style={{ padding: isMobile ? '0 20px 48px' : '0 64px 64px' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto' }}>
            <FeaturedPost post={featured} />
          </div>
        </section>
      )}

      {/* Category filters */}
      <section style={{ padding: `0 ${isMobile ? '20px' : '64px'} 28px` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {BLOG_CATS.map(c => (
            <button
              key={c}
              onClick={() => setActivecat(c)}
              style={{
                padding: '10px 18px', borderRadius: 999, fontSize: 13, fontWeight: 500,
                background: activecat === c ? BRAND.ink : '#fff',
                color: activecat === c ? '#fff' : BRAND.ink,
                border: `1px solid ${activecat === c ? BRAND.ink : BRAND.border}`,
                cursor: 'pointer', transition: 'all .15s', fontFamily: BRAND.body,
              }}
            >
              {c}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 13, color: BRAND.inkMute, alignSelf: 'center' }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      {/* Posts grid */}
      <section style={{ padding: `0 ${isMobile ? '20px' : '64px'} 96px` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          {filtered.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: cols, gap: 20 }}>
              {filtered.map(post => (
                <PostCard key={post.id} post={post} onRead={() => navigate(`/blog/${post.id}`)} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0', color: BRAND.inkMute, fontSize: 15 }}>
              No articles in this category yet. Check back soon.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter strip */}
      <section style={{ padding: `0 ${isMobile ? '20px' : '64px'} 96px` }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{
            borderRadius: 20, padding: isMobile ? '36px 24px' : '52px 64px',
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 48, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '6px 12px 6px 8px', borderRadius: 999,
                background: '#fff', border: `1px solid ${BRAND.border}`,
                fontSize: 12, fontWeight: 500, color: BRAND.inkMute, marginBottom: 16,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: 999, background: BRAND.grad }} /> Stay updated
              </div>
              <h2 style={{ fontSize: isMobile ? 28 : 36, fontFamily: BRAND.display, fontWeight: 700, letterSpacing: '-0.025em', color: BRAND.ink }}>
                Have a project in mind?
              </h2>
              <p style={{ marginTop: 10, fontSize: 15, color: BRAND.inkMute, maxWidth: 440, lineHeight: 1.6 }}>
                We publish new insights every week. Meanwhile, if you'd like to discuss
                how we can help your business grow digitally — let's talk.
              </p>
            </div>
            <button
              onClick={() => navigate('/contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '14px 24px', borderRadius: 10, border: 0,
                fontSize: 15, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                color: '#fff', background: BRAND.grad, fontFamily: BRAND.body,
                boxShadow: BRAND.shadowGlow, transition: 'transform .15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
            >
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
