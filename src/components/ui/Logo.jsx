const LOGO_BLUE = '#1278C0';
const LOGO_BLUE_LIGHT = '#4BAAD6';

export default function Logo({ size = 28, color, mark = false }) {
  const iconSize = size * 1.1;

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* Blue rounded square icon */}
      <div style={{
        width: iconSize, height: iconSize,
        borderRadius: iconSize * 0.22,
        background: LOGO_BLUE,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {/* A mark — matching the actual Appnity logo */}
        <svg
          width={iconSize * 0.68}
          height={iconSize * 0.68}
          viewBox="0 0 36 36"
          fill="none"
        >
          {/* Left leg + right leg of the A */}
          <path
            d="M6 31 L18 5 L28 31"
            stroke="white"
            strokeWidth="4.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Crossbar */}
          <path
            d="M11.5 20.5 H24.5"
            stroke="white"
            strokeWidth="4.2"
            strokeLinecap="round"
          />
          {/* Distinctive small tick at bottom-right of right leg */}
          <path
            d="M28 31 L33 35"
            stroke="white"
            strokeWidth="3.6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Wordmark */}
      {!mark && (
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 800,
            fontSize: size * 0.72,
            letterSpacing: '-0.02em',
            color: color || LOGO_BLUE,
          }}>
            Appnity
          </span>
          <span style={{
            fontFamily: '"Inter", sans-serif',
            fontWeight: 500,
            fontSize: size * 0.38,
            letterSpacing: '0.04em',
            color: LOGO_BLUE_LIGHT,
            marginTop: 1,
          }}>
            Technologies
          </span>
        </div>
      )}
    </div>
  );
}
