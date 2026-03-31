import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ShieldCheck, X, ExternalLink } from 'lucide-react';

const FloatingRERA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const reraNumber = 'PM1261012502656';

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-6 left-6 z-[60] flex flex-col items-start gap-3">
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        className="relative group"
                    >
                        {/* Main RERA Badge */}
                        <motion.div
                            onClick={() => setIsExpanded(!isExpanded)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-3 bg-white/95 backdrop-blur-md p-2 pl-3 pr-4 rounded-full border border-supreme-gold/30 shadow-2xl cursor-pointer transition-all duration-500 overflow-hidden ${isExpanded ? 'rounded-2xl' : 'rounded-full'}`}
                        >
                            <div className="w-10 h-10 bg-supreme-gold text-supreme-black rounded-full flex items-center justify-center shadow-inner">
                                <ShieldCheck size={20} strokeWidth={3} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-supreme-gold uppercase tracking-[0.1em] leading-none mb-1">MahaRERA Registered</span>
                                <span className="text-sm font-bold text-gray-900 tracking-tight leading-none">{reraNumber}</span>
                            </div>
                            {isExpanded ? <X size={16} className="text-gray-400 ml-2" /> : <div className="ml-2 w-2 h-2 bg-supreme-gold rounded-full animate-ping"></div>}
                        </motion.div>

                        {/* Expanded QR View */}
                        <AnimatePresence>
                            {isExpanded && (
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                                    className="absolute bottom-full left-0 mb-4 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(221,107,77,0.15)] border border-supreme-gold/20 w-64 text-center"
                                >
                                    <h4 className="text-supreme-black font-serif text-lg mb-4">Official RERA Details</h4>
                                    <div className="bg-white p-4 rounded-2xl shadow-inner mb-4 border border-gray-100 group-hover:scale-105 transition-transform">
                                        <img 
                                            src="/rivana-rera-qr.png" 
                                            alt="MahaRERA QR Code - Supreme Rivana Phase I" 
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                                        Scan QR or click to verify details on official MahaRERA website.
                                    </p>
                                    <a 
                                        href="https://maharera.maharashtra.gov.in/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center gap-2 bg-supreme-gold text-white py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-supreme-black transition-colors duration-300"
                                    >
                                        <span>Verify Online</span>
                                        <ExternalLink size={14} />
                                    </a>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FloatingRERA;
