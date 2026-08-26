import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onEnquire?: () => void;
}

const Navbar = ({ onEnquire }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Overview', href: '/supreme-rivana-punawale-overview' },
        { name: 'Pricing', href: '/supreme-rivana-punawale-price-list' },
        { name: 'Compare', href: '/supreme-rivana-punawale-comparison' },
        { name: 'Gallery', href: '/supreme-rivana-punawale-gallery' },
        { name: 'Insights', href: '/blog' },
        { name: 'Contact', href: '/supreme-rivana-punawale-contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${isScrolled ? 'bg-supreme-black/95 backdrop-blur-xl py-3 shadow-xl border-b border-white/5' : 'bg-transparent py-5 lg:py-7'}`}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-center w-full">

                        {/* Logo — Left */}
                        <Link to="/" className="flex flex-col items-start flex-shrink-0">
                            <svg className="w-7 h-3.5 mb-0.5 opacity-90" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 50 A 40 40 0 0 1 90 50 Z" fill="#DD6B4D" />
                            </svg>
                            <span className="text-lg md:text-xl font-serif text-white tracking-widest uppercase leading-none">
                                SUPREME
                            </span>
                            <span className="text-lg md:text-xl font-serif text-white tracking-widest uppercase leading-none">
                                RIVANA
                            </span>
                            <span className="text-[9px] font-serif text-supreme-gold tracking-[0.4em] uppercase leading-none">
                                PUNAWALE
                            </span>
                        </Link>

                        {/* Desktop Nav — Right */}
                        <div className="hidden lg:flex items-center gap-8 ml-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`relative text-[11px] font-sans font-medium uppercase tracking-[0.18em] hover:text-supreme-gold transition-colors duration-300 group py-1 ${location.pathname === link.href ? 'text-supreme-gold' : 'text-white/70'}`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-px bg-supreme-gold transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                </Link>
                            ))}

                            {/* Divider */}
                            <span className="w-px h-5 bg-white/10" />

                            {/* Enquire CTA */}
                            <button
                                onClick={onEnquire}
                                className="flex items-center gap-2 bg-supreme-gold text-white px-5 py-2 text-[11px] font-sans font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-supreme-black transition-all duration-300"
                            >
                                <Phone size={13} />
                                Enquire Now
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-white focus:outline-none ml-auto"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            <div className={`fixed inset-0 bg-supreme-black/98 backdrop-blur-2xl z-40 transition-opacity duration-500 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex flex-col h-full justify-center items-center space-y-8 px-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={`text-2xl font-serif hover:text-supreme-gold transition-all duration-500 tracking-wide ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${location.pathname === link.href ? 'text-supreme-gold' : 'text-white'}`}
                            style={{ transitionDelay: isOpen ? `${navLinks.indexOf(link) * 100}ms` : '0ms' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            onEnquire?.();
                        }}
                        className={`mt-8 flex flex-col items-center gap-4 transition-all duration-500 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <div className="bg-supreme-gold text-supreme-black px-8 py-4 rounded-full text-sm font-sans tracking-[0.15em] uppercase font-semibold flex items-center gap-3 shadow-xl">
                            <Phone size={16} />
                            <span>Enquire Now</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-supreme-gold/10 p-4 rounded-2xl border border-supreme-gold/20">
                            <img src="/rivana-rera-qr.png?v=1.0.2" alt="RERA QR" className="w-20 h-20 rounded-lg shadow-2xl" />
                            <div className="text-[11px] text-supreme-gold tracking-widest uppercase font-bold text-center">
                                MahaRERA: PM1261012502656
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
