import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import SEO from './SEO';
import WhatsAppButton from './WhatsAppButton';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import Preloader from './Preloader';
import NoiseOverlay from './NoiseOverlay';
import QuickEnquireModal from './QuickEnquireModal';
import LeadPopup from './LeadPopup';
import FloatingRERA from './FloatingRERA';
import BrochureModal from './BrochureModal';
import MarketTicker from './MarketTicker';
import { pseoRoutes } from '../data/pseoRoutes';

// Lazy load standard sections
const Overview = lazy(() => import('./Overview'));
const AuthoritySection = lazy(() => import('./AuthoritySection'));
const Amenities = lazy(() => import('./Amenities'));
const FloorPlans = lazy(() => import('./FloorPlans'));
const Gallery = lazy(() => import('./Gallery'));
const Location = lazy(() => import('./Location'));
const FAQ = lazy(() => import('./FAQ'));
const Footer = lazy(() => import('./Footer'));

const ProgrammaticLanding = () => {
    const { pathname } = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const routeData = pseoRoutes.find(r => r.path === pathname) || pseoRoutes[0];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, [pathname]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('light-theme');
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white transition-colors duration-500">
            <SEO 
                title={routeData.title}
                description={routeData.description}
                url={`https://www.supreme-universal.in${routeData.path}`}
            />
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
            
            <Hero 
                onEnquire={() => setIsModalOpen(true)} 
                onDownload={() => setIsBrochureModalOpen(true)}
                title={
                    <span className="uppercase tracking-widest font-normal text-supreme-gold text-center text-4xl md:text-6xl lg:text-7xl">
                        {routeData.h1}
                    </span>
                }
                subtitle="Supreme Rivana Punawale"
                description={
                    <div className="flex flex-col gap-4">
                        <p className="text-lg md:text-xl text-white/90 leading-relaxed italic">
                            {routeData.content}
                        </p>
                        <p className="text-sm md:text-base text-white/60 font-light uppercase tracking-[0.2em]">
                            Supreme Rivana Punawale — By Supreme Universal
                        </p>
                    </div>
                }
            />

            <Suspense fallback={<div className="h-20 bg-white" />}>
                <Overview />
                <div className="py-20 bg-supreme-black text-white px-6">
                    <div className="container mx-auto max-w-4xl border border-supreme-gold/20 p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm">
                        <h2 className="text-4xl font-serif mb-8 text-supreme-gold">{routeData.h1}</h2>
                        <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed">
                            <p>{routeData.content}</p>
                            <p>Supreme Rivana Punawale is setting new standards for residential excellence in Pune West. As an IGBC certified 15-acre township, it offers the perfect blend of natural riverside beauty and modern structural brilliance.</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 list-none p-0">
                                <li className="flex items-center gap-3"><span className="text-supreme-gold">✓</span> 31-Storey Iconic Towers</li>
                                <li className="flex items-center gap-3"><span className="text-supreme-gold">✓</span> Riverside Promenade</li>
                                <li className="flex items-center gap-3"><span className="text-supreme-gold">✓</span> 40+ Lifestyle Amenities</li>
                                <li className="flex items-center gap-3"><span className="text-supreme-gold">✓</span> Near Hinjewadi IT Park</li>
                            </ul>
                        </div>
                        <div className="mt-12">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="bg-supreme-gold text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-supreme-black transition-all duration-500"
                            >
                                Request Pricing & Brochure
                            </button>
                        </div>
                        <div className="mt-8 pt-8 border-t border-supreme-gold/10">
                            <a href="/blog/supreme-rivana-punawale-vs-all-competitors-2026" className="inline-flex items-center gap-3 text-supreme-gold/80 hover:text-supreme-gold transition-colors text-sm font-light uppercase tracking-widest group">
                                <span>Read the Supremacy Report: Rivana vs All Competitors</span>
                                <span className="w-6 h-[1px] bg-supreme-gold/40 group-hover:w-10 transition-all duration-300"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <AuthoritySection />
                <Amenities />
                <FloorPlans onEnquire={() => setIsModalOpen(true)} />
                <Gallery />
                <Location />
                <FAQ />
                <Footer />
            </Suspense>

            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
            <LeadPopup />
            <FloatingRERA />
        </div>
    );
};

export default ProgrammaticLanding;
