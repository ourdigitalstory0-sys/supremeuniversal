import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumbs from '../components/Breadcrumbs';
import PropertyComparison from '../components/PropertyComparison';
import QuickEnquireModal from '../components/QuickEnquireModal';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ComparisonPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="bg-white min-h-screen">
            <Helmet>
                <title>Project Comparison | Supreme Rivana Punawale vs Puneville vs ANP Autograph</title>
                <meta name="description" content="Compare Supreme Rivana Punawale with top projects like Puneville, ANP Autograph, and 24K Living. See why Supreme Universal's 15-acre riverside township wins in 2026." />
            </Helmet>

            <Navbar onEnquire={() => setIsModalOpen(true)} />

            <main className="pt-24 md:pt-32">
                <Breadcrumbs />

                {/* Hero Section */}
                <section className="py-20 bg-gray-50 border-b border-gray-100">
                    <div className="container mx-auto px-6 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">
                                Transparent Intelligence
                            </span>
                            <h1 className="text-4xl md:text-7xl font-serif text-supreme-black mb-8 leading-tight">
                                Compare <br />
                                <span className="italic font-light text-supreme-gold">The Excellence</span>
                            </h1>
                            <p className="text-gray-500 font-sans text-lg max-w-2xl mx-auto leading-relaxed font-light mb-12 uppercase tracking-widest">
                                Discover how Supreme Rivana Punawale outclasses the competition <br className="hidden md:block" />
                                in scale, lifestyle, and long-term valuation.
                            </p>
                        </motion.div>
                    </div>
                </section>

                <PropertyComparison />

                {/* Verdict Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-6 max-w-5xl">
                        <div className="bg-supreme-black p-12 md:p-20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-supreme-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                                        The Supreme <br />
                                        <span className="italic font-light text-supreme-gold">Verdict</span>
                                    </h2>
                                    <p className="text-white/60 font-sans leading-relaxed font-light mb-8">
                                        Data proves it. Supreme Rivana Punawale offers the highest amenity-to-unit ratio,
                                        the most expansive riverside promenade, and a 40-year developer trust
                                        that alternative projects in Punawale cannot match.
                                    </p>
                                    <ul className="space-y-4 mb-10">
                                        {['15-Acre Township Scale', 'Exclusive 6 Units Per Floor', 'IGBC Certified Waterfront Living'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white text-xs uppercase tracking-widest font-bold">
                                                <span className="w-4 h-[1px] bg-supreme-gold"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-center md:text-right">
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-supreme-gold text-supreme-black px-12 py-6 text-xs uppercase tracking-[0.3em] font-bold hover:bg-white transition-all duration-500 group inline-flex items-center gap-4"
                                    >
                                        Claim Early Advantage
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ComparisonPage;
