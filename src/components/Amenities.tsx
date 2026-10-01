import { Dumbbell, Waves, Trees, Coffee, Shield, Trophy, Activity, Heart, Smile, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
    { icon: <Trophy className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Club Rivana (60,000 Sq.Ft)', desc: "West Pune's largest multi-level clubhouse with cinema lounge & 2 banquet halls" },
    { icon: <Waves className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Aqua Arena (2 Pools)', desc: 'Temperature-controlled lap pool, kids pool, and riverfront pool deck' },
    { icon: <Activity className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Racquet & Sports Arena', desc: 'Badminton courts, outdoor pickleball court, and professional squash court' },
    { icon: <Trees className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: '700+ Native Trees & Greens', desc: 'Pawana riverside promenade, palm grove, hammocks & lantern pavilions' },
    { icon: <Dumbbell className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Elite Gymnasium & Fitness', desc: 'Modern fitness center, outdoor gym, yoga deck & aerobics studio' },
    { icon: <Heart className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Senior Wellness & Reflexology', desc: 'Acupressure reflexology path, shaded pavilions & peaceful meditation grove' },
    { icon: <Smile className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Junior Adventure & Play', desc: "Children's adventure play area, toddler zone, crèche & skating rink" },
    { icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Pet Park & Social Greens', desc: 'Dedicated pet friendly park, barbecue counter, open lawn & amphitheatre' },
    { icon: <Coffee className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: 'Café & Co-Working Lounge', desc: 'Smart co-working cabins, business center, and artisan coffee lounge' },
    { icon: <Shield className="w-8 h-8 md:w-10 md:h-10 text-supreme-gold" />, name: '3-Tier Gated Security', desc: '24/7 CCTV surveillance, biometric access, and boom barrier vehicle entry' }
];

const Amenities = () => {
    const amenitySchema = {
        "@context": "https://schema.org",
        "@type": "Residence",
        "name": "Supreme Rivana Punawale — Club Rivana & 50+ Lifestyle Amenities",
        "description": "50+ curated lifestyle amenities at Supreme Rivana Punawale featuring Club Rivana (60,000 sq.ft multi-level clubhouse), Aqua Arena with 2 swimming pools, pickleball, squash, 700+ native trees, and Pawana riverfront living.",
        "url": "https://www.supreme-universal.in/supreme-rivana-punawale-amenities",
        "amenityFeature": amenities.map(a => ({
            "@type": "LocationFeatureSpecification",
            "name": a.name,
            "value": true,
            "description": a.desc
        }))
    };

    return (
        <section id="amenities" className="py-24 md:py-32 bg-supreme-black relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(amenitySchema) }} />
            {/* Background Texture/Gradient */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(198,168,124,0.05)_0%,transparent_50%)] pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                The Master Club
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight">
                            Curated <span className="italic font-light text-supreme-gold">Experiences</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md pb-2"
                    >
                        <p className="text-white/60 font-sans font-light text-base md:text-lg leading-relaxed">
                            Indulge in a lifestyle of varied pleasures with our thoughtfully curated amenities designed for your relaxation, recreation, and absolute well-being.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative p-8 md:p-10 border-r border-b border-white/10 overflow-hidden bg-transparent hover:bg-white/5 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-supreme-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <div className="mb-8 transform group-hover:-translate-y-2 transition-transform duration-500 text-white/50 group-hover:text-supreme-gold">
                                {item.icon}
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-supreme-gold transition-colors duration-500">
                                {item.name}
                            </h3>
                            <p className="text-white/40 font-sans text-sm font-light leading-relaxed group-hover:text-white/70 transition-colors duration-500">
                                {item.desc}
                            </p>

                            {/* Animated corner accent */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                                <span className="absolute bottom-0 right-0 w-[1px] h-0 bg-supreme-gold group-hover:h-full transition-all duration-500 delay-100"></span>
                                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-supreme-gold group-hover:w-full transition-all duration-500"></span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;
