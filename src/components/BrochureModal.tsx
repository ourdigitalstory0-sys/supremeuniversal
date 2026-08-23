import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface BrochureModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BrochureModal = ({ isOpen, onClose }: BrochureModalProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "8d14bafa-306b-4e68-bc3f-791c5fbf5dc1");
        formData.append("subject", "Brochure Download Request - Supreme Rivana");
        
        const emailVal = formData.get("email");
        if (emailVal) {
            formData.append("replyto", emailVal as string);
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            if (data.success) {
                setIsSuccess(true);
                // Simulate file download
                const link = document.createElement('a');
                link.href = 'https://cdn.supremeuniversal.com/brochure/Supreme-Rivana-Punawale.pdf';
                link.setAttribute('download', 'Supreme-Rivana-Brochure.pdf');
                link.setAttribute('target', '_blank');
                document.body.appendChild(link);
                link.click();
                link.remove();
            }
        } catch (error) {
            console.error("Submission error", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100]"
                    />
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-supreme-black w-full max-w-lg border border-supreme-gold/30 relative overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-supreme-gold"></div>
                            
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="p-8 md:p-12">
                                <AnimatePresence mode="wait">
                                    {!isSuccess ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="p-3 bg-supreme-gold/10 rounded-full">
                                                    <FileText className="text-supreme-gold" size={24} />
                                                </div>
                                                <h3 className="text-2xl font-serif text-white uppercase tracking-widest">Digital Brochure</h3>
                                            </div>
                                            <p className="text-white/60 font-sans font-light text-sm mb-8 leading-relaxed">
                                                Enter your details to receive the floor plans, price list, and the comprehensive <strong>Supreme Rivana project brochure</strong>.
                                            </p>

                                            <form onSubmit={handleSubmit} className="space-y-6">
                                                <div className="space-y-4">
                                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Full Name *"
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-supreme-gold transition-colors font-sans text-sm"
                                                    />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Phone Number *"
                                                        pattern="[0-9]{10}"
                                                        title="Please enter a valid 10-digit phone number"
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-supreme-gold transition-colors font-sans text-sm"
                                                    />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address *"
                                                        required
                                                        className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-supreme-gold transition-colors font-sans text-sm"
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="w-full bg-supreme-gold text-supreme-black py-4 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-supreme-gold/20"
                                                >
                                                    {isSubmitting ? 'Verifying...' : 'Download Now'}
                                                    <Download size={16} />
                                                </button>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-center py-8"
                                        >
                                            <div className="w-20 h-20 bg-supreme-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 size={40} className="text-supreme-gold" />
                                            </div>
                                            <h3 className="text-2xl font-serif text-white mb-4 uppercase tracking-[0.1em]">Ready for Download</h3>
                                            <p className="text-white/60 font-sans font-light text-sm mb-8">
                                                The brochure has been triggered for download. If it doesn't start automatically, <a href="https://cdn.supremeuniversal.com/brochure/Supreme-Rivana-Punawale.pdf" target="_blank" className="text-supreme-gold underline">click here</a>.
                                            </p>
                                            <button
                                                onClick={onClose}
                                                className="px-8 py-3 border border-white/20 text-white/60 text-xs uppercase tracking-widest font-bold hover:text-white hover:border-white transition-colors"
                                            >
                                                Close
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default BrochureModal;
