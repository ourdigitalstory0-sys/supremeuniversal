
import { Phone, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        interest: '',
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleInterestSelect = (value: string) => {
        setFormData(prev => ({ ...prev, interest: value }));
        setTimeout(() => setStep(2), 300);
    };

    const eventSchema = {
        "@context": "https://schema.org",
        "@type": "Event",
        "name": "Supreme Rivana Punawale - Exclusive Site Visit",
        "description": "Schedule a private tour of Supreme Rivana Punawale luxury 2 & 3 BHK waterfront apartments near Hinjewadi IT Park, Pune.",
        "startDate": "2026-03-01",
        "endDate": "2026-12-31",
        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "eventStatus": "https://schema.org/EventScheduled",
        "location": {
            "@type": "Place",
            "name": "Supreme Rivana Punawale Site Experience Center",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Near Lotus Business School, Punawale",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411033",
                "addressCountry": "IN"
            }
        },
        "organizer": {
            "@type": "Organization",
            "name": "Supreme Universal",
            "url": "https://www.supreme-universal.in/"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "url": "https://www.supreme-universal.in/supreme-rivana-contact"
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        const submissionData = new FormData();
        Object.entries(formData).forEach(([key, value]) => submissionData.append(key, value));
        submissionData.append("access_key", "8d14bafa-306b-4e68-bc3f-791c5fbf5dc1");
        submissionData.append("subject", `New Multi-step Enquiry: ${formData.interest}`);
        submissionData.append("from_name", "Supreme Rivana Punawale");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: submissionData
            });
            const data = await response.json();
            if (data.success) {
                setSubmitStatus('success');
            } else { setSubmitStatus('error'); }
        } catch { setSubmitStatus('error'); }
        setIsSubmitting(false);
    };

    return (
        <section id="contact" className="py-24 md:py-32 bg-supreme-black text-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
            
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-supreme-gold/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                Site Experience
                            </span>
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-6">
                            Begin Your <span className="italic font-light text-supreme-gold">Journey</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-sans font-light">
                            Select your interest and our dedicated transition team will guide you to your future home at Supreme Rivana.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    <div className="lg:w-4/12 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-serif text-supreme-gold">Visit Us Today</h3>
                            <p className="text-white/70 font-sans font-light leading-loose text-lg">
                                Near Lotus Business School,<br />
                                Punawale, Pune, Maharashtra - 411033
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <a href="tel:+917744009295" className="flex items-center gap-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-supreme-gold transition-colors duration-500">
                                    <Phone className="text-supreme-gold w-5 h-5" />
                                </div>
                                <p className="text-xl text-white font-sans font-light tracking-wide group-hover:text-supreme-gold transition-colors duration-300">+91 77440 09295</p>
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:w-8/12 w-full">
                        <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden min-h-[500px]">
                            {/* Step Indicator */}
                            {submitStatus !== 'success' && (
                                <div className="flex items-center gap-4 mb-12">
                                    {[1, 2].map((i) => (
                                        <div key={i} className="flex items-center gap-2">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${step >= i ? 'bg-supreme-gold text-supreme-black' : 'bg-white/10 text-white/40'}`}>
                                                {i}
                                            </div>
                                            {i === 1 && <div className={`w-12 h-[1px] ${step > 1 ? 'bg-supreme-gold' : 'bg-white/10'}`}></div>}
                                        </div>
                                    ))}
                                    <span className="ml-4 text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
                                        {step === 1 ? 'Select Interest' : 'Personal Details'}
                                    </span>
                                </div>
                            )}

                            <AnimatePresence mode="wait">
                                {submitStatus === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-24 h-24 bg-supreme-gold/20 rounded-full flex items-center justify-center mb-8">
                                            <CheckCircle2 size={48} className="text-supreme-gold" />
                                        </div>
                                        <h3 className="text-3xl font-serif text-white mb-4">Request Received</h3>
                                        <p className="text-white/60 max-w-sm font-sans font-light leading-relaxed">
                                            Thank you for your interest in Supreme Rivana. Our relationship manager will connect with you within 24 hours.
                                        </p>
                                        <button 
                                            onClick={() => { setStep(1); setSubmitStatus('idle'); }}
                                            className="mt-10 text-supreme-gold border-b border-supreme-gold text-xs uppercase tracking-widest font-bold pb-1"
                                        >
                                            Submit Another Request
                                        </button>
                                    </motion.div>
                                ) : step === 1 ? (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <h3 className="text-2xl font-serif text-white">What are you looking for?</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {[
                                                { id: '2bhk', label: 'Luxury 2 BHK', sub: 'Riverside View' },
                                                { id: '3bhk', label: 'Premium 3 BHK', sub: 'Sky Residences' },
                                                { id: 'investment', label: 'Investment Opportunity', sub: 'High ROI Punawale' },
                                                { id: 'visit', label: 'VIP Site Visit', sub: 'Experience Center' }
                                            ].map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => handleInterestSelect(opt.label)}
                                                    className={`p-6 border text-left transition-all duration-300 group ${formData.interest === opt.label ? 'border-supreme-gold bg-supreme-gold/10' : 'border-white/10 hover:border-white/30'}`}
                                                >
                                                    <p className={`font-serif text-xl mb-1 transition-colors ${formData.interest === opt.label ? 'text-supreme-gold' : 'text-white'}`}>{opt.label}</p>
                                                    <p className="text-white/40 text-[10px] uppercase tracking-widest group-hover:text-white/60 transition-colors">{opt.sub}</p>
                                                </button>
                                            ))}
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="space-y-8"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-2xl font-serif text-white">Share Your Details</h3>
                                            <button 
                                                onClick={() => setStep(1)}
                                                className="text-white/40 hover:text-supreme-gold flex items-center gap-2 text-[10px] uppercase tracking-widest transition-colors"
                                            >
                                                <ArrowLeft size={14} /> Back
                                            </button>
                                        </div>
                                        
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="first_name"
                                                        placeholder="First Name *"
                                                        required
                                                        value={formData.first_name}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30 font-sans font-light"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        name="last_name"
                                                        placeholder="Last Name"
                                                        value={formData.last_name}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30 font-sans font-light"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        placeholder="Email Address *"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30 font-sans font-light"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        placeholder="Phone Number *"
                                                        required
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30 font-sans font-light"
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-supreme-gold text-supreme-black py-5 font-sans font-bold uppercase tracking-[0.2em] text-xs hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                                            >
                                                {isSubmitting ? 'Processing...' : 'Confirm Registration'}
                                                <ArrowRight size={16} />
                                            </button>
                                            {submitStatus === 'error' && (
                                                <p className="text-red-400 text-xs text-center">Connection error. Please try again or call sales office.</p>
                                            )}
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
