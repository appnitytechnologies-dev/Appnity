import { useParams, useNavigate } from 'react-router-dom';
import NavBar from '../../components/layout/NavBar';
import CtaBanner from '../../components/layout/CtaBanner';
import Footer from '../../components/layout/Footer';
import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';
import { POSTS } from '../../constants/blog';
import { useResponsive } from '../../hooks/useResponsive';

function BodyBlock({ block }) {
  if (block.type === 'h3') {
    return (
      <h3 style={{
        fontSize: 22, fontFamily: BRAND.display, fontWeight: 700,
        color: BRAND.ink, letterSpacing: '-0.02em',
        marginTop: 40, marginBottom: 14,
      }}>
        {block.text}
      </h3>
    );
  }
  if (block.type === 'list') {
    return (
      <ul style={{ margin: '16px 0', paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {block.items.map((item, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: 17, color: BRAND.inkMute, lineHeight: 1.65 }}>
            <div style={{
              width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 2,
              background: BRAND.gradSoft, color: BRAND.purple,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icons.Check width="12" height="12" />
            </div>
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p style={{ fontSize: 17, color: BRAND.inkMute, lineHeight: 1.75, margin: '16px 0' }}>
      {block.text}
    </p>
  );
}

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isMobile } = useResponsive();
  const post = POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <>
        <NavBar />
        <div style={{ padding: isMobile ? '80px 20px' : '120px 64px', textAlign: 'center' }}>
          <h1 style={{ fontFamily: BRAND.display, fontSize: isMobile ? 36 : 48, color: BRAND.ink }}>Article not found.</h1>
          <button onClick={() => navigate('/blog')} style={{ marginTop: 24, padding: '12px 20px', borderRadius: 10, border: `1px solid ${BRAND.border}`, background: '#fff', cursor: 'pointer', fontFamily: BRAND.body, fontSize: 14, fontWeight: 600, color: BRAND.ink }}>
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
      <section style={{ padding: isMobile ? '32px 20px 48px' : '48px 64px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -200, right: -100, width: 600, height: 600, borderRadius: '50%',
          background: `radial-gradient(circle, ${post.accent}18, transparent 60%)`, filter: 'blur(30px)',
        }} />
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative' }}>
          {/* Back link */}
          <button
            onClick={() => navigate('/blog')}
            style={{
              background: 'transparent', border: 0, color: BRAND.inkMute,
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, cursor: 'pointer', padding: 0, marginBottom: 32,
              fontFamily: BRAND.body, transition: 'color .15s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = BRAND.ink; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = BRAND.inkMute; }}
          >
            <span style={{ transform: 'rotate(180deg)', display: 'inline-flex' }}><Icons.Arrow width="14" height="14" /></span>
            Back to Blog
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{
              fontSize: 11, fontWeight: 700, padding: '5px 12px',
              borderRadius: 999, background: `${post.accent}15`, color: post.accent,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              {post.cat}
            </span>
            <span style={{ fontSize: 13, color: BRAND.inkSubtle }}>{post.date}</span>
            <span style={{ fontSize: 13, color: BRAND.inkSubtle }}>·</span>
            <span style={{ fontSize: 13, color: BRAND.inkSubtle }}>{post.read}</span>
          </div>

          <h1 style={{
            fontSize: isMobile ? 34 : 52, marginTop: 22, letterSpacing: '-0.03em',
            fontWeight: 800, fontFamily: BRAND.display, lineHeight: 1.1, color: BRAND.ink,
          }}>
            {post.title}
          </h1>

          <p style={{ marginTop: 22, fontSize: isMobile ? 16 : 19, color: BRAND.inkMute, lineHeight: 1.65 }}>
            {post.excerpt}
          </p>

          <div style={{
            marginTop: 36, paddingTop: 28, borderTop: `1px solid ${BRAND.border}`,
            display: 'flex', alignItems: 'center', gap: 14,
          }}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: `${post.accent}20`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 15, fontWeight: 700, color: post.accent, fontFamily: BRAND.display,
            }}>
              {post.init}
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600, color: BRAND.ink }}>{post.author}</div>
              <div style={{ fontSize: 13, color: BRAND.inkMute, marginTop: 2 }}>{post.role} · Appnity Technologies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ padding: isMobile ? '0 20px' : '0 64px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', height: 1, background: BRAND.border }} />
      </div>

      {/* Article body */}
      <section style={{ padding: isMobile ? '40px 20px 60px' : '56px 64px 80px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {post.body.map((block, i) => (
            <BodyBlock key={i} block={block} />
          ))}

          {/* End CTA */}
          <div style={{
            marginTop: 64, padding: isMobile ? '28px 24px' : '36px 40px', borderRadius: 16,
            background: BRAND.paperSoft, border: `1px solid ${BRAND.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: 24, flexWrap: 'wrap',
          }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 700, color: BRAND.ink, fontFamily: BRAND.display }}>
                Ready to build something great?
              </div>
              <div style={{ fontSize: 14, color: BRAND.inkMute, marginTop: 6 }}>
                Talk to our team — we reply within 24 hours.
              </div>
            </div>
            <button
              onClick={() => navigate('/contact')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '12px 20px', borderRadius: 10, border: 0,
                fontSize: 14, fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap',
                color: '#fff', background: BRAND.ink, fontFamily: BRAND.body,
                boxShadow: '0 6px 20px rgba(11,31,58,0.18)', transition: 'transform .15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; }}
            >
              Get In Touch <Icons.Arrow width="14" height="14" />
            </button>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ padding: isMobile ? '0 20px 64px' : '0 64px 96px' }}>
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: BRAND.inkMute, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
              More in {post.cat}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : `repeat(${related.length}, 1fr)`, gap: 16 }}>
              {related.map(r => (
                <div
                  key={r.id}
                  onClick={() => navigate(`/blog/${r.id}`)}
                  style={{
                    padding: 24, borderRadius: 14, cursor: 'pointer',
                    background: '#fff', border: `1px solid ${BRAND.border}`,
                    transition: 'transform .2s, box-shadow .2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
                >
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '3px 9px',
                    borderRadius: 999, background: `${r.accent}15`, color: r.accent,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                  }}>
                    {r.cat}
                  </span>
                  <div style={{ fontSize: 16, fontWeight: 700, color: BRAND.ink, marginTop: 12, lineHeight: 1.3, fontFamily: BRAND.display }}>
                    {r.title}
                  </div>
                  <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: r.accent }}>
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
