export interface PSEORoute {
    path: string;
    keyword: string;
    title: string;
    description: string;
    h1: string;
    content: string;
    category: 'price' | 'reviews' | 'floor-plan' | 'possession' | 'legacy' | 'configuration';
}

export const pseoRoutes: PSEORoute[] = [
    {
        path: '/supreme-rivana-punawale-price',
        keyword: 'Supreme Rivana Price',
        title: 'Supreme Rivana Punawale Price List 2026 | official Cost Sheets & Payment Plans',
        description: 'Get the latest Supreme Rivana Punawale price list for 2 & 3 BHK luxury apartments. Explore all-inclusive cost sheets, flexible payment plans, and early-bird booking discounts near Hinjewadi.',
        h1: 'Supreme Rivana Punawale Price List & Cost Sheets',
        content: 'Discover the most competitive pricing for luxury living in West Pune. Supreme Rivana offers premium 2 & 3 BHK residences with values starting from competitive price points for the Punawale micro-market. Request the full cost sheet including GST, Stamp Duty, and Registration details.',
        category: 'price'
    },
    {
        path: '/supreme-rivana-punawale-reviews',
        keyword: 'Supreme Rivana Reviews',
        title: 'Supreme Rivana Punawale Reviews | Expert Analysis & Resident Testimonials',
        description: 'Read verified Supreme Rivana Punawale reviews. Expert analysis on construction quality, location advantages near Hinjewadi, and Supreme Universal legacy. See why it is the top-rated project in Punawale.',
        h1: 'Supreme Rivana Punawale: Expert Reviews & Feedback',
        content: 'With a 40-year legacy, Supreme Universal brings unmatched quality to Punawale. Experts highlight the 15-acre riverside township, 31-storey elevation, and 40+ lifestyle amenities as key differentiators. Read what investors and home buyers are saying about Supreme Rivana.',
        category: 'reviews'
    },
    {
        path: '/supreme-rivana-punawale-floor-plan',
        keyword: 'Supreme Rivana Floor Plan',
        title: 'Supreme Rivana Punawale Floor Plans | 2 & 3 BHK Layouts & Carpet Area',
        description: 'Download official Supreme Rivana Punawale floor plans. Detailed 2 BHK and 3 BHK layouts with Vastu compliance, maximum ventilation, and riverside views. Explore the 15-acre township master plan.',
        h1: 'Supreme Rivana Punawale Floor Plans & Master Plan',
        content: 'Space-optimized designs meet luxury aesthetics. Each floor plan at Supreme Rivana is engineered for maximum privacy and ventilation, featuring only 6 units per floor in high-rise 31-storey towers. View 2 BHK and 3 BHK configurations today.',
        category: 'floor-plan'
    },
    {
        path: '/supreme-rivana-punawale-possession-date',
        keyword: 'Supreme Rivana Possession Date',
        title: 'Supreme Rivana Punawale Possession Date | Construction Status & Timeline',
        description: 'Check the official Supreme Rivana Punawale possession date and latest construction updates. Track the progress of Pune\'s most iconic riverside towers by Supreme Universal. RERA compliant timelines.',
        h1: 'Supreme Rivana Punawale Possession & Construction Status',
        content: 'Stay updated with the real-time development of Supreme Rivana. Following RERA guidelines, the project is progressing on schedule, delivering high-rise luxury towers in the heart of Punawale. Contact our sales team for tower-wise possession details.',
        category: 'possession'
    },
    {
        path: '/supreme-riverside-punawale-photos',
        keyword: 'Supreme Riverside Photos',
        title: 'Supreme Riverside Punawale Photos | Now Supreme Rivana Site Images',
        description: 'View actual site photos of Supreme Riverside Punawale (now rebranded as Supreme Rivana). Explore artistic impressions, show flat images, and riverside construction progress of this 15-acre township.',
        h1: 'Supreme Riverside Punawale: Actual Photos & Site Progress',
        content: 'Note: Supreme Riverside has been evolved and rebranded as **Supreme Rivana Punawale**. Explore the latest actual site images, landscape walkthroughs, and premium show flat photos of the most anticipated project in West Pune.',
        category: 'legacy'
    },
    {
        path: '/supreme-2bhk-punawale-flats',
        keyword: 'Supreme 2BHK Punawale',
        title: 'Supreme 2 BHK Punawale | Luxury Riverside Apartments near Hinjewadi',
        description: 'Explore premium 2 BHK flats in Punawale at Supreme Rivana. Featuring spacious balconies, riverside views, and 40+ world-class amenities. The best 2 BHK investment near Mumbai-Pune Expressway.',
        h1: 'Supreme Rivana: Luxury 2 BHK Flats in Punawale',
        content: 'Experience the perfect 2 BHK home designed for modern families and IT professionals. Located near Hinjewadi Phase 1, our 2 BHK residences offer the dual advantage of luxury lifestyle and high appreciation potential in the booming Punawale market.',
        category: 'configuration'
    },
    {
        path: '/supreme-3bhk-punawale-flats',
        keyword: 'Supreme 3BHK Punawale',
        title: 'Supreme 3 BHK Punawale | Ultra-Luxury Waterfront Residences',
        description: 'Discover expansive 3 BHK apartments in Punawale at Supreme Rivana. Experience elite riverside living with premium specifications, multi-tier security, and panoramic views of Pune West.',
        h1: 'Supreme Rivana: Premium 3 BHK Apartments in Punawale',
        content: 'Designed for those who settle for nothing but the best. Our 3 BHK luxury residences at Supreme Rivana Punawale offer sprawling layouts, premium finishes, and exclusive access to 15 acres of landscaped greens and riverside amenities.',
        category: 'configuration'
    }
];
