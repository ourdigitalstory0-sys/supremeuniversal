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
        id: "supreme-rivana",
        name: "Supreme Rivana",
        location: "Punawale, Pune West",
        fullLocation: "Tathawade Road, Punawale, Pimpri-Chinchwad, Pune West 411033",
        type: "2 & 3 BHK Riverside Residences",
        status: "Under Construction (Possession Dec 2031)",
        tagline: "Life by the River — 12.6-Acre Waterfront Development",
        description: "Supreme Rivana Punawale is an iconic 12.6-acre riverside development situated along the quiet banks of the Pawana River in Punawale, West Pune. Featuring 2 BHK (Premier & Grand) and 3 BHK (Signature, Regal & Elite) residences, West Pune's largest 60,000 sq.ft multi-level clubhouse 'Club Rivana', 50+ lifestyle amenities, and 700+ native trees and shrubs. Strategically connected to NH48, Mumbai-Pune Expressway, Wakad, and Hinjawadi IT Park.",
        highlights: [
            "12.6-Acre riverside development along the serene Pawana River",
            "Club Rivana: 60,000 sq.ft multi-level clubhouse with Aqua Arena",
            "50+ curated lifestyle amenities including 2 swimming pools, pickleball & squash",
            "700+ native trees & shrubs with enhanced AQI & natural river breeze cross-ventilation",
            "2 BHK (Premier 746 sq.ft, Grand 786 sq.ft) & 3 BHK (Regal 1100 sq.ft, Elite 1166 sq.ft)",
            "400m from NH48 Mumbai-Bangalore Highway & 5 mins to Mumbai-Pune Expressway",
            "12 mins to Wakad Chowk Metro Station & 15 mins to Hinjawadi IT Park Phase 1",
            "MahaRERA Registered Phase I: PM1261012502656 with scheduled delivery compliance"
        ],
        connectivity: [
            { title: "NH48 (Mumbai-Bangalore Hwy)", dist: "1 min / 400m" },
            { title: "Mumbai-Pune Expressway", dist: "5 mins" },
            { title: "Wakad Chowk Metro Station", dist: "12 mins" },
            { title: "Phoenix Mall of the Millennium", dist: "13 mins" },
            { title: "Hinjawadi IT Park Phase 1", dist: "15 mins" },
            { title: "Bhumkar Chowk Wakad", dist: "8 mins" }
        ],
        amenities: [
            { icon: "Waves", title: "Aqua Arena (2 Pools)" },
            { icon: "Trophy", title: "Club Rivana (60,000 Sq.Ft)" },
            { icon: "Dumbbell", title: "Elite Fitness Center" },
            { icon: "Trees", title: "700+ Native Trees & Zen Garden" },
            { icon: "Activity", title: "Pickleball & Squash Courts" },
            { icon: "Film", title: "Cinema Lounge & Mini Theatre" },
            { icon: "Heart", title: "Senior Wellness & Reflexology" },
            { icon: "Smile", title: "Pet Park & Kids Play Area" }
        ],
        specifications: [
            { category: "Structure", details: ["RCC framed earthquake-resistant structure", "30+ storey high-rise residential towers"] },
            { category: "Flooring", details: ["Imported marble-finish vitrified tiles", "Anti-skid tiles in river-facing balconies"] },
            { category: "Kitchen", details: ["Granite platform with stainless steel sink", "Provision for water purifier & exhaust fan"] },
            { category: "Doors & Windows", details: ["Digital smart lock on main entrance", "Powder-coated aluminum sliding windows with mosquito mesh"] },
            { category: "Electrical", details: ["Concealed copper wiring with modular switches", "AC points in all bedrooms & living room"] }
        ],
        gallery: [
            "https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg",
            "/assets/projects/actual-estia.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Rivana Punawale | 2 & 3 BHK Riverside Apartments Pune",
            description: "Explore Supreme Rivana Punawale: 12.6-acre riverside development with 60,000 sq.ft clubhouse Club Rivana, 50+ amenities, and 700+ native trees. MahaRERA PM1261012502656.",
            keywords: "Supreme Rivana, Supreme Rivana Punawale, Supreme Rivana 2 BHK, Supreme Rivana 3 BHK, Club Rivana, Pawana River apartments, luxury flats Punawale"
        },
        image: "https://cdn.supremeuniversal.com/media/designthatelevate_jSxOmi.jpg",
        reraNumber: "PM1261012502656",
        comparisonMetrics: {
            configuration: "2 & 3 BHK Premier, Grand, Signature, Regal & Elite",
            possession: "Dec 2031 (MahaRERA Phased)",
            usp: "12.6-Acre Pawana Riverfront Living with 60,000 Sq.Ft Club Rivana",
            connectivityScore: 9.8
        },
        appreciationMultiplier: 1.35
    },
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
    },
    {
        id: "supreme-pallacio",
        name: "Supreme Pallacio",
        location: "Baner, Pune West",
        fullLocation: "Pan Card Club Road, Baner, Pune West 411045",
        type: "3 & 4 BHK Luxury Apartments",
        status: "Ready to Move",
        tagline: "The Crown Jewel of Baner",
        description: "Supreme Pallacio stands as a testament to ready-to-move luxury in the heart of Baner. With only 74 exclusive residences spread across 4 acres, it offers an unparalleled low-density lifestyle favored by Pune's elite and corporate leaders.",
        highlights: [
            "Ultra low-density project: Only 74 families in 4 acres",
            "Palatial 3 & 4 BHK residences with massive wrap-around balconies",
            "Ready-to-move community with established social infrastructure",
            "Exquisite landscaping and mature canopy trees",
            "Grand double-height entrance lobbies for each tower",
            "Premium Spanish marble flooring in living areas"
        ],
        connectivity: [
            { title: "Pan Card Club", dist: "1 min" },
            { title: "Balewadi High Street", dist: "5 mins" },
            { title: "Jupiter Hospital", dist: "10 mins" },
            { title: "Hinjewadi IT Park", dist: "18 mins" },
            { title: "Mumbai-Pune Expressway", dist: "15 mins" },
            { title: "Pune University", dist: "20 mins" }
        ],
        amenities: [
            { icon: "Trees", title: "Lush Landscaped Gardens" },
            { icon: "Waves", title: "Resort-style Swimming Pool" },
            { icon: "Dumbbell", title: "Fully Equipped Gym" },
            { icon: "Coffee", title: "Resident's Clubhouse" },
            { icon: "Car", title: "Ample Guest Parking" },
            { icon: "Shield", title: "Advanced CCTV Security" },
            { icon: "Baby", title: "Dedicated Children's Area" },
            { icon: "TableTennis", title: "Indoor Games Hub" }
        ],
        specifications: [
            { category: "Structure", details: ["Seismic zone compliant RCC structure", "Premium exterior texture finish"] },
            { category: "Flooring", details: ["Imported marble in living, dining, and passage", "Wooden flooring in master bedroom"] },
            { category: "Kitchen", details: ["Modular kitchen setup with hob and chimney", "Piped gas connection"] },
            { category: "Bathrooms", details: ["Premium international CP fittings", "Glass partition for shower areas"] }
        ],
        gallery: [
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "/assets/projects/actual-estia.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Pallacio Baner | Ready 3 & 4 BHK Luxury Flats in Pune",
            description: "Supreme Pallacio in Baner offers ready-to-move ultra-luxury 3 & 4 BHK flats. Experience premium living in a low-density 4-acre community near Balewadi High Street.",
            keywords: "Supreme Pallacio Baner, ready to move flats in Baner, 4 BHK luxury apartments Pune, Supreme Universal completed projects, premium real estate Baner, properties near Pan Card Club Baner"
        },
        image: "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
        reraNumber: "Ready to Move / OC Received",
        comparisonMetrics: {
            configuration: "3 & 4 BHK",
            possession: "Ready",
            usp: "Low-Density Luxury",
            connectivityScore: 9.5
        },
        appreciationMultiplier: 1.05
    },
    {
        id: "supreme-vivero",
        name: "Supreme Vivero",
        location: "Baner, Pune West",
        fullLocation: "Baner Road, Near Bitwise, Pune West 411045",
        type: "4 BHK Premium Residences",
        status: "Completed",
        tagline: "Exclusive 4 BHK Living in Baner",
        description: "Supreme Vivero redefines spacious living with its exclusive focus on 4 BHK residences. Located strategically in Baner, it caters to large families seeking uncompromising luxury, privacy, and immediate connectivity to key IT hubs.",
        highlights: [
            "Exclusive community strictly for 4 BHK residents",
            "Sprawling floor plans designed for grand living",
            "Strategic location just off the main Baner Road",
            "Private terraces with every apartment",
            "State-of-the-art security and access control",
            "Boutique development ensuring high privacy"
        ],
        connectivity: [
            { title: "Baner Road", dist: "1 min" },
            { title: "Bitwise Tower", dist: "2 mins" },
            { title: "Balewadi Stadium", dist: "8 mins" },
            { title: "Hinjewadi Phase 1", dist: "15 mins" },
            { title: "Aundh", dist: "10 mins" },
            { title: "Orchid School", dist: "5 mins" }
        ],
        amenities: [
            { icon: "Users", title: "Premium Clubhouse" },
            { icon: "Waves", title: "Infinity Edged Pool" },
            { icon: "Dumbbell", title: "Fitness Studio" },
            { icon: "Trees", title: "Landscaped Podium" },
            { icon: "Shield", title: "24/7 Concierge" },
            { icon: "Car", title: "Basement Parking" },
            { icon: "TableTennis", title: "Recreation Room" },
            { icon: "Wifi", title: "Wi-Fi enabled lobbies" }
        ],
        specifications: [
            { category: "Structure", details: ["Earthquake resistant design", "High quality core materials"] },
            { category: "Flooring", details: ["Large format vitrified/marble flooring", "Anti-skid flooring in wet areas"] },
            { category: "Doors/Windows", details: ["Grand main entrance door", "UPVC noise-reducing sliding windows"] },
            { category: "Electrical", details: ["Home automation preparation", "100% power backup for common areas"] }
        ],
        gallery: [
            "/assets/projects/actual-towers.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Vivero Baner | Exclusive 4 BHK Apartments in Pune West",
            description: "Discover Supreme Vivero, offering sprawling 4 BHK luxury residences on Baner Road. Completed premium project by Supreme Universal with elite amenities.",
            keywords: "Supreme Vivero Baner, 4 BHK flats in Baner Pune, luxury 4 BHK apartments, Supreme Universal projects Baner, spacious homes in Pune West, properties near Bitwise Baner"
        },
        image: "/assets/projects/actual-towers.jpg",
        reraNumber: "Completed / OC Received",
        comparisonMetrics: {
            configuration: "4 BHK Only",
            possession: "Ready",
            usp: "Exclusive 4 BHK Community",
            connectivityScore: 9.6
        },
        appreciationMultiplier: 1.05
    },
    {
        id: "supreme-amadore",
        name: "Supreme Amadore",
        location: "Baner, Pune West",
        fullLocation: "Baner-Pashan Link Road, Pune West 411021",
        type: "3 & 4 BHK Residences",
        status: "Completed",
        tagline: "Serene Living on the Link Road",
        description: "Supreme Amadore gracefully blends the vibrancy of Baner with the tranquility of Pashan. This completed luxury project offers meticulously crafted 3 & 4 BHK homes, boasting striking architecture and a deeply established, vibrant community.",
        highlights: [
            "Prime location on the coveted Baner-Pashan Link Road",
            "Uninterrupted views of the Pashan hills and Baner skyline",
            "Award-winning architectural design",
            "Fully functional, active resident community",
            "Extensive podium-level recreational spaces",
            "Proximity to top educational institutions"
        ],
        connectivity: [
            { title: "Pashan Hill Trail", dist: "5 mins" },
            { title: "Pune University", dist: "12 mins" },
            { title: "Loyola High School", dist: "10 mins" },
            { title: "Mumbai-Pune Highway", dist: "5 mins" },
            { title: "Kothrud", dist: "20 mins" },
            { title: "Hinjewadi", dist: "20 mins" }
        ],
        amenities: [
            { icon: "Waves", title: "Swimming Pool" },
            { icon: "Dumbbell", title: "Gymnasium" },
            { icon: "Trees", title: "Party Lawn" },
            { icon: "Baby", title: "Kids Play Area" },
            { icon: "Users", title: "Community Hall" },
            { icon: "Bike", title: "Walking Track" },
            { icon: "Shield", title: "Security Personnel" },
            { icon: "Car", title: "Covered Parking" }
        ],
        specifications: [
            { category: "Interiors", details: ["Gypsum finished walls", "Premium emulsion paint"] },
            { category: "Kitchen", details: ["L-shaped granite platform", "Exhaust fan provision"] },
            { category: "Bathrooms", details: ["Concealed plumbing", "Designer glazed tiles"] },
            { category: "Electrical", details: ["Fire-resistant cabling", "AC points in all bedrooms"] }
        ],
        gallery: [
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
            "/assets/projects/actual-estia.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
        ],
        seo: {
            title: "Supreme Amadore | Luxury 3 & 4 BHK on Baner-Pashan Link Road",
            description: "Explore Supreme Amadore, a completed luxury residential project featuring 3 & 4 BHK flats on the Baner-Pashan Link Road. Serene living by Supreme Universal.",
            keywords: "Supreme Amadore Baner, flats on Baner Pashan Link Road, 3 BHK Pashan Pune, luxury apartments Baner, Supreme Universal completed flats, ready to move 3 BHK Pune West"
        },
        image: "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
        reraNumber: "Completed / OC Received",
        comparisonMetrics: {
            configuration: "3 & 4 BHK",
            possession: "Ready",
            usp: "Link Road Serenity",
            connectivityScore: 9.3
        },
        appreciationMultiplier: 1.04
    },
    {
        id: "supreme-estado",
        name: "Supreme Estado",
        location: "Baner, Pune West",
        fullLocation: "Mumbai-Bengaluru Highway Bypass, Baner, Pune 411045",
        type: "2 & 3 BHK Apartments",
        status: "Completed",
        tagline: "The Smart Choice in Baner",
        description: "Supreme Estado represents the perfect entry point into Supreme Universal's luxury lifestyle. Offering highly optimized 2 and 3 BHK configurations, this project is ideal for young professionals and IT executives who demand quality construction and unbeatable highway access.",
        highlights: [
            "Highly efficient floor plans with zero dead space",
            "Immediate access to the Mumbai-Bengaluru Highway",
            "Excellent rental yield potential for investors",
            "Contemporary facade and modern amenities",
            "Vibrant, youthful community of IT professionals",
            "Trusted Supreme Universal construction quality"
        ],
        connectivity: [
            { title: "Mumbai-Bengaluru Highway", dist: "1 min" },
            { title: "Hinjewadi Phase 1", dist: "10 mins" },
            { title: "Wakad Bridge", dist: "5 mins" },
            { title: "Balewadi High Street", dist: "8 mins" },
            { title: "Aditya Birla Hospital", dist: "15 mins" },
            { title: "Aundh", dist: "12 mins" }
        ],
        amenities: [
            { icon: "Dumbbell", title: "Fitness Centre" },
            { icon: "Baby", title: "Children's Play Area" },
            { icon: "Users", title: "Multipurpose Hall" },
            { icon: "Trees", title: "Landscaped Garden" },
            { icon: "Shield", title: "Intercom Facility" },
            { icon: "Car", title: "Visitor Parking" },
            { icon: "Zap", title: "Generator Backup" },
            { icon: "Wifi", title: "Broadband Provision" }
        ],
        specifications: [
            { category: "Structure", details: ["RCC frame structure", "Fly ash bricks/AAC blocks"] },
            { category: "Flooring", details: ["Vitrified tiles in all rooms", "Ceramic tiles in terraces"] },
            { category: "Windows", details: ["Powder coated aluminium sliding windows", "Mosquito mesh provided"] },
            { category: "Kitchen", details: ["Granite top counter", "Stainless steel sink"] }
        ],
        gallery: [
            "/assets/projects/actual-wakad.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "/assets/projects/actual-estia.jpg"
        ],
        seo: {
            title: "Supreme Estado Baner | Premium 2 & 3 BHK Apartments Pune",
            description: "Supreme Estado offers smart 2 & 3 BHK apartments right off the Mumbai-Bengaluru Highway in Baner. Perfect for IT professionals seeking Supreme quality homes.",
            keywords: "Supreme Estado Baner, 2 BHK flats in Baner, 3 BHK near highway Pune, flats near Hinjewadi, investment properties in Baner, Supreme Universal affordable luxury"
        },
        image: "/assets/projects/actual-wakad.jpg",
        reraNumber: "Completed / OC Received",
        comparisonMetrics: {
            configuration: "2 & 3 BHK",
            possession: "Ready",
            usp: "Highway Connectivity Hub",
            connectivityScore: 9.7
        },
        appreciationMultiplier: 1.06
    },
    {
        id: "supreme-esteban",
        name: "Supreme Esteban",
        location: "Koregaon Park, Pune East",
        fullLocation: "Koregaon Park Annexe, Pune East 411036",
        type: "3 & 4 BHK Ultra-Luxury",
        status: "Completed",
        tagline: "The Zenith of Koregaon Park",
        description: "Supreme Esteban is an architectural masterpiece located in Pune's most affluent neighborhood, Koregaon Park Annexe. It delivers an uncompromising ultra-luxury experience, featuring palatial residences, bespoke amenities, and a community of Pune's most distinguished families.",
        highlights: [
            "Located in Pune's most premium residential postcode",
            "Breathtaking views of the Mula-Mutha river",
            "Sky-high majestic towers with low-density layout",
            "Lavish multi-level podium amenities",
            "Close proximity to Pune's finest fine-dining and nightlife",
            "State-of-the-art security and privacy for high-net-worth individuals"
        ],
        connectivity: [
            { title: "Koregaon Park Hub", dist: "2 mins" },
            { title: "Osho Ashram", dist: "5 mins" },
            { title: "Kalyani Nagar", dist: "8 mins" },
            { title: "Pune Airport", dist: "15 mins" },
            { title: "Pune Railway Station", dist: "10 mins" },
            { title: "Camp / MG Road", dist: "12 mins" }
        ],
        amenities: [
            { icon: "Infinity", title: "Temperature Controlled Pool" },
            { icon: "Coffee", title: "Five-Star Resident Lounge" },
            { icon: "Dumbbell", title: "World-Class Gymnasium" },
            { icon: "Film", title: "Private Cinema" },
            { icon: "Shield", title: "Biometric Access Control" },
            { icon: "Trees", title: "Zen Landscaping" },
            { icon: "Users", title: "Business Centre" },
            { icon: "Car", title: "Chauffeur Waiting Lounge" }
        ],
        specifications: [
            { category: "Structure", details: ["Iconic tower design", "Premium core finishes"] },
            { category: "Flooring", details: ["Italian marble across the apartment", "Teak wood flooring in master suites"] },
            { category: "Home Automation", details: ["Fully integrated smart home system", "Automated curtains and mood lighting"] },
            { category: "Bathrooms", details: ["Jacuzzi in master bath", "Designer sanitary ware (Villeroy & Boch/Gessi)"] }
        ],
        gallery: [
            "/assets/projects/actual-towers.jpg",
            "/assets/projects/actual-estia.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
        ],
        seo: {
            title: "Supreme Esteban Koregaon Park | Ultra-Luxury 3 & 4 BHK Pune East",
            description: "Experience the zenith of luxury at Supreme Esteban in Koregaon Park Annexe. Palatial 3 & 4 BHK residences offering river views and five-star amenities.",
            keywords: "Supreme Esteban Koregaon Park, ultra luxury apartments Pune, 4 BHK in Koregaon Park, premium flats Pune East, Supreme Universal luxury projects, most expensive flats in Pune"
        },
        image: "/assets/projects/actual-towers.jpg",
        reraNumber: "Completed / OC Received",
        comparisonMetrics: {
            configuration: "3 & 4 BHK Ultra",
            possession: "Ready",
            usp: "Koregaon Park Prestige",
            connectivityScore: 9.9
        },
        appreciationMultiplier: 1.08
    },
    {
        id: "supreme-boulevard",
        name: "Supreme Boulevard",
        location: "Chembur, Mumbai",
        fullLocation: "Sion-Trombay Road, Chembur, Mumbai 400071",
        type: "2, 3 & 4 BHK Luxury Residences",
        status: "Under Construction",
        tagline: "Epitome of Urban Grandeur in Chembur",
        description: "Supreme Boulevard is an ultra-luxurious residential landmark redefining Chembur's skyline. Featuring expansive 2, 3 and 4 BHK residences with panoramic horizon views, rooftop leisure amenities, and swift 15-minute access to BKC via the BKC-Chunabhatti flyover.",
        highlights: [
            "Iconic high-rise tower with art deco facade in central Chembur",
            "Direct access to Eastern Freeway, BKC Connector & Monorail",
            "Expansive private sundecks with panoramic city views",
            "Rooftop infinity pool, fitness club, and landscaped sky deck",
            "Grand air-conditioned double-height entrance lobby with concierge",
            "MahaRERA registered with Supreme Universal's delivery guarantee"
        ],
        connectivity: [
            { title: "Eastern Freeway", dist: "3 mins" },
            { title: "BKC Connector", dist: "8 mins" },
            { title: "Bandra Kurla Complex (BKC)", dist: "15 mins" },
            { title: "Chembur Monorail", dist: "4 mins" },
            { title: "Mumbai Domestic Airport", dist: "20 mins" },
            { title: "South Mumbai (CST/Fort)", dist: "20 mins" }
        ],
        amenities: [
            { icon: "Infinity", title: "Rooftop Sky Pool" },
            { icon: "Dumbbell", title: "Fitness Suite" },
            { icon: "Trees", title: "Sky Lounge & Zen Deck" },
            { icon: "Film", title: "Private Screening Room" },
            { icon: "Users", title: "Banquet Hall" },
            { icon: "Gamepad2", title: "Kids Indoor Arena" },
            { icon: "Car", title: "Multi-level Automated Parking" },
            { icon: "Shield", title: "3-Tier Biometric Security" }
        ],
        specifications: [
            { category: "Structure", details: ["Seismic compliant RCC framed structure", "High-performance aluminium facade"] },
            { category: "Flooring", details: ["Imported Italian marble in living and dining", "Laminated engineered wood in master bedrooms"] },
            { category: "Kitchen", details: ["Granite counter with branded fittings", "Piped natural gas connection"] },
            { category: "Automation", details: ["Smart digital lock with video intercom", "Home automation readiness"] }
        ],
        gallery: [
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "/assets/projects/actual-towers.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Boulevard Chembur | Luxury 2, 3 & 4 BHK Flats in Mumbai",
            description: "Supreme Boulevard Chembur by Supreme Universal offers luxury 2, 3 & 4 BHK residences near BKC Connector and Eastern Freeway. Rooftop sky pool & luxury amenities.",
            keywords: "Supreme Boulevard Chembur, luxury flats in Chembur, 3 BHK in Chembur Mumbai, flats near BKC connector, Supreme Universal Mumbai projects, premium apartments Chembur"
        },
        image: "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
        reraNumber: "MahaRERA: P51800047321",
        comparisonMetrics: {
            configuration: "2, 3 & 4 BHK",
            possession: "2027",
            usp: "BKC-Freeway Transit Hub",
            connectivityScore: 9.8
        },
        appreciationMultiplier: 1.15
    },
    {
        id: "supreme-arthouse",
        name: "Supreme ArtHouse",
        location: "Bandra West, Mumbai",
        fullLocation: "Near Carter Road & Perry Cross Road, Bandra West, Mumbai 400050",
        type: "Bespoke 4 & 5 BHK Art Residences",
        status: "Exclusive Boutique Launch",
        tagline: "Curated Art Deco Masterpieces in Bandra",
        description: "Supreme ArtHouse is an ultra-niche collection of boutique art residences nestled in Mumbai's most prestigious postal code, Bandra West. Crafted for connoisseurs of fine architecture with private elevator access, double-height ceilings, and Arabian Sea breezes.",
        highlights: [
            "One exclusive apartment per floor for utmost privacy and security",
            "Walking distance to Carter Road promenade and Bandra Bandstand",
            "Double-height living rooms with floor-to-ceiling glass fenestrations",
            "Private elevator access with biometric recognition",
            "Bespoke Italian marble interiors and customized brass metal accents",
            "Dedicated concierge desk and valet parking for distinguished residents"
        ],
        connectivity: [
            { title: "Carter Road Promenade", dist: "2 mins" },
            { title: "Bandra-Worli Sea Link", dist: "8 mins" },
            { title: "Bandra Kurla Complex (BKC)", dist: "15 mins" },
            { title: "Pali Hill", dist: "3 mins" },
            { title: "Mumbai International Airport", dist: "20 mins" },
            { title: "South Mumbai", dist: "20 mins" }
        ],
        amenities: [
            { icon: "Infinity", title: "Private Plunge Pools" },
            { icon: "Coffee", title: "Art Gallery Lounge" },
            { icon: "Dumbbell", title: "Boutique Wellness Gym" },
            { icon: "Trees", title: "Rooftop Observatory" },
            { icon: "Shield", title: "Private High-Security Lobby" },
            { icon: "Car", title: "Valet & EV Supercharger" }
        ],
        specifications: [
            { category: "Interiors", details: ["Customized Italian Statuario marble", "Floor-to-ceiling soundproof Schuco glazing"] },
            { category: "Kitchen", details: ["Poggenpohl / Poliform modular kitchen", "Miele appliance package"] },
            { category: "Bathrooms", details: ["Gessi / Villeroy & Boch sanitary fixtures", "Private Jacuzzi in master suite"] }
        ],
        gallery: [
            "/assets/projects/actual-towers.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "/assets/projects/actual-estia.jpg"
        ],
        seo: {
            title: "Supreme ArtHouse Bandra West | Ultra-Luxury 4 & 5 BHK Mumbai",
            description: "Supreme ArtHouse by Supreme Universal: Exclusive one-apartment-per-floor art residences in Bandra West near Carter Road. Private elevators and Arabian Sea vistas.",
            keywords: "Supreme ArtHouse Bandra, luxury apartments Bandra West, 4 BHK Carter Road Mumbai, Supreme Universal Bandra, Pali Hill luxury property, most expensive flats Bandra"
        },
        image: "/assets/projects/actual-towers.jpg",
        reraNumber: "MahaRERA: P51800051244",
        comparisonMetrics: {
            configuration: "4 & 5 BHK Boutique",
            possession: "2026",
            usp: "One Flat Per Floor Bandra",
            connectivityScore: 9.9
        },
        appreciationMultiplier: 1.20
    },
    {
        id: "supreme-prana",
        name: "Supreme Prana",
        location: "Pali Hill, Bandra West, Mumbai",
        fullLocation: "Pali Hill Road, Bandra West, Mumbai 400050",
        type: "3 & 4 BHK Bespoke Residences",
        status: "Completed / Ready",
        tagline: "Serenity Amidst the Greens of Pali Hill",
        description: "Supreme Prana sits atop Pali Hill, Mumbai's most coveted celebrity and corporate enclave. Featuring sprawling 3 and 4 BHK residences surrounded by lush tree canopies, complete quietude, and bespoke artisan craftsmanship.",
        highlights: [
            "Ultra-exclusive residential enclave in historic Pali Hill",
            "Surrounded by century-old banyan canopies and serene nature",
            "Sprawling wrap-around viewing decks with garden views",
            "Home to prominent industrialists and creative icons",
            "Low-density boutique construction with 24/7 private security"
        ],
        connectivity: [
            { title: "Pali Market & Cafes", dist: "2 mins" },
            { title: "Carter Road", dist: "4 mins" },
            { title: "Bandra-Worli Sea Link", dist: "10 mins" },
            { title: "BKC Commercial Hub", dist: "18 mins" },
            { title: "Linking Road", dist: "5 mins" }
        ],
        amenities: [
            { icon: "Trees", title: "Podium Zen Gardens" },
            { icon: "Dumbbell", title: "Private Fitness Club" },
            { icon: "Waves", title: "Temperature-Controlled Pool" },
            { icon: "Coffee", title: "Residents Library" },
            { icon: "Shield", title: "CCTV & Concierge Desk" }
        ],
        specifications: [
            { category: "Structure", details: ["High-grade seismic resistant structure", "Acoustic glass insulation"] },
            { category: "Flooring", details: ["Imported Italian marble throughout", "Hardwood flooring in master suites"] }
        ],
        gallery: [
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
            "/assets/projects/actual-estia.jpg",
            "/assets/projects/actual-towers.jpg"
        ],
        seo: {
            title: "Supreme Prana Pali Hill Bandra | Luxury Residences by Supreme Universal",
            description: "Supreme Prana on Pali Hill Bandra West offers bespoke 3 & 4 BHK residences in Mumbai's most prestigious hillside green enclave. Ready to move.",
            keywords: "Supreme Prana Pali Hill, flats in Pali Hill Bandra, luxury homes Bandra West, Supreme Universal Mumbai redevelopment, celebrity homes Bandra"
        },
        image: "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg",
        reraNumber: "Ready / OC Received",
        comparisonMetrics: {
            configuration: "3 & 4 BHK",
            possession: "Ready",
            usp: "Pali Hill Green Enclave",
            connectivityScore: 9.8
        },
        appreciationMultiplier: 1.10
    },
    {
        id: "supreme-headquarters",
        name: "Supreme Headquarters",
        location: "Bandra-Santacruz, Mumbai",
        fullLocation: "Linking Road Junction, Bandra-Santacruz West, Mumbai 400054",
        type: "Grade-A Boutique Commercial Offices & Retail",
        status: "Completed / Ready",
        tagline: "The Benchmark of Corporate Prestige",
        description: "Supreme Headquarters is a landmark Grade-A commercial and retail masterpiece by Supreme Universal at the junction of Bandra and Santacruz. Designed for multinational conglomerates, family offices, and luxury flagship retail brands.",
        highlights: [
            "Platinum LEED certified commercial green building",
            "Prime frontage on prominent high-street retail corridor",
            "Grand triple-height corporate entrance lobby",
            "High-speed destination-controlled elevators and automated parking",
            "Column-free office plates offering flexible layouts"
        ],
        connectivity: [
            { title: "Santacruz Railway Station", dist: "3 mins" },
            { title: "Western Express Highway", dist: "5 mins" },
            { title: "Bandra-Worli Sea Link", dist: "10 mins" },
            { title: "Bandra Kurla Complex (BKC)", dist: "12 mins" },
            { title: "Mumbai Domestic Airport", dist: "10 mins" }
        ],
        amenities: [
            { icon: "Users", title: "Corporate Conference Center" },
            { icon: "Coffee", title: "Rooftop Executive Cafe" },
            { icon: "Car", title: "Automated Multi-Tier Parking" },
            { icon: "Zap", title: "100% Redundant Power Backup" },
            { icon: "Shield", title: "Biometric Turnstiles & CCTV" }
        ],
        specifications: [
            { category: "Facade", details: ["Double-glazed low-E unitized glass curtain wall", "High acoustic and thermal efficiency"] },
            { category: "Floor Plates", details: ["Column-free floor plates with 3.8m clear height", "Heavy load bearing design"] }
        ],
        gallery: [
            "/assets/projects/actual-towers.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
        ],
        seo: {
            title: "Supreme Headquarters Mumbai | Grade-A Commercial Offices & Retail",
            description: "Supreme Headquarters by Supreme Universal: Premier Grade-A commercial office suites and flagship retail on Bandra-Santacruz Link. Minutes to BKC and Airport.",
            keywords: "Supreme Headquarters Mumbai, commercial office space Bandra, retail space Santacruz, Supreme Universal commercial projects, offices near BKC"
        },
        image: "/assets/projects/actual-towers.jpg",
        reraNumber: "Completed / OC Received",
        comparisonMetrics: {
            configuration: "Grade-A Commercial",
            possession: "Ready",
            usp: "Bandra-Santacruz Commercial Hub",
            connectivityScore: 9.9
        },
        appreciationMultiplier: 1.12
    },
    {
        id: "supreme-alora",
        name: "Supreme Alora",
        location: "Chembur, Mumbai",
        fullLocation: "Central Avenue Road, Chembur West, Mumbai 400071",
        type: "2 & 3 BHK Luxury Residences",
        status: "Under Construction",
        tagline: "Redefining Luxury Living in Chembur West",
        description: "Supreme Alora represents Supreme Universal's gold-standard residential redevelopment in Chembur West. Offering thoughtfully planned 2 & 3 BHK luxury residences with modern amenities, verdant views, and direct connectivity to Central and South Mumbai.",
        highlights: [
            "Prime residential sector of Chembur West with established green avenues",
            "Meticulous floor planning with minimum common wall sharing",
            "Rooftop clubhouse, meditation lawn, and children's play area",
            "10 minutes to BKC via the Eastern Freeway and BKC connector",
            "MahaRERA registered with guaranteed construction timelines"
        ],
        connectivity: [
            { title: "Chembur Railway Station", dist: "5 mins" },
            { title: "Eastern Freeway", dist: "4 mins" },
            { title: "BKC Connector", dist: "10 mins" },
            { title: "Navi Mumbai via Sion-Panvel", dist: "15 mins" }
        ],
        amenities: [
            { icon: "Trees", title: "Rooftop Landscaped Garden" },
            { icon: "Dumbbell", title: "Modern Gymnasium" },
            { icon: "Baby", title: "Children's Play Zone" },
            { icon: "Users", title: "Community Hall" },
            { icon: "Shield", title: "24/7 Security" }
        ],
        specifications: [
            { category: "Structure", details: ["RCC frame earthquake resistant design", "High quality core materials"] },
            { category: "Flooring", details: ["Vitrified tile flooring in all rooms", "Anti-skid balcony tiles"] }
        ],
        gallery: [
            "/assets/projects/actual-estia.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
        ],
        seo: {
            title: "Supreme Alora Chembur | Luxury 2 & 3 BHK Flats in Mumbai",
            description: "Supreme Alora in Chembur West offers luxury 2 & 3 BHK apartments with rooftop lifestyle amenities. Rapid connectivity to BKC and Eastern Freeway.",
            keywords: "Supreme Alora Chembur, 2 BHK in Chembur, 3 BHK flats Chembur West, Supreme Universal Chembur projects, property near BKC connector"
        },
        image: "/assets/projects/actual-estia.jpg",
        reraNumber: "MahaRERA: P51800049280",
        comparisonMetrics: {
            configuration: "2 & 3 BHK",
            possession: "2027",
            usp: "Chembur West Redevelopment",
            connectivityScore: 9.7
        },
        appreciationMultiplier: 1.12
    }
];

