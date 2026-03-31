
const FloatingRERA = () => {
    // Stable version string for cache busting on deployment
    const version = "1.0.1";
    
    return (
        <div className="fixed top-24 right-0 z-[9999] bg-white p-3 rounded-l-2xl shadow-[0_0_20px_rgba(0,0,0,0.15)] border-2 border-r-0 border-supreme-gold flex flex-col items-center gap-2 transform transition-all hover:-translate-x-1 duration-300 group">
            <div className="bg-white p-1 rounded-lg shadow-inner group-hover:scale-105 transition-transform">
                <img 
                    src={`/rivana-rera-qr.png?v=${version}`} 
                    alt="MahaRERA QR Code - Supreme Rivana" 
                    className="w-20 h-20 md:w-28 md:h-28 object-contain"
                />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-extrabold text-supreme-gold uppercase tracking-widest leading-none mb-1">MahaRERA Reg.</span>
                <span className="text-[12px] font-black text-gray-900 tracking-tighter leading-none border-b border-supreme-gold pb-0.5">PM1261012502656</span>
            </div>
        </div>
    );
};

export default FloatingRERA;
