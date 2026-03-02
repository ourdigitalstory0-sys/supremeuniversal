import { motion } from 'framer-motion';
import { Navigation, Landmark, Train } from 'lucide-react';

const Location = () => {
    return (
        <section id="location" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="lg:w-5/12 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-supreme-gold"></span>
                                <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                    The Neighborhood
                                </span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-supreme-black mb-6 leading-tight">
                                Connected to Everything <br />
                                <span className="italic text-gray-400 font-light">Close to Nature</span>
                            </h2>

                            <p className="text-gray-600 mb-12 leading-loose text-base md:text-lg font-sans font-light max-w-lg">
                                Punawale is strategically positioned along the **Mumbai-Pune Expressway Bypass**, emerging as one of the fastest-appreciating real estate markets in **Pune West**. With the upcoming **Pune Metro Line 3 (Hinjewadi-Shivajinagar corridor)** and the proposed **Pune Ring Road**, connectivity to **Hinjewadi IT Park**, **Wakad**, and **Baner** is reaching new heights.
                            </p>
                            <p className="text-gray-600 font-light leading-relaxed mb-8">
                                Our site near **Chhatrapati Shivaji Maharaj Chowk** on **Tathawade Road** offers a unique blend of urban accessibility and serene **waterfront living**, making it the premier choice for professionals seeking the **top projects in Punawale 2026**.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-6 group">
                                    <div className="mt-1 text-supreme-gold group-hover:scale-110 transition-transform duration-300">
                                        <Navigation strokeWidth={1.5} size={28} />
                                    </div>
                                    <div className="border-b border-gray-100 pb-6 w-full">
                                        <h3 className="text-xl font-serif text-supreme-black mb-3">Seamless Commute</h3>
                                        <ul className="text-gray-500 font-sans font-light space-y-2 text-sm md:text-base">
                                            <li className="flex justify-between"><span>Mumbai-Pune Expressway</span> <span className="text-supreme-gold font-medium">5 Mins</span></li>
                                            <li className="flex justify-between"><span>Hinjewadi IT Park</span> <span className="text-supreme-gold font-medium">15 Mins</span></li>
                                            <li className="flex justify-between"><span>Bhumkar Chowk</span> <span className="text-supreme-gold font-medium">10 Mins</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="mt-1 text-supreme-gold group-hover:scale-110 transition-transform duration-300">
                                        <Train strokeWidth={1.5} size={28} />
                                    </div>
                                    <div className="border-b border-gray-100 pb-6 w-full">
                                        <h3 className="text-xl font-serif text-supreme-black mb-3">Transport Hubs</h3>
                                        <ul className="text-gray-500 font-sans font-light space-y-2 text-sm md:text-base">
                                            <li className="flex justify-between"><span>Akurdi Railway Station</span> <span className="text-supreme-gold font-medium">10 Mins</span></li>
                                            <li className="flex justify-between"><span>Pune Airport</span> <span className="text-supreme-gold font-medium">45 Mins</span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="flex items-start gap-6 group">
                                    <div className="mt-1 text-supreme-gold group-hover:scale-110 transition-transform duration-300">
                                        <Landmark strokeWidth={1.5} size={28} />
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-xl font-serif text-supreme-black mb-3">Social Infrastructure</h3>
                                        <ul className="text-gray-500 font-sans font-light space-y-2 text-sm md:text-base">
                                            <li className="flex justify-between"><span>Lotus Business School & Indira</span> <span className="text-supreme-gold font-medium">5 Mins</span></li>
                                            <li className="flex justify-between"><span>Phoenix Mall of the Millennium</span> <span className="text-supreme-gold font-medium">15 Mins</span></li>
                                            <li className="flex justify-between"><span>Aditya Birla Hospital</span> <span className="text-supreme-gold font-medium">15 Mins</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Map Content */}
                    <div className="lg:w-7/12 w-full mt-10 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-square md:aspect-[4/3] w-full"
                        >
                            <div className="absolute inset-0 bg-gray-100 rounded-none overflow-hidden shadow-2xl relative group h-full w-full">
                                <div className="absolute inset-0 bg-supreme-black/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273673767426!2d73.74830131489467!3d18.65172698733273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c7b0b0b0b1%3A0x0!2sPunawale!5e0!3m2!1sen!2sin!4v1629789000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    title="Supreme Riverside Location Map"
                                    className="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                                ></iframe>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-supreme-gold/30 z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-supreme-gold/30 z-0"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
