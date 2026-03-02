import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Download } from 'lucide-react';

const ROICalculator = ({ onEnquire }: { onEnquire: () => void }) => {
    const [investment, setInvestment] = useState(90); // in Lakhs
    const [years, setYears] = useState(3);
    const [appreciationRate] = useState(12); // Standard growth
    const [estimatedValue, setEstimatedValue] = useState(0);

    // Punawale-specific infrastructure boost (Metro + Ring Road)
    const infraBoost = 5; // Extra 5% for Punawale by 2026

    useEffect(() => {
        const totalRate = appreciationRate + infraBoost;
        const finalValue = investment * Math.pow(1 + totalRate / 100, years);
        setEstimatedValue(parseFloat(finalValue.toFixed(2)));
    }, [investment, years, appreciationRate]);

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
                        <p className="text-gray-600 font-sans text-lg leading-relaxed mb-8 max-w-xl">
                            With the **Pune Metro Line 3** and **Pune Ring Road** surges, Punawale properties are projected to outperform the city average. Use our tool to estimate your **Supreme Riverside ROI** by 2026-2028.
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

                        <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">Estimated Property Value</h4>
                        <div className="text-5xl md:text-7xl lg:text-8xl font-serif text-supreme-gold mb-6 tracking-tighter">
                            ₹ {estimatedValue}L*
                        </div>

                        <div className="h-[1px] w-24 bg-supreme-gold/30 mx-auto mb-8"></div>

                        <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed mb-10 max-w-sm mx-auto">
                            Including the <span className="text-supreme-gold font-bold">17% Annual Appreciation Surge</span> expected for luxury units in West Punawale.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 border border-white/5">
                                <div className="text-supreme-gold font-serif text-xl mb-1">+₹ {(estimatedValue - investment).toFixed(1)}L</div>
                                <div className="text-white/40 text-[10px] uppercase tracking-widest">Net Appreciation</div>
                            </div>
                            <div className="bg-white/5 p-4 border border-white/5">
                                <div className="text-supreme-gold font-serif text-xl mb-1">+{(estimatedValue / investment * 100 - 100).toFixed(0)}%</div>
                                <div className="text-white/40 text-[10px] uppercase tracking-widest">Growth Yield</div>
                            </div>
                        </div>

                        <p className="text-white/20 text-[10px] mt-10 italic">
                            *Projections based on 2026 infrastructure reports and current market trends.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ROICalculator;
