import { motion } from 'framer-motion';
import { MapPin, Train, Waypoints, Building2, CheckCircle2 } from 'lucide-react';

const ProximityIndex = () => {
    const markers = [
        {
            type: 'Infrastructure',
            name: 'Punawale Metro Underpass',
            dist: '400 meters',
            impact: 'High',
            icon: <Train className="w-5 h-5" />,
            desc: 'Direct link to Pune Metro Line 3 (Hinjewadi-Shivajinagar)'
        },
        {
            type: 'Connectivity',
            name: 'Mumbai-Pune Expressway',
            dist: '850 meters',
            impact: 'Critical',
            icon: <Waypoints className="w-5 h-5" />,
            desc: 'Seamless transit to Mumbai/Lonavala'
        },
        {
            type: 'Retail',
            name: 'Phoenix Mall of Millennium',
            dist: '4.8 km',
            impact: 'Lifestyle',
            icon: <Building2 className="w-5 h-5" />,
            desc: "Pune's largest luxury shopping destination"
        },
        {
            type: 'Employment',
            name: 'Hinjewadi IT Park Phase 1',
            dist: '15 mins',
            impact: 'Economy',
            icon: <MapPin className="w-5 h-5" />,
            desc: 'Core IT hub of Maharashtra'
        }
    ];

    return (
        <section id="proximity-index" className="py-24 md:py-32 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-serif text-supreme-black leading-tight mb-6">
                            2026 Core <span className="italic font-light text-supreme-gold">Proximity Index</span>
                        </h2>
                        <p className="text-gray-500 font-sans text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-wider font-light">
                            Analyzing the strategic advantage of West Punawale's epicenter.
                        </p>
                        <h3 className="sr-only">Infrastructure Proximity to Supreme Rivana Punawale — Metro, Expressway, IT Parks & Retail in West Pune 2026</h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {markers.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 border border-gray-100 group hover:border-supreme-gold transition-all duration-500 shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-supreme-gold group-hover:text-white transition-colors duration-500 text-supreme-gold">
                                {item.icon}
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] uppercase tracking-widest font-bold text-supreme-gold">{item.type}</span>
                                <span className="flex items-center gap-1 text-[10px] uppercase font-bold text-green-600">
                                    <CheckCircle2 className="w-3 h-3" /> Impact: {item.impact}
                                </span>
                            </div>
                            <h3 className="text-lg md:text-xl font-serif text-supreme-black mb-2">{item.name}</h3>
                            <div className="text-supreme-gold font-serif text-2xl mb-4">{item.dist}</div>
                            <p className="text-gray-400 text-xs leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-supreme-black p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b-4 border-supreme-gold"
                >
                    <div className="text-left">
                        <h4 className="text-white text-2xl md:text-3xl font-serif mb-2">Dominating the West Corridor</h4>
                        <p className="text-white/40 text-sm max-w-md">Our strategic location ensures Supreme Rivana remains the #1 choice for IT executives and luxury homebuyers.</p>
                    </div>
                    <div className="flex items-center gap-8">
                        <div className="text-center">
                            <div className="text-supreme-gold text-4xl font-serif leading-none">9.8/10</div>
                            <div className="text-white/20 text-[10px] uppercase tracking-widest mt-2">Locality Score</div>
                        </div>
                        <div className="text-center border-l border-white/10 pl-8">
                            <div className="text-supreme-gold text-4xl font-serif leading-none">2026</div>
                            <div className="text-white/20 text-[10px] uppercase tracking-widest mt-2">Peak Value Surge</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProximityIndex;
