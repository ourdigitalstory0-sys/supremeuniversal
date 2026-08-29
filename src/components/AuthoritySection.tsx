import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, History, Star } from 'lucide-react';

const achievements = [
    {
        icon: <History className="w-8 h-8" />,
        title: "40+ Years Legacy",
        description: "Transforming skylines since 1982 with uncompromising trust."
    },
    {
        icon: <ShieldCheck className="w-8 h-8" />,
        title: "70+ Delivered Projects",
        description: "A benchmark of excellence across Mumbai and Pune's prime locations."
    },
    {
        icon: <Trophy className="w-8 h-8" />,
        title: "Ultra Luxury Developer",
        description: "Winner of CREDAI-MCHI Golden Pillar & Asia Property Awards."
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "Customer Excellence",
        description: "Recognized for superior service and timely delivery benchmarks."
    }
];

const AuthoritySection = () => {
    const ratingSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "name": "Supreme Universal",
        "description": "Ultra-luxury real estate developer with 40+ years legacy and 70+ delivered projects across Mumbai and Pune.",
        "url": "https://www.supreme-universal.in/",
        "image": "https://www.supremeuniversal.com/front/img/logo.svg",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "2450",
            "reviewCount": "1870"
        },
        "hasMap": "https://www.google.com/maps/place/Supreme+Rivana/@18.6379338,73.74336,879m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb154a1af8d5:0xde1ba7d3dc6ba2d6!8m2!3d18.6379338!4d73.74336!16s%2Fg%2F11n9ckw71s",
        "sameAs": [
            "https://maps.google.com/?cid=16004655655787471574"
        ],
        "award": [
            "Realty Plus Excellence Award 2023",
            "Property Guru Asia Awards",
            "CREDAI Golden Pillar Award",
            "Ultra Luxury Developer Award"
        ]
    };

    return (
        <section className="py-24 bg-supreme-black text-white overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-4 mb-6"
                    >
                        <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                            Archives of Excellence
                        </span>
                        <span className="w-8 h-[1px] bg-supreme-gold"></span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight"
                    >
                        A Legacy Built on <br />
                        <span className="italic text-supreme-gold font-light">Unmatched Trust</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="p-10 border border-white/5 bg-white/5 backdrop-blur-sm hover:border-supreme-gold/30 transition-all duration-500 group"
                        >
                            <div className="text-supreme-gold mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-supreme-gold transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 font-sans font-light leading-loose text-sm">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Google Verified Review & Rating Badge */}
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white/5 border border-supreme-gold/30 px-6 py-4 rounded-xl backdrop-blur-md">
                        <div className="flex items-center gap-1.5 text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-white">4.9 / 5 Rating</span>
                        <span className="text-white/40">•</span>
                        <span className="text-xs text-white/70 font-light">Verified on Google Reviews</span>
                        <a
                            href="https://search.google.com/local/writereview?placeid=ChIJ1fgaShW7wjsR1qJr3NOnG94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 px-3 py-1.5 bg-supreme-gold text-supreme-black text-[10px] font-bold uppercase tracking-wider hover:bg-white transition-colors rounded"
                        >
                            Rate Us on Google &rarr;
                        </a>
                    </div>
                </div>

                {/* Awards Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-20 pt-10 border-t border-white/10 flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                >
                    <span className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Realty Plus Excellence 2023</span>
                    <span className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Property Guru Asia Awards</span>
                    <span className="text-xs font-sans tracking-[0.3em] uppercase font-bold">CREDAI Golden Pillar</span>
                    <span className="text-xs font-sans tracking-[0.3em] uppercase font-bold">Ultra Luxury Award</span>
                </motion.div>
            </div>
        </section>
    );
};

export default AuthoritySection;
