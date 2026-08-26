import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Lenis from 'lenis';
import ErrorBoundary from './components/ErrorBoundary';
import { syncPendingLeads } from './utils/leadCache';
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
import ChatWidget from './components/ChatWidget';

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
const ProgrammaticLanding = lazy(() => import('./components/ProgrammaticLanding'));
const DynamicPseoPage = lazy(() => import('./components/DynamicPseoPage'));
const DynamicProjectPseoPage = lazy(() => import('./components/DynamicProjectPseoPage'));

import { pseoRoutes } from './data/pseoRoutes';

/**
 * RedirectHandler: Resolves GSC "Alternative page with proper canonical tag" issues
 * by mapping old 'riverside' paths to new 'rivana' paths.
 */
function RedirectHandler() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectMap: Record<string, string> = {
      '/supreme-riverside-punawale-overview': '/supreme-rivana-punawale-overview',
      '/supreme-riverside-punawale-amenities': '/supreme-rivana-punawale-amenities',
      '/supreme-riverside-punawale-floor-plans': '/supreme-rivana-punawale-floor-plans',
      '/supreme-riverside-punawale-gallery': '/supreme-rivana-punawale-gallery',
      '/supreme-riverside-punawale-location': '/supreme-rivana-punawale-location',
      '/supreme-riverside-punawale-faq': '/supreme-rivana-punawale-faq',
      '/supreme-riverside-punawale-contact': '/supreme-rivana-punawale-contact',
      '/supreme-riverside-punawale': '/',
      '/supreme-rivana-overview': '/supreme-rivana-punawale-overview',
      '/supreme-rivana-amenities': '/supreme-rivana-punawale-amenities',
      '/supreme-rivana-floor-plans': '/supreme-rivana-punawale-floor-plans',
      '/supreme-rivana-gallery': '/supreme-rivana-punawale-gallery',
      '/supreme-rivana-location': '/supreme-rivana-punawale-location',
      '/supreme-rivana-faq': '/supreme-rivana-punawale-faq',
      '/supreme-rivana-contact': '/supreme-rivana-punawale-contact',
      '/supreme-rivana-price-list': '/supreme-rivana-punawale-price-list',
      '/supreme-rivana-comparison': '/supreme-rivana-punawale-comparison'
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
        '/supreme-rivana-punawale-overview': '#overview',
        '/supreme-rivana-punawale-amenities': '#amenities',
        '/supreme-rivana-punawale-floor-plans': '#features',
        '/supreme-rivana-punawale-gallery': '#gallery',
        '/supreme-rivana-punawale-location': '#location',
        '/supreme-rivana-punawale-faq': '#faq',
        '/supreme-rivana-punawale-contact': '#contact'
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

import MobileStickyBar from './components/MobileStickyBar';

function MainApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

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
    <div className="font-sans antialiased text-gray-900 bg-white cursor-none md:cursor-auto transition-colors duration-500 pb-16 md:pb-0">
      <SEO />
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <WhatsAppButton />
      <Navbar onEnquire={() => setIsModalOpen(true)} />
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
      <ChatWidget />
      <MobileStickyBar onEnquire={() => setIsModalOpen(true)} />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Sync any pending leads from previous offline attempts on mount
    syncPendingLeads();
    
    // Listen for online events to sync immediately
    window.addEventListener('online', syncPendingLeads);
    return () => window.removeEventListener('online', syncPendingLeads);
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <RedirectHandler />
        <ScrollHandler />
        <Suspense fallback={<div className="h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-overview" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-amenities" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-floor-plans" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-gallery" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-location" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-faq" element={<MainApp />} />
            <Route path="/supreme-rivana-punawale-contact" element={<MainApp />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/supreme-rivana-punawale-price-list" element={<PriceList />} />
            <Route path="/supreme-rivana-punawale-comparison" element={<Comparison />} />
            <Route path="/pune-real-estate/:slug" element={<DynamicPseoPage />} />
            <Route path="/pune-projects/:slug" element={<DynamicProjectPseoPage />} />
            {pseoRoutes.map(route => (
              <Route key={route.path} path={route.path} element={<ProgrammaticLanding />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <SpeedInsights />
        <Analytics />
      </Router>
    </ErrorBoundary>
  );
}

export default App;

// Trigger rebuild 1774976400
