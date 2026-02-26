import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
    {
        question: "What configurations are available at Supreme Riverside Punawale?",
        answer: "Supreme Riverside offers ultra-premium 2BHK and expansive 3BHK luxury apartments in Punawale. Each residence is meticulously designed to maximize natural light, offering breathtaking views of the river and setting a new benchmark for luxury flats near Wakad."
    },
    {
        question: "How far is Supreme Riverside from Wakad and Hinjewadi IT Park?",
        answer: "Strategically located in the heart of West Pune, Supreme Riverside is just 10 minutes from both the Wakad real estate market and the Tathawade & PCMC corridors. This provides residents with seamless, traffic-free connectivity to the Hinjewadi IT corridor and the Mumbai-Pune Expressway."
    },
    {
        question: "Is Punawale a good real estate investment in West Pune?",
        answer: "Absolutely. Punawale is globally recognized as one of the best properties to invest in West Pune. Its immediate proximity to Lotus Business School, rapid PCMC infrastructure development, and direct highway access make it a highly lucrative micro-market for massive capital appreciation, outperforming even the 3BHK in Tathawade segment."
    },
    {
        question: "What amenities does this river-facing and waterfront property offer?",
        answer: "Supreme Riverside is an architectural landmark featuring over 40+ world-class amenities. Residents enjoy exclusive access to a multi-tier luxury clubhouse, a podium-level infinity pool, landscaped waterfront promenades, and dedicated wellness sanctuaries, rivaling the finest Supreme Group projects in Pune."
    },
    {
        question: "Are there any 4BHK flats available in this specific project?",
        answer: "Currently, the master plan focuses exclusively on crafting the ultimate 2 BHK in Pune and luxury 3 BHK apartments in Punawale to cater to young professionals and nuclear families. For ultra-spacious 4BHK in Wakad or broader 4BHK configurations, we recommend exploring other upcoming Supreme Universal new launches."
    },
    {
        question: "Is the project RERA registered and when is the possession?",
        answer: "Yes, Supreme Riverside is fully MahaRERA registered, ensuring complete transparency and compliance for home buyers entering the Pune real estate market. Please contact our sales gallery directly for the exact phasing and official possession dates for the current inventory footprint."
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
