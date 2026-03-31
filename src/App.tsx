import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import SEO from './components/SEO';
import Breadcrumbs from './components/Breadcrumbs';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import NoiseOverlay from './components/NoiseOverlay';
import QuickEnquireModal from './components/QuickEnquireModal';
import LeadPopup from './components/LeadPopup';
import FloatingRERA from './components/FloatingRERA';

// Lazy load below-the-fold components to reduce initial bundle size
const AuthoritySection = lazy(() => import('./components/AuthoritySection'));
const Amenities = lazy(() => import('./components/Amenities'));
const FloorPlans = lazy(() => import('./components/FloorPlans'));
const Gallery = lazy(() => import('./components/Gallery'));
const Location = lazy(() => import('./components/Location'));
const NeighborhoodGuide = lazy(() => import('./components/NeighborhoodGuide'));
const ROICalculator = lazy(() => import('./components/ROICalculator'));
const ProximityIndex = lazy(() => import('./components/ProximityIndex'));
const ProjectShowcase = lazy(() => import('./components/ProjectShowcase'));
const MarketTicker = lazy(() => import('./components/MarketTicker'));
const PropertyComparison = lazy(() => import('./components/PropertyComparison'));
const Contact = lazy(() => import('./components/Contact'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const BlogList = lazy(() => import('./pages/BlogList'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const BlogPreview = lazy(() => import('./components/BlogPreview'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PriceList = lazy(() => import('./pages/PriceList'));
const Comparison = lazy(() => import('./pages/Comparison'));

/**
 * RedirectHandler: Resolves GSC "Alternative page with proper canonical tag" issues
 * by mapping old 'riverside' paths to new 'rivana' paths.
 */
function RedirectHandler() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectMap: Record<string, string> = {
      '/supreme-riverside-punawale-overview': '/supreme-rivana-overview',
      '/supreme-riverside-punawale-amenities': '/supreme-rivana-amenities',
      '/supreme-riverside-punawale-floor-plans': '/supreme-rivana-floor-plans',
      '/supreme-riverside-punawale-gallery': '/supreme-rivana-gallery',
      '/supreme-riverside-punawale-location': '/supreme-rivana-location',
      '/supreme-riverside-punawale-faq': '/supreme-rivana-faq',
      '/supreme-riverside-punawale-contact': '/supreme-rivana-contact',
      '/supreme-riverside-punawale': '/'
    };

    const target = redirectMap[pathname.replace(/\/$/, '')];
    if (target) {
      console.log(`[SEO-Redirect] Mapping old path ${pathname} to ${target}`);
      navigate(target, { replace: true });
    }
  }, [pathname, navigate]);

  return null;
}

function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top automatically when navigating to a new route like /blog
    if (!pathname.includes('-')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const timer = setTimeout(() => {
      const sectionMap: Record<string, string> = {
        '/supreme-rivana-overview': '#overview',
        '/supreme-rivana-amenities': '#amenities',
        '/supreme-rivana-floor-plans': '#features',
        '/supreme-rivana-gallery': '#gallery',
        '/supreme-rivana-location': '#location',
        '/supreme-rivana-faq': '#faq',
        '/supreme-rivana-contact': '#contact'
      };

      const targetId = sectionMap[pathname];
      if (targetId) {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

import BrochureModal from './components/BrochureModal';

function MainApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark for premium feel

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-theme');
  };

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white cursor-none md:cursor-auto transition-colors duration-500">
      <SEO />
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <WhatsAppButton />
      <Navbar 
        onEnquire={() => setIsModalOpen(true)} 
        onDownload={() => setIsBrochureModalOpen(true)} 
        isDarkMode={isDarkMode}
        onToggleTheme={toggleTheme}
      />
      <MarketTicker />
      <Breadcrumbs />
      <Hero onEnquire={() => setIsModalOpen(true)} onDownload={() => setIsBrochureModalOpen(true)} />
      <Overview />
      <Suspense fallback={<div className="h-20 bg-white" />}>
        <AuthoritySection />
        <Amenities />
        <FloorPlans onEnquire={() => setIsModalOpen(true)} />
        <Gallery />
        <Location />
        <NeighborhoodGuide />
        <ROICalculator onEnquire={() => setIsModalOpen(true)} />
        <ProximityIndex />
        <PropertyComparison />
        <ProjectShowcase />
        <BlogPreview />
        <Contact />
        <FAQ />
      </Suspense>
      <Footer />
      <FloatingRERA />
      <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
      <LeadPopup />
    </div>
  );
}

function App() {
  return (
    <Router>
      <RedirectHandler />
      <ScrollHandler />
      <Suspense fallback={<div className="h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/supreme-rivana-overview" element={<MainApp />} />
          <Route path="/supreme-rivana-amenities" element={<MainApp />} />
          <Route path="/supreme-rivana-floor-plans" element={<MainApp />} />
          <Route path="/supreme-rivana-gallery" element={<MainApp />} />
          <Route path="/supreme-rivana-location" element={<MainApp />} />
          <Route path="/supreme-rivana-faq" element={<MainApp />} />
          <Route path="/supreme-rivana-contact" element={<MainApp />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/supreme-rivana-price-list" element={<PriceList />} />
          <Route path="/supreme-rivana-comparison" element={<Comparison />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

// Trigger rebuild 1774976400
