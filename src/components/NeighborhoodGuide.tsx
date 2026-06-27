import { motion } from 'framer-motion';

const NeighborhoodGuide = () => {
    return (
        <section id="neighborhood-guide" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "DefinedRegion",
                    "name": "Punawale, Pune West",
                    "description": "Punawale is a high-growth micro-market in Pune West, strategically located near Hinjewadi IT Park, Pune Metro Line 3, and Mumbai-Pune Expressway. Top choice for luxury apartments and property investment in 2026.",
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "18.6327",
                        "longitude": "73.7431"
                    },
                    "containedInPlace": {
                        "@type": "City",
                        "name": "Pune"
                    }
                })
            }} />
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
                            Punawale is rapidly emerging as the top investment choice for premium residential projects in Pune. Supreme Rivana Punawale leverages this strategic location, offering high-rise luxury apartments with unmatched proximity to Hinjewadi IT Park, Wakad, and Tathawade.
                        </p>

                        <div className="space-y-6">
                            <div className="border-l-2 border-supreme-gold pl-6">
                                <h4 className="text-xl font-serif text-supreme-black mb-2">Unmatched Connectivity</h4>
                                <p className="text-gray-600">Just 400m from the <strong>Punawale Metro Underpass</strong>, offering direct access to the upcoming <strong>Pune Metro Line 3</strong>. Rapid transit to <strong>Phoenix Mall of the Millennium</strong> (4.8 km) and <strong>Wakad</strong>.</p>
                            </div>
                            <div className="border-l-2 border-supreme-gold pl-6">
                                <h4 className="text-xl font-serif text-supreme-black mb-2">Prime Retail Proximity</h4>
                                <p className="text-gray-600">Minutes away from <strong>D-Mart Punawale</strong> (2.3 km) and major high-street retail hubs, ensuring everyday convenience for premium families.</p>
                            </div>
                            <div className="border-l-2 border-supreme-gold pl-6">
                                <h4 className="text-xl font-serif text-supreme-black mb-2">The Ring Road Advantage</h4>
                                <p className="text-gray-600">Strategically located to benefit from the <strong>Pune Ring Road</strong> expansion, driving double-digit property appreciation in <strong>West Pune</strong> by 2026-2027.</p>
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
                            alt="Supreme Rivana Punawale map showing premium residential projects in Pune West and connectivity to Hinjewadi Phase 1"
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

                {/* SEO-Optimized Keyword Content Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 md:mt-28 border-t border-gray-100 pt-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-supreme-black mb-4">
                                Why Invest in <span className="italic text-supreme-gold">Punawale?</span>
                            </h3>
                            <p className="text-gray-600 font-sans font-light leading-relaxed mb-6">
                                Punawale has emerged as the premier location for property investment in Pune West. With Supreme Rivana Punawale leading the charge, buyers can now access ultra-luxury apartments near Hinjewadi IT Park at competitive prices. The micro-market offers IGBC certified green homes just minutes from Wakad Bridge and the Mumbai-Pune Expressway.
                            </p>
                            <p className="text-gray-600 font-sans font-light leading-relaxed">
                                Whether you are an NRI investor looking for properties in Pune or a homebuyer seeking premium 2 BHK and 3 BHK flats, Supreme Rivana delivers unmatched value with panoramic river views and elevated community living.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-serif text-supreme-black mb-4">
                                Supreme Rivana Punawale: <span className="italic text-supreme-gold">The Benchmark</span>
                            </h3>
                            <p className="text-gray-600 font-sans font-light leading-relaxed mb-6">
                                Positioned as the defining project of 2026, Supreme Rivana Punawale by Supreme Universal redefines luxury residences in Pune West. With 31-storey towers, a 15-acre riverside township, and 40+ world-class amenities including an infinity pool, skywalk bridge, and multi-tier clubhouse, it stands in a class of its own.
                            </p>
                            <p className="text-gray-600 font-sans font-light leading-relaxed">
                                Our MahaRERA-certified development offers spacious apartments with Vastu-compliant layouts, premium Italian marble flooring, and smart home automation. Pre-approved by top financial institutions including HDFC, SBI, ICICI, and Axis Bank.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default NeighborhoodGuide;
