import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title: propTitle,
    description: propDescription,
    image = 'https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg',
    url: propUrl
}: SEOProps) => {
    const { pathname } = useLocation();
    const domain = 'https://www.supreme-universal.in';

    // Route-specific metadata mapping for section routes
    const routeMetadata: Record<string, { title: string; description: string }> = {
        '/': {
            title: 'Supreme Rivana Punawale | Luxury 2 & 3 BHK near Hinjewadi',
            description: 'Explore Supreme Rivana Punawale: luxury 2 & 3 BHK riverside flats in Punawale, Pune West by Supreme Universal. View price lists & book VIP site visits!'
        },
        '/supreme-rivana-punawale-overview': {
            title: 'Project Overview | Supreme Rivana Punawale Riverside',
            description: 'Discover Supreme Rivana Punawale: a 15-acre luxury township near Wakad-Hinjewadi Link Road by Supreme Universal. Explore the master plans and layout.'
        },
        '/supreme-rivana-punawale-amenities': {
            title: 'Luxury Amenities | Supreme Rivana Punawale Riverside',
            description: 'Experience 40+ amenities at Supreme Rivana: infinity pool, sports courts, skywalk, and riverside promenade. View the luxury lifestyle guide in Pune.'
        },
        '/supreme-rivana-punawale-floor-plans': {
            title: 'Floor Plan & Price List | Supreme Rivana Punawale',
            description: 'View Vastu-compliant floor plans and carpet layouts for 2 & 3 BHK flats at Supreme Rivana Punawale. Get cost sheets and payment plans.'
        },
        '/supreme-rivana-punawale-gallery': {
            title: 'Gallery & Site Photos | Supreme Rivana Punawale',
            description: 'Take a visual tour of Supreme Rivana Punawale. View actual construction updates, show flats, and artistic impressions of the premium township.'
        },
        '/supreme-rivana-punawale-location': {
            title: 'Location Map & Connectivity | Supreme Rivana Punawale',
            description: 'Explore Supreme Rivana\'s location near Hinjewadi IT Park and Wakad. Get travel times to upcoming Pune Metro Line 3 and Mumbai-Pune Expressway.'
        },
        '/supreme-rivana-punawale-faq': {
            title: 'FAQs & Booking Details | Supreme Rivana Punawale',
            description: 'Find official details on Supreme Rivana Punawale: MahaRERA certificate registration number, construction updates, timelines, and booking info.'
        },
        '/supreme-rivana-punawale-contact': {
            title: 'Contact Sales Office | Supreme Rivana Punawale',
            description: 'Schedule your VIP site visit to Supreme Rivana Punawale. Contact our sales gallery for pricing, floor plans, and pre-launch booking discounts.'
        },
        '/supreme-rivana-punawale-price-list': {
            title: 'Price List & Cost Sheet | Supreme Rivana Punawale',
            description: 'Get the official 2026 price list and cost sheets for 2 BHK and 3 BHK luxury flats at Supreme Rivana Punawale. Review all-inclusive payment plans.'
        },
        '/supreme-rivana-punawale-comparison': {
            title: 'Supreme Rivana Comparison Review vs Competitors',
            description: 'Compare Supreme Rivana Punawale vs ANP Autograph vs Puneville. See why Supreme Universal is the best real estate investment choice in West Pune.'
        }
    };

    const currentMetadata = routeMetadata[pathname] || routeMetadata['/'];
    const title = propTitle || currentMetadata.title;
    const description = propDescription || currentMetadata.description;
    
    // Standardize URL: Force non-www and enforce trailing slashes for root/GSC consistency
    const cleanPathname = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
    
    // Canonical URL Fix: If a propUrl is explicitly passed (e.g., from BlogPost or ProgrammaticLanding), always use it.
    // Otherwise, if this is a scroll-anchor route mapping to MainApp, the canonical MUST be the root domain.
    let url: string;
    if (propUrl) {
        url = propUrl;
    } else {
        const isAnchorRoute = Object.keys(routeMetadata).includes(pathname) && pathname !== '/';
        const canonicalPath = isAnchorRoute ? '/' : cleanPathname;
        url = `https://www.supreme-universal.in${canonicalPath}`;
    }
    const fullTitle = title.includes('Supreme Rivana') ? title : `${title} | Supreme Rivana Punawale`;

    // Define which routes should get the heavy commercial schema
    const commercialRoutes = [
        '/',
        '/supreme-rivana-punawale-overview',
        '/supreme-rivana-punawale-amenities',
        '/supreme-rivana-punawale-floor-plans',
        '/supreme-rivana-punawale-gallery',
        '/supreme-rivana-punawale-location',
        '/supreme-rivana-punawale-price-list',
        '/supreme-2bhk-punawale-flats',
        '/supreme-3bhk-punawale-flats',
        '/supreme-rivana-punawale-price',
        '/supreme-rivana-punawale-floor-plan'
    ];
    const isCommercialRoute = commercialRoutes.includes(cleanPathname);

    // Build the Base Schema (Safe for all pages)
    const schemaArray: any[] = [
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://www.supreme-universal.in/#website",
            "name": "Supreme Universal",
            "url": "https://www.supreme-universal.in/",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.supreme-universal.in/blog?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.supreme-universal.in/#organization",
            "name": "Supreme Universal",
            "url": "https://www.supreme-universal.in/",
            "logo": "https://www.supremeuniversal.com/front/img/logo.svg",
            "foundingDate": "1982",
            "description": "Supreme Universal is a premium real estate developer with 40+ years of legacy, delivering 70+ iconic projects across Mumbai and Pune. Recognized by CREDAI-MCHI and Asia Property Awards.",
            "sameAs": [
                "https://www.facebook.com/SupremeUniversal/",
                "https://www.instagram.com/supreme_universal/",
                "https://www.linkedin.com/company/supreme-universal/"
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
        }
    ];

    // Conditionally Add Commercial Schema (ApartmentComplex & RealEstateListing)
    if (isCommercialRoute) {
        schemaArray.push(
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
                    "latitude": "18.637934",
                    "longitude": "73.743360"
                },
                "floorPlan": [
                    {
                        "@type": "FloorPlan",
                        "name": "2 BHK Luxury Apartment",
                        "numberOfRooms": "2",
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": "785",
                            "unitText": "Sq.Ft"
                        },
                        "image": "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg"
                    },
                    {
                        "@type": "FloorPlan",
                        "name": "3 BHK Premium Apartment",
                        "numberOfRooms": "3",
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": "1120",
                            "unitText": "Sq.Ft"
                        },
                        "image": "https://cdn.supremeuniversal.com/media/SupremeVillagioDesktopBanner_5z4eED.jpeg"
                    }
                ],
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
                    }
                ],
                "tourBookingPage": `${domain}/supreme-rivana-punawale-contact`,
                "telephone": "+917744009295",
                "identifier": "PM1261012502656",
                "hasMap": "https://www.google.com/maps/place/Supreme+Rivana/@18.6379338,73.74336,879m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb154a1af8d5:0xde1ba7d3dc6ba2d6!8m2!3d18.6379338!4d73.74336!16s%2Fg%2F11n9ckw71s",
                "sameAs": [
                    "https://maps.google.com/?cid=16004655655787471574",
                    "https://www.google.com/maps/place/Supreme+Rivana"
                ],
                "provider": {
                    "@id": "https://www.supreme-universal.in/#organization",
                    "name": "Supreme Universal"
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
                        "price": "7500000",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "areaServed": "Punawale, Pune West"
                    },
                    {
                        "@type": "Offer",
                        "name": "3 BHK Premium Apartment",
                        "description": "Expansive 3 BHK luxury apartment with panoramic river views, premium flooring, and exclusive community access",
                        "price": "11000000",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/InStock",
                        "areaServed": "Punawale, Pune West"
                    }
                ]
            },
            {
                "@context": "https://schema.org",
                "@type": "RealEstateAgent",
                "@id": "https://www.supreme-universal.in/#realestateagent",
                "name": "Supreme Rivana Punawale Sales Office",
                "image": "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
                "telephone": "+917744009295",
                "url": "https://www.supreme-universal.in/",
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
                    "latitude": "18.637934",
                    "longitude": "73.743360"
                },
                "hasMap": "https://www.google.com/maps/place/Supreme+Rivana/@18.6379338,73.74336,879m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bb154a1af8d5:0xde1ba7d3dc6ba2d6!8m2!3d18.6379338!4d73.74336!16s%2Fg%2F11n9ckw71s",
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
                    "opens": "09:00",
                    "closes": "20:00"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "1248"
                }
            }
        );
    }

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
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
                {JSON.stringify(schemaArray)}
            </script>
        </Helmet>
    );
};

export default SEO;
