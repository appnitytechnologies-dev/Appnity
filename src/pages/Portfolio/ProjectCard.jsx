import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';

export default function ProjectCard({ p }) {
  return (
    <div
      style={{
        borderRadius: 14, overflow: 'hidden', cursor: 'pointer',
        background: '#fff', border: `1px solid ${BRAND.border}`,
        display: 'flex', flexDirection: 'column',
        transition: 'transform .2s ease, box-shadow .2s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = BRAND.shadowLg; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
    >
      <div style={{
        height: 240, position: 'relative', overflow: 'hidden',
        background: `linear-gradient(135deg, ${p.accent}22, ${p.accent}08)`,
        borderBottom: `1px solid ${BRAND.border}`,
      }}>
        <div style={{
          position: 'absolute', inset: 16, borderRadius: 10, background: '#fff',
          border: `1px solid ${BRAND.border}`, padding: 16,
          display: 'flex', flexDirection: 'column', gap: 8,
        }}>
          <div style={{ display: 'flex', gap: 4 }}>
            <span style={{ width: 7, height: 7, borderRadius: 4, background: '#FF5F57' }} />
            <span style={{ width: 7, height: 7, borderRadius: 4, background: '#FEBC2E' }} />
            <span style={{ width: 7, height: 7, borderRadius: 4, background: '#28C840' }} />
          </div>
          <div style={{ height: 18, width: '60%', borderRadius: 4, background: BRAND.paperSoft }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6, marginTop: 4 }}>
            <div style={{ height: 36, borderRadius: 6, background: BRAND.paperSoft }} />
            <div style={{ height: 36, borderRadius: 6, background: BRAND.paperSoft }} />
            <div style={{ height: 36, borderRadius: 6, background: `linear-gradient(135deg, ${p.accent}, ${p.accent}80)`, opacity: 0.85 }} />
          </div>
          <div style={{ height: 8, width: '88%', borderRadius: 4, background: BRAND.paperSoft }} />
          <div style={{ height: 8, width: '72%', borderRadius: 4, background: BRAND.paperSoft }} />
          <div style={{ flex: 1 }} />
          <div style={{ height: 32, width: '40%', borderRadius: 6, background: p.accent, opacity: 0.9 }} />
        </div>
        <span style={{
          position: 'absolute', top: 14, right: 14, padding: '5px 10px',
          fontSize: 11, fontWeight: 600, borderRadius: 999,
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          color: BRAND.ink, letterSpacing: '0.04em', textTransform: 'uppercase',
        }}>{p.c}</span>
      </div>
      <div style={{ padding: '22px 24px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.015em', color: BRAND.ink }}>{p.t}</div>
            <div style={{ fontSize: 14, color: BRAND.inkMute, marginTop: 4 }}>{p.d}</div>
          </div>
          <span style={{
            width: 32, height: 32, borderRadius: 8, flexShrink: 0,
            border: `1px solid ${BRAND.border}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: BRAND.ink,
          }}>
            <Icons.ArrowUR width="14" height="14" />
          </span>
        </div>
        <div style={{ marginTop: 16, fontFamily: BRAND.mono, fontSize: 11, color: BRAND.inkSubtle, letterSpacing: '0.02em' }}>
          {p.tag}
        </div>
      </div>
    </div>
  );
}
