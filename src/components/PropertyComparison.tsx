import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioProjects';
import { Check, Info, ArrowRight, Star } from 'lucide-react';

const PropertyComparison = () => {
    const [selectedProjects, setSelectedProjects] = useState<string[]>(
        portfolioProjects.slice(0, 3).map(p => p.id)
    );
    const [viewMode, setViewMode] = useState<'all' | 'highlights'>('all');

    const toggleProject = (id: string) => {
        if (selectedProjects.includes(id)) {
            if (selectedProjects.length > 2) {
                setSelectedProjects(selectedProjects.filter(p => p !== id));
            }
        } else {
            if (selectedProjects.length < 4) {
                setSelectedProjects([...selectedProjects, id]);
            }
        }
    };

    const comparedData = portfolioProjects.filter(p => selectedProjects.includes(p.id));

    return (
        <section id="comparison" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ItemList",
                    "name": "Supreme Rivana Punawale vs Puneville vs ANP Autograph — Best Luxury Flats in Punawale 2026",
                    "description": "Compare Supreme Rivana with top projects like ANP Autograph, Puneville, Legacy Milestone, and 24K Living. Discover the best luxury flats in Punawale for investment.",
                    "numberOfItems": portfolioProjects.length,
                    "itemListElement": portfolioProjects.map((p, i) => ({
                        "@type": "ListItem",
                        "position": i + 1,
                        "name": p.name,
                        "url": `https://supreme-universal.in/projects/${p.id}`,
                        "description": `${p.type} at ${p.location} — ${p.comparisonMetrics.usp}`
                    }))
                })
            }} />
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-supreme-black leading-tight mb-6">
                            The <span className="italic font-light text-supreme-gold">Best Luxury Flats</span> in Punawale
                        </h2>
                        <p className="text-gray-500 font-sans text-lg max-w-2xl mx-auto uppercase tracking-widest font-light">
                            Compare Supreme Rivana Punawale with <strong>projects near ANP Autograph</strong>, <strong>Puneville</strong>, and <strong>Legacy Milestone</strong>.
                        </p>
                    </motion.div>
                </div>

                {/* Project Selector Chips */}
                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {portfolioProjects.map((project) => (
                        <button
                            key={project.id}
                            onClick={() => toggleProject(project.id)}
                            className={`px-6 py-3 text-[10px] uppercase tracking-[0.2em] font-bold border transition-all duration-500 ${selectedProjects.includes(project.id)
                                ? 'bg-supreme-black text-white border-supreme-black'
                                : 'bg-transparent text-gray-400 border-gray-200 hover:border-supreme-gold hover:text-supreme-gold'
                                }`}
                        >
                            {project.name}
                        </button>
                    ))}
                </div>

                {/* View Toggles */}
                <div className="flex justify-end mb-8">
                    <div className="inline-flex bg-gray-50 p-1 border border-gray-100">
                        <button
                            onClick={() => setViewMode('all')}
                            className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${viewMode === 'all' ? 'bg-white shadow-sm text-supreme-gold' : 'text-gray-400'}`}
                        >
                            Complete Specs
                        </button>
                        <button
                            onClick={() => setViewMode('highlights')}
                            className={`px-4 py-2 text-[10px] uppercase tracking-widest font-bold transition-all ${viewMode === 'highlights' ? 'bg-white shadow-sm text-supreme-gold' : 'text-gray-400'}`}
                        >
                            Key Highlights
                        </button>
                    </div>
                </div>

                {/* Comparison Grid */}
                <div className="overflow-x-auto pb-8">
                    <div className={`grid gap-4 min-w-[800px]`} style={{ gridTemplateColumns: `repeat(${comparedData.length}, 1fr)` }}>
                        {comparedData.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="bg-gray-50/50 border border-gray-100 p-8 flex flex-col h-full hover:border-supreme-gold transition-colors duration-500"
                            >
                                <div className="mb-8">
                                    <h3 className="text-2xl font-serif text-supreme-black mb-1">{project.name}</h3>
                                    <div className="text-supreme-gold text-[10px] uppercase tracking-[0.2em] font-bold">{project.location}</div>
                                </div>

                                <div className="space-y-8 flex-grow">
                                    <div className="space-y-2">
                                        <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold flex items-center gap-2">
                                            <Star className="w-3 h-3 text-supreme-gold" /> Core USP
                                        </div>
                                        <p className="text-supreme-black font-sans text-sm font-medium">{project.comparisonMetrics.usp}</p>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t border-gray-200/50">
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-400 font-medium">Configuration</span>
                                            <span className="text-supreme-black font-bold uppercase">{project.comparisonMetrics.configuration}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-400 font-medium">Possession</span>
                                            <span className="text-supreme-black font-bold uppercase">{project.comparisonMetrics.possession}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-gray-400 font-medium italic">Transit Index</span>
                                            <span className="text-supreme-gold font-serif text-lg">{project.comparisonMetrics.connectivityScore}/10</span>
                                        </div>
                                    </div>

                                    <AnimatePresence mode="wait">
                                        {viewMode === 'highlights' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="space-y-3 py-4"
                                            >
                                                {project.highlights.slice(0, 3).map((h, i) => (
                                                    <div key={i} className="flex gap-3 text-xs text-gray-500 leading-relaxed">
                                                        <Check className="w-4 h-4 text-supreme-gold flex-shrink-0" />
                                                        {h}
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <a
                                    href={`/projects/${project.id}`}
                                    className="mt-8 flex items-center justify-between w-full bg-supreme-black text-white px-6 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-supreme-gold transition-all duration-500 group"
                                >
                                    Explore Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-supreme-gold/5 border border-supreme-gold/20 text-supreme-gold text-[10px] uppercase tracking-widest font-bold">
                        <Info className="w-4 h-4" />
                        Projections are based on 2026 micro-market infrastructure data
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PropertyComparison;
