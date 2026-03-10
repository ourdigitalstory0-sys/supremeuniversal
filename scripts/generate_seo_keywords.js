const locations = ['Punawale', 'Wakad', 'Hinjewadi', 'Tathawade', 'Baner', 'Balewadi', 'PCMC', 'Pune West', 'Mumbai Pune Expressway', 'Ravet', 'Kiwale'];
const propertyTypes = ['Flats', 'Apartments', 'Properties', 'Homes', 'Residences', 'Projects'];
const conditions = ['New', 'Upcoming', 'New Launch', 'Under Construction', 'Pre Launch', 'Ready to Move', 'Newly Built', 'Luxury', 'Ultra Luxury', 'Premium', 'High End', 'Exclusive', 'IGBC Certified', 'Green', 'Smart'];
const configurations = ['2 BHK', '3 BHK', '4 BHK', 'Spacious 2 BHK', 'Spacious 3 BHK', 'Large 3 BHK'];
const intent = ['Buy', 'Invest in', 'Price of', 'Cost of', 'Reviews of', 'Floor Plan of', 'Brochure of', 'Location of', 'Master Plan of', 'Amenities of'];
const nearby = ['near Hinjewadi IT Park', 'near Wakad Bridge', 'near Mumbai Pune Highway', 'near Phoenix Mall Wakad', 'near Indira College', 'near Lotus Business School', 'near Bhumkar Chowk', 'near Dange Chowk'];

let keywords = new Set();
// Core Brand Keywords
keywords.add("Supreme Rivana");
keywords.add("Supreme Rivana Punawale");
keywords.add("Supreme Rivana Pune");
keywords.add("Supreme Universal Punawale");

// Method 1: Config + Type + Location
for (const config of configurations) {
    for (const type of propertyTypes) {
        for (const loc of locations) {
            keywords.add(`${config} ${type} in ${loc}`);
            keywords.add(`${config} luxury ${type} in ${loc}`);
            keywords.add(`Buy ${config} ${type} in ${loc}`);
            keywords.add(`Price of ${config} ${type} in ${loc}`);
        }
    }
}

// Method 2: Condition + Type + Location
for (const cond of conditions) {
    for (const type of propertyTypes) {
        for (const loc of locations) {
            keywords.add(`${cond} ${type} in ${loc}`);
            keywords.add(`${cond} ${type} in ${loc} Pune`);
        }
    }
}

// Method 3: Intent + Brand
for (const int of intent) {
    keywords.add(`${int} Supreme Rivana`);
    keywords.add(`${int} Supreme Rivana Punawale`);
    keywords.add(`${int} Supreme Rivana 2 BHK`);
    keywords.add(`${int} Supreme Rivana 3 BHK`);
}

// Method 4: Type + Nearby
for (const type of propertyTypes) {
    for (const near of nearby) {
        keywords.add(`${type} ${near}`);
        keywords.add(`Luxury ${type} ${near}`);
        keywords.add(`2 BHK ${type} ${near}`);
        keywords.add(`3 BHK ${type} ${near}`);
    }
}

// Method 5: Long tail brand specific
const brandLongTail = [
    "Supreme Rivana Punawale price list 2026",
    "Supreme Rivana river view apartments",
    "Supreme Rivana site visit booking",
    "Supreme Rivana construction update",
    "Supreme Rivana RERA number PM1261012502656",
    "Supreme Rivana Wakad annex",
    "Supreme Rivana Tathawade border",
    "Supreme Rivana possession date",
    "Supreme Rivana master plan review",
    "Supreme Rivana vs Puneville",
    "Supreme Rivana vs ANP Autograph",
    "Supreme Rivana vs 24k Living",
    "Luxury flats in Punawale by Supreme Universal",
    "Premium 3 BHK in Punawale under 1.5 Cr",
    "Best 2 BHK in Punawale under 1 Cr",
    "Top 10 luxury projects in Punawale",
    "Best property investment in Pune West 2026",
    "High ROI luxury flats near Hinjewadi",
    "Flats near Hinjewadi Phase 1",
    "Gated community in Punawale",
    "Flats with infinity pool in Punawale",
    "Real estate near upcoming Pune Metro Line 3",
    "NRI investment properties in Pune",
    "Properties near proposed Pune Ring Road"
];

brandLongTail.forEach(kw => keywords.add(kw));

const kwArray = Array.from(keywords);
console.log(`Generated ${kwArray.length} unique keywords.`);

import fs from 'fs';
fs.writeFileSync('scripts/generated_keywords.txt', kwArray.join(', '));
console.log('Saved to scripts/generated_keywords.txt');
