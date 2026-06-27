import { motion } from 'framer-motion';
import { Navigation, Landmark, Train } from 'lucide-react';
import InteractiveMap from './InteractiveMap';

const Location = () => {
    return (
        <section id="location" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Place",
                    "name": "Supreme Rivana Punawale — Luxury 2 BHK & 3 BHK Flats in Punawale Pune",
                    "description": "Supreme Rivana by Supreme Universal: Ultra-luxury 2 & 3 BHK riverside apartments in Punawale. Premium flats near Wakad, Hinjewadi IT Park, and Pune Metro Line 3. Top choice for investment in West Pune with high appreciation potential.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Near Chhatrapati Shivaji Maharaj Chowk, Tathawade Road, Punawale",
                        "addressLocality": "Punawale",
                        "addressRegion": "Pune, Maharashtra",
                        "postalCode": "411033",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "18.6327",
                        "longitude": "73.7431"
                    },
                    "containedInPlace": {
                        "@type": "City",
                        "name": "Pune",
                        "containedInPlace": { "@type": "State", "name": "Maharashtra" }
                    },
                    "keywords": "supreme rivana punawale, luxury flats in punawale, 2 bhk flats punawale, 3 bhk price punawale, supreme universal punawale project",
                    "hasMap": "https://maps.app.goo.gl/YourMapLink"
                })
            }} />
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
                                Supreme Rivana Punawale is strategically positioned along the Mumbai-Pune Expressway Bypass, emerging as one of the fastest-appreciating real estate markets in Pune. With the upcoming Pune Metro Line 3 and the proposed Pune Ring Road, connectivity to Hinjewadi IT Park, Wakad, Baner, and Tathawade is reaching new heights. 
                            </p>
                            <p className="text-gray-600 font-light leading-relaxed mb-8">
                                Our site near Chhatrapati Shivaji Maharaj Chowk on Tathawade Road offers true waterfront living, making it the premier choice for those seeking luxury apartments in Punawale. Experience seamless connectivity with easy access to Balewadi High Street and Phoenix Mall of the Millennium.
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
                            <div className="absolute inset-0 bg-gray-100 rounded-none overflow-hidden shadow-2xl relative group h-full w-full border border-supreme-gold/20">
                                <InteractiveMap />
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
