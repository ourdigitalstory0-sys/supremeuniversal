import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloorPlansProps {
    onEnquire?: () => void;
}

const FloorPlans = ({ onEnquire }: FloorPlansProps) => {
    const [activeTab, setActiveTab] = useState('2BHK');

    return (
        <section id="floor-plans" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Floor Plans & Layouts</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                        Thoughtfully designed spaces that maximize natural light and cross ventilation.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="flex space-x-8 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('2BHK')}
                            className={`pb-4 text-lg font-medium transition-all relative ${activeTab === '2BHK'
                                ? 'text-supreme-black'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            2 BHK Luxury
                            {activeTab === '2BHK' && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-supreme-gold" />
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('3BHK')}
                            className={`pb-4 text-lg font-medium transition-all relative ${activeTab === '3BHK'
                                ? 'text-supreme-black'
                                : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            3 BHK Premium
                            {activeTab === '3BHK' && (
                                <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-supreme-gold" />
                            )}
                        </button>
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white"
                        >
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="w-full md:w-2/3">
                                    <div className="aspect-[4/3] bg-gray-50 border border-gray-100 overflow-hidden min-h-[400px]">
                                        <img
                                            src={activeTab === '2BHK'
                                                ? "https://cdn.supremeuniversal.com/media/1aejSz_FXHCOKProjectListing23min.jpg"
                                                : "https://cdn.supremeuniversal.com/media/t4mf35_WtizuRsupremeelysiamin.jpg"}
                                            alt={`${activeTab} Floor Plan`}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-serif text-gray-900 mb-2">
                                            {activeTab === '2BHK' ? 'The Classic Residence' : 'The Grand Residence'}
                                        </h3>
                                        <p className="text-gray-500 font-light">
                                            Perfect for small families looking for luxury and comfort.
                                        </p>
                                    </div>

                                    <div className="space-y-4 pt-4 border-t border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 uppercase text-xs tracking-wider">Carpet Area</span>
                                            <span className="font-serif text-xl text-supreme-black">
                                                {activeTab === '2BHK' ? '750 - 850' : '1050 - 1150'} <span className="text-sm text-gray-400">Sq.ft</span>
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 uppercase text-xs tracking-wider">Bedrooms</span>
                                            <span className="font-serif text-xl text-supreme-black">{activeTab === '2BHK' ? '2' : '3'}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 uppercase text-xs tracking-wider">Bathrooms</span>
                                            <span className="font-serif text-xl text-supreme-black">{activeTab === '2BHK' ? '2' : '3'}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-500 uppercase text-xs tracking-wider">Balconies</span>
                                            <span className="font-serif text-xl text-supreme-black">{activeTab === '2BHK' ? '2' : '3'}</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onEnquire}
                                        className="w-full py-4 border border-supreme-black text-supreme-black hover:bg-supreme-black hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
                                    >
                                        Download Master Brochure
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default FloorPlans;
