import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Download, HelpCircle } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioProjects';
import { configs, themes } from '../data/punePseoData';
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
import Breadcrumbs from './Breadcrumbs';

// Lazy load layout sections
const Amenities = lazy(() => import('./Amenities'));
const LocationSection = lazy(() => import('./Location'));
const Footer = lazy(() => import('./Footer'));

const DynamicProjectPseoPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, [slug]);

    if (!slug) return <Navigate to="/404" replace />;

    // Find matching theme from the end of the slug
    const theme = themes.find(t => slug.endsWith(t.id));
    if (!theme) return <Navigate to="/404" replace />;

    // Extract remaining part of slug before the theme
    const remaining = slug.substring(0, slug.length - theme.id.length - 1);

    // Find the last dash index to separate config and project ID
    const lastDashIndex = remaining.lastIndexOf('-');
    if (lastDashIndex === -1) return <Navigate to="/404" replace />;

    const configId = remaining.substring(lastDashIndex + 1);
    const projectId = remaining.substring(0, lastDashIndex);

    const project = portfolioProjects.find(p => p.id === projectId);

    // Override 'penthouse' config lookup for Supreme Villagio to 'townhouses'
    let config = configs.find(c => c.id === configId);
    if (projectId === 'supreme-villagio') {
        if (configId === 'townhouses') {
            config = {
                id: 'townhouses',
                name: 'Townhouses',
                description: 'Mediterranean style row houses and luxury twin townhouses featuring private garden lawns.'
            };
        } else if (configId === 'penthouse') {
            config = undefined;
        }
    }

    // Strict validation to prevent garbage pages
    if (!project || !config) {
        return <Navigate to="/404" replace />;
    }

    const titleText = `${project.name} ${config.name} ${theme.name} | Supreme Universal`;
    const headingText = `${project.name} ${config.name}`;
    
    const themeDescriptions: Record<string, string> = {
        'price': `Check carpet price list & cost sheets for ${config.name} at ${project.name} in ${project.location}. Compare rates & pre-launch discount schedules.`,
        'reviews': `Real customer reviews & project ratings for ${config.name} at ${project.name} in ${project.location}. Learn about construction quality and feedback.`,
        'floor-plan': `Download carpet area layouts, floor plans & structural maps for ${config.name} at ${project.name} in ${project.location}. Vastu compliances.`,
        'possession-date': `Check possession date, RERA timelines & construction photos/status for ${config.name} at ${project.name} in ${project.location}.`,
        'amenities': `Explore clubhouses, swimming pools, sports facilities & central layout features for ${config.name} at ${project.name} in ${project.location}.`,
        'location-map': `Get location maps, Google coordinates & transit connectivity details for ${config.name} at ${project.name} in ${project.location}.`,
        'brochure': `Download PDF brochure, layout sheets & master floor layouts for ${config.name} at ${project.name} in ${project.location}.`,
        'rera': `MahaRERA registration certificate verification status & delivery deadlines for ${config.name} at ${project.name} in ${project.location}.`
    };
    const metaDescription = themeDescriptions[theme.id] || `Looking for details on ${project.name} ${config.name}? Explore carpet area, layouts & theme insights for our landmark.`;

    // Dynamic FAQ builder
    const customFaqs = [
        {
            q: `What is the configuration and starting price for a ${config.name} at ${project.name}?`,
            a: `${project.name} features premium ${project.type} layouts. The ${config.name} configuration offers highly optimized carpet sizes, spacious balconies, and premium finishes in the premium micro-market of ${project.location}. Contact sales for the active inventory list.`
        },
        {
            q: `Is the RERA registry verified for ${project.name}?`,
            a: `Yes, ${project.name} is a fully registered development. The official MahaRERA registration number is ${project.reraNumber || 'registered under MahaRERA guidelines'}, guaranteeing timeline compliance and bank pre-approvals.`
        },
        {
            q: `How does ${project.name} compare to Supreme Rivana Punawale?`,
            a: `While ${project.name} represents our ultra-luxury completed/ongoing landmarks in locations like ${project.location}, Supreme Rivana Punawale represents our newest 15-acre pre-launch riverside township offering early-bird pricing and resort amenities in West Pune.`
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": customFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    const configPrices: Record<string, string> = {
        '2bhk': '7500000',
        '3bhk': '11000000',
        '4bhk': '15000000',
        '5bhk': '22500000',
        'simplex': '13000000',
        'duplex': '20000000',
        'penthouse': '25000000',
        'townhouses': '18000000'
    };
    const startingPrice = configPrices[configId] || '7500000';

    const listingSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": `${project.name} ${config.name} - ${theme.name}`,
        "description": metaDescription,
        "url": `https://www.supreme-universal.in/pune-projects/${slug}`,
        "offers": {
            "@type": "Offer",
            "price": startingPrice,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "itemOffered": {
                "@type": "Accommodation",
                "name": `${project.name} ${config.name} Configuration`
            },
            "seller": {
                "@type": "RealEstateAgent",
                "name": "Supreme Universal",
                "url": "https://www.supreme-universal.in/"
            }
        }
    };

    const combinedSchemas = [faqSchema, listingSchema];

    return (
        <div className="font-sans antialiased text-gray-900 bg-white transition-colors duration-500 pb-16 md:pb-0">
            <SEO 
                title={titleText}
                description={metaDescription}
                url={`https://www.supreme-universal.in/pune-projects/${slug}`}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(combinedSchemas)}
                </script>
            </Helmet>

            <Preloader isLoading={isLoading} />
            <CustomCursor />
            <ScrollProgress />
            <NoiseOverlay />
            <WhatsAppButton />
            
            <Navbar onEnquire={() => setIsModalOpen(true)} />

            <div className="pt-24 md:pt-32">
                <Breadcrumbs />
            </div>

            {/* Project Keywords Hero Section */}
            <Hero 
                onEnquire={() => setIsModalOpen(true)} 
                onDownload={() => setIsBrochureModalOpen(true)}
                title={
                    <span className="uppercase tracking-widest font-normal text-supreme-gold text-center text-3xl md:text-5xl lg:text-6xl block">
                        {headingText}
                    </span>
                }
                subtitle={`${theme.name} Guide`}
                description={
                    <div className="flex flex-col gap-4 max-w-3xl mx-auto">
                        <p className="text-base md:text-lg text-white/80 leading-relaxed font-light">
                            Analyzing {config.name} layouts and {theme.name.toLowerCase()} metrics for <strong>{project.name}</strong>. 
                            Discover how this premium landmark in {project.location} represents Supreme Universal's architectural legacy.
                        </p>
                    </div>
                }
            />

            {/* Project Details Content block */}
            <section className="py-24 bg-white text-supreme-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-supreme-gold font-sans font-bold uppercase tracking-[0.2em] text-xs">
                                Project Overview: {project.location}
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                                {project.name} - {config.name} Configurations
                            </h2>
                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                {project.description} The {config.name} configuration represents our high-end residential engineering, featuring open layouts, cross-ventilation, and optimal privacy.
                            </p>
                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                Located at <strong>{project.fullLocation}</strong>, this development is currently at <strong>{project.status}</strong>. In addition to premium features, the project provides rapid connectivity to all major IT and commercial corridors in Pune.
                            </p>

                            <div className="pt-6 border-t border-gray-100">
                                <h4 className="font-serif text-lg mb-4">Architectural Highlights</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.highlights.slice(0, 4).map((h, idx) => (
                                        <div key={idx} className="flex items-start gap-2.5">
                                            <Check className="w-4 h-4 text-supreme-gold shrink-0 mt-1" />
                                            <span className="text-sm text-gray-600 font-sans">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Conversion Box */}
                        <div className="lg:col-span-5 border border-gray-100 bg-gray-50/30 p-8 md:p-12 relative group hover:border-supreme-gold transition-colors duration-500">
                            <div className="absolute top-0 right-0 bg-supreme-gold text-supreme-black text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                                Gated Community
                            </div>
                            <h3 className="text-2xl font-serif mb-6">{project.name} Layouts</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    Premium Gated Landscaping
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    Exclusive Clubhouse & Gym
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    RERA Registered Project
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    Designed by Award-Winning Architects
                                </li>
                            </ul>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full flex items-center justify-between bg-supreme-black text-white px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-supreme-gold transition-all duration-500 group"
                            >
                                Request Pricing & Details
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Specifications/Highlights */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h3 className="text-2xl font-serif text-center mb-10">Connectivity Proximity</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.connectivity.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center p-4 bg-white border border-gray-100">
                                <span className="text-gray-600 font-sans text-sm">{item.title}</span>
                                <span className="text-supreme-gold font-serif text-base">{item.dist}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Internal Linking Mesh (Project & Portfolio Hub) ─── */}
            <section className="py-16 bg-white border-b border-gray-200/60 text-supreme-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-10 text-center">
                        <span className="text-supreme-gold font-sans font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
                            Portfolio Navigation &amp; Typology Network
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif">
                            Explore {project.name} &amp; Pune Developments
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cluster 1: Other Configurations in this Project */}
                        <div className="bg-gray-50/70 p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-supreme-gold/50 transition-colors">
                            <h4 className="font-serif text-lg text-supreme-black mb-4 border-b border-gray-200 pb-3 flex items-center justify-between">
                                <span>{project.name} Layouts</span>
                                <span className="text-[10px] text-supreme-gold font-sans uppercase tracking-wider font-semibold">Configs</span>
                            </h4>
                            <ul className="space-y-2.5">
                                {configs.filter(c => c.id !== configId).slice(0, 5).map(c => (
                                    <li key={c.id}>
                                        <Link 
                                            to={`/pune-projects/${projectId}-${c.id}-${theme.id}`}
                                            className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 transition-colors group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{project.name} {c.name}</span>
                                            <span className="text-[10px] text-gray-400 font-mono">&rarr;</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cluster 2: Other Supreme Developments in Pune */}
                        <div className="bg-gray-50/70 p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-supreme-gold/50 transition-colors">
                            <h4 className="font-serif text-lg text-supreme-black mb-4 border-b border-gray-200 pb-3 flex items-center justify-between">
                                <span>Supreme Universal Landmarks</span>
                                <span className="text-[10px] text-supreme-gold font-sans uppercase tracking-wider font-semibold">Projects</span>
                            </h4>
                            <ul className="space-y-2.5">
                                {portfolioProjects.filter(p => p.id !== projectId).slice(0, 5).map(p => (
                                    <li key={p.id}>
                                        <Link 
                                            to={`/pune-projects/${p.id}-${configId}-${theme.id}`}
                                            className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 transition-colors group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{p.name} ({p.location.split(',')[0]})</span>
                                            <span className="text-[10px] text-gray-400 font-mono">&rarr;</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cluster 3: Intent Guides for this Project */}
                        <div className="bg-gray-50/70 p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-supreme-gold/50 transition-colors">
                            <h4 className="font-serif text-lg text-supreme-black mb-4 border-b border-gray-200 pb-3 flex items-center justify-between">
                                <span>{project.name} Resource Guides</span>
                                <span className="text-[10px] text-supreme-gold font-sans uppercase tracking-wider font-semibold">Guides</span>
                            </h4>
                            <ul className="space-y-2.5">
                                {themes.filter(t => t.id !== theme.id).slice(0, 5).map(t => (
                                    <li key={t.id}>
                                        <Link 
                                            to={`/pune-projects/${projectId}-${configId}-${t.id}`}
                                            className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 transition-colors group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{project.name} {t.name}</span>
                                            <span className="text-[10px] text-gray-400 font-mono">&rarr;</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Master Directory Link */}
                    <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                        <span>Viewing: <strong className="text-gray-900">{project.name} {config.name} ({theme.name})</strong></span>
                        <Link 
                            to="/pune-real-estate"
                            className="text-supreme-gold hover:underline font-semibold flex items-center gap-1.5"
                        >
                            <span>Browse All 50+ Pune Real Estate Micro-Markets &amp; Directory Hub</span>
                            <span>&rarr;</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Amenities Section */}
            <Suspense fallback={<div className="h-40 bg-white" />}>
                <Amenities />
            </Suspense>

            {/* Local Maps Section */}
            <Suspense fallback={<div className="h-40 bg-white" />}>
                <LocationSection />
            </Suspense>

            {/* Custom SEO FAQ List */}
            <section className="py-24 bg-supreme-black text-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-supreme-gold font-sans font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif">{project.name} Insights</h2>
                    </div>

                    <div className="space-y-6">
                        {customFaqs.map((faq, index) => (
                            <div key={index} className="border-b border-white/5 pb-6">
                                <h4 className="font-serif text-lg md:text-xl text-supreme-gold flex items-center gap-3 mb-3">
                                    <HelpCircle className="w-5 h-5 flex-shrink-0" />
                                    {faq.q}
                                </h4>
                                <p className="text-white/60 font-sans font-light text-sm md:text-base leading-relaxed pl-8">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Suspense fallback={<div className="h-40 bg-white" />}>
                <Footer />
            </Suspense>

            <FloatingRERA />
            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <BrochureModal isOpen={isBrochureModalOpen} onClose={() => setIsBrochureModalOpen(false)} />
            <LeadPopup />
        </div>
    );
};

export default DynamicProjectPseoPage;
