import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

interface FloorPlansProps {
    onEnquire?: () => void;
}

const FloorPlans = ({ onEnquire }: FloorPlansProps) => {
    const [activeTab, setActiveTab] = useState('2BHK-Premier');

    const floorPlanSchema = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "name": activeTab === 'Master' ? "Supreme Rivana Punawale Master Layout" : `${activeTab.replace('-', ' ')} Floor Plan - Supreme Rivana Punawale`,
        "description": activeTab === 'Master'
            ? "Master layout plan for Supreme Rivana Punawale, a 15-acre premium township in Punawale, Pune."
            : `Architectural floor plan for a luxury ${activeTab.replace('-', ' ')} apartment at Supreme Rivana Punawale, Punawale.`,
        "contentUrl": activeTab === 'Master'
            ? "/assets/floorplans/master-plan.jpg"
            : activeTab === '2BHK-Premier'
                ? "/assets/floorplans/2bhk-premier.jpg"
                : activeTab === '2BHK-Grand'
                    ? "/assets/floorplans/2bhk-grand.jpg"
                    : "/assets/floorplans/3bhk-regal.jpg",
        "license": "https://www.supreme-universal.in/legal",
        "acquireLicensePage": "https://www.supreme-universal.in/contact",
        "creator": {
            "@type": "Organization",
            "name": "Supreme Universal"
        }
    };

    const tabs = [
        { id: '2BHK-Premier', label: '2 BHK Premier', area: '746', img: '/assets/floorplans/2bhk-premier.jpg' },
        { id: '2BHK-Grand', label: '2 BHK Grand', area: '786', img: '/assets/floorplans/2bhk-grand.jpg' },
        { id: '3BHK-Regal', label: '3 BHK Regal', area: '1100', img: '/assets/floorplans/3bhk-regal.jpg' },
        { id: 'Master', label: 'Master Layout', area: '', img: '/assets/floorplans/master-plan.jpg' }
    ];

    const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];

    return (
        <section id="floor-plans" className="py-24 bg-white">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(floorPlanSchema)}
                </script>
            </Helmet>
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Floor Plans & Layouts</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                        Thoughtfully designed spaces that maximize natural light and cross ventilation.
                    </p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="flex space-x-4 md:space-x-8 border-b border-gray-200 overflow-x-auto pb-1 mt-6 hide-scrollbar justify-start md:justify-center px-4 w-full">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-4 text-sm md:text-lg font-medium transition-all relative flex-shrink-0 ${activeTab === tab.id
                                    ? 'text-supreme-black'
                                    : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-0.5 bg-supreme-gold" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
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
                                    <div className="aspect-[4/3] bg-gray-50 border border-gray-100 overflow-hidden shadow-2xl rounded-2xl group cursor-zoom-in">
                                        <img
                                            src={currentTab.img}
                                            alt={
                                                activeTab === 'Master'
                                                    ? "Supreme Rivana Punawale Master Layout Plan - 15 acre IGBC township with 31-storey towers and 40+ amenities"
                                                    : `Supreme Rivana Punawale ${currentTab.label} Floor Plan Layout - Carpet Area ${currentTab.area} sqft with river view and cross ventilation`
                                            }
                                            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                </div>

                                <div className="w-full md:w-1/3 space-y-8">
                                    <div>
                                        <h3 className="text-3xl font-serif text-gray-900 mb-2">
                                            {activeTab === 'Master' ? 'The Visionary Master Plan' : currentTab.label}
                                        </h3>
                                        <p className="text-gray-500 font-light">
                                            {activeTab === 'Master'
                                                ? 'A carefully designed waterfront community maximizing nature and luxury.'
                                                : `Perfect for families looking for luxury and comfort in ${currentTab.label}.`}
                                        </p>
                                    </div>

                                    {activeTab === 'Master' ? (
                                        <div className="space-y-4 pt-4 border-t border-gray-100">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Privacy Benchmark</span>
                                                <span className="font-serif text-xl text-supreme-black">6 Units per Floor</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Amenity Zone</span>
                                                <span className="font-serif text-xl text-supreme-black">40+ Worlds</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Towers</span>
                                                <span className="font-serif text-xl text-supreme-black">31 Storeys</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Land Area</span>
                                                <span className="font-serif text-xl text-supreme-black">15 Lush Acres</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-4 pt-4 border-t border-gray-100">
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Carpet Area</span>
                                                <span className="font-serif text-xl text-supreme-black">
                                                    {currentTab.area} <span className="text-sm text-gray-400">Sq.ft</span>
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Privacy Factor</span>
                                                <span className="font-serif text-xl text-supreme-black">Exclusive 6 Per Floor</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">View Preference</span>
                                                <span className="font-serif text-xl text-supreme-gold italic">Riverside / Garden</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-gray-500 uppercase text-xs tracking-wider">Bedrooms</span>
                                                <span className="font-serif text-xl text-supreme-black">{activeTab.startsWith('2BHK') ? '2' : '3'}</span>
                                            </div>
                                        </div>
                                    )}

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
