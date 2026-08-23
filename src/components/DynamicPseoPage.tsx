import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams, Navigate } from 'react-router-dom';
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
import MarketTicker from './MarketTicker';
import Breadcrumbs from './Breadcrumbs';

// Lazy load layout sections
const Amenities = lazy(() => import('./Amenities'));
const LocationSection = lazy(() => import('./Location'));
const Footer = lazy(() => import('./Footer'));

const DynamicPseoPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBrochureModalOpen, setIsBrochureModalOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        window.scrollTo(0, 0);
        return () => clearTimeout(timer);
    }, [slug]);

    if (!slug) return <Navigate to="/404" replace />;

    // Parse slug: config-type-in-location-theme
    // Examples: 3bhk-apartments-in-wakad-price, 2bhk-flats-in-hinjewadi-reviews
    const regex = /^([a-z0-9]+)-([a-z0-9]+)-in-([a-z0-9-]+)-([a-z0-9-]+)$/;
    const match = slug.match(regex);

    if (!match) return <Navigate to="/404" replace />;

    const [_, parsedConfigId, parsedTypeId, parsedLocId, parsedThemeId] = match;

    const locality = localities.find(l => l.id === parsedLocId);
    const config = configs.find(c => c.id === parsedConfigId);
    const propType = propertyTypes.find(t => t.id === parsedTypeId);
    const theme = themes.find(t => t.id === parsedThemeId);

    // Strict validation to ensure no random paths generate garbage pages
    if (!locality || !config || !propType || !theme) {
        return <Navigate to="/404" replace />;
    }

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('light-theme');
    };

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
            
            <Navbar 
                onEnquire={() => setIsModalOpen(true)} 
                onDownload={() => setIsBrochureModalOpen(true)} 
                isDarkMode={isDarkMode}
                onToggleTheme={toggleTheme}
            />
            <MarketTicker />

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

                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                                <div>
                                    <span className="block text-3xl font-serif text-supreme-gold mb-1">{locality.nearbyIT}</span>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">To Hinjewadi IT Park</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-serif text-supreme-gold mb-1">{locality.highwayDistance}</span>
                                    <span className="text-xs uppercase tracking-wider text-gray-400">To NH48 Expressway</span>
                                </div>
                            </div>
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
                                    Waterfront Promenade & Skywalk
                                </li>
                                <li className="flex items-center gap-3 text-sm text-gray-600">
                                    <Check className="w-4 h-4 text-supreme-gold" />
                                    IGBC Green Certified
                                </li>
                            </ul>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full flex items-center justify-between bg-supreme-black text-white px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-supreme-gold transition-all duration-500 group"
                            >
                                Get Price & Layout Details
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </button>
                        </div>
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
