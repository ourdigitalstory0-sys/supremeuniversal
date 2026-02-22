import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';
import NoiseOverlay from './components/NoiseOverlay';
import QuickEnquireModal from './components/QuickEnquireModal';
import LeadPopup from './components/LeadPopup';
import SEOFootprint from './components/SEOFootprint';

function App() {
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
      <Hero onEnquire={() => setIsModalOpen(true)} />
      <Overview />
      <Amenities />
      <FloorPlans onEnquire={() => setIsModalOpen(true)} />
      <Gallery />
      <Location />
      <Contact />
      <SEOFootprint />
      <Footer />
      <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LeadPopup />
    </div>
  );
}

export default App;
