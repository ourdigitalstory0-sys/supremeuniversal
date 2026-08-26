import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { savePendingLead } from '../utils/leadCache';

interface QuickEnquireModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const QuickEnquireModal = ({ isOpen, onClose }: QuickEnquireModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "8d14bafa-306b-4e68-bc3f-791c5fbf5dc1");
        
        const emailVal = formData.get("email");
        if (emailVal) {
            formData.append("replyto", emailVal as string);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            }); const data = await response.json();
            if (data.success) {
                setSubmitStatus('success');
                setTimeout(() => {
                    onClose();
                    setSubmitStatus('idle');
                }, 3000);
            } else {
                savePendingLead(formData, "https://api.web3forms.com/submit");
                setSubmitStatus('success');
                setTimeout(() => {
                    onClose();
                    setSubmitStatus('idle');
                }, 3000);
            }
        } catch {
            savePendingLead(formData, "https://api.web3forms.com/submit");
            setSubmitStatus('success');
            setTimeout(() => {
                onClose();
                setSubmitStatus('idle');
            }, 3000);
        }
        setIsSubmitting(false);
    };

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
                                        Supreme Rivana Advantage
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-serif text-white">
                                        Secure Your Priority Access
                                    </h3>
                                    <p className="text-white/50 text-sm mt-4 font-light leading-relaxed">
                                        Join the elite circle. Register now to receive the brochure, verified <strong>Punawale property market insights</strong>, and exclusive pre-launch benefits directly from Supreme Universal.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input type="hidden" name="subject" value="New Quick Enquiry from Supreme Rivana" />
                                    <input type="hidden" name="from_name" value="Supreme Rivana System" />
                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                                    <div className="space-y-4">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="name"
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
                                                name="phone"
                                                id="modal-phone"
                                                pattern="[0-9]{10}"
                                                title="Please enter a valid 10-digit phone number"
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
                                                name="email"
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

                                        {/* Configuration Selector */}
                                        <div className="pt-2">
                                            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Interested Configuration *</p>
                                            <div className="flex flex-wrap gap-3">
                                                {['2 BHK', '3 BHK', 'Both (2 & 3 BHK)'].map((config) => (
                                                    <label key={config} className="flex items-center gap-2 cursor-pointer group">
                                                        <input
                                                            type="radio"
                                                            name="interest"
                                                            value={config}
                                                            required
                                                            className="accent-supreme-gold w-4 h-4"
                                                        />
                                                        <span className="text-white/70 text-xs font-sans group-hover:text-white transition-colors">{config}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Site Visit Date */}
                                        <div className="relative">
                                            <input
                                                type="date"
                                                name="visit_date"
                                                id="modal-visit-date"
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full bg-transparent border-b border-white/20 py-3 text-white/70 focus:outline-none focus:border-supreme-gold transition-colors font-light text-sm [color-scheme:dark]"
                                            />
                                            <label className="absolute left-0 -top-3.5 text-white/40 text-xs uppercase tracking-widest">
                                                Tentative Site Visit Date
                                            </label>
                                        </div>
                                    </div>


                                    <button
                                        type="submit"
                                        disabled={isSubmitting || submitStatus === 'success'}
                                        className="w-full bg-supreme-gold text-white py-4 font-sans font-semibold tracking-[0.15em] uppercase text-xs hover:bg-white hover:text-supreme-black transition-colors duration-300 mt-8 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Sending Details...' : submitStatus === 'success' ? 'Details Received!' : 'Submit Details'}
                                    </button>

                                    {submitStatus === 'error' && (
                                        <p className="text-red-400 text-xs text-center mt-2">Failed to send details. Please try again or call us.</p>
                                    )}

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
