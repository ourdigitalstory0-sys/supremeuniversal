import { Link } from 'react-router-dom';
import { seoKeywords } from '../data/seoKeywords';

const Footer = () => {
    return (
        <footer className="bg-supreme-black text-white py-16 md:py-24 border-t border-white/10 relative overflow-hidden">
            {/* Decorative background blur */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-supreme-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-24">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <div className="flex flex-col items-start gap-1 mb-6">
                            <svg className="w-10 h-5 mb-3 opacity-90" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 50 A 40 40 0 0 1 90 50 Z" fill="#DD6B4D" />
                            </svg>
                            <span className="text-3xl font-serif text-white tracking-widest uppercase leading-none mb-1">
                                SUPREME
                            </span>
                            <span className="text-2xl font-serif text-white tracking-widest uppercase leading-none">
                                RIVANA
                            </span>
                        </div>
                        <p className="text-white/60 font-sans font-light leading-loose text-base md:text-lg mb-8 max-w-sm">
                            Searching for "<strong>Flats near me in Punawale</strong>" or "<strong>Property near me in Pune West</strong>"? Experience the perfect blend of luxury and nature. Premium 2 & 3 BHK Homes designed for a higher standard of living.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-5">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Navigation</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/" className="hover:text-supreme-gold transition-colors duration-300">Home</Link></li>
                            <li><Link to="/supreme-rivana-overview" className="hover:text-supreme-gold transition-colors duration-300">The Vision</Link></li>
                            <li><Link to="/supreme-rivana-amenities" className="hover:text-supreme-gold transition-colors duration-300">The Master Club</Link></li>
                            <li><Link to="/supreme-rivana-location" className="hover:text-supreme-gold transition-colors duration-300">Neighborhood</Link></li>
                            <li><Link to="/blog" className="hover:text-supreme-gold transition-colors duration-300">Market Insights</Link></li>
                        </ul>
                    </div>

                    {/* SEO Hub Links */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Top Guides</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/blog/ultimate-guide-buying-property-punawale-pune" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Punawale Guide<span className="text-[10px] text-white/30 truncate">Real Estate 2026</span></Link></li>
                            <li><Link to="/blog/punawale-infrastructure-connectivity-updates-2026" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Connectivity<span className="text-[10px] text-white/30 truncate">Ring Road Updates</span></Link></li>
                            <li><Link to="/blog/supreme-rivana-rera-number-price-list-booking-2026" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">RERA & Booking<span className="text-[10px] text-white/30 truncate">Price List 2026</span></Link></li>
                            <li><Link to="/blog/best-2-bhk-flats-punawale-under-1-crore-2026" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">2 BHK Under ₹1 Cr<span className="text-[10px] text-white/30 truncate">Best Deals 2026</span></Link></li>
                            <li><Link to="/blog/nri-guide-buying-property-punawale-pune-2026" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">NRI Investment<span className="text-[10px] text-white/30 truncate">Legal Checklist</span></Link></li>
                        </ul>
                    </div>

                    {/* Pune Portfolio */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Pune West Portfolio</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/projects/supreme-pallacio" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Pallacio<span className="text-[10px] text-white/30 truncate">Pan Card Club, Baner</span></Link></li>
                            <li><Link to="/projects/supreme-vivero" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Vivero<span className="text-[10px] text-white/30 truncate">Baner Road, Pune West</span></Link></li>
                            <li><Link to="/projects/supreme-estia" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Estia<span className="text-[10px] text-white/30 truncate">Baner, Pune West</span></Link></li>
                            <li><Link to="/projects/supreme-amadore" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Amadore<span className="text-[10px] text-white/30 truncate">Link Road, Pune</span></Link></li>
                            <li><Link to="/projects/supreme-wakad" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Wakad<span className="text-[10px] text-white/30 truncate">Hinjewadi Link Road</span></Link></li>
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Connect</h5>
                        <ul className="space-y-6 text-white/50 font-sans font-light">
                            <li className="flex flex-col gap-1">
                                <span className="text-supreme-gold text-xs uppercase tracking-[0.1em]">Visit Experience Center</span>
                                <span className="leading-loose">
                                    Near Lotus Business School,<br />
                                    Punawale, Pune West 411033
                                </span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-supreme-gold text-xs uppercase tracking-[0.1em]">Direct Line</span>
                                <a href="tel:+917744009295" className="hover:text-white transition-colors duration-300 font-medium tracking-wide">+91 77440 09295</a>
                            </li>
                            <li className="mt-4 text-[10px] text-white/30 truncate" title="Optimized for local search: Apartments near Hinjewadi IT Park, 2 BHK near Wakad, Projects near Mumbai Pune Expressway">
                                Location Points: Apartments near Hinjewadi IT Park | 2 BHK near Wakad
                            </li>
                        </ul>
                    </div>

                    {/* CTA Column */}
                    <div className="lg:col-span-2 text-left lg:text-right">
                        <a
                            href="https://wa.me/917744009295?text=I%20want%20to%20schedule%20a%20site%20visit%20for%20Supreme%20Riverside"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-supreme-gold font-sans font-semibold uppercase tracking-[0.15em] text-xs hover:text-white transition-colors duration-300"
                        >
                            <span>Reach via WhatsApp</span>
                            <span className="w-12 h-[1px] bg-supreme-gold"></span>
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mb-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-sans font-light tracking-wide">
                    <div className="mb-4 md:mb-0 text-white/50">
                        © {new Date().getFullYear()} Supreme Rivana. All rights reserved. <span className="mx-2 hidden md:inline">|</span> <span className="block md:inline text-white/80 mt-2 md:mt-0">MahaRERA No. PM1261012502656</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-supreme-gold transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-supreme-gold transition-colors duration-300">Terms & Conditions</a>
                    </div>
                </div>

                {/* Professional Disclaimer Section */}
                <div className="border-t border-white/5 pt-8 text-[10px] md:text-[11px] leading-relaxed text-white/20 font-sans font-light text-justify md:text-left">
                    <p className="mb-6 uppercase tracking-widest font-bold text-white/30 border-b border-white/5 pb-2 inline-block">Professional Legal Disclaimer</p>
                    <p className="mb-4 text-supreme-gold/40">
                        <strong>Important Notice:</strong> This website is for informational purposes only and does not constitute a legal offering. It belongs to an <strong>Authorized Marketing Partner</strong> for the projects showcased. The images and visuals depicted are artistic impressions/stock photography for representational purposes only and may not reflect actual project details.
                    </p>
                    <p className="mb-6">
                        All information, including prices, availability, and project specifications, is subject to change without prior notice. Visitors are advised to contact our sales team or visit the developer's official website for the most accurate and up-to-date information. While we strive to maintain the accuracy of the data, the site owner shall not be held liable for any decisions made based on the information provided herein.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 border-t border-white/5 pt-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Towers</span>
                            <span className="text-supreme-gold/60">P52100053868</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Villagio</span>
                            <span className="text-supreme-gold/60">P52100021655</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Estia</span>
                            <span className="text-supreme-gold/60">P52100024783</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Wakad</span>
                            <span className="text-supreme-gold/60">P52100056095</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Pallacio</span>
                            <span className="text-supreme-gold/60">OC Received</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Vivero</span>
                            <span className="text-supreme-gold/60">OC Received</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Amadore</span>
                            <span className="text-supreme-gold/60">OC Received</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-white/40 font-bold uppercase tracking-tighter text-[9px]">Supreme Esteban</span>
                            <span className="text-supreme-gold/60">OC Received</span>
                        </div>
                    </div>
                </div>

                {/* Visually Hidden Yet Semantic SEO Keyword Block */}
                <div className="sr-only" aria-hidden="true" itemScope itemType="https://schema.org/WebPage">
                    <h2>Premium Real Estate Search Trends - Supreme Rivana Punawale</h2>
                    <p>
                        Explore the finest selection of ultra-luxury residences in Pune West. Discover {seoKeywords.substring(0, 1500)}...
                    </p>
                    <ul>
                        <li><a href="/supreme-rivana-location">2 BHK Flats in Punawale</a></li>
                        <li><a href="/supreme-rivana-location">3 BHK Premium Apartments near Hinjewadi IT Park</a></li>
                        <li><a href="/supreme-rivana-location">Luxury Homes in Wakad and Tathawade</a></li>
                        <li><a href="/supreme-rivana-overview">Supreme Rivana RERA PM1261012502656</a></li>
                        <li><a href="/supreme-rivana-price-list">Price of new launch flats in PCMC</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
