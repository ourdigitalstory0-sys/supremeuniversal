import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface MobileStickyBarProps {
    onEnquire: () => void;
}

const MobileStickyBar = ({ onEnquire }: MobileStickyBarProps) => {
    return (
        <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="md:hidden fixed bottom-0 left-0 w-full z-50 flex h-16 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]"
        >
            <a 
                href="tel:+917744009295" 
                className="flex-1 bg-white flex flex-col items-center justify-center border-r border-gray-200 text-supreme-black hover:bg-gray-50 transition-colors"
                aria-label="Call Sales"
            >
                <Phone className="w-5 h-5 mb-1 text-supreme-gold" />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">Call Now</span>
            </a>
            <button 
                onClick={onEnquire}
                className="flex-1 bg-supreme-gold flex flex-col items-center justify-center text-white hover:bg-supreme-black transition-colors"
                aria-label="Enquire Now"
            >
                <Mail className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-sans font-semibold uppercase tracking-wider">Enquire</span>
            </button>
        </motion.div>
    );
};

export default MobileStickyBar;
