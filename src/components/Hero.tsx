import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface HeroProps {
    onEnquire?: () => void;
}

const Hero = ({ onEnquire }: HeroProps) => {
    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-supreme-black">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>

            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 15, ease: "easeOut" }}
            >
                <img
                    src="https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
                    alt="Supreme Riverside Luxury Apartments"
                    className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                    fetchPriority="high"
                    loading="eager"
                />
            </motion.div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-20 flex flex-col items-center justify-center text-center mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-6 flex flex-col items-center w-full"
                >
                    <span className="block text-xs md:text-sm font-sans tracking-[0.4em] text-supreme-gold mb-4 uppercase">
                        Designs That Elevate The Way You Live
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight drop-shadow-2xl">
                        Supreme <span className="italic font-light text-supreme-gold">Riverside</span>
                    </h1>
                </motion.div>

                <motion.p
                    className="text-base md:text-xl text-white/80 max-w-2xl mx-auto font-sans font-light tracking-wide mb-10 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 1 }}
                >
                    Experience timeless luxury and the pinnacle of real estate evolution with our premium 2 & 3 BHK waterfront residences in Punawale, Pune.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <button
                        onClick={onEnquire}
                        className="group relative overflow-hidden bg-supreme-gold text-white px-8 py-4 rounded-full font-sans font-semibold uppercase tracking-widest text-sm transition-all duration-300 w-full sm:w-auto hover:-translate-y-1 shadow-2xl hover:shadow-supreme-gold/20"
                    >
                        <span className="relative z-10 transition-colors duration-300 group-hover:text-supreme-black">Enquire Now</span>
                        <div className="absolute inset-0 h-full w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out bg-white"></div>
                    </button>

                    <Link
                        to="/supreme-riverside-punawale-overview"
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
