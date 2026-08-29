import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Building2, TrendingUp, Compass, ArrowRight } from 'lucide-react';
import { localities } from '../data/punePseoData';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
import Footer from '../components/Footer';
import QuickEnquireModal from '../components/QuickEnquireModal';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingRERA from '../components/FloatingRERA';

const REGIONAL_CLUSTERS = [
    {
        title: 'West Pune & IT Corridor',
        description: 'Prime residential suburbs bordering Hinjewadi IT Park and the Mumbai-Pune Expressway.',
        localityIds: ['punawale', 'hinjewadi', 'wakad', 'baner', 'balewadi', 'tathawade', 'ravet', 'kiwale', 'mahalunge', 'marunji', 'maandvi', 'balewadi-high-street']
    },
    {
        title: 'PCMC & Expressway Belt',
        description: 'Well-planned municipal micro-markets with established industrial and metro infrastructure.',
        localityIds: ['chinchwad', 'pimpri', 'akurdi', 'thergaon', 'pimple-saudagar', 'pimple-nilakh', 'rahatani', 'pimple-gurav', 'sangvi', 'somatane', 'talegaon', 'gahunje', 'bhosari', 'moshi', 'alandi', 'chakan']
    },
    {
        title: 'East Pune & Tech Corridors',
        description: 'Thriving IT and banking enclaves near EON Free Zone, Magarpatta, and Pune Airport.',
        localityIds: ['kharadi', 'viman-nagar', 'kalyani-nagar', 'hadapsar', 'wagholi', 'mundhwa', 'keshav-nagar', 'manjri', 'dhanori', 'vishrantwadi', 'lohegaon']
    },
    {
        title: 'Central & South Pune',
        description: 'Heritage residential enclaves and premium luxury districts in the heart of Pune.',
        localityIds: ['koregaon-park', 'kothrud', 'shivajinagar', 'camp', 'swargate', 'nibm', 'undri', 'katraj', 'bavdhan', 'pashan', 'sus']
    }
];

