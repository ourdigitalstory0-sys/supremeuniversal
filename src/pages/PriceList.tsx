import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Info, Check, Download, ArrowRight, ShieldCheck, BadgePercent, Calendar, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import QuickEnquireModal from '../components/QuickEnquireModal';
import { useState } from 'react';

const PriceList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const priceData = [
        {
            type: "2 BHK Luxury",
            carpet: "750 - 850 Sq.ft",
            price: "Request Price",
            booking: "₹ 1,00,000",
            status: "New Launch",
            highlights: ["River Facing Balcony", "Premium Fittings", "Vastu Compliant"]
        },
        {
            type: "3 BHK Premium",
            carpet: "1050 - 1150 Sq.ft",
            price: "Request Price",
            booking: "₹ 2,00,000",
            status: "Limited Inventory",
            highlights: ["Panoramic Views", "Servant Room Space", "6 Units Per Floor"]
        }
    ];

    const priceSchema = {
        "@context": "https://schema.org",
        "@type": "PriceSpecification",
        "name": "Supreme Rivana Punawale Price List 2026",
        "description": "Latest 2 BHK and 3 BHK price list for Supreme Rivana Punawale. Get detailed cost sheets, payment plans, and booking offers.",
        "priceCurrency": "INR",
        "valueAddedTaxIncluded": "true",
        "offers": priceData.map(p => ({
            "@type": "Offer",
            "name": p.type,
            "description": `${p.type} with ${p.carpet} carpet area at Supreme Rivana Punawale`,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "areaServed": "Punawale, Pune West"
        }))
    };

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Price List 2026 | Supreme Rivana Punawale | 2 & 3 BHK Cost Sheets</title>
                <meta name="description" content="Official Supreme Rivana Punawale Price List 2026. Get 2 BHK and 3 BHK cost sheets, carpet area details, and limited-time booking offers near Hinjewadi IT Park." />
                <script type="application/ld+json">
                    {JSON.stringify(priceSchema)}
                </script>
            </Helmet>

            <Navbar onEnquire={() => setIsModalOpen(true)} />

            <main className="pt-24 md:pt-32">
                <Breadcrumbs />

                {/* Hero Section */}
                <section className="py-20 bg-supreme-black relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-supreme-black via-supreme-black/80 to-transparent"></div>

                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">
                                Investment Options 2026
                            </span>
                            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 leading-tight">
                                Supreme Rivana Punawale <br />
                                <span className="italic font-light text-supreme-gold">Price List & Cost Sheets</span>
                            </h1>
                            <p className="text-white/60 font-sans text-lg max-w-3xl mx-auto leading-relaxed font-light mb-12">
                                Transparent pricing for Pune West's most premium 15-acre riverside township.
                                Secure your future home at today's pre-launch valuation.
                            </p>

                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="flex items-center gap-3 text-white/80 text-sm font-light">
                                    <ShieldCheck className="text-supreme-gold w-5 h-5" />
                                    MahaRERA Registered
                                </div>
                                <div className="flex items-center gap-3 text-white/80 text-sm font-light">
                                    <BadgePercent className="text-supreme-gold w-5 h-5" />
                                    Festive Launch Offers
                                </div>
                                <div className="flex items-center gap-3 text-white/80 text-sm font-light">
                                    <TrendingUp className="text-supreme-gold w-5 h-5" />
                                    High ROI Potential
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Pricing Table Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {priceData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="border border-gray-100 bg-gray-50/30 p-8 md:p-12 relative group hover:border-supreme-gold transition-colors duration-500"
                                >
                                    <div className="absolute top-0 right-0 bg-supreme-gold text-supreme-black text-[10px] font-bold uppercase tracking-widest px-4 py-2">
                                        {item.status}
                                    </div>

                                    <div className="mb-10">
                                        <h3 className="text-3xl font-serif text-supreme-black mb-2">{item.type}</h3>
                                        <p className="text-gray-400 text-sm font-sans uppercase tracking-widest">Premium Riverside Collection</p>
                                    </div>

                                    <div className="space-y-6 mb-12">
                                        <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                                            <span className="text-gray-500 font-sans text-sm tracking-wide">Carpet Area</span>
                                            <span className="text-supreme-black font-serif text-2xl">{item.carpet}</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                                            <span className="text-gray-500 font-sans text-sm tracking-wide">All-Inclusive Price</span>
                                            <button
                                                onClick={() => setIsModalOpen(true)}
                                                className="text-supreme-gold font-serif text-2xl hover:underline italic"
                                            >
                                                {item.price}
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-gray-100 pb-4">
                                            <span className="text-gray-500 font-sans text-sm tracking-wide">Booking Amount</span>
                                            <span className="text-supreme-black font-serif text-2xl">{item.booking}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4 mb-12">
                                        {item.highlights.map((h, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm text-gray-500">
                                                <Check className="w-4 h-4 text-supreme-gold" />
                                                {h}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full flex items-center justify-between bg-supreme-black text-white px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-supreme-gold transition-all duration-500 group"
                                    >
                                        Unlock Full Cost Sheet
                                        <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info Cards */}
                        <div className="grid md:grid-cols-3 gap-8 mt-24">
                            <div className="bg-white border border-gray-100 p-8">
                                <Calendar className="w-8 h-8 text-supreme-gold mb-6" />
                                <h4 className="font-serif text-xl text-supreme-black mb-3">Possession Timeline</h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Aligned with MahaRERA guidelines. Phase-wise delivery schedules available on request.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 p-8">
                                <Info className="w-8 h-8 text-supreme-gold mb-6" />
                                <h4 className="font-serif text-xl text-supreme-black mb-3">Other Charges</h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Prices indicate basic cost. GST, Stamp Duty, Registration, and Maintenance are extra.
                                </p>
                            </div>
                            <div className="bg-white border border-gray-100 p-8">
                                <TrendingUp className="text-supreme-gold w-8 h-8 mb-6" />
                                <h4 className="font-serif text-xl text-supreme-black mb-3">Finance Options</h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-light">
                                    Pre-approved by SBI, HDFC, ICICI & AXIS. Special rates for Supreme Universal customers.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-supreme-black overflow-hidden relative">
                    <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
                            Ready to Claim Your <br />
                            <span className="italic font-light text-supreme-gold">Riverside Legacy?</span>
                        </h2>
                        <p className="text-white/50 font-sans mb-12 text-lg font-light tracking-wide leading-relaxed">
                            Download the comprehensive brochure containing floor plans, site map, and the
                            complete price list today. Limited pre-launch inventory remaining.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-supreme-gold text-supreme-black px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 group inline-flex items-center gap-4"
                        >
                            Get Exclusive Offer
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </section>
            </main>

            <Footer />
            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default PriceList;
