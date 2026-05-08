import logoSvg from '../../images/Logo SVG New.svg';

export default function Logo({ size = 28 }) {
  // size maps to the icon square height; full logo is taller than the icon alone
  const height = Math.round(size * 1.4);

  return (
    <img
      src={logoSvg}
      alt="Appnity Technologies"
      style={{ height, display: 'block' }}
    />
  );
}
