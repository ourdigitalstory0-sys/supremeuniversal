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
            title: "Supreme Towers Mundhwa | Luxury 2, 3 & 4 BHK in Pune East",
            description: "Supreme Towers by Supreme Universal in Mundhwa offers premium luxury apartments near Magarpatta City. Explore 2, 3 & 4 BHK residences with world-class amenities.",
            keywords: "Supreme Towers Mundhwa, luxury apartments in Mundhwa, 3 BHK in Mundhwa Pune, upcoming projects in Mundhwa, Supreme Universal Mundhwa, luxury flats near Magarpatta City"
        },
        image: "/assets/projects/actual-towers.jpg"
    },
    {
        id: "supreme-villagio",
        name: "Supreme Villagio",
        location: "Somatane, Pune North",
        fullLocation: "Somatane Phata, Near Mumbai-Pune Expressway, Pune North 410506",
        type: "Luxury Villas & Row Houses",
        status: "Phase 2 Launched",
        tagline: "European Village Life in North Pune",
        description: "Supreme Villagio brings the charm of European village living to the serene climes of Somatane. With sprawling villas and row houses, it offers a tranquil escape from the city hubbub while remaining perfectly connected via the Mumbai-Pune Expressway.",
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
            title: "Supreme Villagio Somatane | Luxury Villas & Row Houses in Pune",
            description: "Experience European style villa living at Supreme Villagio Somatane. Luxury row houses and villas near Mumbai-Pune Expressway by Supreme Universal.",
            keywords: "Supreme Villagio Somatane, luxury villas in Pune, row houses in Somatane, villas near Mumbai Pune Expressway, Supreme Universal Villagio, premium gated community Pune North"
        },
        image: "/assets/projects/actual-villagio.jpg"
    },
    {
        id: "supreme-estia",
        name: "Supreme Estia",
        location: "Baner, Pune West",
        fullLocation: "Near Baner-Balewadi High Street, Pune West 411045",
        type: "2, 3 & 4 BHK Premium Flats",
        status: "Possession Dec 2025",
        tagline: "Elegeance Reimagined in Baner",
        description: "Supreme Estia represents the gold standard of luxury in Baner. Located at the epicenter of Pune's most preferred residential corridor, it offers homes that are a masterclass in spatial design and aesthetic perfection, minutes away from the Balewadi High Street.",
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
            title: "Supreme Estia Baner | Luxury 2, 3 & 4 BHK in Pune West",
            description: "Supreme Estia offers ultra-premium residences in the heart of Baner. Explore luxury 2, 3 & 4 BHK flats by Supreme Universal near Balewadi High Street.",
            keywords: "Supreme Estia Baner, luxury flats in Baner, 3 BHK in Baner price, projects near Balewadi High Street, Supreme Universal Baner, premium apartments west pune"
        },
        image: "/assets/projects/actual-estia.jpg"
    },
    {
        id: "supreme-wakad",
        name: "Supreme Wakad",
        location: "Wakad, Pune West",
        fullLocation: "Wakad-Hinjewadi Link Road, Pune West 411057",
        type: "3 & 4 BHK Luxury Residences",
        status: "Upcoming New Launch",
        tagline: "The Future of Urban Luxury in Wakad",
        description: "Supreme Wakad is our upcoming flagship in the heart of West Pune's most vibrant residential hub. Designed for the futuristic lifestyle, it combines cutting-edge architecture with Supreme Universal's signature detailing, offering unprecedented connectivity to Hinjewadi Phase 1.",
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
            { category: "Flooring", details: ["Laminated wooden flooring in guest room", "Designer dado in bathrooms"] }
        ],
        gallery: [
            "/assets/projects/actual-wakad.jpg",
            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
        ],
        seo: {
            title: "Supreme Wakad | Luxury 3 & 4 BHK Apartments in Pune West",
            description: "Supreme Wakad by Supreme Universal offers ultra-luxury residences in Wakad. Pre-launching 3 & 4 BHK apartments with smart home features near Hinjewadi IT Park.",
            keywords: "Supreme Wakad, 3 BHK in Wakad, 4 BHK in Wakad price, upcoming projects in Wakad, Supreme Universal Wakad, luxury flats near Hinjewadi, pre launch projects Wakad"
        },
        image: "/assets/projects/actual-wakad.jpg"
    }
];
