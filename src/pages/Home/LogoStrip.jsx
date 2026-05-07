import { BRAND } from '../../constants/brand';
import { useResponsive } from '../../hooks/useResponsive';

const NAMES = ['Healthcare', 'Fintech', 'E-Commerce', 'Logistics', 'Education', 'Real Estate', 'SaaS'];

export default function LogoStrip() {
  const { isMobile } = useResponsive();

  return (
    <section style={{ padding: isMobile ? '8px 20px 48px' : '8px 64px 64px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          textAlign: 'center', fontSize: 12, color: BRAND.inkSubtle,
          fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
        }}>
          Serving clients across industries worldwide
        </div>
        <div style={{
          marginTop: 24, display: 'flex',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: 'center', gap: isMobile ? 16 : 32,
          flexWrap: 'wrap', opacity: 0.65,
        }}>
          {NAMES.map((n, i) => (
            <div key={n} style={{
              fontFamily: BRAND.display, fontSize: isMobile ? 16 : 22, fontWeight: 700,
              letterSpacing: '-0.02em', color: BRAND.ink,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{
                width: 18, height: 18,
                background: i % 3 === 0 ? BRAND.ink : i % 3 === 1 ? BRAND.purple : BRAND.blue,
                borderRadius: i % 2 === 0 ? 4 : 9,
                opacity: 0.7,
              }} />
              {n}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
