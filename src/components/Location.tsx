import { motion } from 'framer-motion';
import { Navigation, Landmark, Train } from 'lucide-react';

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
                                Supreme Rivana Punawale is strategically positioned along the <strong>Mumbai-Pune Expressway Bypass</strong>, emerging as one of the fastest-appreciating real estate markets for <strong>luxury flats in Punawale pune</strong>. With the upcoming <strong>Pune Metro Line 3</strong> and the proposed <strong>Pune Ring Road</strong>, connectivity from <strong>Supreme Rivana location</strong> to <strong>Hinjewadi IT Park</strong>, <strong>flats near Wakad</strong>, <strong>Baner</strong>, and <strong>Tathawade</strong> is reaching new heights. 
                            </p>
                            <p className="text-gray-600 font-light leading-relaxed mb-8">
                                Our site near <strong>Chhatrapati Shivaji Maharaj Chowk</strong> on <strong>Tathawade Road</strong> offers <strong>waterfront living</strong>, making it the premier choice for those seeking <strong>luxury apartments in Punawale</strong> or <strong>premium flats near Wakad Pune</strong>. Experience the best of <strong>Supreme Rivana connectivity</strong> with easy access to <strong>Balewadi High Street</strong> and <strong>Phoenix Mall of the Millennium</strong>.
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
                                    title="Supreme Rivana Location Map"
                                    className="absolute inset-0 w-full h-full filter grayscale hover:grayscale-0 transition-all duration-[2s] ease-in-out"
                                ></iframe>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-supreme-gold/30 z-0"></div>
                            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-supreme-gold/30 z-0"></div>
                        </motion.div>
                    </div>

                </div>

                {/* Popular Searches — Keyword Cluster Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 md:mt-28 border-t border-gray-100 pt-12"
                >
                    <h3 className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-supreme-gold mb-6">Popular Searches near Supreme Rivana Punawale</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {[
                            "2 BHK Flats in Punawale", "3 BHK Apartments near Hinjewadi", "Luxury Flats Wakad",
                            "Premium Apartments Tathawade", "New Launch Projects PCMC", "Flats near Mumbai Pune Expressway",
                            "Property Investment Punawale 2026", "Ready to Move Flats Baner", "Under Construction Flats Balewadi",
                            "Supreme Rivana Price List", "Supreme Rivana Floor Plan", "Supreme Rivana Brochure",
                            "High ROI Flats Pune West", "Luxury Homes near Hinjewadi IT Park", "River View Apartments Pune",
                            "IGBC Certified Green Homes Punawale", "NRI Investment Properties Pune", "Gated Community Flats Punawale",
                            "Flats near Wakad Bridge", "Apartments near Bhumkar Chowk", "Projects near Dange Chowk",
                            "3 BHK Premium Flats PCMC", "Supreme Universal Projects Pune", "Luxury Residences Pune West",
                            "Buy Flats in Punawale", "Apartments for Sale near Wakad", "Flats near Hinjewadi Phase 1",
                            "Properties near Pune Ring Road", "Real Estate Investment West Pune", "Spacious 2 BHK Punawale",
                            "Ultra Luxury Apartments Pune", "Best Projects near Hinjewadi 2026", "Upcoming Projects in Punawale",
                            "Smart Homes Punawale", "Exclusive Residences Pune West", "Flats with Infinity Pool Punawale",
                            "Supreme Rivana vs Puneville", "Supreme Rivana vs ANP Autograph", "Supreme Rivana vs 24k Living",
                            "Flats near Lotus Business School", "Apartments near Indira College Punawale",
                            "Properties near Phoenix Mall Wakad", "Premium Flats near Mumbai Pune Highway",
                            "New Projects in Kiwale", "Luxury Apartments Ravet", "High End Flats Tathawade",
                            "Supreme Rivana RERA Number", "Supreme Rivana Possession Date", "Supreme Rivana Site Visit",
                            "Supreme Rivana Construction Update", "Supreme Rivana Amenities", "Supreme Rivana Master Plan",
                            "2 BHK under 1 Crore Punawale", "3 BHK under 1.5 Crore Punawale", "Best 2 BHK Flats Pune West",
                            "Top 10 Luxury Projects Punawale", "Newly Built Apartments Wakad", "Pre Launch Flats Hinjewadi",
                            "Green Homes Punawale Pune", "Exclusive Projects near Expressway", "Buy Luxury Apartments Hinjewadi IT Park"
                        ].map((keyword, idx) => (
                            <a
                                key={idx}
                                href="/supreme-rivana-location"
                                className="px-3 py-1.5 text-[10px] md:text-[11px] font-sans text-gray-500 bg-gray-50 border border-gray-100 rounded-full hover:bg-supreme-gold/10 hover:border-supreme-gold/30 hover:text-supreme-black transition-all duration-300 whitespace-nowrap"
                            >
                                {keyword}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;
