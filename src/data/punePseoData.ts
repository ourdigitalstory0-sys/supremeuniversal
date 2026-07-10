export interface LocalityInfo {
    id: string;
    name: string;
    nearbyIT: string;
    highwayDistance: string;
    avgRate: string;
}

export const localities: LocalityInfo[] = [
    { id: 'punawale', name: 'Punawale', nearbyIT: '10 Mins', highwayDistance: '2 Mins', avgRate: '₹6,800 - ₹7,500/Sq.ft' },
    { id: 'hinjewadi', name: 'Hinjewadi', nearbyIT: '0 Mins', highwayDistance: '8 Mins', avgRate: '₹7,500 - ₹8,800/Sq.ft' },
    { id: 'wakad', name: 'Wakad', nearbyIT: '12 Mins', highwayDistance: '5 Mins', avgRate: '₹8,500 - ₹9,800/Sq.ft' },
    { id: 'baner', name: 'Baner', nearbyIT: '18 Mins', highwayDistance: '6 Mins', avgRate: '₹9,800 - ₹11,500/Sq.ft' },
    { id: 'mahalunge', name: 'Mahalunge', nearbyIT: '8 Mins', highwayDistance: '5 Mins', avgRate: '₹7,800 - ₹8,600/Sq.ft' },
    { id: 'balewadi', name: 'Balewadi', nearbyIT: '15 Mins', highwayDistance: '5 Mins', avgRate: '₹9,200 - ₹10,800/Sq.ft' },
    { id: 'tathawade', name: 'Tathawade', nearbyIT: '12 Mins', highwayDistance: '3 Mins', avgRate: '₹7,000 - ₹7,800/Sq.ft' },
    { id: 'ravet', name: 'Ravet', nearbyIT: '15 Mins', highwayDistance: '2 Mins', avgRate: '₹6,800 - ₹7,600/Sq.ft' },
    { id: 'kiwale', name: 'Kiwale', nearbyIT: '18 Mins', highwayDistance: '1 Min', avgRate: '₹6,200 - ₹6,800/Sq.ft' },
    { id: 'akurdi', name: 'Akurdi', nearbyIT: '20 Mins', highwayDistance: '8 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    { id: 'chinchwad', name: 'Chinchwad', nearbyIT: '22 Mins', highwayDistance: '12 Mins', avgRate: '₹7,800 - ₹8,500/Sq.ft' },
    { id: 'pimpri', name: 'Pimpri', nearbyIT: '25 Mins', highwayDistance: '15 Mins', avgRate: '₹7,500 - ₹8,200/Sq.ft' },
    { id: 'somatane', name: 'Somatane', nearbyIT: '25 Mins', highwayDistance: '0 Mins', avgRate: '₹5,500 - ₹6,200/Sq.ft' },
    { id: 'talegaon', name: 'Talegaon', nearbyIT: '30 Mins', highwayDistance: '0 Mins', avgRate: '₹4,800 - ₹5,500/Sq.ft' },
    { id: 'koregaon-park', name: 'Koregaon Park', nearbyIT: '30 Mins', highwayDistance: '20 Mins', avgRate: '₹14,000 - ₹18,000/Sq.ft' },
    { id: 'kalyani-nagar', name: 'Kalyani Nagar', nearbyIT: '30 Mins', highwayDistance: '18 Mins', avgRate: '₹12,500 - ₹15,500/Sq.ft' },
    { id: 'viman-nagar', name: 'Viman Nagar', nearbyIT: '28 Mins', highwayDistance: '15 Mins', avgRate: '₹11,000 - ₹13,500/Sq.ft' },
    { id: 'kharadi', name: 'Kharadi', nearbyIT: '25 Mins', highwayDistance: '12 Mins', avgRate: '₹9,000 - ₹10,500/Sq.ft' },
    { id: 'hadapsar', name: 'Hadapsar', nearbyIT: '28 Mins', highwayDistance: '15 Mins', avgRate: '₹8,000 - ₹9,500/Sq.ft' },
    { id: 'undri', name: 'Undri', nearbyIT: '35 Mins', highwayDistance: '20 Mins', avgRate: '₹6,000 - ₹6,800/Sq.ft' },
    { id: 'nibm', name: 'NIBM', nearbyIT: '32 Mins', highwayDistance: '18 Mins', avgRate: '₹7,500 - ₹8,800/Sq.ft' },
    { id: 'katraj', name: 'Katraj', nearbyIT: '30 Mins', highwayDistance: '10 Mins', avgRate: '₹6,800 - ₹7,600/Sq.ft' },
    { id: 'kothrud', name: 'Kothrud', nearbyIT: '25 Mins', highwayDistance: '10 Mins', avgRate: '₹12,000 - ₹14,500/Sq.ft' },
    { id: 'shivajinagar', name: 'Shivajinagar', nearbyIT: '25 Mins', highwayDistance: '15 Mins', avgRate: '₹15,000 - ₹19,000/Sq.ft' },
    { id: 'camp', name: 'Camp', nearbyIT: '28 Mins', highwayDistance: '18 Mins', avgRate: '₹13,000 - ₹16,000/Sq.ft' },
    { id: 'swargate', name: 'Swargate', nearbyIT: '28 Mins', highwayDistance: '15 Mins', avgRate: '₹11,000 - ₹13,000/Sq.ft' },
    { id: 'dhanori', name: 'Dhanori', nearbyIT: '28 Mins', highwayDistance: '15 Mins', avgRate: '₹6,800 - ₹7,500/Sq.ft' },
    { id: 'vishrantwadi', name: 'Vishrantwadi', nearbyIT: '25 Mins', highwayDistance: '12 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    { id: 'lohegaon', name: 'Lohegaon', nearbyIT: '28 Mins', highwayDistance: '15 Mins', avgRate: '₹6,200 - ₹6,900/Sq.ft' },
    { id: 'wagholi', name: 'Wagholi', nearbyIT: '22 Mins', highwayDistance: '12 Mins', avgRate: '₹6,000 - ₹6,800/Sq.ft' },
    { id: 'mundhwa', name: 'Mundhwa', nearbyIT: '22 Mins', highwayDistance: '12 Mins', avgRate: '₹8,200 - ₹9,500/Sq.ft' },
    { id: 'keshav-nagar', name: 'Keshav Nagar', nearbyIT: '24 Mins', highwayDistance: '14 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    { id: 'manjri', name: 'Manjri', nearbyIT: '26 Mins', highwayDistance: '16 Mins', avgRate: '₹6,500 - ₹7,200/Sq.ft' },
    { id: 'chakan', name: 'Chakan', nearbyIT: '35 Mins', highwayDistance: '20 Mins', avgRate: '₹4,500 - ₹5,200/Sq.ft' },
    { id: 'bhosari', name: 'Bhosari', nearbyIT: '28 Mins', highwayDistance: '15 Mins', avgRate: '₹6,200 - ₹7,000/Sq.ft' },
    { id: 'moshi', name: 'Moshi', nearbyIT: '30 Mins', highwayDistance: '18 Mins', avgRate: '₹5,800 - ₹6,600/Sq.ft' },
    { id: 'alandi', name: 'Alandi', nearbyIT: '35 Mins', highwayDistance: '22 Mins', avgRate: '₹5,200 - ₹5,800/Sq.ft' },
    { id: 'sangvi', name: 'Sangvi', nearbyIT: '18 Mins', highwayDistance: '10 Mins', avgRate: '₹7,800 - ₹8,500/Sq.ft' },
    { id: 'pimple-saudagar', name: 'Pimple Saudagar', nearbyIT: '15 Mins', highwayDistance: '8 Mins', avgRate: '₹8,800 - ₹9,800/Sq.ft' },
    { id: 'pimple-gurav', name: 'Pimple Gurav', nearbyIT: '18 Mins', highwayDistance: '10 Mins', avgRate: '₹7,800 - ₹8,600/Sq.ft' },
    { id: 'pimple-nilakh', name: 'Pimple Nilakh', nearbyIT: '14 Mins', highwayDistance: '5 Mins', avgRate: '₹9,500 - ₹10,800/Sq.ft' },
    { id: 'rahatani', name: 'Rahatani', nearbyIT: '15 Mins', highwayDistance: '8 Mins', avgRate: '₹7,800 - ₹8,500/Sq.ft' },
    { id: 'thergaon', name: 'Thergaon', nearbyIT: '12 Mins', highwayDistance: '6 Mins', avgRate: '₹7,500 - ₹8,200/Sq.ft' },
    { id: 'bavdhan', name: 'Bavdhan', nearbyIT: '18 Mins', highwayDistance: '5 Mins', avgRate: '₹8,800 - ₹10,200/Sq.ft' },
    { id: 'pashan', name: 'Pashan', nearbyIT: '18 Mins', highwayDistance: '6 Mins', avgRate: '₹9,500 - ₹10,800/Sq.ft' },
    { id: 'sus', name: 'Sus', nearbyIT: '15 Mins', highwayDistance: '5 Mins', avgRate: '₹7,200 - ₹8,000/Sq.ft' },
    { id: 'balewadi-high-street', name: 'Balewadi High Street', nearbyIT: '14 Mins', highwayDistance: '5 Mins', avgRate: '₹10,500 - ₹12,500/Sq.ft' },
    { id: 'maandvi', name: 'Maandvi', nearbyIT: '8 Mins', highwayDistance: '6 Mins', avgRate: '₹7,400 - ₹8,200/Sq.ft' },
    { id: 'marunji', name: 'Marunji', nearbyIT: '5 Mins', highwayDistance: '6 Mins', avgRate: '₹7,000 - ₹7,800/Sq.ft' },
    { id: 'gahunje', name: 'Gahunje', nearbyIT: '20 Mins', highwayDistance: '1 Min', avgRate: '₹6,500 - ₹7,200/Sq.ft' }
];

export const configs = [
    { id: '2bhk', name: '2 BHK', description: 'Premium 2 BHK layouts engineered for high space optimization and natural cross-ventilation.' },
    { id: '3bhk', name: '3 BHK', description: 'Spacious 3 BHK luxury layouts featuring private entry lobbies and expansive master suites.' },
    { id: '4bhk', name: '4 BHK', description: 'Bespoke 4 BHK ultra-luxury layouts designed for modern joint families requiring supreme utility.' },
    { id: '5bhk', name: '5 BHK', description: 'Duplex and grand 5 BHK layouts representing high-end residential engineering and styling.' },
    { id: 'simplex', name: 'Simplex', description: 'Bespoke single-level simplex flats offering vast open-floor configurations.' },
    { id: 'duplex', name: 'Duplex', description: 'Double-height luxury duplex homes with internal glass staircases and private lounge rooms.' },
    { id: 'penthouse', name: 'Penthouse', description: 'Top-floor sky penthouses featuring private terrace pools and panoramic city views.' }
];

export const propertyTypes = [
    { id: 'flats', name: 'Flats' },
    { id: 'apartments', name: 'Apartments' },
    { id: 'homes', name: 'Homes' },
    { id: 'residences', name: 'Residences' },
    { id: 'projects', name: 'Projects' }
];

export const themes = [
    { id: 'price', name: 'Price & Cost Sheet' },
    { id: 'reviews', name: 'Reviews & Ratings' },
    { id: 'floor-plan', name: 'Floor Plans & Layouts' },
    { id: 'possession-date', name: 'Possession Date & Timelines' },
    { id: 'amenities', name: 'Amenities & Features' },
    { id: 'location-map', name: 'Location Map & Connectivity' },
    { id: 'brochure', name: 'Download Brochure' },
    { id: 'rera', name: 'MahaRERA Registration Details' }
];
