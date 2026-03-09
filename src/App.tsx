import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import AuthoritySection from './components/AuthoritySection';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Gallery from './components/Gallery';
import Location from './components/Location';
import NeighborhoodGuide from './components/NeighborhoodGuide';
import ROICalculator from './components/ROICalculator';
import ProximityIndex from './components/ProximityIndex';
import ProjectShowcase from './components/ProjectShowcase';
import MarketTicker from './components/MarketTicker';
import PropertyComparison from './components/PropertyComparison';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Breadcrumbs from './components/Breadcrumbs';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import NoiseOverlay from './components/NoiseOverlay';
import QuickEnquireModal from './components/QuickEnquireModal';
import LeadPopup from './components/LeadPopup';
import FAQ from './components/FAQ';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import ProjectDetails from './pages/ProjectDetails';
import BlogPreview from './components/BlogPreview';
import NotFound from './pages/NotFound';

function ScrollHandler() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top automatically when navigating to a new route like /blog
    if (!pathname.includes('-')) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    const timer = setTimeout(() => {
      const sectionMap: Record<string, string> = {
        '/supreme-riverside-overview': '#overview',
        '/supreme-riverside-amenities': '#amenities',
        '/supreme-riverside-floor-plans': '#features',
        '/supreme-riverside-gallery': '#gallery',
        '/supreme-riverside-location': '#location',
        '/supreme-riverside-faq': '#faq',
        '/supreme-riverside-contact': '#contact'
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

function MainApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="font-sans antialiased text-gray-900 bg-white cursor-none md:cursor-auto">
      <SEO />
      <Preloader isLoading={isLoading} />
      <CustomCursor />
      <ScrollProgress />
      <NoiseOverlay />
      <WhatsAppButton />
      <Navbar onEnquire={() => setIsModalOpen(true)} />
      <MarketTicker />
      <Breadcrumbs />
      <Hero onEnquire={() => setIsModalOpen(true)} />
      <Overview />
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
      <Footer />
      <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LeadPopup />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/supreme-riverside-overview" element={<MainApp />} />
        <Route path="/supreme-riverside-amenities" element={<MainApp />} />
        <Route path="/supreme-riverside-floor-plans" element={<MainApp />} />
        <Route path="/supreme-riverside-gallery" element={<MainApp />} />
        <Route path="/supreme-riverside-location" element={<MainApp />} />
        <Route path="/supreme-riverside-faq" element={<MainApp />} />
        <Route path="/supreme-riverside-contact" element={<MainApp />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
