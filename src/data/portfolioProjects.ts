export interface PortfolioProjectType {
    id: string;
    name: string;
    location: string;
    fullLocation: string;
    type: string;
    status: string;
    tagline: string;
    description: string;
    highlights: string[];
    connectivity: { title: string; dist: string }[];
    amenities: { icon: string; title: string }[];
    specifications: { category: string; details: string[] }[];
    gallery: string[];
    seo: {
        title: string;
        description: string;
        keywords: string;
    };
    image: string;
    reraNumber: string;
    comparisonMetrics: {
        configuration: string;
        possession: string;
        usp: string;
        connectivityScore: number;
    };
    appreciationMultiplier: number; // For ROI Calculator
}

export const portfolioProjects: PortfolioProjectType[] = [
    {
        id: "supreme-towers",
        name: "Supreme Towers",
        location: "Mundhwa, Pune East",
        fullLocation: "Mundhwa Road, Near Magarpatta City, Pune East 411036",
        type: "2, 3 & 4 BHK Apartments",
        status: "Possession June 2027",
        tagline: "The Pinnacle of East Pune's Skyline",
        description: "Supreme Towers is a testament to architectural brilliance, rising in the heart of Mundhwa. Designed for the global citizen, these residences offer unparalleled proximity to Magarpatta, Amanora, and the EON IT Hub, making it the perfect choice for professionals seeking luxury and connectivity.",
        highlights: [
            "Ultra-luxury 24-storey towers with art-deco influence",
            "Panoramic views of the Mula-Mutha river and city skyline",
            "Proximity to Magarpatta & Amanora Park Town",
            "Executive-grade smart home features and digital locks",
            "Exclusive 6 residences per floor for maximum privacy",
            "Double-height grand entrance lobby with concierge service"
        ],
        connectivity: [
            { title: "Magarpatta City", dist: "10 mins" },
            { title: "EON IT Park Kharadi", dist: "15 mins" },
            { title: "Hadapsar Railway Station", dist: "8 mins" },
            { title: "Season's Mall", dist: "10 mins" },
            { title: "Kalyani Nagar", dist: "12 mins" },
            { title: "Pune Airport", dist: "25 mins" }
        ],
        amenities: [
            { icon: "Infinity", title: "Rooftop Infinity Pool" },
            { icon: "Dumbbell", title: "Elite Fitness Center" },
            { icon: "Music", title: "Amphitheatre" },
            { icon: "Coffee", title: "Sky Lounge" },
            { icon: "Gamepad2", title: "Indoor Games Zone" },
            { icon: "Users", title: "Co-working Space" },
            { icon: "Car", title: "Electric Vehicle Charging" },
            { icon: "Shield", title: "24/7 Multi-tier Security" }
        ],
        specifications: [
            { category: "Structure", details: ["Earthquake resistant RCC structure", "High-quality AAC block work"] },
            { category: "Flooring", details: ["Large size vitrified tiles in all rooms", "Anti-skid tiles in terraces and dry balconies"] },
            { category: "Windows", details: ["Anodized aluminium sliding windows", "Granite/Marble sills for all windows"] },
            { category: "Kitchen", details: ["Granite platform with stainless steel sink", "Provision for water purifier and chimney"] }
        ],
        gallery: [
            "/assets/projects/actual-towers.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
        ],
        seo: {
            title: "Supreme Towers Mundhwa | Luxury 3-6 BHK near Magarpatta 2026",
            description: "Experience the pinnacle of East Pune at Supreme Towers Mundhwa. Luxury 3, 4, 5 & 6 BHK residences with Sky Walk connectivity. Minutes from EON IT Park and Magarpatta South. Possession 2027.",
            keywords: "Supreme Towers Mundhwa, luxury apartments in Mundhwa, 3 BHK in Mundhwa Pune, upcoming projects in Mundhwa 2026, Supreme Universal Mundhwa, luxury flats near Magarpatta City, EON IT Park residential projects, Pune Eastern growth corridor"
        },
        image: "/assets/projects/actual-towers.jpg",
        reraNumber: "MahaRERA: P52100053868",
        comparisonMetrics: {
            configuration: "2, 3 & 4 BHK",
            possession: "June 2027",
            usp: "Riverside Skyline Legacy",
            connectivityScore: 9.6
        },
        appreciationMultiplier: 1.15
    },
    {
        id: "supreme-villagio",
        name: "Supreme Villagio",
        location: "Somatane, Pune North",
        fullLocation: "Somatane Phata, Near Mumbai-Pune Expressway, Pune North 410506",
        type: "Luxury Villas & Row Houses",
        status: "Phase 2 Launched",
        tagline: "European Village Life in North Pune",
        description: "Supreme Villagio brings Mediterranean luxury to Somatane. 15-acre gated villa township near Mumbai-Pune Expressway. Discover European charm with 2026 appreciation potential near the upcoming Ring Road.",
        highlights: [
            "Inspired by Mediterranean architecture and Italian streetscapes",
            "15+ acres of low-density development with 50% open space",
            "Direct access to Mumbai-Pune Expressway (5 min drive)",
            "Lush green vistas and private garden spaces for every villa",
            "Pet-friendly community with dedicated zones",
            "Mist cooling system across central walkways"
        ],
        connectivity: [
            { title: "Mumbai-Pune Expressway", dist: "5 mins" },
            { title: "Lonavala / Talegaon", dist: "20 mins" },
            { title: "Dehu Road Station", dist: "10 mins" },
            { title: "MCA Stadium Gahunje", dist: "12 mins" },
            { title: "Symbiosis Skill University", dist: "15 mins" },
            { title: "Hinjewadi IT Park", dist: "25 mins" }
        ],
        amenities: [
            { icon: "Trees", title: "Themed Gardens" },
            { icon: "Bike", title: "Jogging & Cycling Track" },
            { icon: "Tent", title: "Glamping Zones" },
            { icon: "Waves", title: "Leisure Pool" },
            { icon: "TableTennis", title: "Outdoor Sports Court" },
            { icon: "Wind", title: "Open Air Yoga Deck" },
            { icon: "Utensils", title: "BBQ Pavilions" },
            { icon: "Baby", title: "Toddler's Play Area" }
        ],
        specifications: [
            { category: "Villa Structure", details: ["Rammed earth and concrete hybrid architecture", "Double-height ceilings in living area"] },
            { category: "Interiors", details: ["Italian marble flooring in living/dining", "Engineered wooden flooring in master bedroom"] },
            { category: "External", details: ["Textured weatherproof external paint", "Handcrafted clay tile roofing"] },
            { category: "Sustainability", details: ["Solar water heating systems", "Organic waste converter"] }
        ],
        gallery: [
            "/assets/projects/actual-villagio.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Villagio Somatane | Mediterranean Villas & Row Houses Pune",
            description: "European style villa living at Supreme Villagio Somatane. Luxury row houses and villas near Mumbai-Pune Expressway. 5 mins from upcoming Ring Road connectivity.",
            keywords: "Supreme Villagio Somatane, luxury villas in Pune, row houses in Somatane, villas near Mumbai Pune Expressway, Supreme Universal Villagio, premium gated community Pune North, property near Somatane Phata, Pune Ring Road investment"
        },
        image: "/assets/projects/actual-villagio.jpg",
        reraNumber: "MahaRERA: P52100021655",
        comparisonMetrics: {
            configuration: "Villas & Row Houses",
            possession: "Phase 2 Live",
            usp: "Mediterranean Village Life",
            connectivityScore: 9.4
        },
        appreciationMultiplier: 1.25
    },
    {
        id: "supreme-estia",
        name: "Supreme Estia",
        location: "Baner, Pune West",
        fullLocation: "Near Baner-Balewadi High Street, Pune West 411045",
        type: "2, 3 & 4 BHK Premium Flats",
        status: "Possession Dec 2025",
        tagline: "Elegeance Reimagined in Baner",
        description: "Supreme Estia: The gold standard of Baner living. Platinum residences walking distance from Balewadi High Street and upcoming Metro Line 3 station. Move-in ready luxury in Pune's most elite corridor.",
        highlights: [
            "Platinum location in Baner-Balewadi residential hub",
            "Art-deco inspired architectural facade with glass railings",
            "Walking distance to Balewadi High Street's premium retail",
            "Exclusive community of 100+ discerning families",
            "Vastu-compliant home designs with cross ventilation",
            "Smart keyless entry and automated lighting systems"
        ],
        connectivity: [
            { title: "Balewadi High Street", dist: "4 mins" },
            { title: "Westend Mall Aundh", dist: "12 mins" },
            { title: "Hinjewadi IT Park", dist: "15 mins" },
            { title: "Jupiter Hospital", dist: "8 mins" },
            { title: "Upcoming Baner Metro", dist: "5 mins" },
            { title: "Pune University Chowk", dist: "15 mins" }
        ],
        amenities: [
            { icon: "Library", title: "Private Library" },
            { icon: "Film", title: "Mini Theatre" },
            { icon: "Beer", title: "Social Lounge" },
            { icon: "Map", title: "Meditation Zone" },
            { icon: "CloudSun", title: "Zen Garden" },
            { icon: "Tablets", title: "Smart Office Cabins" },
            { icon: "Trophy", title: "Squash Court" },
            { icon: "Gamepad2", title: "Virtual Gaming Room" }
        ],
        specifications: [
            { category: "Finishes", details: ["Lustre paint for internal walls", "False ceiling with LED light points"] },
            { category: "Doors/Windows", details: ["Digital locks for main door", "Sound-insulated glass windows"] },
            { category: "Plumbing", details: ["Concealed plumbing with premium CP fittings", "Solar water system connectivity"] },
            { category: "Electrical", details: ["Concealed copper wiring (Finolex/Polycab)", "Branded modular switches"] }
        ],
        gallery: [
            "/assets/projects/actual-estia.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
        ],
        seo: {
            title: "Supreme Estia Baner | Luxury 2, 3 & 4 BHK near Metro Line 3",
            description: "Supreme Estia offers ultra-premium residences in the heart of Baner. Steps from Balewadi High Street and upcoming Metro Station. High-appreciation luxury flats in Pune West.",
            keywords: "Supreme Estia Baner, luxury flats in Baner, 3 BHK in Baner price, projects near Balewadi High Street, Supreme Universal Baner, premium apartments west pune, Baner Metro Line 3 project"
        },
        image: "/assets/projects/actual-estia.jpg",
        reraNumber: "MahaRERA: P52100024783",
        comparisonMetrics: {
            configuration: "2, 3 & 4 BHK",
            possession: "Dec 2025",
            usp: "Elite Baner Corridor",
            connectivityScore: 9.8
        },
        appreciationMultiplier: 1.10
    },
    {
        id: "supreme-wakad",
        name: "Supreme Wakad",
        location: "Wakad, Pune West",
        fullLocation: "Wakad-Hinjewadi Link Road, Pune West 411057",
        type: "3 & 4 BHK Luxury Residences",
        status: "Upcoming New Launch",
        tagline: "The Future of Urban Luxury in Wakad",
        description: "Supreme Wakad: Next-gen 3 & 4 BHK residences at the gateway of Hinjewadi IT Park Phase 1. Futuristic glass facade architecture with a rooftop sky-club. Pre-launching for 2026 dominance.",
        highlights: [
            "Next-Gen smart homes with integrated voice control",
            "Unbeatable proximity to Hinjewadi IT Park (Phase 1 Entrance)",
            "Exclusive 3 & 4 BHK boutique layouts with wide sundecks",
            "Sky-high lifestyle amenities on the 21st-floor terrace",
            "Zero wasted space in floor plan engineering",
            "Biometric security for all residence entrances"
        ],
        connectivity: [
            { title: "Hinjewadi Phase 1", dist: "5 mins" },
            { title: "Bhujbal Chowk", dist: "3 mins" },
            { title: "Indira College", dist: "2 mins" },
            { title: "D-Mart Wakad", dist: "5 mins" },
            { title: "Sayaji Hotel", dist: "7 mins" },
            { title: "Symbiosis Infotech Campus", dist: "6 mins" }
        ],
        amenities: [
            { icon: "Smartphone", title: "Smart Home Tech" },
            { icon: "Rocket", title: "Sky Clubhouse" },
            { icon: "Shield", title: "4-Tier Security" },
            { icon: "Pocket", title: "Retail Plaza" },
            { icon: "Zap", title: "24/7 Power Backup" },
            { icon: "Wifi", title: "Common Area Wi-Fi" },
            { icon: "CloudRain", title: "Rainwater Harvesting" },
            { icon: "Ghost", title: "Stargazing Deck" }
        ],
        specifications: [
            { category: "Structure", details: ["Mivan Aluminium Formwork technology", "High-speed automatic elevators"] },
            { category: "Interiors", details: ["Premium sanitary ware (Kohler/Grohe)", "Elegant granite door frames"] },
            { category: "Technology", details: ["Fibre-to-home internet connectivity", "Video door phone with intercom"] },
            { category: "Flooring", details: ["Laminated wooden flooring in guest room", "Designer duo in bathrooms"] }
        ],
        gallery: [
            "/assets/projects/actual-wakad.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Wakad | Next-Gen Luxury 3 & 4 BHK near Hinjewadi IT Park",
            description: "Supreme Wakad offers visionary smart residences at the Wakad-Hinjewadi Link Road. Luxury 3 & 4 BHK apartments with rooftop sky-club. Pre-launching now.",
            keywords: "Supreme Wakad, 3 BHK in Wakad, 4 BHK in Wakad price, upcoming projects in Wakad 2026, Supreme Universal Wakad, luxury flats near Hinjewadi Phase 1, Wakad-Hinjewadi Link Road property"
        },
        image: "/assets/projects/actual-wakad.jpg",
        reraNumber: "MahaRERA: P52100056095",
        comparisonMetrics: {
            configuration: "3 & 4 BHK",
            possession: "Launching Soon",
            usp: "Next-Gen Smart Living",
            connectivityScore: 9.7
        },
        appreciationMultiplier: 1.18
    }
];
