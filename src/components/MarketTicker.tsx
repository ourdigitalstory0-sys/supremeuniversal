import { motion } from 'framer-motion';
import { TrendingUp, Activity, Bell, MapPin } from 'lucide-react';

const tickerItems = [
    { icon: <TrendingUp className="w-3 h-3" />, text: "3 units booked in the last 24 hours at Supreme Riverside" },
    { icon: <Activity className="w-3 h-3" />, text: "Punawale property appreciation up 4.2% in Q1 2026" },
    { icon: <Bell className="w-3 h-3" />, text: "Metro Line 3 testing reaches 85% completion in Hinjewadi" },
    { icon: <MapPin className="w-3 h-3" />, text: "Exclusive 6-residences-per-floor inventory nearing 75% occupancy" },
    { icon: <TrendingUp className="w-3 h-3" />, text: "Phoenix Mall of the Millennium footfall exceeds 1.5M monthly" },
    { icon: <Activity className="w-3 h-3" />, text: "Supreme Universal marks 40+ years of delivery excellence" }
];

const MarketTicker = () => {
    return (
        <div className="bg-supreme-black border-b border-white/5 py-3 overflow-hidden relative z-50">
            <motion.div
                className="flex whitespace-nowrap"
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30,
                        ease: "linear"
                    }
                }}
            >
                {/* Duplicate items for seamless loop */}
                {[...tickerItems, ...tickerItems].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 px-10 border-r border-white/10">
                        <span className="text-supreme-gold">{item.icon}</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-sans font-medium text-white/70">
                            {item.text}
                        </span>
                    </div>
                ))}
            </motion.div>

            {/* Gradient overlays for fade out/in */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-supreme-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-supreme-black to-transparent z-10"></div>
        </div>
    );
};

export default MarketTicker;
