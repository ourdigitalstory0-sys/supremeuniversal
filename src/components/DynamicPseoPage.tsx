import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check, Download, HelpCircle } from 'lucide-react';
import { localities, configs, propertyTypes, themes } from '../data/punePseoData';
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
const ROICalculator = lazy(() => import('./ROICalculator'));
const Footer = lazy(() => import('./Footer'));

const DynamicPseoPage = () => {
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

    // Parse slug: config-type-in-location-theme
    const regex = /^([a-z0-9]+)-([a-z0-9]+)-in-([a-z0-9-]+)-([a-z0-9-]+)$/;
    const match = slug.match(regex);

    if (!match) return <Navigate to="/404" replace />;

    const [_, parsedConfigId, parsedTypeId, parsedLocId, parsedThemeId] = match;

    const locality = localities.find(l => l.id === parsedLocId);
    const config = configs.find(c => c.id === parsedConfigId);
    const propType = propertyTypes.find(t => t.id === parsedTypeId);
    const theme = themes.find(t => t.id === parsedThemeId);

    if (!locality || !config || !propType || !theme) {
        return <Navigate to="/404" replace />;
    }

    // Generate semantic, custom keyword page copy (Pixel-hardened for SERP limits)
    const titleText = `${config.name} ${propType.name} in ${locality.name} (${theme.name})`;
    const headingText = `${config.name} ${propType.name} in ${locality.name}`;
    
    const themeDescriptions: Record<string, string> = {
        'price': `Check carpet price list & pre-launch cost sheets for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}. Compare Supreme Rivana Pune rates.`,
        'reviews': `Real customer reviews & project ratings for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}. Find out why Supreme Rivana is highly rated.`,
        'floor-plan': `Download layout details & floor plans for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}. Inspect Vastu-compliant layouts.`,
        'possession-date': `Check possession updates, RERA construction status & delivery timelines for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}.`,
        'amenities': `Explore amenities, central clubhouses, and recreational options for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}.`,
        'location-map': `Get maps, school connectivity, & road distance indexes for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}.`,
        'brochure': `Download official PDF brochures, floor sheets, & master layouts for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}.`,
        'rera': `MahaRERA registration certificate numbers, verification states, & timeline legalities for ${config.name} ${propType.name.toLowerCase()} in ${locality.name}.`
    };
    const metaDescription = themeDescriptions[parsedThemeId] || `Get detailed ${theme.name} for ${config.name} ${propType.name} in ${locality.name}. Explore Supreme Rivana Punawale.`;

    // Dynamic FAQ builder
    const customFaqs = [
        {
            q: `What is the price of a ${config.name} in ${locality.name} compared to Supreme Rivana?`,
            a: `The average price in ${locality.name} ranges around ${locality.avgRate}. By comparison, Supreme Rivana Punawale offers highly competitive pre-launch pricing with much better carpet sizes, open green layouts, and premium amenities.`
        },
        {
            q: `What is the commute time from ${locality.name} to Hinjewadi IT Park?`,
            a: `Hinjewadi IT Park is approximately ${locality.nearbyIT} away from ${locality.name}. Supreme Rivana Punawale is positioned right on the corridor, taking only 10-15 minutes via Marunji Road.`
        },
        {
            q: `Is the RERA registry verified for Supreme Rivana?`,
            a: `Yes, Supreme Rivana is registered under MahaRERA No: P52100056095, ensuring transparency, scheduled delivery timeline compliance, and bank pre-approvals.`
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
        'penthouse': '25000000'
    };
    const startingPrice = configPrices[parsedConfigId] || '7500000';

    const listingSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateListing",
        "name": `${config.name} ${propType.name} in ${locality.name} - ${theme.name}`,
        "description": metaDescription,
        "url": `https://www.supreme-universal.in/pune-real-estate/${slug}`,
        "offers": {
            "@type": "Offer",
            "price": startingPrice,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "itemOffered": {
                "@type": "Accommodation",
                "name": `${config.name} ${propType.name} in ${locality.name}`
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
                url={`https://www.supreme-universal.in/pune-real-estate/${slug}`}
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

            {/* Dynamic Keywords Hero section */}
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
                            Analyzing {config.name} layouts and {propType.name.toLowerCase()} trends in {locality.name}. 
                            Discover how the premium 15-acre township of <strong>Supreme Rivana Punawale</strong> sets the luxury benchmark for West Pune.
                        </p>
                    </div>
                }
            />

            {/* Micro-market Analysis / Comparative Content */}
            <section className="py-24 bg-white text-supreme-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-7 space-y-6">
                            <span className="text-supreme-gold font-sans font-bold uppercase tracking-[0.2em] text-xs">
                                Market Analysis: {locality.name} Real Estate
                            </span>
                            <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                                Looking for {config.name} {propType.name} in {locality.name}?
                            </h2>
                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                Local searches for <strong>{config.name} {propType.name.toLowerCase()} in {locality.name}</strong> have increased as Pune's Western suburbs expand. {config.description} With average rates hovering at <strong>{locality.avgRate}</strong>, buyers are looking for high-appreciation homes with good connectivity.
                            </p>
                            <p className="text-gray-500 font-sans font-light leading-relaxed">
                                While {locality.name} offers various options, <strong>Supreme Rivana Punawale</strong> provides a superior township alternative. Sitting on a 15-acre riverfront plot with 31-storey towers and only 6 units per floor, Supreme Rivana delivers better privacy, ventilation, and resort-level amenities compared to standalone plots in {locality.name}.
                            </p>

                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-xl font-serif text-supreme-gold mb-0.5">{locality.nearbyIT}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-500">To Hinjewadi IT</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-xl font-serif text-supreme-gold mb-0.5">{locality.highwayDistance}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-500">To Expressway</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-xl font-serif text-supreme-gold mb-0.5">{locality.rentalYield || '4.8%'}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-500">Avg Rental Yield</span>
                                </div>
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    <span className="block text-xl font-serif text-supreme-gold mb-0.5">{locality.avgRate.split(' ')[0]}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-500">Starting Rate</span>
                                </div>
                            </div>

                            {locality.landmarks && locality.landmarks.length > 0 && (
                                <div className="pt-2">
                                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block mb-2">Key Micro-Market Landmarks:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {locality.landmarks.map((lm, i) => (
                                            <span key={i} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full font-sans">
                                                📍 {lm}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Conversion Box */}
                        <div className="lg:col-span-5 border border-gray-100 bg-gray-50/30 p-8 md:p-12 relative group hover:border-supreme-gold transition-colors duration-500">
                            <div className="absolute top-0 right-0 bg-supreme-gold text-supreme-black text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                                Special Offer
                            </div>
                            <h3 className="text-2xl font-serif mb-6">Supreme Rivana Punawale Overview</h3>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    15-Acre Gated Township
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    Only 6 Units Per Floor
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    Waterfront Promenade &amp; Skywalk
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    IGBC Green Certified
                                </li>
                            </ul>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full flex items-center justify-between bg-supreme-black text-white px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-supreme-gold transition-all duration-500 group cursor-pointer"
                            >
                                Get Price &amp; Layout Details
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Internal Linking Mesh (Google Rank #1 Crawl Architecture) ─── */}
            <section className="py-16 bg-gray-50/60 border-t border-b border-gray-200/60 text-supreme-black">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="mb-10 text-center">
                        <span className="text-supreme-gold font-sans font-bold uppercase tracking-[0.2em] text-xs mb-2 block">
                            Internal Real Estate Mesh &amp; Cross-Market Hub
                        </span>
                        <h3 className="text-2xl md:text-4xl font-serif">
                            Explore {locality.name} Real Estate Network
                        </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Cluster 1: Other Configurations in this Locality */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-supreme-gold/50 transition-colors">
                            <h4 className="font-serif text-lg text-supreme-black mb-4 border-b border-gray-100 pb-3 flex items-center justify-between">
                                <span>Other Typologies in {locality.name}</span>
                                <span className="text-[10px] text-supreme-gold font-sans uppercase tracking-wider font-semibold">Configs</span>
                            </h4>
                            <ul className="space-y-2.5">
                                {configs.filter(c => c.id !== parsedConfigId).slice(0, 5).map(c => (
                                    <li key={c.id}>
                                        <Link 
                                            to={`/pune-real-estate/${c.id}-${parsedTypeId}-in-${parsedLocId}-${parsedThemeId}`}
                                            className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 transition-colors group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{c.name} {propType.name} in {locality.name}</span>
                                            <span className="text-[10px] text-gray-400 font-mono">&rarr;</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cluster 2: Neighboring Micro-Markets */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-supreme-gold/50 transition-colors">
                            <h4 className="font-serif text-lg text-supreme-black mb-4 border-b border-gray-100 pb-3 flex items-center justify-between">
                                <span>Neighboring Micro-Markets</span>
                                <span className="text-[10px] text-supreme-gold font-sans uppercase tracking-wider font-semibold">Nearby</span>
                            </h4>
                            <ul className="space-y-2.5">
                                {(locality.nearbyLocalities || ['tathawade', 'wakad', 'hinjewadi', 'ravet']).map(neighborId => {
                                    const neighbor = localities.find(l => l.id === neighborId);
                                    if (!neighbor) return null;
                                    return (
                                        <li key={neighborId}>
                                            <Link 
                                                to={`/pune-real-estate/${parsedConfigId}-${parsedTypeId}-in-${neighborId}-${parsedThemeId}`}
                                                className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 transition-colors group"
                                            >
                                                <span className="group-hover:translate-x-1 transition-transform">{config.name} in {neighbor.name}</span>
                                                <span className="text-[10px] text-gray-400 font-mono">{neighbor.avgRate.split('-')[0]}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        {/* Cluster 3: Intent & Resource Guides */}
                        <div className="bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm hover:border-supreme-gold/50 transition-colors">
                            <h4 className="font-serif text-lg text-supreme-black mb-4 border-b border-gray-100 pb-3 flex items-center justify-between">
                                <span>{locality.name} Knowledge Guides</span>
                                <span className="text-[10px] text-supreme-gold font-sans uppercase tracking-wider font-semibold">Guides</span>
                            </h4>
                            <ul className="space-y-2.5">
                                {themes.filter(t => t.id !== parsedThemeId).slice(0, 5).map(t => (
                                    <li key={t.id}>
                                        <Link 
                                            to={`/pune-real-estate/${parsedConfigId}-${parsedTypeId}-in-${parsedLocId}-${t.id}`}
                                            className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 transition-colors group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{config.name} {t.name}</span>
                                            <span className="text-[10px] text-gray-400 font-mono">&rarr;</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Master Directory Link */}
                    <div className="mt-10 pt-6 border-t border-gray-200/70 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-500">
                        <span>Viewing: <strong className="text-gray-900">{config.name} {propType.name} in {locality.name} ({theme.name})</strong></span>
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

            {/* Interactive Investment & ROI Growth Calculator */}
            <Suspense fallback={<div className="h-40 bg-white" />}>
                <ROICalculator onEnquire={() => setIsModalOpen(true)} />
            </Suspense>

            {/* Amenities Section */}
            <Suspense fallback={<div className="h-40 bg-white" />}>
                <Amenities />
            </Suspense>

            {/* Local Maps Section */}
            <Suspense fallback={<div className="h-40 bg-white" />}>
                <LocationSection />
            </Suspense>

            {/* Custom SEO FAQ list */}
            <section className="py-24 bg-supreme-black text-white border-t border-white/10">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-supreme-gold font-sans font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif">FAQ and Insights</h2>
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

export default DynamicPseoPage;
