import { BRAND } from '../../constants/brand';

export default function Placeholder({ label = 'product shot', height = 240, dark = false, ratio }) {
  const bg     = dark ? BRAND.ink       : BRAND.paperSoft;
  const stripe = dark ? 'rgba(255,255,255,0.06)' : 'rgba(11,31,58,0.05)';
  const fg     = dark ? 'rgba(255,255,255,0.55)' : BRAND.inkSubtle;

  return (
    <div style={{
      width: '100%',
      height: ratio ? undefined : height,
      aspectRatio: ratio,
      background: `repeating-linear-gradient(135deg, ${bg}, ${bg} 14px, ${stripe} 14px, ${stripe} 28px)`,
      border: `1px solid ${dark ? 'rgba(255,255,255,0.08)' : BRAND.border}`,
      borderRadius: 12,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: fg, fontFamily: BRAND.mono, fontSize: 11,
      letterSpacing: '0.08em', textTransform: 'uppercase',
    }}>
      // {label}
    </div>
  );
}
