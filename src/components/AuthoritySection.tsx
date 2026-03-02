import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, History } from 'lucide-react';

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
    return (
        <section className="py-24 bg-supreme-black text-white overflow-hidden">
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
