import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Overview = () => {
    return (
        <section id="overview" className="py-24 md:py-32 bg-supreme-gray overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Storytelling Image */}
                    <div className="lg:w-5/12 relative w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] overflow-hidden rounded-t-[140px] rounded-b-none relative z-10 shadow-2xl">
                                <img
                                    src="https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg"
                                    alt="Supreme Rivana by Supreme Universal — 15-acre luxury township in Punawale with 31-storey towers. View Supreme Rivana master plan and construction status near Hinjewadi."
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s] ease-out"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            {/* Decorative Gold Border Box */}
                            <div className="absolute -inset-4 border border-supreme-gold/40 rounded-t-[160px] rounded-b-none z-0 hidden md:block"></div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="absolute -bottom-8 -right-4 md:-right-12 bg-white p-8 md:p-10 shadow-2xl z-20 rounded-none border-b-2 border-supreme-gold"
                            >
                                <p className="text-5xl md:text-6xl font-serif text-supreme-black mb-2 flex items-baseline gap-1 relative">
                                    50<span className="text-supreme-gold text-4xl absolute -top-2 -right-6">+</span>
                                </p>
                                <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-gray-500 mt-4 leading-relaxed">Curated Lifestyle <br /> Amenities</p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="lg:w-7/12 flex flex-col justify-center lg:pl-10">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <span className="w-12 h-[1px] bg-supreme-gold"></span>
                                <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                    Archives of Excellence
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="text-4xl md:text-5xl lg:text-7xl font-serif text-supreme-black mb-8 leading-tight"
                            >
                                Dominating the <br />
                                <span className="italic font-light text-supreme-gold">Pune Real Estate Market</span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="text-gray-600 mb-6 leading-loose text-base md:text-lg font-sans font-light max-w-2xl"
                            >
                                <strong>Supreme Rivana Punawale</strong> by Supreme Universal is an iconic 12.6-acre riverside development situated along the calm banks of the Pawana River in Punawale, West Pune. Ideally nestled between NH48 Mumbai–Bangalore Highway (just 400m / 1 min away) and Aundh–Ravet BRTS Road on Tathawade Road, Supreme Rivana delivers a rare waterfront lifestyle with enhanced AQI, natural river breeze, and uninterrupted views across 30+ storey high-rise residential towers.
                            </motion.p>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45, duration: 0.8 }}
                                className="text-2xl md:text-3xl font-serif text-supreme-black mb-6"
                            >
                                Club Rivana &amp; <span className="italic text-supreme-gold">50+ Curated Amenities</span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-gray-600 mb-6 leading-loose text-base md:text-lg font-sans font-light max-w-2xl"
                            >
                                At the heart of the community stands <strong>Club Rivana</strong>—West Pune's premier 60,000 sq.ft multi-level clubhouse featuring an Aqua Arena with 2 swimming pools, state-of-the-art gymnasium, outdoor pickleball court, squash court, badminton courts, cinema lounge, and 2 grand banquet halls. The 12.6-acre landscape campus is enriched with 700+ native trees and shrubs, elevated walkways, zen gardens, lantern pavilions, and dedicated pet parks.
                            </motion.p>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.52, duration: 0.8 }}
                                className="text-2xl md:text-3xl font-serif text-supreme-black mb-6"
                            >
                                Thoughtful Configurations. <span className="italic text-supreme-gold">MahaRERA Verified.</span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55, duration: 0.8 }}
                                className="text-gray-600 mb-12 leading-loose text-base md:text-lg font-sans font-light max-w-2xl"
                            >
                                Choose between meticulously engineered <strong>2 BHK (Premier &amp; Grand, 746–786 sq.ft)</strong> and expansive <strong>3 BHK (Signature, Regal &amp; Elite, 1,100–1,166 sq.ft)</strong> residences featuring Vastu-compliant layouts, private river-view balconies, and maximum cross-ventilation with only 6 residences per floor. Fully registered under <strong>MahaRERA Phase I: PM1261012502656</strong>, the project provides complete regulatory compliance, scheduled delivery timelines, and bank loan approvals from India's premier financial institutions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <Link
                                    to="/supreme-rivana-punawale-amenities"
                                    className="group inline-flex items-center gap-4 text-supreme-black font-sans font-semibold uppercase tracking-[0.15em] text-xs hover:text-supreme-gold transition-colors"
                                >
                                    <span>Discover Amenities</span>
                                    <span className="w-8 h-[1px] bg-supreme-black group-hover:bg-supreme-gold group-hover:w-16 transition-all duration-500"></span>
                                </Link>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Overview;
