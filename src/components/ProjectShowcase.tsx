import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioProjects } from '../data/portfolioProjects';

const ProjectShowcase = () => {
    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Supreme Universal Pune Project Portfolio",
        "description": "Explore Supreme Universal's luxury real estate portfolio across Pune's prime corridors.",
        "numberOfItems": portfolioProjects.length,
        "itemListElement": portfolioProjects.map((project, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": project.name,
            "url": `https://www.supreme-universal.in/projects/${project.id}`,
            "image": project.image.startsWith('http') ? project.image : `https://www.supreme-universal.in${project.image}`
        }))
    };

    // Split projects by strategic corridors
    const puneWestProjects = portfolioProjects.filter(p => p.location.includes('Baner') || p.location.includes('Wakad') || p.location.includes('Punawale'));
    const otherProjects = portfolioProjects.filter(p => !(p.location.includes('Baner') || p.location.includes('Wakad') || p.location.includes('Punawale')));

    return (
        <section id="portfolio" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
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
                            Discover the wider ecosystem of Supreme Universal excellence. With a massive stronghold in the Pune West corridor, we redefine luxury in Baner, Wakad, and now Punawale.
                        </p>
                    </motion.div>
                </div>

                {/* Pune West Dominance Section */}
                <div className="mb-12">
                    <h3 className="text-xl md:text-2xl font-serif text-supreme-black mb-6 border-l-4 border-supreme-gold pl-4">Pune West Dominance</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {puneWestProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative overflow-hidden bg-gray-50 border border-gray-100 flex flex-col h-full hover:border-supreme-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl"
                            >
                                <div className="relative h-48 md:h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} - ${project.type} in ${project.location}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-supreme-black/80 backdrop-blur-md text-supreme-gold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-semibold border border-supreme-gold/30">
                                        {project.status.includes('Completed') || project.status.includes('Ready') ? 'Delivered' : 'Upcoming'}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-supreme-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                </div>

                                <div className="p-6 lg:p-8 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin className="w-3 h-3 text-supreme-gold" />
                                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-supreme-gold font-semibold">{project.location}</span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-serif text-supreme-black mb-3 group-hover:text-supreme-gold transition-colors">{project.name}</h3>
                                        <p className="text-gray-500 text-xs font-light mb-6 line-clamp-2">{project.description}</p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-supreme-black hover:text-supreme-gold transition-colors"
                                        >
                                            Explore Scope <ChevronRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Other Strategic Locations */}
                <div className="mb-8">
                    <h3 className="text-xl md:text-2xl font-serif text-supreme-black mb-6 border-l-4 border-supreme-gold pl-4 mt-16 mt-16 border-gray-200">Other Strategic Locations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {otherProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative overflow-hidden bg-gray-50 border border-gray-100 flex flex-col h-full hover:border-supreme-gold/30 transition-all duration-500 shadow-sm hover:shadow-xl"
                            >
                                <div className="relative h-48 md:h-56 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`${project.name} - ${project.type} in ${project.location}`}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-supreme-black/80 backdrop-blur-md text-supreme-gold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-semibold border border-supreme-gold/30">
                                        {project.status.includes('Completed') || project.status.includes('Ready') ? 'Delivered' : 'Upcoming'}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-supreme-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                                </div>

                                <div className="p-6 lg:p-8 flex flex-col flex-grow justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-3">
                                            <MapPin className="w-3 h-3 text-supreme-gold" />
                                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-supreme-gold font-semibold">{project.location}</span>
                                        </div>
                                        <h3 className="text-xl lg:text-2xl font-serif text-supreme-black mb-3 group-hover:text-supreme-gold transition-colors">{project.name}</h3>
                                        <p className="text-gray-500 text-xs font-light mb-6 line-clamp-2">{project.description}</p>
                                    </div>

                                    <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-auto">
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-supreme-black hover:text-supreme-gold transition-colors"
                                        >
                                            Explore Scope <ChevronRight className="w-3 h-3" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
