
const FloatingRERA = () => {
    // Stable version string for cache busting on deployment
    const version = "1.0.1";
    
    return (
        <div className="fixed top-24 right-0 z-[9999] bg-white p-2 rounded-l-xl shadow-[0_0_15px_rgba(0,0,0,0.12)] border-[1.5px] border-r-0 border-supreme-gold flex flex-col items-center gap-1.5 transform transition-all hover:-translate-x-0.5 duration-300 group">
            <div className="bg-white p-0.5 rounded-md shadow-inner group-hover:scale-105 transition-transform">
                <img 
                    src={`/rivana-rera-qr.png?v=${version}`} 
                    alt="MahaRERA QR Code - Supreme Rivana" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[7px] font-extrabold text-supreme-gold uppercase tracking-widest leading-none mb-0.5">MahaRERA Reg.</span>
                <span className="text-[9px] font-black text-gray-900 tracking-tighter leading-none border-b-[1px] border-supreme-gold pb-0.5">PM1261012502656</span>
            </div>
        </div>
    );
};

export default FloatingRERA;
