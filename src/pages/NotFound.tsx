import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home, BookOpen, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import NoiseOverlay from '../components/NoiseOverlay';
import SEO from '../components/SEO';

const NotFound = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <SEO
                title="Page Not Found | Supreme Rivana Punawale"
                description="The page you are looking for does not exist. Explore Supreme Rivana Punawale — premium 2 & 3 BHK luxury flats near Hinjewadi IT Park, Pune West."
                url="https://supreme-universal.in/404"
            />

            <CustomCursor />
            <NoiseOverlay />
            <Navbar />

            <section className="min-h-[80vh] flex items-center justify-center bg-supreme-black relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

                <div className="container mx-auto px-6 md:px-12 relative z-10 text-center py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">
                            Page Not Found
                        </span>
                        <h1 className="text-8xl md:text-[12rem] font-serif text-white/10 leading-none mb-4">
                            404
                        </h1>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                            Lost in the <span className="italic text-supreme-gold font-light">Blueprint?</span>
                        </h2>
                        <p className="text-white/60 font-sans font-light text-lg max-w-xl mx-auto mb-12 leading-relaxed">
                            The page you're looking for doesn't exist or has been moved. Explore our luxury riverside project in Punawale, Pune West.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
                    >
                        <Link
                            to="/"
                            className="group flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-supreme-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-500"
                        >
                            <Home className="w-6 h-6 text-supreme-gold" />
                            <span className="text-white text-sm font-sans uppercase tracking-wider">Home</span>
                            <span className="text-white/40 text-xs">Supreme Rivana</span>
                        </Link>

                        <Link
                            to="/supreme-rivana-overview"
                            className="group flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-supreme-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-500"
                        >
                            <MapPin className="w-6 h-6 text-supreme-gold" />
                            <span className="text-white text-sm font-sans uppercase tracking-wider">Overview</span>
                            <span className="text-white/40 text-xs">Project Details</span>
                        </Link>

                        <Link
                            to="/blog"
                            className="group flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-supreme-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-500"
                        >
                            <BookOpen className="w-6 h-6 text-supreme-gold" />
                            <span className="text-white text-sm font-sans uppercase tracking-wider">Insights</span>
                            <span className="text-white/40 text-xs">Market Analysis</span>
                        </Link>

                        <Link
                            to="/supreme-rivana-contact"
                            className="group flex flex-col items-center gap-3 p-6 border border-white/10 hover:border-supreme-gold/40 bg-white/5 hover:bg-white/10 transition-all duration-500"
                        >
                            <Phone className="w-6 h-6 text-supreme-gold" />
                            <span className="text-white text-sm font-sans uppercase tracking-wider">Contact</span>
                            <span className="text-white/40 text-xs">Book Site Visit</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mt-12"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 text-supreme-gold font-sans text-xs uppercase tracking-[0.15em] font-semibold hover:text-white transition-colors duration-300"
                        >
                            <ArrowLeft size={16} />
                            <span>Back to Home</span>
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFound;
