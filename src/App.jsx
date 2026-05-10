import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetail';
import PortfolioPage from './pages/Portfolio';
import ContactPage from './pages/Contact';
import BlogPage from './pages/Blog';
import PostDetail from './pages/Blog/PostDetail/PostDetail';
import PrivacyPolicyPage from './pages/PrivacyPolicy';
import TermsOfServicePage from './pages/TermsOfService';
import BrandAssetsPage from './pages/BrandAssets';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector('.ap-page')?.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="ap-page">
      <ScrollToTop />
      <Routes>
        <Route path="/"                element={<HomePage />} />
        <Route path="/about"           element={<AboutPage />} />
        <Route path="/services"        element={<ServicesPage />} />
        <Route path="/services/detail" element={<ServiceDetailPage />} />
        <Route path="/portfolio"       element={<PortfolioPage />} />
        <Route path="/contact"         element={<ContactPage />} />
        <Route path="/blog"            element={<BlogPage />} />
        <Route path="/blog/:id"        element={<PostDetail />} />
        <Route path="/privacy-policy"   element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/brand-assets"     element={<BrandAssetsPage />} />
        <Route path="*"                element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
