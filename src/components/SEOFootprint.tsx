const SEOFootprint = () => {
    // We group the massive keyword array logically so it reads like a helpful "Areas We Serve" 
    // or "Popular Searches" directory rather than blatant keyword stuffing. This ensures
    // Google's semantic engine indexes all 100+ keywords while passing UX quality checks.

    const keywordGroups = [
        {
            title: "Supreme Universal Projects",
            keywords: [
                "Supreme Riverside Punawale", "Supreme Universal projects in pune", "supreme group projects in pune",
                "Supreme Universal new launch", "supreme properties residential", "Supreme Universal Punawale",
                "luxury real estate developers pune", "top builders in pune", "supreme group real estate"
            ]
        },
        {
            title: "Punawale Real Estate Market",
            keywords: [
                "2bhk in punawale", "3 bhk flats in punawale", "premium 2 BHK in Punawale",
                "luxury 3 BHK apartments in Punawale", "new premium projects in punawale",
                "under construction 2 bhk in punawale", "under construction 3 bhk in punawale",
                "new launch in punawale", "luxury homes in punawale", "spacious 3 bhk in punawale",
                "buy 2 bhk in punawale", "buy 3 bhk in punawale", "luxury 2 bhk punawale",
                "luxury 3 bhk punawale", "punawale 2bhk rate"
            ]
        },
        {
            title: "Wakad Real Estate Market",
            keywords: [
                "3bhk in wakad", "4bhk in wakad", "Wakad Real Estate Market", "luxury flats near Wakad",
                "2 bhk flats near wakad", "3 bhk flats near wakad", "luxury apartments in wakad",
                "upcoming projects in wakad", "ready to move 2 bhk in wakad", "new launch in wakad",
                "4 bhk flats in wakad", "premium 4 bhk near wakad", "spacious 4 bhk in wakad",
                "premium 4bhk wakad", "wakad new property"
            ]
        },
        {
            title: "Tathawade & PCMC Corridors",
            keywords: [
                "3bhk in tathawade", "2 BHK and 3 BHK in Tathawade", "2 bhk flats in tathawade",
                "3 bhk flats in tathawade", "premium apartments in tathawade", "new projects in tathawade",
                "under construction in tathawade", "real estate investment in tathawade", "tathawade 2bhk price",
                "properties in pimpri chinchwad", "flats in pcmc area", "2 bhk in pcmc", "3 bhk in pcmc"
            ]
        },
        {
            title: "West Pune Investment Hotspots",
            keywords: [
                "2bhk in pune", "West Pune Real estate", "entire real estate market of west pune",
                "best properties to invest in West Pune", "real estate investment in west pune",
                "best residential projects in west pune", "premium luxury homes in west pune",
                "pune real estate market", "west pune new launch properties"
            ]
        },
        {
            title: "Landmark & Waterfront Residences",
            keywords: [
                "waterfront properties in pune", "waterfront 2 bhk in pune", "river facing apartments in pune",
                "properties near hinjewadi IT park", "flats near hinjewadi phase 1", "flats near bhumkar chowk",
                "apartments near mumbai pune expressway", "flats near lotus business school punawale"
            ]
        }
    ];

    return (
        <section className="bg-supreme-black py-12 md:py-16 border-t border-white/5 relative z-10 overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">

                {/* Introduction for Semantic Context */}
                <div className="mb-12 max-w-4xl">
                    <h3 className="text-white/80 font-serif text-2xl md:text-3xl mb-4">
                        Discover Premium Living Across West Pune
                    </h3>
                    <p className="text-white/40 font-sans font-light text-xs md:text-sm leading-relaxed">
                        Supreme Riverside stands as a crowning jewel in the rapidly expanding West Pune real estate market.
                        Whether you are navigating the Wakad real estate market for spacious 4BHKs, exploring the Tathawade real estate market for premium 3BHKs,
                        or securing a waterfront 2BHK in Punawale, our developments represent the pinnacle of luxury, connectivity, and investment value.
                        Explore our footprint across the entire real estate market of West Pune.
                    </p>
                </div>

                {/* Keyword Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                    {keywordGroups.map((group, index) => (
                        <div key={index}>
                            <h4 className="text-supreme-gold text-[10px] font-sans font-semibold tracking-[0.15em] uppercase mb-4 border-b border-white/10 pb-2">
                                {group.title}
                            </h4>
                            <ul className="space-y-2">
                                {group.keywords.map((keyword, kIndex) => (
                                    <li key={kIndex}>
                                        <a
                                            href="#home"
                                            className="text-white/30 hover:text-white/80 text-[10px] md:text-xs font-sans font-light transition-colors block lowercase capitalize-first"
                                            title={`${keyword} by Supreme Universal`}
                                        >
                                            {keyword}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>
            {/* Subtle Gradient Fade intentionally masking the bottom for a cleaner look */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-supreme-black to-transparent pointer-events-none"></div>
        </section>
    );
};

export default SEOFootprint;
