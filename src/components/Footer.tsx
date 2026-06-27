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
                                RIVANA PUNAWALE
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
                            <li><Link to="/supreme-rivana-punawale-overview" className="hover:text-supreme-gold transition-colors duration-300">The Vision</Link></li>
                            <li><Link to="/supreme-rivana-punawale-price-list" className="hover:text-supreme-gold transition-colors duration-300">Cost Sheets</Link></li>
                            <li><Link to="/supreme-rivana-punawale-floor-plans" className="hover:text-supreme-gold transition-colors duration-300">Floor Plans</Link></li>
                            <li><Link to="/supreme-rivana-punawale-comparison" className="hover:text-supreme-gold transition-colors duration-300">Compare Projects</Link></li>
                            <li><Link to="/supreme-rivana-punawale-location" className="hover:text-supreme-gold transition-colors duration-300">Neighborhood</Link></li>
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
                            <li><Link to="/blog/supreme-rivana-punawale-vs-all-competitors-2026" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supremacy Report<span className="text-[10px] text-white/30 truncate">vs All Competitors</span></Link></li>
                        </ul>
                    </div>

                    {/* Pune Portfolio */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Asset Portfolio</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/projects/supreme-pallacio" className="hover:text-supreme-gold transition-colors duration-300">Supreme Pallacio</Link></li>
                            <li><Link to="/projects/supreme-estia" className="hover:text-supreme-gold transition-colors duration-300">Supreme Estia</Link></li>
                            <li><Link to="/projects/supreme-wakad" className="hover:text-supreme-gold transition-colors duration-300">Supreme Wakad</Link></li>
                            <li><Link to="/projects/supreme-amadore" className="hover:text-supreme-gold transition-colors duration-300">Supreme Amadore</Link></li>
                        </ul>
                    </div>

                    {/* Programmatic SEO Mesh Column */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Keyword Explore</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light text-[11px] uppercase tracking-wider">
                            <li><Link to="/supreme-rivana-punawale-price" className="hover:text-supreme-gold transition-colors duration-300">Rivana Price</Link></li>
                            <li><Link to="/supreme-rivana-punawale-reviews" className="hover:text-supreme-gold transition-colors duration-300">Rivana Reviews</Link></li>
                            <li><Link to="/supreme-rivana-punawale-floor-plan" className="hover:text-supreme-gold transition-colors duration-300">Floor Plans</Link></li>
                            <li><Link to="/supreme-2bhk-punawale-flats" className="hover:text-supreme-gold transition-colors duration-300">2 BHK Punawale</Link></li>
                            <li><Link to="/supreme-3bhk-punawale-flats" className="hover:text-supreme-gold transition-colors duration-300">3 BHK Punawale</Link></li>
                            <li><Link to="/supreme-riverside-punawale-photos" className="hover:text-supreme-gold transition-colors duration-300">Riverside Photos</Link></li>
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
                            href="https://wa.me/917744009295?text=I%20want%20to%20schedule%20a%20site%20visit%20for%20Supreme%20Rivana%20Punawale"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-4 text-supreme-gold font-sans font-semibold uppercase tracking-[0.15em] text-xs hover:text-white transition-colors duration-300"
                        >
                            <span>Reach via WhatsApp</span>
                            <span className="w-12 h-[1px] bg-supreme-gold"></span>
                        </a>
                    </div>
                </div>

                {/* Dedicated RERA Section */}
                <div className="border-t border-white/10 py-16">
                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20">
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-3xl md:text-4xl font-serif mb-6">RERA Details</h2>
                            <p className="text-white/60 font-sans font-light leading-relaxed max-w-2xl">
                                Supreme Rivana Phase I - <span className="text-white font-medium">PM1261012502656</span> <br className="hidden md:block" />
                                Available at <a href="https://maharera.maharashtra.gov.in/" target="_blank" rel="noopener noreferrer" className="text-supreme-gold hover:underline decoration-supreme-gold/30 underline-offset-4 transition-all">https://maharera.maharashtra.gov.in/</a> under registered projects. <br />
                                <span className="text-[10px] mt-2 block opacity-40">*T&C apply.</span>
                            </p>
                        </div>
                        <div className="flex-shrink-0 bg-white p-4 rounded-xl shadow-2xl shadow-supreme-gold/10 hover:scale-105 transition-transform duration-500">
                            <img 
                                src="/rivana-rera-qr.png?v=1.0.2" 
                                alt="MahaRERA QR Code - Supreme Rivana Phase I" 
                                className="w-32 h-32 md:w-36 md:h-36"
                                loading="lazy"
                                decoding="async"
                                width="144"
                                height="144"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 mb-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-sans font-light tracking-wide">
                    <div className="mb-4 md:mb-0 text-white/50">
                        © {new Date().getFullYear()} Supreme Rivana Punawale. All rights reserved. <span className="mx-2 hidden md:inline">|</span> <span className="block md:inline text-white/80 mt-2 md:mt-0">MahaRERA No. PM1261012502656</span>
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


            </div>
        </footer>
    );
};

export default Footer;
