import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
    onEnquire?: () => void;
    onDownload?: () => void;
    title?: React.ReactNode;
    subtitle?: string;
    description?: React.ReactNode;
}

const Hero = ({ 
    onEnquire, 
    onDownload, 
    title, 
    subtitle = "2 & 3 Bed Riverside Residences",
    description 
}: HeroProps) => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-supreme-black">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none"></div>

            <div className="absolute inset-0 z-0 pointer-events-none">
                <picture>
                    <source media="(max-width: 768px)" srcSet="/images/hero-banner-mobile.jpg" width="480" height="720" />
                    <img
                        src="/images/hero-banner.jpg"
                        alt="Supreme Rivana Punawale luxury residences — premium 2 BHK and 3 BHK waterfront apartments in Punawale Pune near Hinjewadi IT Park."
                        className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                        fetchPriority="high"
                        loading="eager"
                        decoding="async"
                        width="1920"
                        height="1080"
                    />
                </picture>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center mt-20">
                <div className="mb-6 flex flex-col items-center w-full">
                    <span className="block text-xs md:text-sm font-sans tracking-[0.4em] text-supreme-gold mb-4 uppercase">
                        Premium Lifestyle Apartments Pune | Luxury Residences Pune
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight drop-shadow-2xl flex flex-col items-center">
                        {title || (
                            <>
                                <span className="uppercase tracking-widest mb-2 font-normal">Supreme</span>
                                <span className="uppercase tracking-widest font-normal text-supreme-gold text-center">Rivana Punawale</span>
                            </>
                        )}
                        <span className="block text-xl md:text-2xl mt-8 font-sans font-light tracking-wide text-white/90">{subtitle}</span>
                    </h1>
                </div>

                <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-sans font-light tracking-wide mb-10 leading-relaxed">
                    {description || (
                        <>
                            Widely considered the <strong>best project in Punawale 2026</strong>. Experience unprecedented <strong>waterfront luxury</strong> and the pinnacle of real estate evolution with our premium <strong>2 & 3 BHK flats near Hinjewadi IT Park</strong>. A 15-acre IGBC certified township with <strong>31-storey towers</strong>, 40+ world-class amenities, and <strong>Pune Metro Line 3</strong> proximity.
                        </>
                    )}
                </p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <button
                        onClick={onEnquire}
                        aria-label="Enquire about Supreme Rivana 2 and 3 BHK Apartments"
                        className="group relative overflow-hidden bg-supreme-gold text-white px-8 py-4 rounded-full font-sans font-semibold uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 shadow-2xl hover:shadow-supreme-gold/20"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-supreme-black">Enquire Now</span>
                        <div className="absolute inset-0 h-full w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out bg-white"></div>
                    </button>

                    <button
                        onClick={onDownload}
                        aria-label="Download Supreme Rivana Official Brochure"
                        className="group relative px-8 py-4 rounded-full font-sans font-semibold uppercase tracking-widest text-sm transition-all w-full sm:w-auto text-white border border-white/30 hover:border-white hover:bg-white/10 flex items-center justify-center gap-2"
                    >
                        Download Brochure
                    </button>

                    <Link
                        to="/supreme-rivana-punawale-overview"
                        aria-label="Explore Supreme Rivana Project Overview, Masterplan & Specifications"
                        className="group relative px-8 py-4 rounded-full font-sans font-semibold uppercase tracking-widest text-sm transition-all w-full sm:w-auto text-white border border-white/30 hover:border-white hover:bg-white/10"
                    >
                        Explore Project
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-4 hidden md:flex"
            >
                <span className="text-[10px] font-sans text-white/50 uppercase tracking-[0.3em]">Scroll to discover</span>
                <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        className="w-full h-[50%] bg-supreme-gold absolute top-0"
                        animate={{ y: ['-100%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
