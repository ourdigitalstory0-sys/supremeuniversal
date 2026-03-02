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
            "Ultra-luxury 24-storey towers",
            "Panoramic views of the Mula-Mutha river",
            "Proximity to Magarpatta & Amanora Park Town",
            "Executive-grade smart home features"
        ],
        connectivity: [
            { title: "Magarpatta City", dist: "10 mins" },
            { title: "EON IT Park Kharadi", dist: "15 mins" },
            { title: "Hadapsar Railway Station", dist: "8 mins" },
            { title: "Season's Mall", dist: "10 mins" }
        ],
        amenities: [
            { icon: "Infinity", title: "Rooftop Infinity Pool" },
            { icon: "Dumbbell", title: "Elite Fitness Center" },
            { icon: "Music", title: "Amphitheatre" },
            { icon: "Coffee", title: "Sky Lounge" }
        ],
        seo: {
            title: "Supreme Towers Mundhwa | Luxury 2, 3 & 4 BHK in Pune East",
            description: "Supreme Towers by Supreme Universal in Mundhwa offers premium luxury apartments near Magarpatta City. Explore 2, 3 & 4 BHK residences with world-class amenities.",
            keywords: "Supreme Towers Mundhwa, luxury apartments in Mundhwa, 3 BHK in Mundhwa Pune, upcoming projects in Mundhwa, Supreme Universal Mundhwa, luxury flats near Magarpatta City"
        },
        image: "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
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
            "Inspired by Mediterranean architecture",
            "15+ acres of low-density development",
            "Direct access to Mumbai-Pune Expressway",
            "Lush green vistas and private garden spaces"
        ],
        connectivity: [
            { title: "Mumbai-Pune Expressway", dist: "5 mins" },
            { title: "Lonavala / Talegaon", dist: "20 mins" },
            { title: "Dehu Road Station", dist: "10 mins" },
            { title: "MCA Stadium Gahunje", dist: "12 mins" }
        ],
        amenities: [
            { icon: "Trees", title: "Themed Gardens" },
            { icon: "Bike", title: "Jogging & Cycling Track" },
            { icon: "Tent", title: "Glamping Zones" },
            { icon: "Waves", title: "Leisure Pool" }
        ],
        seo: {
            title: "Supreme Villagio Somatane | Luxury Villas & Row Houses in Pune",
            description: "Experience European style villa living at Supreme Villagio Somatane. Luxury row houses and villas near Mumbai-Pune Expressway by Supreme Universal.",
            keywords: "Supreme Villagio Somatane, luxury villas in Pune, row houses in Somatane, villas near Mumbai Pune Expressway, Supreme Universal Villagio, premium gated community Pune North"
        },
        image: "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
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
            "Platinum location in Baner-Balewadi",
            "Art-deco inspired architectural facade",
            "Walking distance to premium retail & dining",
            "Exclusive community of 100+ families"
        ],
        connectivity: [
            { title: "Balewadi High Street", dist: "4 mins" },
            { title: "Westend Mall Aundh", dist: "12 mins" },
            { title: "Hinjewadi IT Park", dist: "15 mins" },
            { title: "Jupiter Hospital", dist: "8 mins" }
        ],
        amenities: [
            { icon: "Library", title: "Private Library" },
            { icon: "Film", title: "Mini Theatre" },
            { icon: "Beer", title: "Social Lounge" },
            { icon: "Map", title: "Meditation Zone" }
        ],
        seo: {
            title: "Supreme Estia Baner | Luxury 2, 3 & 4 BHK in Pune West",
            description: "Supreme Estia offers ultra-premium residences in the heart of Baner. Explore luxury 2, 3 & 4 BHK flats by Supreme Universal near Balewadi High Street.",
            keywords: "Supreme Estia Baner, luxury flats in Baner, 3 BHK in Baner price, projects near Balewadi High Street, Supreme Universal Baner, premium apartments west pune"
        },
        image: "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
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
            "Next-Gen smart homes in Wakad",
            "Closer to Hinjewadi IT Park (Phase 1)",
            "Exclusive 3 & 4 BHK boutique layouts",
            "Sky-high lifestyle amenities"
        ],
        connectivity: [
            { title: "Hinjewadi Phase 1", dist: "5 mins" },
            { title: "Bhujbal Chowk", dist: "3 mins" },
            { title: "Indira College", dist: "2 mins" },
            { title: "D-Mart Wakad", dist: "5 mins" }
        ],
        amenities: [
            { icon: "Smartphone", title: "Smart Home Tech" },
            { icon: "Rocket", title: "Sky Clubhouse" },
            { icon: "Shield", title: "4-Tier Security" },
            { icon: "Pocket", title: "Retail Plaza" }
        ],
        seo: {
            title: "Supreme Wakad | Luxury 3 & 4 BHK Apartments in Pune West",
            description: "Supreme Wakad by Supreme Universal offers ultra-luxury residences in Wakad. Pre-launching 3 & 4 BHK apartments with smart home features near Hinjewadi IT Park.",
            keywords: "Supreme Wakad, 3 BHK in Wakad, 4 BHK in Wakad price, upcoming projects in Wakad, Supreme Universal Wakad, luxury flats near Hinjewadi, pre launch projects Wakad"
        },
        image: "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
    }
];
