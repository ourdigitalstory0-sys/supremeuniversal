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
                            Experience the perfect blend of luxury and nature. Premium 2 & 3 BHK Homes in Punawale, Pune, designed for a higher standard of living.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Navigation</h5>
                        <ul className="space-y-4 text-white/50 font-sans font-light">
                            <li><Link to="/" className="hover:text-supreme-gold transition-colors duration-300">Home</Link></li>
                            <li><Link to="/supreme-riverside-punawale-overview" className="hover:text-supreme-gold transition-colors duration-300">The Vision</Link></li>
                            <li><Link to="/supreme-riverside-punawale-amenities" className="hover:text-supreme-gold transition-colors duration-300">The Master Club</Link></li>
                            <li><Link to="/supreme-riverside-punawale-location" className="hover:text-supreme-gold transition-colors duration-300">Neighborhood</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h5 className="text-white font-sans font-semibold uppercase tracking-[0.2em] text-xs mb-8">Connect</h5>
                        <ul className="space-y-6 text-white/50 font-sans font-light">
                            <li className="flex flex-col gap-1">
                                <span className="text-supreme-gold text-xs uppercase tracking-[0.1em]">Visit Experience Center</span>
                                <span className="leading-loose">
                                    Near Lotus Business School,<br />
                                    Punawale, Pune 411033
                                </span>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-supreme-gold text-xs uppercase tracking-[0.1em]">Direct Line</span>
                                <a href="tel:+917744009295" className="hover:text-white transition-colors duration-300 font-medium tracking-wide">+91 77440 09295</a>
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
