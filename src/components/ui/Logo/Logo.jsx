import logoSvg from '../../../images/Logo SVG New.svg';
import './Logo.css';

export default function Logo({ size = 28 }) {
  const height = Math.round(size * 1.4);
  return (
    <img
      src={logoSvg}
      alt="Appnity Technologies"
      className="logo"
      style={{ height }}
    />
  );
}
