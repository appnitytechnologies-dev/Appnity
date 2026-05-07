import { Icons } from '../../components/ui/Icons';
import { BRAND } from '../../constants/brand';

export default function FAQItem({ q, a, open, onToggle }) {
  return (
    <div style={{ borderBottom: `1px solid ${BRAND.border}` }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', padding: '24px 0', background: 'transparent', border: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', textAlign: 'left', fontFamily: BRAND.body,
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.015em', color: BRAND.ink, paddingRight: 24 }}>
          {q}
        </span>
        <span style={{
          width: 32, height: 32, borderRadius: 8, flexShrink: 0,
          background: open ? BRAND.ink : BRAND.paperSoft,
          color: open ? '#fff' : BRAND.ink,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all .2s',
        }}>
          {open ? <Icons.Minus width="16" height="16" /> : <Icons.Plus width="16" height="16" />}
        </span>
      </button>
      <div style={{
        maxHeight: open ? 200 : 0,
        opacity: open ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height .3s ease, opacity .25s ease, padding-bottom .25s ease',
        paddingBottom: open ? 24 : 0,
      }}>
        <p style={{ fontSize: 16, color: BRAND.inkMute, lineHeight: 1.6, maxWidth: 720 }}>{a}</p>
      </div>
    </div>
  );
}
