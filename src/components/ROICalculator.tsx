import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Download, CheckCircle2 } from 'lucide-react';
import { portfolioProjects } from '../data/portfolioProjects';

const ROICalculator = ({ onEnquire }: { onEnquire: () => void }) => {
    const [selectedProjectId, setSelectedProjectId] = useState(portfolioProjects[0].id);
    const [investment, setInvestment] = useState(90); // in Lakhs
    const [years, setYears] = useState(3);
    const [estimatedValue, setEstimatedValue] = useState(0);

    const selectedProject = portfolioProjects.find(p => p.id === selectedProjectId) || portfolioProjects[0];
    const appreciationRate = 12; // Base rate
    const infraBoost = (selectedProject.appreciationMultiplier - 1) * 100;

    useEffect(() => {
        const totalRate = appreciationRate + infraBoost;
        const finalValue = investment * Math.pow(1 + totalRate / 100, years);
        setEstimatedValue(parseFloat(finalValue.toFixed(2)));
    }, [investment, years, selectedProjectId]);

    return (
        <section id="roi-calculator" className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                Investment Analytics
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-supreme-black leading-tight mb-8">
                            Projected Growth <span className="italic font-light text-supreme-gold">Calculator</span>
                        </h2>

                        {/* Project Sector Selector */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {portfolioProjects.map(p => (
                                <button
                                    key={p.id}
                                    onClick={() => setSelectedProjectId(p.id)}
                                    className={`px-4 py-2 text-[10px] uppercase font-bold tracking-widest border transition-all ${selectedProjectId === p.id
                                        ? 'bg-supreme-gold border-supreme-gold text-white'
                                        : 'border-gray-200 text-gray-400 hover:border-supreme-gold hover:text-supreme-gold'
                                        }`}
                                >
                                    {p.name.split(' ')[1] || p.name}
                                </button>
                            ))}
                        </div>

                        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8 max-w-xl">
                            Analyzing <strong>{selectedProject.location}</strong> growth metrics.
                            Infrastructure boost of <span className="text-supreme-gold font-bold">{infraBoost.toFixed(0)}%</span> applied based on 2026 markers.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="bg-gray-50 p-6 md:p-8 border border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-sm font-semibold uppercase tracking-wider text-supreme-black">Initial Investment (₹ Lakhs)</label>
                                    <span className="text-supreme-gold font-serif text-2xl">₹ {investment} L</span>
                                </div>
                                <input
                                    type="range"
                                    min="90"
                                    max="500"
                                    value={investment}
                                    onChange={(e) => setInvestment(parseInt(e.target.value))}
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-supreme-gold"
                                    aria-label="Initial investment amount in Lakhs"
                                />
                            </div>

                            <div className="bg-gray-50 p-6 md:p-8 border border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <label className="text-sm font-semibold uppercase tracking-wider text-supreme-black">Holding Period (Years)</label>
                                    <span className="text-supreme-gold font-serif text-2xl">{years} Years</span>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={years}
                                    onChange={(e) => setYears(parseInt(e.target.value))}
                                    className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-supreme-gold"
                                    aria-label="Investment holding period in years"
                                />
                            </div>
                        </div>

                        <button
                            onClick={onEnquire}
                            className="hidden md:flex items-center gap-4 group"
                        >
                            <span className="bg-supreme-black text-white px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500 group-hover:bg-supreme-gold group-hover:px-10">
                                Get Detailed ROI Report
                            </span>
                            <div className="w-12 h-12 rounded-full border border-supreme-black/10 flex items-center justify-center group-hover:border-supreme-gold transition-colors duration-500">
                                <Download className="w-4 h-4 text-supreme-black group-hover:text-supreme-gold transition-colors duration-500" />
                            </div>
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-supreme-black p-10 md:p-16 text-center relative"
                    >
                        <div className="absolute top-0 right-0 p-8">
                            <TrendingUp className="w-12 h-12 text-supreme-gold/20" />
                        </div>

                        <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Estimated {selectedProject.name} Value</h4>
                        <div className="text-5xl md:text-7xl lg:text-8xl font-serif text-supreme-gold mb-6 tracking-tighter">
                            ₹ {estimatedValue}L*
                        </div>

                        <div className="h-[1px] w-24 bg-supreme-gold/30 mx-auto mb-8"></div>

                        <div className="flex flex-col gap-4 mb-10">
                            <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
                                <CheckCircle2 className="w-4 h-4 text-supreme-gold" />
                                <span>{(appreciationRate + infraBoost).toFixed(0)}% Annual Compound Growth</span>
                            </div>
                            <p className="text-white/60 font-sans text-xs italic">
                                Optimized for {selectedProject.location} markers.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 border border-white/5">
                                <div className="text-supreme-gold font-serif text-xl mb-1">+₹ {(estimatedValue - investment).toFixed(1)}L</div>
                                <div className="text-white/40 text-[10px] uppercase tracking-widest">Net Appreciation</div>
                            </div>
                            <div className="bg-white/5 p-4 border border-white/5">
                                <div className="text-supreme-gold font-serif text-xl mb-1">+{(estimatedValue / investment * 100 - 100).toFixed(0)}%</div>
                                <div className="text-white/40 text-[10px] uppercase tracking-widest">Total Yield</div>
                            </div>
                        </div>

                        <p className="text-white/20 text-[10px] mt-10 italic">
                            *Projections based on 2026-2030 infrastructure roadmap.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
