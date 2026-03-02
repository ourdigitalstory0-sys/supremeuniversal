import { Link } from 'react-router-dom';

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
                            <span className="text-3xl font-serif text-white tracking-widest uppercase leading-none">
                                Supreme
                            </span>
                            <span className="text-sm font-serif italic text-supreme-gold">
                                Riverside
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
                            <li><Link to="/supreme-riverside-punawale-overview" className="hover:text-supreme-gold transition-colors duration-300">The Vision</Link></li>
                            <li><Link to="/supreme-riverside-punawale-amenities" className="hover:text-supreme-gold transition-colors duration-300">The Master Club</Link></li>
                            <li><Link to="/supreme-riverside-punawale-location" className="hover:text-supreme-gold transition-colors duration-300">Neighborhood</Link></li>
                            <li><Link to="/blog" className="hover:text-supreme-gold transition-colors duration-300">Market Insights</Link></li>
                        </ul>
                    </div>

                    {/* SEO Hub Links */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Top Guides</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/blog/ultimate-guide-buying-property-punawale-pune" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Punawale Guide<span className="text-[10px] text-white/30 truncate">Real Estate 2026</span></Link></li>
                            <li><Link to="/blog/punawale-infrastructure-connectivity-updates-2026" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Connectivity<span className="text-[10px] text-white/30 truncate">Ring Road Updates</span></Link></li>
                            <li><Link to="/blog/supreme-universal-luxury-legacy-west-pune" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Developer Legacy<span className="text-[10px] text-white/30 truncate">Supreme Universal</span></Link></li>
                        </ul>
                    </div>

                    {/* Pune Portfolio */}
                    <div className="lg:col-span-2">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Pune Portfolio</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/projects/supreme-towers" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Towers<span className="text-[10px] text-white/30 truncate">Mundhwa, Pune East</span></Link></li>
                            <li><Link to="/projects/supreme-villagio" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Villagio<span className="text-[10px] text-white/30 truncate">Somatane, Pune North</span></Link></li>
                            <li><Link to="/projects/supreme-estia" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Estia<span className="text-[10px] text-white/30 truncate">Baner, Pune West</span></Link></li>
                            <li><Link to="/projects/supreme-wakad" className="hover:text-supreme-gold transition-colors duration-300 flex flex-col gap-1">Supreme Wakad<span className="text-[10px] text-white/30 truncate">Wakad, Pune West</span></Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
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

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 font-sans font-light tracking-wide">
                    <div className="mb-4 md:mb-0">
                        © {new Date().getFullYear()} Supreme Riverside. All rights reserved.
                    </div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-supreme-gold transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="hover:text-supreme-gold transition-colors duration-300">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
