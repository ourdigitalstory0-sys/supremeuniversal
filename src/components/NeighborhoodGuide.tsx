import { motion } from 'framer-motion';

const NeighborhoodGuide = () => {
    return (
        <section id="neighborhood-guide" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
                <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                West Pune's Real Estate Hub
                            </span>
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-supreme-black leading-tight">
                            The Punawale <span className="italic font-light text-supreme-gold">Edge</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left content area */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl lg:text-4xl font-serif text-supreme-black mb-6">
                            A High-Growth Micro Market in Pune
                        </h3>
                        <p className="text-gray-600 font-sans text-lg lg:text-xl leading-relaxed mb-8">
                            Punawale is rapidly emerging as the top investment choice for premium homebuyers in Pune. Supreme Riverside leverages this strategic location, offering unmatched proximity to Hinjewadi, Wakad, and Tathawade.
                        </p>

                        <div className="space-y-6">
                            <div className="border-l-2 border-supreme-gold pl-6">
                                <h4 className="text-xl font-serif text-supreme-black mb-2">Hinjewadi IT Connectivity</h4>
                                <p className="text-gray-600">Avoid daily traffic jams with direct access to Hinjewadi Phase 1, Phase 2, and Phase 3 via Marunji Road.</p>
                            </div>
                            <div className="border-l-2 border-supreme-gold pl-6">
                                <h4 className="text-xl font-serif text-supreme-black mb-2">Mumbai-Pune Expressway</h4>
                                <p className="text-gray-600">Zero-congestion access to the national highway makes commuting to Mumbai or Lonavala effortless.</p>
                            </div>
                            <div className="border-l-2 border-supreme-gold pl-6">
                                <h4 className="text-xl font-serif text-supreme-black mb-2">Lotus Business School Proximity</h4>
                                <p className="text-gray-600">Surrounded by premier educational institutions and bustling commercial centers driving high rental yields.</p>
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Image area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-square md:aspect-[4/3] lg:h-[500px] w-full mt-8 lg:mt-0"
                    >
                        <div className="absolute inset-0 bg-supreme-gold/10 transform rotate-3 -z-10"></div>
                        <img
                            src="https://cdn.supremeuniversal.com/media/Punawale-Location.jpg"
                            alt="Map visualization showing Supreme Riverside Punawale connectivity to Hinjewadi Phase 1 and Wakad, Maharashtra"
                            className="object-cover w-full h-full shadow-2xl"
                            loading="lazy"
                            decoding="async"
                            onError={(e) => {
                                // Fallback image if map asset doesn't exist
                                e.currentTarget.src = "https://cdn.supremeuniversal.com/media/NwhG7T_x3tgCEProjectListing26min.jpg";
                            }}
                        />
                        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-sm p-4 md:p-6 text-center shadow-lg border border-gray-100">
                            <p className="text-supreme-gold font-serif text-xl md:text-2xl font-semibold mb-1">#1 Choice</p>
                            <p className="text-supreme-black text-xs md:text-sm uppercase tracking-widest break-words">For Pune Real Estate Investment</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default NeighborhoodGuide;
