import { useState, useEffect } from 'react';
import { Menu, X, Phone, Moon, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onEnquire?: () => void;
    onDownload?: () => void;
    isDarkMode?: boolean;
    onToggleTheme?: () => void;
}

const Navbar = ({ onEnquire, onDownload, isDarkMode, onToggleTheme }: NavbarProps) => {
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
        { name: 'Overview', href: '/supreme-rivana-overview' },
        { name: 'Pricing', href: '/supreme-rivana-price-list' },
        { name: 'Compare', href: '/supreme-rivana-comparison' },
        { name: 'Floor Plans', href: '/supreme-rivana-floor-plans' },
        { name: 'Gallery', href: '/supreme-rivana-gallery' },
        { name: 'Insights', href: '/blog' },
        { name: 'Contact', href: '/supreme-rivana-contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out border-b border-white/5 ${isScrolled ? 'bg-supreme-black/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-5 lg:py-8'}`}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center relative">

                        {/* Desktop Navigation - Left */}
                        <div className="hidden lg:flex items-center space-x-8 flex-1">
                            {navLinks.slice(0, 3).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`relative text-xs font-sans font-medium uppercase tracking-[0.15em] hover:text-supreme-gold transition-colors group py-2 ${location.pathname === link.href ? 'text-supreme-gold' : 'text-white/80'}`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-[1px] bg-supreme-gold transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            ))}
                        </div>

                        {/* Logo Section - Center */}
                        <Link to="/" className="flex flex-col items-center group flex-shrink-0 mx-4 lg:mx-8">
                            <svg className="w-8 h-4 mb-2 opacity-90" viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 50 A 40 40 0 0 1 90 50 Z" fill="#DD6B4D" />
                            </svg>
                            <span className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase leading-none mb-1">
                                SUPREME
                            </span>
                            <span className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase leading-none mb-1">
                                RIVANA
                            </span>
                            <span className="text-[10px] md:text-xs font-serif text-supreme-gold tracking-[0.4em] uppercase leading-none">
                                PUNAWALE
                            </span>
                        </Link>

                        {/* Desktop Navigation - Right */}
                        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
                            {navLinks.slice(3).map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`relative text-xs font-sans font-medium uppercase tracking-[0.15em] hover:text-supreme-gold transition-colors group py-2 ${location.pathname === link.href ? 'text-supreme-gold' : (isDarkMode ? 'text-white/80' : 'text-supreme-black/80')}`}
                                >
                                    {link.name}
                                    <span className={`absolute bottom-0 left-0 h-[1px] bg-supreme-gold transition-all duration-300 ${location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            ))}
                            <button
                                onClick={onDownload}
                                className="text-[11px] font-sans font-semibold uppercase tracking-widest text-white/60 hover:text-supreme-gold transition-colors"
                            >
                                Brochure
                            </button>
                            <button
                                onClick={onToggleTheme}
                                className="p-2 text-supreme-gold hover:bg-supreme-gold/10 rounded-full transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                            <div className="flex items-center gap-3 px-4 border-r border-white/10 group cursor-pointer bg-supreme-gold/5 rounded-lg py-1 border border-supreme-gold/20 hover:border-supreme-gold/40 transition-all duration-300">
                                <img 
                                    src="/rivana-rera-qr.png" 
                                    alt="RERA QR" 
                                    className="w-8 h-8 rounded shadow-lg border border-white/10 group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-[9px] font-bold text-supreme-gold uppercase tracking-tighter leading-none animate-pulse">MahaRERA Reg.</span>
                                    <span className="text-[11px] font-bold text-white tracking-tighter leading-none">PM1261012502656</span>
                                </div>
                            </div>
                            <button
                                onClick={onEnquire}
                                className="flex items-center gap-2 border border-supreme-gold/50 text-supreme-gold px-5 py-2 rounded-full hover:bg-supreme-gold hover:text-supreme-black transition-all duration-500 text-[11px] font-sans tracking-[0.1em] uppercase font-semibold"
                            >
                                <Phone size={14} />
                                <span>Enquire</span>
                            </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden text-white focus:outline-none ml-auto"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle Navigation Menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                            onToggleTheme?.();
                        }}
                        className={`text-2xl font-serif flex items-center gap-3 transition-all duration-500 tracking-wide ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${isDarkMode ? 'text-white' : 'text-supreme-black'}`}
                        style={{ transitionDelay: '900ms' }}
                    >
                        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                    </button>
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
                            <img src="/rivana-rera-qr.png" alt="RERA QR" className="w-20 h-20 rounded-lg shadow-2xl" />
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
