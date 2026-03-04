import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const faqs = [
    {
        question: "What is the price of 2 BHK in Supreme Riverside Punawale?",
        answer: "The Supreme Riverside 2 BHK price starts at highly competitive rates for ultra-luxury near Hinjewadi. These premium flats feature spacious layouts, river views, and world-class amenities. For exact pricing, payment plans, and the latest offers, please contact our sales team directly."
    },
    {
        question: "Is Supreme Riverside a good investment?",
        answer: "Yes, Supreme Riverside is an exceptional investment. Property appreciation in Punawale is rapidly growing due to proximity to the Hinjewadi IT Park and the Mumbai Pune Expressway. The rental income potential and high demand make it a top choice for investors in Pune West."
    },
    {
        question: "How far is Supreme Riverside from Hinjewadi?",
        answer: "Supreme Riverside Punawale is strategically located just 10-15 minutes away from Hinjewadi IT Park. This allows residents to enjoy a serene, waterfront lifestyle while maintaining a rapid, traffic-free commute to major tech hubs."
    },
    {
        question: "Are there river view flats in Punawale?",
        answer: "Absolutely. Supreme Riverside Punawale specializes in offering exclusive 2 and 3 BHK river view apartments. The project is designed to maximize natural light and providing uninterrupted, panoramic views of the river for a truly premium living experience."
    },
    {
        question: "Which is the best project in Punawale?",
        answer: "Supreme Riverside is widely considered the best luxury project in Punawale. Backed by Supreme Universal's 40-year legacy, it offers superior multi-tier amenities, intelligent floor plans, and a unique riverside location that outclasses other residential projects in Pune West."
    },
    {
        question: "What is the Supreme Riverside possession date?",
        answer: "The official Supreme Riverside possession date aligns with our strict MahaRERA guidelines to ensure timely delivery. We are committed to a transparent construction schedule. Please visit our sales gallery for the exact phase-wise handover timeline."
    },
    {
        question: "Can I get a Supreme Riverside 3 BHK price and floor plan?",
        answer: "Yes, the Supreme Riverside 3 BHK price is tailored for families seeking expansive luxury. Detailed 3 BHK floor plans and the official project brochure are available upon request through our website or by visiting our Punawale site office."
    },
    {
        question: "Are these high rise apartments near Hinjewadi Phase 1?",
        answer: "Yes, Supreme Riverside offers stunning high rise apartments near Hinjewadi Phase 1. The elevated towers provide unparalleled views, excellent cross-ventilation, and a secure gated community environment tailored perfectly for IT professionals and their families."
    },
    {
        question: "Is this a good property near schools in Punawale?",
        answer: "Supreme Riverside is perfectly situated near top educational institutions. Located adjacent to the Lotus Business School and close to premier international schools in Wakad and Tathawade, it is the ideal family-friendly residential project in Punawale."
    },
    {
        question: "How do I make a Supreme Riverside booking?",
        answer: "You can initiate a Supreme Riverside booking by inquiring on our website or visiting the site office. Our team will guide you through the available inventory, explain the latest offers, and assist with the seamless booking process."
    },
    {
        question: "How far is the Punawale Metro station from Supreme Riverside?",
        answer: "Supreme Riverside is exceptionally well-connected, located just 400 meters from the Punawale Underpass, which leads directly to the upcoming Pune Metro Line 3 station. This ensures rapid transit to Hinjewadi, Wakad, and central Pune."
    },
    {
        question: "What are the benefits of the IGBC Green Building Certification?",
        answer: "As an IGBC-certified green project, Supreme Riverside ensures sustainable living through energy-efficient design, rainwater harvesting, and superior natural ventilation. This leads to lower maintenance costs and a healthier, eco-friendly lifestyle for all residents."
    },
    {
        question: "Punawale vs Wakad: Which is better for investment in 2026?",
        answer: "While Wakad is established, Punawale offers a higher 'entry-to-appreciation' delta. With the 15-acre scale of Supreme Riverside and upcoming infrastructure like the Pune Ring Road, the property appreciation potential in Punawale is projected to outperform Wakad by 2026-2027."
    },
    {
        question: "What is the Supreme Riverside RERA registration number?",
        answer: "Supreme Riverside Punawale is a fully MahaRERA-compliant project. The RERA registration ensures complete transparency in project timelines, carpet area declarations, and financial accountability. Buyers can verify all project details on the official MahaRERA portal. For the exact registration number, please contact our sales team or visit the site office."
    },
    {
        question: "What are the payment plan options for Supreme Riverside?",
        answer: "Supreme Riverside offers 3 flexible payment plans: Construction-Linked Plan (CLP) where you pay in stages as milestones are reached, Down Payment Plan with attractive discounts for upfront payment, and a Flexi Plan for NRI buyers and salaried professionals. The project is pre-approved by HDFC, SBI, ICICI, Axis Bank, and Bank of Baroda."
    },
    {
        question: "Is Supreme Riverside a good choice for NRI investors?",
        answer: "Absolutely. Supreme Riverside is one of the top NRI investment choices in Pune West. With a dedicated NRI desk offering virtual site tours, Power of Attorney assistance, and end-to-end documentation support, the entire buying process is seamless. The IGBC-certified 15-acre township by Supreme Universal (40-year legacy) ensures your investment is safe and appreciating."
    },
    {
        question: "What is the carpet area of 2 BHK and 3 BHK in Supreme Riverside?",
        answer: "Supreme Riverside offers spacious carpet areas in both 2 BHK and 3 BHK configurations, designed for maximum livability with only 6 units per floor for superior privacy and ventilation. The exact carpet areas are available in the official floor plan brochure. Contact our sales team for the detailed layout with dimensions."
    },
    {
        question: "How is the rental income potential in Punawale near Hinjewadi?",
        answer: "Punawale offers excellent rental income potential, especially for properties near Hinjewadi IT Park. 2 BHK apartments in Supreme Riverside can command monthly rents of ₹18,000-₹28,000, translating to 3.5-5% annual yield. With Metro Line 3 and Ring Road developments, rental demand is set to increase significantly."
    },
    {
        question: "What is the current construction status of Supreme Riverside Punawale?",
        answer: "Supreme Riverside Punawale is progressing as per committed MahaRERA timelines. Supreme Universal is known for timely delivery across their 70+ delivered projects in Mumbai and Pune. For the latest construction progress, drone footage, and phase-wise updates, please schedule a site visit or contact our sales team."
    },
    {
        question: "Are there bank loan options approved for Supreme Riverside?",
        answer: "Yes, Supreme Riverside is pre-approved by all major Indian banks including HDFC, SBI, ICICI Bank, Axis Bank, and Bank of Baroda. This ensures hassle-free home loan processing with competitive interest rates. NRI-specific home loan options are also available through these banks."
    },
    {
        question: "What makes Supreme Riverside different from other Punawale projects?",
        answer: "Supreme Riverside stands apart with 5 key differentiators: (1) 15-acre IGBC-certified township — the largest in Punawale, (2) Only 6 apartments per floor for maximum privacy, (3) 31-storey towers with panoramic river views, (4) 40+ multi-tier amenities including skywalk, infinity pool, and co-working hub, and (5) Supreme Universal's 40-year legacy of premium quality and timely delivery."
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
