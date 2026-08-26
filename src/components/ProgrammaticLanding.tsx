import { useState, useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

    const routeData = pseoRoutes.find(r => r.path === pathname) || pseoRoutes[0];

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, [pathname]);

    const faqSchema = routeData.faqs && routeData.faqs.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": routeData.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    } : null;

    return (
        <div className="font-sans antialiased text-gray-900 bg-white transition-colors duration-500">
            <SEO 
                title={routeData.title}
                description={routeData.description}
                url={`https://www.supreme-universal.in${routeData.path}`}
            />
            {faqSchema && (
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify(faqSchema)}
                    </script>
                </Helmet>
            )}
            <Preloader isLoading={isLoading} />
            <CustomCursor />
            <ScrollProgress />
            <NoiseOverlay />
            <WhatsAppButton />
            <Navbar onEnquire={() => setIsModalOpen(true)} />
            
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
                        
                        {/* Dynamic Structured Prose */}
                        <div className="prose prose-invert prose-lg max-w-none text-white/80 leading-relaxed space-y-6">
                            <p>{routeData.content}</p>
                            <p>{routeData.longContent}</p>
                            
                            {/* Dynamic Specifications Table */}
                            {routeData.table && routeData.table.length > 0 && (
                                <div className="my-8 overflow-hidden rounded-xl border border-supreme-gold/10 bg-white/5 backdrop-blur-md">
                                    <table className="w-full text-left border-collapse text-sm">
                                        <thead>
                                            <tr className="border-b border-supreme-gold/20 bg-supreme-gold/10">
                                                <th className="p-4 font-serif text-supreme-gold uppercase tracking-wider">Specifications</th>
                                                <th className="p-4 font-serif text-supreme-gold uppercase tracking-wider">Parameters</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {routeData.table.map((row, idx) => (
                                                <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                                                    <td className="p-4 font-medium text-white/90">{row.label}</td>
                                                    <td className="p-4 text-white/60">{row.value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Dynamic Highlights List */}
                            {routeData.highlights && routeData.highlights.length > 0 && (
                                <div className="my-8">
                                    <h3 className="text-xl font-serif text-supreme-gold mb-4 uppercase tracking-wider">Key Architectural Highlights</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                                        {routeData.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-white/80 text-sm">
                                                <span className="text-supreme-gold font-bold mt-0.5">✓</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Intent-focused FAQs */}
                            {routeData.faqs && routeData.faqs.length > 0 && (
                                <div className="mt-12 pt-8 border-t border-white/10">
                                    <h3 className="text-2xl font-serif text-supreme-gold mb-6 uppercase tracking-wider">Frequently Asked Questions</h3>
                                    <div className="space-y-6">
                                        {routeData.faqs.map((faq, idx) => (
                                            <div key={idx} className="border border-white/5 bg-white/[0.02] p-6 rounded-xl hover:border-supreme-gold/20 transition-all duration-300">
                                                <h4 className="text-base font-serif text-white/95 mb-2 font-medium">Q: {faq.q}</h4>
                                                <p className="text-sm text-white/60 leading-relaxed">A: {faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Call To Action */}
                        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-6 items-center justify-between">
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="w-full sm:w-auto bg-supreme-gold text-white px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold hover:bg-white hover:text-supreme-black transition-all duration-500 shadow-lg shadow-supreme-gold/10"
                            >
                                Request Pricing & Brochure
                            </button>

                            {/* Dynamic Semantic Interlinking Box */}
                            <div className="flex flex-col gap-2 text-right sm:text-right">
                                <span className="text-[10px] uppercase tracking-widest text-white/30 font-sans">Related Resources</span>
                                <div className="flex flex-wrap gap-x-4 gap-y-1 justify-end">
                                    {pseoRoutes
                                        .filter(r => r.path !== routeData.path && r.category === routeData.category)
                                        .slice(0, 2)
                                        .map(r => (
                                            <a key={r.path} href={r.path} className="text-xs text-supreme-gold/70 hover:text-supreme-gold transition-colors underline">
                                                {r.keyword}
                                            </a>
                                        ))}
                                    <a href="/blog/supreme-rivana-punawale-vs-all-competitors-2026" className="text-xs text-supreme-gold/70 hover:text-supreme-gold transition-colors underline">
                                        Competitor Showdown
                                    </a>
                                </div>
                            </div>
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
