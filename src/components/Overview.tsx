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
                                    alt="Supreme Riverside Punawale 15-acre luxury riverside township exterior view with 31-storey towers near Hinjewadi IT Park Pune"
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
                                    10<span className="text-supreme-gold text-4xl absolute -top-2 -right-6">+</span>
                                </p>
                                <p className="text-[10px] md:text-xs font-sans tracking-[0.2em] uppercase text-gray-500 mt-4 leading-relaxed">World Class <br /> Amenities</p>
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
                                Supreme Riverside is not just a residential development; it's a <strong>15-acre riverside township</strong> designed to dominate the <strong>Pune Real Estate Market</strong>. Featuring majestic <strong>31-storey towers</strong>, it represents the pinnacle of <strong>Supreme Universal Pune projects</strong>, offering a <strong>luxury lifestyle in West Pune</strong>. As a pioneer in <strong>luxury apartments Pune</strong>, we offer an exclusive collection of <strong>premium apartments in Punawale pune</strong>. Whether you are searching for the best <strong>Supreme Riverside price</strong> or exploring high-ROI <strong>real estate investment west pune</strong>, our project is engineered to be the definitive benchmark for excellence.
                            </motion.p>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.45, duration: 0.8 }}
                                className="text-2xl md:text-3xl font-serif text-supreme-black mb-6"
                            >
                                Timeless Luxury. <span className="italic text-supreme-gold">Executive Execution.</span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-gray-600 mb-6 leading-loose text-base md:text-lg font-sans font-light max-w-2xl"
                            >
                                Here, the gentle flow of the river meets cutting-edge architecture in our exclusive <strong>nature facing apartments pune</strong>. Enjoy generous spaces, abundant natural light, and a community that shares your vision of grandeur in the finest <strong>river view luxury apartments pune</strong>. With a firmly committed <strong>Supreme Riverside possession date</strong>, you can secure your luxury future in the most sought-after <strong>apartments near Hinjewadi IT Park</strong>.
                            </motion.p>

                            <motion.h3
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.52, duration: 0.8 }}
                                className="text-2xl md:text-3xl font-serif text-supreme-black mb-6"
                            >
                                RERA Certified. <span className="italic text-supreme-gold">IGBC Green.</span>
                            </motion.h3>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.55, duration: 0.8 }}
                                className="text-gray-600 mb-12 leading-loose text-base md:text-lg font-sans font-light max-w-2xl"
                            >
                                As a fully <strong>MahaRERA-compliant</strong> development with <strong>IGBC Green Building Certification</strong>, Supreme Riverside represents the gold standard in sustainable luxury. Pre-approved by <strong>HDFC, SBI, ICICI, and Axis Bank</strong>, this is the most trusted <strong>new project in Punawale 2026</strong> for families, IT professionals, and <strong>NRI investors</strong> alike.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                <Link
                                    to="/supreme-riverside-punawale-amenities"
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
