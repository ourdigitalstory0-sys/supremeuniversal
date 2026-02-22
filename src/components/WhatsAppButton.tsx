
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = '917744009295';
    const message = encodeURIComponent('Hi, I am interested in Supreme Riverside. Please share more details.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
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
                <motion.a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle size={28} fill="white" className="text-white" />
                    <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap hidden group-hover:block">
                        Chat with us
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default WhatsAppButton;
