import SEO from '../../components/ui/SEO/SEO';
import NavBar from '../../components/layout/NavBar/NavBar';
import CtaBanner from '../../components/layout/CtaBanner/CtaBanner';
import Footer from '../../components/layout/Footer/Footer';
import HeroSection from './HeroSection/HeroSection';
import LogoStrip from './LogoStrip/LogoStrip';
import ServicesGrid from './ServicesGrid/ServicesGrid';
import AboutPreview from './AboutPreview/AboutPreview';
import ProcessSection from './ProcessSection/ProcessSection';
import WhyUs from './WhyUs/WhyUs';
import Testimonials from './Testimonials/Testimonials';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Mobile App & Web Development Company"
        description="Appnity Technologies builds mobile apps, web platforms & cloud solutions for growing businesses. 8+ years experience, 100+ projects delivered worldwide."
        path="/"
      />
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
