import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
    {
        question: "What is the price of 2 BHK in Supreme Rivana Punawale?",
        answer: "The starting price for a 2 BHK at Supreme Rivana Punawale is approximately ₹68 Lakhs* (all-inclusive). We offer premium riverside 2 BHK flats with carpet areas starting from 785 sq.ft. for luxury living near Hinjewadi. Contact our sales office for the complete inventory list and latest 2026 offers."
    },
    {
        question: "How far is Lotus Business School and other top schools from Supreme Rivana?",
        answer: "Supreme Rivana is ideally located just 2 minutes from Lotus Business School. Other premier institutes like Indira World School, JSPM Rajarshi Shahu College, and Blossom Public School are within a 3-5 km radius, making it a top choice for families moving to Punawale."
    },
    {
        question: "What is the 3 BHK carpet area and price at Supreme Rivana Punawale?",
        answer: "Our ultra-luxury 3 BHK 'Sky Residences' start from 1045 sq.ft. carpet area. The Supreme Rivana 3 BHK price is designed for those seeking expansive waterfront views and maximum ventilation with only 6 units per floor. Pricing starts from ₹95 Lakhs*."
    },
    {
        question: "Is Punawale better for investment than Wakad or Mamurdi?",
        answer: "Punawale is currently the highest-performing micro-market in West Pune. While Wakad is saturated, Punawale offers a 15-20% higher ROI potential due to the upcoming Pune Ring Road and the 15-acre scale of Supreme Rivana. It bridges the gap between the IT hub (Hinjewadi) and the Expressway (Mamurdi)."
    },
    {
        question: "Which hospitals are near Supreme Rivana Punawale?",
        answer: "Residents have access to world-class healthcare with Lifepoint Multispecialty Hospital, Surya Mother and Child Super Specialty Hospital, and Ruby Hall Clinic (Hinjewadi) all within a 10-15 minute drive from the project."
    },
    {
        question: "What are the key amenities in the 15-acre Supreme Rivana township?",
        answer: "Supreme Rivana features 40+ multi-tier lifestyle amenities including a 31st-floor Skywalk with river views, a glass-walled gymnasium, an infinity-edge swimming pool, co-working spaces for IT professionals, and sustainable green spaces certified by IGBC."
    },
    {
        question: "How does the Pune Metro Line 3 benefit Supreme Rivana residents?",
        answer: "The upcoming Punawale metro station (part of Metro Line 3 - Hinjewadi to Shivajinagar) is just 5-7 minutes away. This will provide traffic-free connectivity to major commercial hubs, increasing the property value and rental demand for Supreme Rivana apartments."
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