const PuneRealEstateHub = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredLocalities = localities.filter(loc => 
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white text-supreme-black font-sans antialiased">
            <SEO 
                title="Pune Real Estate Directory & Micro-Market Intelligence Hub | Supreme Universal"
                description="Comprehensive micro-market real estate guide for 50+ Pune localities. Explore 2 & 3 BHK prices, carpet area layouts, rental yields & connectivity indices across West, East & Central Pune."
                url="https://www.supreme-universal.in/pune-real-estate"
            />

            <Navbar onEnquire={() => setIsModalOpen(true)} />
            <WhatsAppButton />
            <FloatingRERA />

            {/* Header / Hero */}
            <header className="pt-32 pb-16 bg-supreme-black text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C6A87C_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="mb-6">
                        <Breadcrumbs />
                    </div>
                    <span className="text-supreme-gold font-bold uppercase tracking-[0.25em] text-xs block mb-3">
                        Micro-Market Intelligence &amp; Locality Directory
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
                        Pune Real Estate <span className="text-supreme-gold italic">Directory Hub</span>
                    </h1>
                    <p className="text-white/70 max-w-3xl text-base md:text-lg leading-relaxed font-light mb-8">
                        Explore comprehensive data sheets, current price trends, rental yields, and connectivity metrics across 
                        50+ key micro-markets in Pune. Discover how <strong>Supreme Rivana Punawale</strong> sets the luxury benchmark for waterfront township living.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-xl relative">
                        <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input 
                            type="text"
                            placeholder="Search locality (e.g. Wakad, Hinjewadi, Baner, Punawale)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-supreme-gold transition-colors font-sans text-sm backdrop-blur-sm"
                        />
                    </div>
                </div>
            </header>

            {/* Main Directory Body */}
            <main className="py-20 container mx-auto px-6 max-w-6xl">
                {searchQuery ? (
                    // Filtered View
                    <div>
                        <h2 className="text-2xl font-serif mb-8 flex items-center gap-2">
                            <span>Search Results for:</span>
                            <span className="text-supreme-gold">"{searchQuery}"</span>
                            <span className="text-xs font-sans text-gray-400 font-normal">({filteredLocalities.length} localities found)</span>
                        </h2>
                        {filteredLocalities.length === 0 ? (
                            <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                                <Compass className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                                <p className="text-gray-500 font-sans">No matching Pune micro-markets found. Try another search keyword.</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredLocalities.map(loc => (
                                    <LocalityCard key={loc.id} locality={loc} />
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    // Categorized Cluster View
                    <div className="space-y-16">
                        {REGIONAL_CLUSTERS.map((cluster, cIdx) => (
                            <section key={cIdx} className="space-y-6">
                                <div className="border-b border-gray-200 pb-4">
                                    <div className="flex items-center gap-2 text-supreme-gold font-bold text-xs uppercase tracking-wider mb-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>Region #{cIdx + 1}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-serif text-supreme-black">{cluster.title}</h2>
                                    <p className="text-gray-500 font-sans text-sm">{cluster.description}</p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {cluster.localityIds.map(locId => {
                                        const loc = localities.find(l => l.id === locId);
                                        if (!loc) return null;
                                        return <LocalityCard key={locId} locality={loc} />;
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>
                )}

                {/* Bottom Township Spotlight CTA */}
                <section className="mt-20 p-8 md:p-12 bg-supreme-black text-white rounded-2xl relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-96 h-96 bg-supreme-gold/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
                    <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8 space-y-4">
                            <span className="text-supreme-gold text-xs font-bold uppercase tracking-[0.2em]">Featured Master Development</span>
                            <h3 className="text-2xl md:text-4xl font-serif">Supreme Rivana Punawale</h3>
                            <p className="text-white/70 font-light text-sm md:text-base leading-relaxed">
                                West Pune's premier 15-acre riverfront township. 31-storey high-rise towers with only 6 residences per floor, 
                                40+ curated resort amenities, and effortless 10-minute commute to Hinjewadi IT Park Phase 1. 2 &amp; 3 BHK residences starting from ₹94 Lakhs*.
                            </p>
                        </div>
                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full py-4 px-6 bg-supreme-gold text-supreme-black font-bold uppercase text-xs tracking-widest text-center hover:bg-white transition-colors cursor-pointer"
                            >
                                Request Cost Sheet
                            </button>
                            <Link
                                to="/supreme-rivana-punawale-overview"
                                className="w-full py-4 px-6 bg-white/10 text-white font-bold uppercase text-xs tracking-widest text-center hover:bg-white/20 transition-colors border border-white/20"
                            >
                                Explore Rivana
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

interface LocalityCardProps {
    locality: {
        id: string;
        name: string;
        nearbyIT: string;
        highwayDistance: string;
        avgRate: string;
        rentalYield?: string;
        landmarks?: string[];
    };
}

const LocalityCard = ({ locality }: LocalityCardProps) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-supreme-gold/60 transition-all duration-300 flex flex-col justify-between group">
            <div>
                <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-serif text-supreme-black group-hover:text-supreme-gold transition-colors">
                        {locality.name}
                    </h3>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 bg-gray-100 text-gray-700 rounded">
                        {locality.avgRate.split('-')[0]}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-gray-500 mb-4 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-supreme-gold shrink-0" />
                        <span>IT Park: <strong>{locality.nearbyIT}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-supreme-gold shrink-0" />
                        <span>Yield: <strong>{locality.rentalYield || '4.8%'}</strong></span>
                    </div>
                </div>

                {locality.landmarks && locality.landmarks.length > 0 && (
                    <p className="text-[11px] text-gray-500 line-clamp-1 mb-4">
                        📍 {locality.landmarks.slice(0, 2).join(' • ')}
                    </p>
                )}
            </div>

            {/* Quick Links */}
            <div className="space-y-1.5 pt-2 border-t border-gray-100">
                <Link 
                    to={`/pune-real-estate/2bhk-apartments-in-${locality.id}-price`}
                    className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 group/link"
                >
                    <span>2 BHK Price &amp; Cost Sheet</span>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <Link 
                    to={`/pune-real-estate/3bhk-apartments-in-${locality.id}-price`}
                    className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 group/link"
                >
                    <span>3 BHK Luxury Residences</span>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <Link 
                    to={`/pune-real-estate/3bhk-apartments-in-${locality.id}-floor-plan`}
                    className="text-xs text-gray-600 hover:text-supreme-gold flex items-center justify-between py-1 group/link"
                >
                    <span>Floor Plans &amp; Layouts</span>
                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover/link:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
};

export default PuneRealEstateHub;
