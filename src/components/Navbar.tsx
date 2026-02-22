import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
    onEnquire?: () => void;
}

const Navbar = ({ onEnquire }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Overview', href: '#overview' },
        { name: 'Amenities', href: '#amenities' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Location', href: '#location' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-700 ease-in-out border-b border-white/5 ${isScrolled ? 'bg-supreme-black/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-5 lg:py-8'}`}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex justify-between items-center relative">

                        {/* Desktop Navigation - Left */}
                        <div className="hidden lg:flex items-center space-x-8 flex-1">
                            {navLinks.slice(0, 3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-xs font-sans font-medium text-white/80 uppercase tracking-[0.15em] hover:text-supreme-gold transition-colors group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-supreme-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </a>
                            ))}
                        </div>

                        {/* Logo Section - Center */}
                        <a href="#home" className="flex flex-col items-center group flex-shrink-0 mx-4 lg:mx-8">
                            <span className="text-xl md:text-3xl font-serif text-white tracking-widest uppercase leading-none mb-1">
                                Supreme
                            </span>
                            <span className="text-xs md:text-sm font-serif italic text-supreme-gold">
                                Riverside
                            </span>
                        </a>

                        {/* Desktop Navigation - Right */}
                        <div className="hidden lg:flex items-center space-x-8 flex-1 justify-end">
                            {navLinks.slice(3).map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-xs font-sans font-medium text-white/80 uppercase tracking-[0.15em] hover:text-supreme-gold transition-colors group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-supreme-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </a>
                            ))}
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
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-2xl font-serif text-white hover:text-supreme-gold transition-all duration-500 tracking-wide ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                            style={{ transitionDelay: isOpen ? `${navLinks.indexOf(link) * 100}ms` : '0ms' }}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            onEnquire?.();
                        }}
                        className={`mt-8 flex items-center gap-3 bg-supreme-gold text-supreme-black px-8 py-4 rounded-full text-sm font-sans tracking-[0.15em] uppercase font-semibold transition-all duration-500 delay-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                    >
                        <Phone size={16} />
                        <span>Enquire Now</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
