import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoKeywords } from '../data/seoKeywords';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title: propTitle,
    description: propDescription,
    keywords = seoKeywords,
    image = '/hero-bg.png',
    url: propUrl
}: SEOProps) => {
    const { pathname } = useLocation();
    const domain = 'https://www.supreme-universal.in';

    // Route-specific metadata mapping for section routes
    const routeMetadata: Record<string, { title: string; description: string }> = {
        '/': {
            title: 'Supreme Rivana Punawale | Luxury 2 & 3 BHK Flats near Hinjewadi | Supreme Rivana Price & Brochure',
            description: 'Supreme Rivana Punawale by Supreme Universal: Official site for ultra-luxury 2 & 3 BHK riverside apartments near Hinjewadi IT Park. Explore Supreme Rivana Punawale floor plans, 2 BHK price list, construction status, and 40+ world-class amenities in Punawale, West Pune. High ROI investment near Mumbai-Pune Expressway. Book Site Visit!'
        },
        '/supreme-rivana-punawale-overview': {
            title: 'Supreme Rivana Punawale Project Overview | 15-Acre Riverside Township Pune',
            description: 'Discover Supreme Rivana Punawale, a 15-acre IGBC certified luxury township by Supreme Universal. Featuring 31-storey towers, riverside living, and premium 2 & 3 BHK Flats near Wakad-Hinjewadi Link Road. The benchmark of Real Estate in West Pune 2026.'
        },
        '/supreme-rivana-punawale-amenities': {
            title: '40+ Luxury Amenities | Supreme Rivana Punawale | Infinity Pool & Skywalk',
            description: 'Experience elite living at Supreme Rivana Punawale with 40+ world-class amenities: Infinity Pool, Skywalk Bridge, Pro-Level Sports Courts, Multi-tier Clubhouse, and Riverside Promenade. Luxury apartments in Punawale designed for the modern executive.'
        },
        '/supreme-rivana-punawale-floor-plans': {
            title: 'Supreme Rivana Floor Plan & Price List | 2 & 3 BHK Configurations Punawale',
            description: 'View detailed Supreme Rivana floor plans and carpet area for 2 BHK and 3 BHK luxury flats. Optimized Vastu-compliant layouts with maximum ventilation near Hinjewadi IT Park. Get the official Supreme Rivana Punawale price list and cost sheets today.'
        },
        '/supreme-rivana-punawale-gallery': {
            title: 'Supreme Rivana Gallery | Actual Site Photos & Show Flat Images',
            description: 'A visual tour of Supreme Rivana Punawale. View artistic impressions, actual construction status, and show flat images of the most premium riverside residences in Pune West. See the 15-acre township lifestyle.'
        },
        '/supreme-rivana-punawale-location': {
            title: 'Supreme Rivana Location & Connectivity | Near Hinjewadi IT Park & Wakad',
            description: 'Strategically located at Chhatrapati Shivaji Maharaj Chowk, Punawale. Supreme Rivana offers unmatched connectivity to Hinjewadi Phase 1, Mumbai-Pune Expressway Bypass, and upcoming Pune Metro Line 3. Prime luxury apartments in West Pune.'
        },
        '/supreme-rivana-punawale-faq': {
            title: 'Supreme Rivana FAQ | RERA Number, Possession Date & Booking Details',
            description: 'Find answers to every question about Supreme Rivana Punawale: MahaRERA number, possession dates, maintenance costs, and booking process. Your complete guide to buying property in Punawale by Supreme Universal.'
        },
        '/supreme-rivana-punawale-contact': {
            title: 'Contact Supreme Rivana Punawale Sales | Book A VIP Site Visit',
            description: 'Schedule your VIP site visit to Supreme Rivana Punawale. Contact our authorized sales gallery for exclusive early-bird offers, inventory updates, and personalized price presentations for 2 & 3 BHK flats.'
        },
        '/supreme-rivana-punawale-price-list': {
            title: 'Supreme Rivana Punawale Price List 2026 | 2 BHK & 3 BHK Cost Sheets',
            description: 'Official Supreme Rivana Price List 2026. Get all-inclusive cost sheets for 2 BHK and 3 BHK luxury apartments in Punawale. Explore limited-time booking offers and down-payment discounts near Hinjewadi.'
        },
        '/supreme-rivana-punawale-comparison': {
            title: 'Supreme Rivana vs Puneville | Comparison Review 2026 | Best Project in Punawale',
            description: 'Supreme Rivana Punawale vs Puneville vs ANP Autograph. See why Supreme Universal\'s 15-acre riverside township is the #1 choice for investment and luxury living in West Pune based on price, amenities, and legacy.'
        }
    };

    const currentMetadata = routeMetadata[pathname] || routeMetadata['/'];
    const title = propTitle || currentMetadata.title;
    const description = propDescription || currentMetadata.description;
    
    // Standardize URL: Force non-www and enforce trailing slashes for root/GSC consistency
    const cleanPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    const url = propUrl || `https://www.supreme-universal.in${cleanPathname}`;
    const fullTitle = title.includes('Supreme Rivana') ? title : `${title} | Supreme Rivana Punawale`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Multi-Engine Directives */}
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large" />
            <meta name="bingbot" content="index, follow" />
            <meta name="slurp" content="index, follow" />
            <meta name="rating" content="general" />
            <meta name="revisit-after" content="3 days" />
            <meta name="distribution" content="global" />
            <meta name="language" content="English" />

            {/* International Targeting (Phase 10) */}
            <link rel="alternate" href={url} hrefLang="en-IN" />
            <link rel="alternate" href={url} hrefLang="en-US" />
            <link rel="alternate" href={url} hrefLang="en-GB" />
            <link rel="alternate" href={url} hrefLang="en-AE" />
            <link rel="alternate" href={url} hrefLang="x-default" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Supreme Rivana Punawale" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional SEO Tags */}
            <meta name="author" content="Supreme Universal" />
            <meta name="geo.region" content="IN-MH" />
            <meta name="geo.placename" content="Punawale, Pune West" />
            <meta name="geo.position" content="18.6298;73.7506" />
            <meta name="ICBM" content="18.6298, 73.7506" />

            {/* JSON-LD Schema Markup */}
            <script type="application/ld+json">
                {JSON.stringify([
                    {
                        "@context": "https://schema.org",
                        "@type": "ApartmentComplex",
                        "name": fullTitle,
                        "description": description,
                        "image": [
                            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
                            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
                        ],
                        "url": url,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Near Chhatrapati Shivaji Maharaj Chowk, Tathawade Road",
                            "addressLocality": "Punawale",
                            "addressRegion": "Pune",
                            "postalCode": "411033",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "18.6327",
                            "longitude": "73.7431"
                        },
                        "hasMap": "https://maps.app.goo.gl/YourMapLink",
                        "amenityFeature": [
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Infinity Pool",
                                "value": "true"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Multi-tier Clubhouse",
                                "value": "true"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Riverside Promenade",
                                "value": "true"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Skywalk Bridge",
                                "value": "true"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Co-working Hub",
                                "value": "true"
                            },
                            {
                                "@type": "LocationFeatureSpecification",
                                "name": "Near Hinjewadi IT Park",
                                "value": "true"
                            }
                        ],
                        "tourBookingPage": `${domain}/supreme-rivana-contact`,
                        "numberOfAccommodationUnits": "Multiple towers with 2 & 3 BHK apartments",
                        "petsAllowed": "True",
                        "telephone": "+917744009295",
                        "provider": {
                            "@id": "https://www.supreme-universal.in/#organization",
                            "name": "Supreme Universal"
                        },
                        "sameAs": [
                            "https://en.wikipedia.org/wiki/Pune",
                            "https://en.wikipedia.org/wiki/PCMC",
                            "https://en.wikipedia.org/wiki/Real_estate_in_India"
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://www.supreme-universal.in/#organization",
                        "name": "Supreme Universal",
                        "url": "https://www.supreme-universal.in/",
                        "logo": "https://cdn.supremeuniversal.com/media/supreme-logo.png",
                        "foundingDate": "1982",
                        "description": "Supreme Universal is a premium real estate developer with 40+ years of legacy, delivering 70+ iconic projects across Mumbai and Pune. Recognized by CREDAI-MCHI and Asia Property Awards.",
                        "sameAs": [
                            "https://www.facebook.com/SupremeUniversal/",
                            "https://www.instagram.com/supreme_universal/",
                            "https://www.linkedin.com/company/supreme-universal/",
                            "https://en.wikipedia.org/wiki/Supreme_Universal"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+91-7744009295",
                            "contactType": "sales",
                            "areaServed": "IN",
                            "availableLanguage": ["en", "hi", "mr"]
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Supreme Rivana Punawale Site Office",
                        "image": "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
                        "url": "https://www.supreme-universal.in/supreme-rivana-location",
                        "telephone": "+917744009295",
                        "priceRange": "₹₹₹",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Near Chhatrapati Shivaji Maharaj Chowk, Tathawade Road",
                            "addressLocality": "Punawale",
                            "addressRegion": "Pune",
                            "postalCode": "411033",
                            "addressCountry": "IN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "18.6327",
                            "longitude": "73.7431"
                        },
                        "award": "Global Excellence Awards 2023",
                        "keywords": seoKeywords,
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                                "Saturday",
                                "Sunday"
                            ],
                            "opens": "10:00",
                            "closes": "20:00"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": "Supreme Rivana Punawale - Premium 2 & 3 BHK Flats",
                        "description": "Ultra-luxury 2 & 3 BHK riverside apartments in a 15-acre IGBC certified township. 31-storey towers with 6 units per floor for maximum privacy. 40+ world-class amenities including infinity pool, skywalk, and multi-tier clubhouse.",
                        "url": url,
                        "datePosted": "2026-01-01",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "2 BHK Luxury Apartment",
                                "description": "Spacious 2 BHK waterfront apartment with river views, premium finishes, and smart layouts",
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/InStock",
                                "areaServed": "Punawale, Pune West"
                            },
                            {
                                "@type": "Offer",
                                "name": "3 BHK Premium Apartment",
                                "description": "Expansive 3 BHK luxury apartment with panoramic river views, premium flooring, and exclusive community access",
                                "priceCurrency": "INR",
                                "availability": "https://schema.org/InStock",
                                "areaServed": "Punawale, Pune West"
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": pathname === '/' 
                            ? [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.supreme-universal.in/"
                                }
                            ]
                            : [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.supreme-universal.in/"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": fullTitle.split('|')[0].trim(),
                                    "item": url
                                }
                            ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        "name": "Main Navigation",
                        "url": "https://www.supreme-universal.in/",
                        "hasPart": [
                            { "@type": "WebPage", "name": "Overview", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-overview" },
                            { "@type": "WebPage", "name": "Amenities", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-amenities" },
                            { "@type": "WebPage", "name": "Floor Plans", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-floor-plans" },
                            { "@type": "WebPage", "name": "Gallery", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-gallery" },
                            { "@type": "WebPage", "name": "Location", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-location" },
                            { "@type": "WebPage", "name": "FAQ", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-faq" },
                            { "@type": "WebPage", "name": "Contact", "url": "https://www.supreme-universal.in/supreme-rivana-punawale-contact" },
                            { "@type": "WebPage", "name": "Blog", "url": "https://www.supreme-universal.in/blog" }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "Supreme Rivana Punawale Walkthrough",
                        "description": "Experience the ultra-luxury lifestyle at Supreme Rivana Punawale, a 15-acre riverside township in Punawale, Pune West. Featuring 31-storey towers and 40+ world-class amenities.",
                        "thumbnailUrl": [
                            "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
                            "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
                        ],
                        "uploadDate": "2026-01-15T08:00:00+08:00",
                        "duration": "PT2M30S",
                        "contentUrl": "https://cdn.supremeuniversal.com/videos/walkthrough-punawale.mp4",
                        "embedUrl": "https://www.youtube.com/embed/example-video-id",
                        "interactionStatistic": {
                            "@type": "InteractionCounter",
                            "interactionType": { "@type": "WatchAction" },
                            "userInteractionCount": 12500
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Event",
                        "name": "Supreme Rivana Punawale — Exclusive Site Visit & Open House",
                        "description": "Schedule your exclusive VIP site visit to Supreme Rivana Punawale. Walk through our luxurious 15-acre riverside township, explore show flats, and meet our sales team for personalized pricing.",
                        "startDate": "2026-03-01",
                        "endDate": "2026-12-31",
                        "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                        "eventStatus": "https://schema.org/EventScheduled",
                        "location": {
                            "@type": "Place",
                            "name": "Supreme Rivana Sales Gallery, Punawale",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Near Chhatrapati Shivaji Maharaj Chowk, Tathawade Road",
                                "addressLocality": "Punawale, Pune",
                                "postalCode": "411033",
                                "addressCountry": "IN"
                            }
                        },
                        "organizer": {
                            "@type": "Organization",
                            "name": "Supreme Universal",
                            "url": "https://www.supreme-universal.in/"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": "https://www.supreme-universal.in/supreme-rivana-contact",
                            "price": "0",
                            "priceCurrency": "INR",
                            "availability": "https://schema.org/InStock",
                            "validFrom": "2026-03-01"
                        },
                        "image": "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
                    }
                ])}
            </script>
        </Helmet>
    );
};

export default SEO;
