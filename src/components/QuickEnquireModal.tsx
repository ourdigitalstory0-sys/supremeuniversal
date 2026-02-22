import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface QuickEnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuickEnquireModal = ({ isOpen, onClose }: QuickEnquireModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 min-h-screen pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-supreme-black w-full max-w-lg relative pointer-events-auto border border-white/10 shadow-2xl overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Background Glow */}
                            <div className="absolute -top-40 -right-40 w-80 h-80 bg-supreme-gold/10 blur-[100px] rounded-full pointer-events-none"></div>

                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>

                            <div className="p-8 md:p-12">
                                <div className="text-center mb-10">
                                    <span className="text-supreme-gold text-xs font-sans tracking-[0.2em] uppercase mb-4 block">
                                        Supreme Riverside
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-serif text-white">
                                        Register Interest
                                    </h3>
                                    <p className="text-white/50 text-sm mt-4 font-light leading-relaxed">
                                        Provide your details to unlock exclusive pricing and floor plans.
                                    </p>
                                </div>

                                <form className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="modal-name"
                                                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-supreme-gold transition-colors peer font-light text-sm"
                                                placeholder="Name"
                                                required
                                            />
                                            <label
                                                htmlFor="modal-name"
                                                className="absolute left-0 -top-3.5 text-white/40 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-supreme-gold peer-focus:text-xs"
                                            >
                                                Full Name *
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="modal-phone"
                                                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-supreme-gold transition-colors peer font-light text-sm"
                                                placeholder="Phone"
                                                required
                                            />
                                            <label
                                                htmlFor="modal-phone"
                                                className="absolute left-0 -top-3.5 text-white/40 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-supreme-gold peer-focus:text-xs"
                                            >
                                                Phone Number *
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="email"
                                                id="modal-email"
                                                className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-transparent focus:outline-none focus:border-supreme-gold transition-colors peer font-light text-sm"
                                                placeholder="Email"
                                            />
                                            <label
                                                htmlFor="modal-email"
                                                className="absolute left-0 -top-3.5 text-white/40 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-supreme-gold peer-focus:text-xs"
                                            >
                                                Email Address
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-supreme-gold text-white py-4 font-sans font-semibold tracking-[0.15em] uppercase text-xs hover:bg-white hover:text-supreme-black transition-colors duration-300 mt-8"
                                    >
                                        Submit Details
                                    </button>

                                    <p className="text-center text-white/30 text-[10px] tracking-wide mt-4">
                                        Your details are secure and will not be shared.
                                    </p>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default QuickEnquireModal;
