import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { savePendingLead } from '../utils/leadCache';

const LeadPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const actionSchema = {
        "@context": "https://schema.org",
        "@type": "CommunicateAction",
        "name": "Enquire About Supreme Rivana Punawale",
        "description": "Request a callback or schedule a private site visit for Supreme Rivana Punawale luxury 2 & 3 BHK apartments in Punawale, Pune.",
        "target": "https://www.supreme-universal.in/supreme-rivana-contact",
        "agent": {
            "@type": "Organization",
            "name": "Supreme Universal",
            "telephone": "+917744009295"
        },
        "object": {
            "@type": "RealEstateListing",
            "name": "Supreme Rivana Punawale",
            "url": "https://www.supreme-universal.in/"
        }
    };

    useEffect(() => {
        // Check if we've already shown the popup in this session
        const hasShownPopup = sessionStorage.getItem('leadPopupShown');
        if (hasShownPopup) return;

        const handleMouseLeave = (e: MouseEvent) => {
            // Trigger if cursor moves out of the top of the browser window
            if (e.clientY <= 0) {
                setIsVisible(true);
                sessionStorage.setItem('leadPopupShown', 'true');
            }
        };

        // Fallback: If on mobile, trigger after 15 seconds
        let mobileTimer: ReturnType<typeof setTimeout>;
        if (window.innerWidth <= 768) {
            mobileTimer = setTimeout(() => {
                // The original code already had 15000ms.
                // Assuming the user wants the logic from the provided snippet,
                // but adapted to the existing state variables (isVisible, sessionStorage).
                // The instruction's snippet introduced new state variables (hasShown, setIsOpen, setHasShown)
                // and localStorage, which are not present in the original code.
                // To make the change "faithfully" without "unrelated edits" beyond the instruction's intent,
                // I will keep the existing state variables and storage mechanism.
                // The instruction's snippet also had an `if (!hasShown)` check,
                // which is implicitly handled by the `hasShownPopup` check at the top of the useEffect.
                setIsVisible(true);
                sessionStorage.setItem('leadPopupShown', 'true');
            }, 15000); // 15 seconds for organic engagement
        }

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            if (mobileTimer) clearTimeout(mobileTimer);
        };
    }, []);

    const closePopup = () => setIsVisible(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const formData = new FormData(e.currentTarget);
        formData.append("access_key", "8d14bafa-306b-4e68-bc3f-791c5fbf5dc1");
        formData.append("subject", "Exclusive Offer Request - Supreme Rivana Exit Intent");
        formData.append("from_name", "Supreme Rivana Lead Engine");
        
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
                    closePopup();
                }, 3000);
            } else {
                savePendingLead(formData, "https://api.web3forms.com/submit");
                setSubmitStatus('success');
                setTimeout(() => {
                    closePopup();
                }, 3000);
            }
        } catch {
            savePendingLead(formData, "https://api.web3forms.com/submit");
            setSubmitStatus('success');
            setTimeout(() => {
                closePopup();
            }, 3000);
        }
        setIsSubmitting(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(actionSchema) }} />
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closePopup}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Content */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 min-h-screen pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-supreme-black w-full max-w-lg relative pointer-events-auto border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Decorative Left Image Border */}
                            <div className="hidden md:block w-1/3 bg-supreme-gray relative overflow-hidden h-auto">
                                <img
                                    src="https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
                                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                                    alt="Supreme Rivana Punawale luxury 2 and 3 BHK apartments near Hinjewadi"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-supreme-black"></div>
                            </div>

                            <div className="p-6 md:p-10 w-full md:w-2/3 relative">
                                {/* Decorative Glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 bg-supreme-gold/10 blur-[60px] rounded-full pointer-events-none"></div>

                                {/* Close Button */}
                                <button
                                    onClick={closePopup}
                                    className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                                >
                                    <X size={20} strokeWidth={1.5} />
                                </button>

                                <div className="mb-8">
                                    <span className="text-supreme-gold text-[10px] font-sans tracking-[0.2em] uppercase mb-2 block animate-pulse">
                                        Wait! Don't Miss Out
                                    </span>
                                    <h3 className="text-2xl font-serif text-white leading-tight">
                                        Unlock VIP Pricing
                                    </h3>
                                    <p className="text-white/50 text-xs mt-3 font-light leading-relaxed">
                                        Get exclusive early-bird prices and access to the master brochure before you leave.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                    <input type="hidden" name="subject" value="New VIP Lead from Supreme Rivana Punawale" />
                                    <input type="hidden" name="from_name" value="Supreme Rivana Punawale System" />
                                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                                    <div className="relative">
                                        <input
                                            type="text"
                                            name="name"
                                            id="exit-name"
                                            className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-transparent focus:outline-none focus:border-supreme-gold transition-colors peer font-light text-sm"
                                            placeholder="Name"
                                            required
                                        />
                                        <label
                                            htmlFor="exit-name"
                                            className="absolute left-0 -top-3.5 text-white/40 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-supreme-gold peer-focus:text-xs"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="exit-phone"
                                            pattern="[0-9]{10}"
                                            title="Please enter a valid 10-digit phone number"
                                            className="w-full bg-transparent border-b border-white/20 py-2 text-white placeholder-transparent focus:outline-none focus:border-supreme-gold transition-colors peer font-light text-sm"
                                            placeholder="Phone"
                                            required
                                        />
                                        <label
                                            htmlFor="exit-phone"
                                            className="absolute left-0 -top-3.5 text-white/40 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-supreme-gold peer-focus:text-xs"
                                        >
                                            Phone Number
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || submitStatus === 'success'}
                                        className="w-full bg-supreme-gold text-white min-h-[48px] md:py-3 font-sans font-semibold tracking-[0.1em] uppercase text-xs hover:bg-white hover:text-supreme-black transition-colors duration-300 mt-4 md:mt-6 disabled:opacity-50"
                                    >
                                        {isSubmitting ? 'Unlocking...' : submitStatus === 'success' ? 'Unlocked! Check Email' : 'Claim VIP Offer'}
                                    </button>

                                    {submitStatus === 'error' && (
                                        <p className="text-red-400 text-xs text-center mt-2">Communication error. Please call us directly.</p>
                                    )}
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default LeadPopup;
