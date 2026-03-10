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
    const domain = 'https://supreme-universal.in';

    // Route-specific metadata mapping for section routes
    const routeMetadata: Record<string, { title: string; description: string }> = {
        '/': {
            title: 'Supreme Rivana Punawale | Luxury 2 & 3 BHK Flats near Hinjewadi | Pune Real Estate 2026',
            description: 'Supreme Rivana Punawale by Supreme Universal: Ultra-luxury 2 & 3 BHK riverside apartments near Hinjewadi IT Park & Wakad. Explore Supreme Rivana price list, floor plans, and world-class amenities in Punawale, Pune West. High ROI property investment near Mumbai-Pune Expressway bypass. Book your site visit today!'
        },
        '/supreme-rivana-overview': {
            title: 'Project Overview | Supreme Rivana Punawale | Luxury Township Pune West',
            description: 'Discover the vision behind Supreme Rivana Punawale. A 15-acre IGBC certified riverside township featuring 31-storey ultra-luxury towers near Wakad-Hinjewadi link road.'
        },
        '/supreme-rivana-amenities': {
            title: 'Luxury Amenities | Infinite Pool & Skywalk | Supreme Rivana Punawale',
            description: 'Explore 40+ world-class amenities at Supreme Rivana Punawale. Features include an infinity pool, skywalk bridge, multi-tier clubhouse, and riverside promenade for an elite lifestyle.'
        },
        '/supreme-rivana-floor-plans': {
            title: 'Floor Plans & Price List | 2 & 3 BHK Apartments | Supreme Rivana Punawale',
            description: 'View detailed floor plans and price list for 2 & 3 BHK luxury flats at Supreme Rivana Punawale. Optimized layouts for maximum natural light and ventilation near Hinjewadi IT Park.'
        },
        '/supreme-rivana-gallery': {
            title: 'Project Gallery | See the Lifestyle at Supreme Rivana Punawale',
            description: 'Visual tour of Supreme Rivana Punawale. View actual site photos, show flat images, and artistic impressions of Punawale\'s most awaited riverside development.'
        },
        '/supreme-rivana-location': {
            title: 'Location & Connectivity | Near Hinjewadi & Wakad | Supreme Rivana Punawale',
            description: 'Strategically located in Punawale, West Pune. Excellent connectivity to Hinjewadi IT Park, Mumbai-Pune Expressway, and upcoming Metro Line 3 from Supreme Rivana.'
        },
        '/supreme-rivana-faq': {
            title: 'Frequently Asked Questions | RERA & Details | Supreme Rivana Punawale',
            description: 'Get answers to all questions regarding Supreme Rivana Punawale. RERA registration number, possession dates, maintenance, and booking process details.'
        },
        '/supreme-rivana-contact': {
            title: 'Contact Sales | Book Your Site Visit | Supreme Rivana Punawale',
            description: 'Schedule a VIP site visit to Supreme Rivana Punawale. Contact our authorized sales team for exclusive offers, inventory updates, and personalized price presentations.'
        }
    };

    const currentMetadata = routeMetadata[pathname] || routeMetadata['/'];
    const title = propTitle || currentMetadata.title;
    const description = propDescription || currentMetadata.description;
    const url = propUrl || `${domain}${pathname === '/' ? '' : pathname}`;
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
                            "@id": "https://supreme-universal.in/#organization",
                            "name": "Supreme Universal"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "@id": "https://supreme-universal.in/#organization",
                        "name": "Supreme Universal",
                        "url": "https://supreme-universal.in/",
                        "logo": "https://cdn.supremeuniversal.com/media/supreme-logo.png",
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
                        "@type": "LocalBusiness",
                        "name": "Supreme Rivana Site Office",
                        "image": "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
                        "url": "https://supreme-universal.in/supreme-rivana-location",
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
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://supreme-universal.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Supreme Rivana Punawale",
                                "item": "https://supreme-universal.in/supreme-rivana-overview"
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What are the configuration options available at Supreme Rivana Punawale?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Supreme Rivana offers spacious ultra-luxury 2 BHK and premium 3 BHK apartments in Punawale, near Wakad and Hinjewadi IT Park."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "What is the price of a 2 BHK or 3 BHK flat at Supreme Rivana?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The price for premium luxury river-view flats at Supreme Rivana Punawale is incredibly competitive for Pune West. Please download our cost sheet or contact sales for detailed pricing on our 2 and 3 BHK variants."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Where is Supreme Rivana located?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "It is strategically located in Punawale, PCMC, Pune West, offering seamless connectivity to the Mumbai Pune Expressway, Hinjewadi Phase 1, Baner, and Wakad."
                                }
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        "name": "Main Navigation",
                        "url": "https://supreme-universal.in/",
                        "hasPart": [
                            { "@type": "WebPage", "name": "Overview", "url": "https://supreme-universal.in/supreme-rivana-overview" },
                            { "@type": "WebPage", "name": "Amenities", "url": "https://supreme-universal.in/supreme-rivana-amenities" },
                            { "@type": "WebPage", "name": "Floor Plans", "url": "https://supreme-universal.in/supreme-rivana-floor-plans" },
                            { "@type": "WebPage", "name": "Gallery", "url": "https://supreme-universal.in/supreme-rivana-gallery" },
                            { "@type": "WebPage", "name": "Location", "url": "https://supreme-universal.in/supreme-rivana-location" },
                            { "@type": "WebPage", "name": "FAQ", "url": "https://supreme-universal.in/supreme-rivana-faq" },
                            { "@type": "WebPage", "name": "Contact", "url": "https://supreme-universal.in/supreme-rivana-contact" },
                            { "@type": "WebPage", "name": "Blog", "url": "https://supreme-universal.in/blog" }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "Supreme Rivana Punawale Walkthrough",
                        "description": "Experience the ultra-luxury lifestyle at Supreme Rivana, a 15-acre riverside township in Punawale, Pune West. Featuring 31-storey towers and 40+ world-class amenities.",
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
                    }
                ])}
            </script>
        </Helmet>
    );
};

export default SEO;
