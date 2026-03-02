import { motion } from 'framer-motion';
import { MapPin, Calendar, Building2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const otherProjects = [
    {
        name: "Supreme Towers",
        location: "Mundhwa, Pune East",
        type: "2, 3 & 4 BHK Apartments",
        status: "Possession June 2027",
        desc: "High-rise luxury living in the rising heart of East Pune.",
        image: "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg", // Placeholder using existing high-quality image
        link: "/projects/supreme-towers"
    },
    {
        name: "Supreme Villagio",
        location: "Somatane, Pune North",
        type: "Luxury Villas & Row Houses",
        status: "Phase 2 Launched",
        desc: "A sprawling villa township inspired by European aesthetics.",
        image: "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
        link: "/projects/supreme-villagio"
    },
    {
        name: "Supreme Estia",
        location: "Baner, Pune West",
        type: "2, 3 & 4 BHK Premium Flats",
        status: "Possession Dec 2025",
        desc: "Unmatched luxury in Pune's most preferred residential hub.",
        image: "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
        link: "/projects/supreme-estia"
    },
    {
        name: "Supreme Wakad",
        location: "Wakad, Pune West",
        type: "3 & 4 BHK Luxury Residences",
        status: "Upcoming New Launch",
        desc: "The next benchmark of urban luxury in Pune's fastest growing hub.",
        image: "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
        link: "/"
    }
];

const ProjectShowcase = () => {
    return (
        <section id="portfolio" className="py-24 md:py-32 bg-white relative overflow-hidden">
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
                                The Pune Portfolio
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-supreme-black leading-tight">
                            Explore <span className="italic font-light text-supreme-gold">Supreme Legacy</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md pb-2"
                    >
                        <p className="text-gray-500 font-sans font-light text-base md:text-lg leading-relaxed">
                            Discover the wider ecosystem of Supreme Universal excellence across Pune's most strategic growth corridors.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative overflow-hidden bg-gray-50 border border-gray-100 flex flex-col md:flex-row h-full hover:border-supreme-gold/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
                        >
                            <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-supreme-black/20 group-hover:bg-supreme-black/0 transition-colors duration-500"></div>
                            </div>

                            <div className="md:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <MapPin className="w-3 h-3 text-supreme-gold" />
                                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-supreme-gold font-semibold">{project.location}</span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-serif text-supreme-black mb-4 group-hover:text-supreme-gold transition-colors">{project.name}</h3>
                                    <p className="text-gray-400 text-sm font-light mb-6 line-clamp-2">{project.desc}</p>

                                    <div className="space-y-3 mb-8">
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <Building2 className="w-4 h-4 text-supreme-gold/50" />
                                            <span>{project.type}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs text-gray-500">
                                            <Calendar className="w-4 h-4 text-supreme-gold/50" />
                                            <span className="font-semibold text-supreme-black">{project.status}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                    <Link
                                        to={project.link}
                                        className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-supreme-black hover:text-supreme-gold transition-colors"
                                    >
                                        Explore Scope <ChevronRight className="w-3 h-3" />
                                    </Link>
                                    <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-supreme-gold group-hover:translate-x-2 transition-all" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 bg-supreme-black flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-supreme-gold"
                >
                    <div className="text-left">
                        <h4 className="text-white text-2xl md:text-3xl font-serif mb-2 text-white">Supreme Universal Leadership</h4>
                        <p className="text-white/40 text-sm max-w-md">Dominating Pune real estate with 40+ years of legacy and landmarks across all prime corridors.</p>
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="text-center">
                            <div className="text-white text-4xl font-serif">70+</div>
                            <div className="text-white/20 text-[10px] uppercase tracking-widest mt-2">Projects Delivered</div>
                        </div>
                        <div className="text-center border-l border-white/10 pl-12">
                            <div className="text-supreme-gold text-4xl font-serif italic font-light">#1</div>
                            <div className="text-white/20 text-[10px] uppercase tracking-widest mt-2">Luxury Ranking</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectShowcase;
