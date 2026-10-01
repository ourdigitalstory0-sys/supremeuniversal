import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
    {
        question: "What is the price of 2 BHK and 3 BHK at Supreme Rivana Punawale?",
        answer: "Supreme Rivana offers 2 BHK residences starting from ₹97 Lakh onwards (Premier 746 sq.ft, Grand 786 sq.ft) and 3 BHK luxury residences starting from ₹1.42 Crore onwards (Signature, Regal 1,100 sq.ft, Elite 1,166 sq.ft). Detailed dynamic cost sheets with floor-wise pricing, all-inclusive estimates, and flexible construction-linked payment plans are available through the sales office."
    },
    {
        question: "What is the official MahaRERA registration number for Supreme Rivana?",
        answer: "Supreme Rivana Phase I is registered with MahaRERA under registration number PM1261012502656. The project is completely approved with verified title certificates, scheduled possession timeline commitments, and pre-approved home loan facilities from leading banks including SBI, HDFC, ICICI, and Axis Bank."
    },
    {
        question: "What amenities are featured in the 60,000 sq.ft Club Rivana?",
        answer: "Club Rivana is West Pune's premier 60,000 sq.ft multi-level clubhouse featuring an Aqua Arena with 2 swimming pools (lap pool and kids pool), indoor badminton courts, outdoor pickleball court, squash court, cinema lounge, elite fitness center, and 2 banquet halls. The 12.6-acre grounds also host 700+ native trees, riverside promenade, yoga deck, and a dedicated pet park."
    },
    {
        question: "What is the exact location and connectivity of Supreme Rivana Punawale?",
        answer: "Supreme Rivana is located on Tathawade Road, Punawale, Pimpri-Chinchwad, Pune 411033. It enjoys unmatched connectivity: just 400 metres (1 min) to NH48 Mumbai–Bangalore Highway, 5 mins to Mumbai–Pune Expressway, 12 mins to Wakad Chowk Metro Station, 13 mins to Phoenix Mall of the Millennium, and 15 mins to Hinjewadi IT Park Phase 1."
    },
    {
        question: "What are the configuration sizes and carpet areas available?",
        answer: "The project offers Vastu-compliant homes designed with only 6 residences per floor. Available layouts include 2 BHK Premier (746 sq.ft), 2 BHK Grand (786 sq.ft), 3 BHK Signature (1,050 sq.ft), 3 BHK Regal (1,100 sq.ft), and 3 BHK Elite (1,166 sq.ft), all featuring private river-view balconies and cross-ventilation."
    },
    {
        question: "What is the construction status and possession timeline?",
        answer: "Supreme Rivana is actively under construction with 30+ storey towers (Buildings A, B, and D) undergoing excavation and RCC staging in 2026. Handover timelines are scheduled in phased milestones in accordance with MahaRERA guidelines, starting from December 2031."
    },
    {
        question: "How can I book a site visit and sample flat walkthrough?",
        answer: "Prospective buyers can schedule an exclusive site visit and 2 & 3 BHK sample flat walkthrough by calling the official advisory desk at +919739000354 or registering via the online enquiry form. Complimentary pick-and-drop assistance is available from Hinjewadi, Wakad, and Baner."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section id="faq" className="py-24 md:py-32 bg-supreme-black relative overflow-hidden">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </Helmet>
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-5xl">
                <div className="flex flex-col mb-16 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                Knowledge Base
                            </span>
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight">
                            Frequently Asked <span className="italic font-light text-supreme-gold">Questions</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-none overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none group hover:bg-white/10 transition-colors duration-300"
                            >
                                <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${openIndex === index ? 'text-supreme-gold' : 'text-white'}`}>
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className={`flex-shrink-0 ml-6 p-2 border rounded-full transition-colors duration-300 ${openIndex === index ? 'border-supreme-gold text-supreme-gold' : 'border-white/30 text-white group-hover:border-white'}`}
                                >
                                    <Plus className="w-5 h-5" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="px-8 pb-8 text-gray-400 font-sans tracking-wide leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
