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
    }
];
