
const FloatingRERA = () => {
    return (
        <div className="fixed top-24 right-0 z-[100] bg-white p-3 rounded-l-2xl shadow-2xl border-y border-l border-supreme-gold/30 flex flex-col items-center gap-2 transform transition-transform hover:-translate-x-2 duration-300">
            <div className="bg-white p-1 rounded-lg shadow-inner">
                <img 
                    src="/rivana-rera-qr.png" 
                    alt="MahaRERA QR Code - Supreme Rivana" 
                    className="w-20 h-20 md:w-24 md:h-24 object-contain"
                />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-extrabold text-supreme-gold uppercase tracking-tighter leading-none mb-1">MahaRERA Reg.</span>
                <span className="text-[11px] font-bold text-gray-900 tracking-tighter leading-none">PM1261012502656</span>
            </div>
        </div>
    );
};

export default FloatingRERA;
