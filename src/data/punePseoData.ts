export interface LocalityInfo {
    id: string;
    name: string;
    nearbyIT: string;
    highwayDistance: string;
    avgRate: string;
    rentalYield: string;
    landmarks: string[];
    metroAccess: string;
    nearbyLocalities: string[];
}

export const localities: LocalityInfo[] = [
    { 
        id: 'punawale', 
        name: 'Punawale', 
        nearbyIT: '10 Mins', 
        highwayDistance: '2 Mins', 
        avgRate: '₹6,800 - ₹7,500/Sq.ft',
        rentalYield: '4.6% - 5.2%',
        landmarks: ['Lotus Business School', 'Mula River Promenade', 'Punawale Multi-Speciality Clinic'],
        metroAccess: '5 mins to Hinjewadi-Shivajinagar Line 3 station',
        nearbyLocalities: ['tathawade', 'wakad', 'hinjewadi', 'ravet', 'kiwale']
    },
    { 
        id: 'hinjewadi', 
        name: 'Hinjewadi', 
        nearbyIT: '0 Mins', 
        highwayDistance: '8 Mins', 
        avgRate: '₹7,500 - ₹8,800/Sq.ft',
        rentalYield: '5.8% - 6.4%',
        landmarks: ['Rajiv Gandhi Infotech Park', 'Quadron Business Park', 'Embassy TechZone'],
        metroAccess: 'Direct access to Hinjewadi Phase 1 & 2 Metro Stations',
        nearbyLocalities: ['wakad', 'punawale', 'mahalunge', 'marunji', 'tathawade']
    },
    { 
        id: 'wakad', 
        name: 'Wakad', 
        nearbyIT: '12 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹8,500 - ₹9,800/Sq.ft',
        rentalYield: '4.8% - 5.4%',
        landmarks: ['Phoenix Mall of the Millennium', 'Bhumkar Chowk', 'Indira Group of Institutes'],
        metroAccess: '7 mins to Wakad Flyover Metro Connector',
        nearbyLocalities: ['punawale', 'hinjewadi', 'tathawade', 'thergaon', 'pimple-saudagar']
    },
    { 
        id: 'baner', 
        name: 'Baner', 
        nearbyIT: '18 Mins', 
        highwayDistance: '6 Mins', 
        avgRate: '₹9,800 - ₹11,500/Sq.ft',
        rentalYield: '4.2% - 4.8%',
        landmarks: ['Balewadi High Street', 'Jupiter Hospital', 'Pan Card Club Road'],
        metroAccess: 'Connected via Balewadi Phata Metro Station',
        nearbyLocalities: ['balewadi', 'mahalunge', 'pashan', 'bavdhan', 'wakad']
    },
    { 
        id: 'mahalunge', 
        name: 'Mahalunge', 
        nearbyIT: '8 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹7,800 - ₹8,600/Sq.ft',
        rentalYield: '5.0% - 5.5%',
        landmarks: ['Shree Shiv Chhatrapati Sports Complex', 'High-Tech Hi-Street', 'Hinjewadi-Mahalunge Bridge'],
        metroAccess: 'Direct linkage to proposed Ring Road & Metro Phase 2',
        nearbyLocalities: ['hinjewadi', 'baner', 'balewadi', 'sus', 'punawale']
    },
    { 
        id: 'balewadi', 
        name: 'Balewadi', 
        nearbyIT: '15 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹9,200 - ₹10,800/Sq.ft',
        rentalYield: '4.5% - 5.0%',
        landmarks: ['Balewadi Sports Complex', 'High Street Promenade', 'Bharati Vidyapeeth'],
        metroAccess: 'Balewadi Metro Station on Line 3',
        nearbyLocalities: ['baner', 'mahalunge', 'wakad', 'balewadi-high-street', 'pimple-nilakh']
    },
    { 
        id: 'tathawade', 
        name: 'Tathawade', 
        nearbyIT: '12 Mins', 
        highwayDistance: '3 Mins', 
        avgRate: '₹7,000 - ₹7,800/Sq.ft',
        rentalYield: '5.0% - 5.6%',
        landmarks: ['JSPM Imperial College', 'Indira College of Engineering', 'Aditya Birla Memorial Hospital'],
        metroAccess: '4 mins to Dange Chowk Transit Hub',
        nearbyLocalities: ['punawale', 'wakad', 'thergaon', 'ravet', 'hinjewadi']
    },
    { 
        id: 'ravet', 
        name: 'Ravet', 
        nearbyIT: '15 Mins', 
        highwayDistance: '2 Mins', 
        avgRate: '₹6,800 - ₹7,600/Sq.ft',
        rentalYield: '4.5% - 5.1%',
        landmarks: ['Mumbai-Pune Expressway Zero Point', 'DY Patil International University', 'Pawana Riverfront'],
        metroAccess: 'Direct connection to Akurdi Railway & BRTS Corridor',
        nearbyLocalities: ['punawale', 'kiwale', 'tathawade', 'akurdi', 'chinchwad']
    },
    { 
        id: 'kiwale', 
        name: 'Kiwale', 
        nearbyIT: '18 Mins', 
        highwayDistance: '1 Min', 
        avgRate: '₹6,200 - ₹6,800/Sq.ft',
        rentalYield: '4.8% - 5.2%',
        landmarks: ['Mukund Bhavan', 'Dehu Road Cantonment', 'MCA International Stadium Gahunje'],
        metroAccess: 'Expressway corridor express connectivity',
        nearbyLocalities: ['ravet', 'somatane', 'gahunje', 'punawale', 'talegaon']
    },
    { 
        id: 'akurdi', 
        name: 'Akurdi', 
        nearbyIT: '20 Mins', 
        highwayDistance: '8 Mins', 
        avgRate: '₹7,200 - ₹8,000/Sq.ft',
        rentalYield: '4.4% - 4.9%',
        landmarks: ['DY Patil College Campus', 'Akurdi Railway Station', 'Bajaj Auto Corporate Hub'],
        metroAccess: 'Pimpri-Chinchwad Metro Corridor Station',
        nearbyLocalities: ['chinchwad', 'ravet', 'pimpri', 'nigdi', 'punawale']
    },
    { 
        id: 'chinchwad', 
        name: 'Chinchwad', 
        nearbyIT: '22 Mins', 
        highwayDistance: '12 Mins', 
        avgRate: '₹7,800 - ₹8,500/Sq.ft',
        rentalYield: '4.2% - 4.7%',
        landmarks: ['Elpro City Square Mall', 'Auto Cluster Exhibition Center', 'Aditya Birla Memorial Hospital'],
        metroAccess: 'Chinchwad Metro Station',
        nearbyLocalities: ['pimpri', 'akurdi', 'thergaon', 'pimple-saudagar', 'punawale']
    },
    { 
        id: 'pimpri', 
        name: 'Pimpri', 
        nearbyIT: '25 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹7,500 - ₹8,200/Sq.ft',
        rentalYield: '4.1% - 4.6%',
        landmarks: ['Dr. DY Patil Medical College', 'Finolex Chowk', 'PCMC Administrative HQ'],
        metroAccess: 'PCMC Metro Station terminus',
        nearbyLocalities: ['chinchwad', 'bhosari', 'sangvi', 'pimple-saudagar', 'akurdi']
    },
    { 
        id: 'somatane', 
        name: 'Somatane', 
        nearbyIT: '25 Mins', 
        highwayDistance: '0 Mins', 
        avgRate: '₹5,500 - ₹6,200/Sq.ft',
        rentalYield: '5.2% - 5.8%',
        landmarks: ['Supreme Villagio Township', 'Somatane Toll Plaza', 'Talegaon Industrial Enclave'],
        metroAccess: 'Fast-track connectivity via Mumbai-Pune Expressway',
        nearbyLocalities: ['talegaon', 'kiwale', 'gahunje', 'ravet', 'punawale']
    },
    { 
        id: 'talegaon', 
        name: 'Talegaon', 
        nearbyIT: '30 Mins', 
        highwayDistance: '0 Mins', 
        avgRate: '₹4,800 - ₹5,500/Sq.ft',
        rentalYield: '5.5% - 6.0%',
        landmarks: ['Talegaon MIDC Auto Hub', 'General Motors Industrial Park', 'Indrayani River Basin'],
        metroAccess: 'Talegaon Suburban Railway Station',
        nearbyLocalities: ['somatane', 'chakan', 'kiwale', 'gahunje', 'punawale']
    },
    { 
        id: 'koregaon-park', 
        name: 'Koregaon Park', 
        nearbyIT: '30 Mins', 
        highwayDistance: '20 Mins', 
        avgRate: '₹14,000 - ₹18,000/Sq.ft',
        rentalYield: '3.6% - 4.2%',
        landmarks: ['Osho International Commune', 'Lane 5 Luxury Cafes', 'German Bakery Enclave'],
        metroAccess: 'Ruby Hall Clinic Metro Station (10 mins)',
        nearbyLocalities: ['kalyani-nagar', 'camp', 'viman-nagar', 'mundhwa', 'shivajinagar']
    },
    { 
        id: 'kalyani-nagar', 
        name: 'Kalyani Nagar', 
        nearbyIT: '30 Mins', 
        highwayDistance: '18 Mins', 
        avgRate: '₹12,500 - ₹15,500/Sq.ft',
        rentalYield: '3.8% - 4.4%',
        landmarks: ['Cerebrum IT Park', 'Joggers Park', 'Bishop\'s Co-Ed School'],
        metroAccess: 'Kalyani Nagar Metro Station',
        nearbyLocalities: ['koregaon-park', 'viman-nagar', 'kharadi', 'mundhwa', 'camp']
    },
    { 
        id: 'viman-nagar', 
        name: 'Viman Nagar', 
        nearbyIT: '28 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹11,000 - ₹13,500/Sq.ft',
        rentalYield: '4.0% - 4.6%',
        landmarks: ['Phoenix Marketcity Pune', 'Symbiosis International University', 'Pune International Airport'],
        metroAccess: 'Viman Nagar Metro Station',
        nearbyLocalities: ['kalyani-nagar', 'lohegaon', 'kharadi', 'dhanori', 'koregaon-park']
    },
    { 
        id: 'kharadi', 
        name: 'Kharadi', 
        nearbyIT: '25 Mins', 
        highwayDistance: '12 Mins', 
        avgRate: '₹9,000 - ₹10,500/Sq.ft',
        rentalYield: '4.8% - 5.5%',
        landmarks: ['EON Free Zone IT Park', 'World Trade Center Pune', 'Radisson Blu Hotel'],
        metroAccess: 'Ramwadi Metro Station & Extension',
        nearbyLocalities: ['viman-nagar', 'wagholi', 'hadapsar', 'mundhwa', 'keshav-nagar']
    },
    { 
        id: 'hadapsar', 
        name: 'Hadapsar', 
        nearbyIT: '28 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹8,000 - ₹9,500/Sq.ft',
        rentalYield: '4.6% - 5.2%',
        landmarks: ['Magarpatta Cybercity', 'Amanora Town Centre Mall', 'SP Infocity'],
        metroAccess: 'Proposed Metro Line 4 Hub',
        nearbyLocalities: ['kharadi', 'mundhwa', 'manjri', 'undri', 'keshav-nagar']
    },
    { 
        id: 'undri', 
        name: 'Undri', 
        nearbyIT: '35 Mins', 
        highwayDistance: '20 Mins', 
        avgRate: '₹6,000 - ₹6,800/Sq.ft',
        rentalYield: '4.3% - 4.9%',
        landmarks: ['Bishop\'s School Undri', 'Euro School', 'Corinthians Resort & Club'],
        metroAccess: 'Swargate Metro feeder connection',
        nearbyLocalities: ['nibm', 'katraj', 'hadapsar', 'kondhwa', 'swargate']
    },
    { 
        id: 'nibm', 
        name: 'NIBM', 
        nearbyIT: '32 Mins', 
        highwayDistance: '18 Mins', 
        avgRate: '₹7,500 - ₹8,800/Sq.ft',
        rentalYield: '4.4% - 5.0%',
        landmarks: ['National Institute of Bank Management', 'Dorabjee\'s Royale Heritage Mall', 'Delhi Public School'],
        metroAccess: 'Connected to Swargate Multimodal Interchange',
        nearbyLocalities: ['undri', 'katraj', 'camp', 'swargate', 'hadapsar']
    },
    { 
        id: 'katraj', 
        name: 'Katraj', 
        nearbyIT: '30 Mins', 
        highwayDistance: '10 Mins', 
        avgRate: '₹6,800 - ₹7,600/Sq.ft',
        rentalYield: '4.2% - 4.8%',
        landmarks: ['Rajiv Gandhi Zoological Park', 'Katraj Lake & Ghat', 'Bharati Vidyapeeth Deemed University'],
        metroAccess: 'Proposed Swargate-Katraj Metro Extension',
        nearbyLocalities: ['nibm', 'swargate', 'undri', 'kothrud', 'bavdhan']
    },
    { 
        id: 'kothrud', 
        name: 'Kothrud', 
        nearbyIT: '25 Mins', 
        highwayDistance: '10 Mins', 
        avgRate: '₹12,000 - ₹14,500/Sq.ft',
        rentalYield: '3.7% - 4.3%',
        landmarks: ['MIT World Peace University', 'City Pride Kothrud', 'Vanaz Corner Hub'],
        metroAccess: 'Vanaz & Ideal Colony Metro Stations',
        nearbyLocalities: ['bavdhan', 'shivajinagar', 'pashan', 'swargate', 'deccan']
    },
    { 
        id: 'shivajinagar', 
        name: 'Shivajinagar', 
        nearbyIT: '25 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹15,000 - ₹19,000/Sq.ft',
        rentalYield: '3.5% - 4.1%',
        landmarks: ['College of Engineering Pune (COEP)', 'Shivajinagar District Court', 'Sancheti Hospital'],
        metroAccess: 'Shivajinagar Underground Multimodal Interchange',
        nearbyLocalities: ['kothrud', 'koregaon-park', 'camp', 'swargate', 'baner']
    },
    { 
        id: 'camp', 
        name: 'Camp', 
        nearbyIT: '28 Mins', 
        highwayDistance: '18 Mins', 
        avgRate: '₹13,000 - ₹16,000/Sq.ft',
        rentalYield: '3.6% - 4.2%',
        landmarks: ['MG Road Shopping Street', 'Command Hospital Southern Command', 'Race Course Pune'],
        metroAccess: 'Pune Railway Station Metro Interchange (5 mins)',
        nearbyLocalities: ['koregaon-park', 'shivajinagar', 'swargate', 'kalyani-nagar', 'nibm']
    },
    { 
        id: 'swargate', 
        name: 'Swargate', 
        nearbyIT: '28 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹11,000 - ₹13,000/Sq.ft',
        rentalYield: '3.8% - 4.3%',
        landmarks: ['Swargate ST Bus Terminal', 'Sarasbaug Ganpati Temple', 'Nehru Stadium'],
        metroAccess: 'Swargate Underground Metro Station (North-South line)',
        nearbyLocalities: ['shivajinagar', 'camp', 'katraj', 'kothrud', 'nibm']
    },
    { 
        id: 'dhanori', 
        name: 'Dhanori', 
        nearbyIT: '28 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹6,800 - ₹7,500/Sq.ft',
        rentalYield: '4.5% - 5.1%',
        landmarks: ['Dhanori Lake', 'Pragati International School', 'Airport Approach Road'],
        metroAccess: 'Ramwadi Metro feeder connection',
        nearbyLocalities: ['vishrantwadi', 'viman-nagar', 'lohegaon', 'tingre-nagar', 'kharadi']
    },
    { 
        id: 'vishrantwadi', 
        name: 'Vishrantwadi', 
        nearbyIT: '25 Mins', 
        highwayDistance: '12 Mins', 
        avgRate: '₹7,200 - ₹8,000/Sq.ft',
        rentalYield: '4.4% - 4.9%',
        landmarks: ['Alandi Road Chowk', 'Kasturba Gandhi Hospital', 'Tingre Nagar Promenade'],
        metroAccess: 'Bhosari-Swargate Metro link proximity',
        nearbyLocalities: ['dhanori', 'lohegaon', 'viman-nagar', 'bhosari', 'shivajinagar']
    },
    { 
        id: 'lohegaon', 
        name: 'Lohegaon', 
        nearbyIT: '28 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹6,200 - ₹6,900/Sq.ft',
        rentalYield: '4.8% - 5.3%',
        landmarks: ['Pune Air Force Station', 'DY Patil Knowledge City', 'Sant Tukaram Temple Complex'],
        metroAccess: 'Viman Nagar Metro connection (12 mins)',
        nearbyLocalities: ['viman-nagar', 'dhanori', 'wagholi', 'vishrantwadi', 'kharadi']
    },
    { 
        id: 'wagholi', 
        name: 'Wagholi', 
        nearbyIT: '22 Mins', 
        highwayDistance: '12 Mins', 
        avgRate: '₹6,000 - ₹6,800/Sq.ft',
        rentalYield: '4.9% - 5.4%',
        landmarks: ['Wakeshwer Temple', 'Lexicon International School', 'Raisoni Group of Institutions'],
        metroAccess: 'Proposed Pune Metro Line 4 Extension',
        nearbyLocalities: ['kharadi', 'keshav-nagar', 'lohegaon', 'manjri', 'viman-nagar']
    },
    { 
        id: 'mundhwa', 
        name: 'Mundhwa', 
        nearbyIT: '22 Mins', 
        highwayDistance: '12 Mins', 
        avgRate: '₹8,200 - ₹9,500/Sq.ft',
        rentalYield: '4.6% - 5.2%',
        landmarks: ['Supreme Towers', 'Passport Seva Kendra Mundhwa', 'Ghorpadi Road Bridge'],
        metroAccess: 'Kalyani Nagar Metro Link (7 mins)',
        nearbyLocalities: ['keshav-nagar', 'kharadi', 'hadapsar', 'koregaon-park', 'kalyani-nagar']
    },
    { 
        id: 'keshav-nagar', 
        name: 'Keshav Nagar', 
        nearbyIT: '24 Mins', 
        highwayDistance: '14 Mins', 
        avgRate: '₹7,200 - ₹8,000/Sq.ft',
        rentalYield: '4.7% - 5.3%',
        landmarks: ['Mundhwa-Keshav Nagar River Bridge', 'Orbis School', 'Lonkar High School'],
        metroAccess: 'Kharadi South Metro connector access',
        nearbyLocalities: ['mundhwa', 'kharadi', 'hadapsar', 'manjri', 'wagholi']
    },
    { 
        id: 'manjri', 
        name: 'Manjri', 
        nearbyIT: '26 Mins', 
        highwayDistance: '16 Mins', 
        avgRate: '₹6,500 - ₹7,200/Sq.ft',
        rentalYield: '4.5% - 5.0%',
        landmarks: ['Vasantdada Sugar Institute', 'Serum Institute of India Campus', 'Manjri Greens Club'],
        metroAccess: 'Hadapsar Railway & Metro Hub proximity',
        nearbyLocalities: ['hadapsar', 'keshav-nagar', 'wagholi', 'kharadi', 'undri']
    },
    { 
        id: 'chakan', 
        name: 'Chakan', 
        nearbyIT: '35 Mins', 
        highwayDistance: '20 Mins', 
        avgRate: '₹4,500 - ₹5,200/Sq.ft',
        rentalYield: '5.5% - 6.2%',
        landmarks: ['Chakan Auto MIDC Special Economic Zone', 'Mercedes-Benz India Plant', 'Volkswagen Campus'],
        metroAccess: 'Proposed Chakan-Bhosari Metro Line',
        nearbyLocalities: ['bhosari', 'moshi', 'alandi', 'talegaon', 'somatane']
    },
    { 
        id: 'bhosari', 
        name: 'Bhosari', 
        nearbyIT: '28 Mins', 
        highwayDistance: '15 Mins', 
        avgRate: '₹6,200 - ₹7,000/Sq.ft',
        rentalYield: '4.7% - 5.2%',
        landmarks: ['Bhosari MIDC Hub', 'Sahyadri Hospital Bhosari', 'Indrayani Nagar Sports Club'],
        metroAccess: 'Nashik Phata Metro Interchange',
        nearbyLocalities: ['pimpri', 'chakan', 'moshi', 'alandi', 'vishrantwadi']
    },
    { 
        id: 'moshi', 
        name: 'Moshi', 
        nearbyIT: '30 Mins', 
        highwayDistance: '18 Mins', 
        avgRate: '₹5,800 - ₹6,600/Sq.ft',
        rentalYield: '4.6% - 5.1%',
        landmarks: ['Pune International Exhibition and Convention Centre (PIECC)', 'Alandi-Dehu Corridor', 'Spine Road'],
        metroAccess: 'Proposed Spine Road Metro Link',
        nearbyLocalities: ['bhosari', 'alandi', 'chakan', 'chinchwad', 'pimpri']
    },
    { 
        id: 'alandi', 
        name: 'Alandi', 
        nearbyIT: '35 Mins', 
        highwayDistance: '22 Mins', 
        avgRate: '₹5,200 - ₹5,800/Sq.ft',
        rentalYield: '4.3% - 4.8%',
        landmarks: ['Sant Dnyaneshwar Maharaj Sansthan', 'MIT Academy of Engineering', 'Indrayani River Ghats'],
        metroAccess: 'Alandi-Dighi Metro feeder corridor',
        nearbyLocalities: ['moshi', 'bhosari', 'chakan', 'vishrantwadi', 'dhanori']
    },
    { 
        id: 'sangvi', 
        name: 'Sangvi', 
        nearbyIT: '18 Mins', 
        highwayDistance: '10 Mins', 
        avgRate: '₹7,800 - ₹8,500/Sq.ft',
        rentalYield: '4.5% - 5.0%',
        landmarks: ['Old Sangvi River Garden', 'Spicer Adventist University', 'Aundh-Sangvi Bridge'],
        metroAccess: 'Dapodi Metro Station (7 mins)',
        nearbyLocalities: ['pimple-gurav', 'pimple-saudagar', 'pimpri', 'pashan', 'baner']
    },
    { 
        id: 'pimple-saudagar', 
        name: 'Pimple Saudagar', 
        nearbyIT: '15 Mins', 
        highwayDistance: '8 Mins', 
        avgRate: '₹8,800 - ₹9,800/Sq.ft',
        rentalYield: '4.9% - 5.4%',
        landmarks: ['Linear Park Promenade', 'Rosary School', 'Govind Garden Junction'],
        metroAccess: 'Kasarwadi Metro Station connector',
        nearbyLocalities: ['wakad', 'rahatani', 'pimple-gurav', 'thergaon', 'punawale']
    },
    { 
        id: 'pimple-gurav', 
        name: 'Pimple Gurav', 
        nearbyIT: '18 Mins', 
        highwayDistance: '10 Mins', 
        avgRate: '₹7,800 - ₹8,600/Sq.ft',
        rentalYield: '4.6% - 5.1%',
        landmarks: ['Dinosaur Park', 'Kate Puram Chowk', 'PCMC Health Center'],
        metroAccess: 'Phugewadi Metro Station link',
        nearbyLocalities: ['pimple-saudagar', 'sangvi', 'rahatani', 'pimpri', 'wakad']
    },
    { 
        id: 'pimple-nilakh', 
        name: 'Pimple Nilakh', 
        nearbyIT: '14 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹9,500 - ₹10,800/Sq.ft',
        rentalYield: '4.7% - 5.3%',
        landmarks: ['Vishal Nagar High Street', 'Mula River Green Belt', 'Chavan Bagh Club'],
        metroAccess: 'Balewadi Phata Metro Station (8 mins)',
        nearbyLocalities: ['baner', 'balewadi', 'wakad', 'pimple-saudagar', 'punawale']
    },
    { 
        id: 'rahatani', 
        name: 'Rahatani', 
        nearbyIT: '15 Mins', 
        highwayDistance: '8 Mins', 
        avgRate: '₹7,800 - ₹8,500/Sq.ft',
        rentalYield: '4.7% - 5.2%',
        landmarks: ['SNBP International School', 'Rahatani Chowk', 'Godrej Hillside Hub'],
        metroAccess: 'Dange Chowk Metro link access',
        nearbyLocalities: ['pimple-saudagar', 'thergaon', 'wakad', 'pimpri', 'punawale']
    },
    { 
        id: 'thergaon', 
        name: 'Thergaon', 
        nearbyIT: '12 Mins', 
        highwayDistance: '6 Mins', 
        avgRate: '₹7,500 - ₹8,200/Sq.ft',
        rentalYield: '4.8% - 5.3%',
        landmarks: ['Dange Chowk Multimodal Hub', 'Thergaon Boat Club', 'Aditya Birla Memorial Hospital'],
        metroAccess: 'Direct access to Dange Chowk BRTS & proposed Metro',
        nearbyLocalities: ['wakad', 'tathawade', 'rahatani', 'chinchwad', 'punawale']
    },
    { 
        id: 'bavdhan', 
        name: 'Bavdhan', 
        nearbyIT: '18 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹8,800 - ₹10,200/Sq.ft',
        rentalYield: '4.3% - 4.8%',
        landmarks: ['Chandani Chowk Multimodal Flyover', 'DRDO Campus', 'Ryan International School'],
        metroAccess: 'Vanaz Metro Station (10 mins via Chandani Chowk)',
        nearbyLocalities: ['kothrud', 'pashan', 'baner', 'sus', 'wakad']
    },
    { 
        id: 'pashan', 
        name: 'Pashan', 
        nearbyIT: '18 Mins', 
        highwayDistance: '6 Mins', 
        avgRate: '₹9,500 - ₹10,800/Sq.ft',
        rentalYield: '4.2% - 4.7%',
        landmarks: ['Pashan Lake Bird Sanctuary', 'ARDE DRDO Center', 'Sus-Pashan Link Road'],
        metroAccess: 'Balewadi Metro Station link',
        nearbyLocalities: ['baner', 'bavdhan', 'sus', 'kothrud', 'mahalunge']
    },
    { 
        id: 'sus', 
        name: 'Sus', 
        nearbyIT: '15 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹7,200 - ₹8,000/Sq.ft',
        rentalYield: '4.9% - 5.5%',
        landmarks: ['Sus Gaon Hill Sanctuary', 'Abhinav College', 'Symbiosis Lavale Link'],
        metroAccess: 'Hinjewadi Phase 1 Metro link access',
        nearbyLocalities: ['mahalunge', 'baner', 'pashan', 'bavdhan', 'hinjewadi']
    },
    { 
        id: 'balewadi-high-street', 
        name: 'Balewadi High Street', 
        nearbyIT: '14 Mins', 
        highwayDistance: '5 Mins', 
        avgRate: '₹10,500 - ₹12,500/Sq.ft',
        rentalYield: '4.4% - 4.9%',
        landmarks: ['Balewadi High Street Dining & Retail Strip', 'Cummins India Office Campus', 'Siemens Technology Hub'],
        metroAccess: 'Balewadi Stadium Metro Station',
        nearbyLocalities: ['balewadi', 'baner', 'mahalunge', 'wakad', 'pimple-nilakh']
    },
    { 
        id: 'maandvi', 
        name: 'Maandvi', 
        nearbyIT: '8 Mins', 
        highwayDistance: '6 Mins', 
        avgRate: '₹7,400 - ₹8,200/Sq.ft',
        rentalYield: '5.2% - 5.7%',
        landmarks: ['Mula Riverfront Valley', 'Hinjewadi Phase 1 Bypass', 'Wipro Circle Link'],
        metroAccess: '5 mins to Hinjewadi Phase 1 Station',
        nearbyLocalities: ['hinjewadi', 'marunji', 'punawale', 'wakad', 'tathawade']
    },
    { 
        id: 'marunji', 
        name: 'Marunji', 
        nearbyIT: '5 Mins', 
        highwayDistance: '6 Mins', 
        avgRate: '₹7,000 - ₹7,800/Sq.ft',
        rentalYield: '5.4% - 6.0%',
        landmarks: ['Marunji Chowk', 'Alard Group of Institutions', 'Kolte Patil Life Republic Gateway'],
        metroAccess: 'Hinjewadi Line 3 Metro Station (5 mins)',
        nearbyLocalities: ['hinjewadi', 'punawale', 'maandvi', 'tathawade', 'wakad']
    },
    { 
        id: 'gahunje', 
        name: 'Gahunje', 
        nearbyIT: '20 Mins', 
        highwayDistance: '1 Min', 
        avgRate: '₹6,500 - ₹7,200/Sq.ft',
        rentalYield: '4.8% - 5.4%',
        landmarks: ['MCA Pune International Cricket Stadium', 'Expressway Green Ridge', 'Sentosa Water Park'],
        metroAccess: 'Dehu Road Suburban Link',
        nearbyLocalities: ['somatane', 'kiwale', 'ravet', 'talegaon', 'punawale']
    }
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
