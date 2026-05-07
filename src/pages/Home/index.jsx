import NavBar from '../../components/layout/NavBar';
import CtaBanner from '../../components/layout/CtaBanner';
import Footer from '../../components/layout/Footer';
import HeroSection from './HeroSection';
import LogoStrip from './LogoStrip';
import ServicesGrid from './ServicesGrid';
import AboutPreview from './AboutPreview';
import ProcessSection from './ProcessSection';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <LogoStrip />
      <ServicesGrid />
      <AboutPreview />
      <ProcessSection />
      <WhyUs />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </>
  );
}
