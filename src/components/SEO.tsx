
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = 'Supreme Riverside Punawale | Luxury 2 & 3 BHK Flats near Hinjewadi IT Park | Pune Real Estate 2026',
    description = 'Supreme Riverside Punawale by Supreme Universal: Ultra-luxury 2 & 3 BHK riverside apartments near Hinjewadi IT Park & Wakad. Explore Supreme Riverside price list, floor plans, and world-class amenities in Punawale, Pune West. High ROI property investment near Mumbai-Pune Expressway bypass. Book your site visit today!',
    keywords = 'supreme riverside, supreme riverside punawale, supreme riverside pune, supreme riverside project, supreme riverside apartments, supreme riverside luxury apartments, supreme riverside flats, supreme riverside 2 bhk, supreme riverside 3 bhk, supreme riverside price, supreme riverside price list, supreme riverside cost sheet, supreme riverside floor plan, supreme riverside master plan, supreme riverside brochure, supreme riverside possession, supreme riverside amenities, supreme riverside location, supreme riverside punawale price, supreme riverside 2 bhk price, supreme riverside 3 bhk price, supreme riverside punawale booking, supreme riverside site visit, supreme riverside investment, supreme riverside reviews, supreme riverside rera, supreme riverside luxury apartments punawale, supreme riverside project details pune, supreme riverside new launch apartments punawale, supreme riverside riverside apartments pune, flats in punawale pune, apartments in punawale, luxury flats punawale, premium flats punawale pune, new projects in punawale, residential projects punawale, 2 bhk flats punawale, 3 bhk flats punawale, luxury apartments punawale, gated community flats punawale, ready to move flats punawale, under construction flats punawale, luxury apartments in punawale pune, new launch flats in punawale pune, premium residential projects punawale pune, luxury flats near punawale highway, flats near wakad pune, luxury apartments wakad, residential projects near wakad, apartments near wakad bridge, flats near wakad hinjewadi road, premium flats near wakad pune, flats near hinjewadi, apartments near hinjewadi it park, luxury flats near hinjewadi phase 1, residential projects near hinjewadi phase 2, premium apartments near hinjewadi phase 3, flats near rajiv gandhi infotech park, luxury apartments near hinjewadi it park pune, flats near hinjewadi phase 1 for sale, premium homes near hinjewadi it hub, luxury apartments pune, luxury flats west pune, premium apartments pune, high rise apartments pune, skyline apartments pune, gated community luxury apartments pune, premium lifestyle apartments pune, luxury residences pune, apartments with clubhouse pune, apartments with infinity pool pune, river view apartments pune, nature facing apartments pune, luxury apartments with amenities pune, luxury high rise apartments near hinjewadi, premium gated community flats pune west, river view luxury apartments pune, property investment punawale, real estate investment west pune, best property investment near hinjewadi, investment flats near wakad, high ROI flats pune, best residential investment pune, best projects near hinjewadi for investment, real estate investment near rajiv gandhi infotech park, property investment near wakad pune, buy flats in punawale, flats for sale punawale pune, buy apartments near hinjewadi, apartments for sale near wakad, luxury flats for sale pune, premium apartments for sale pune, buy luxury apartments near hinjewadi it park, flats for sale in punawale near wakad, new apartments for sale west pune, flats price punawale, apartments price punawale pune, luxury flats price pune, 2 bhk price punawale, 3 bhk price punawale, apartments near hinjewadi price, luxury apartments near wakad price, flats near hinjewadi price list, new launch flats punawale price, projects near ANP Autograph punawale, flats near Puneville punawale, apartments near Legacy Milestone punawale, projects near 24k Living punawale, luxury flats near ANP Autograph, projects similar to Puneville punawale, supreme riverside vs puneville, supreme riverside vs anp autograph, best luxury flats in punawale',
    image = '/hero-bg.png',
    url = 'https://supreme-universal.in/'
}: SEOProps) => {
    const fullTitle = title === 'Supreme Riverside Punawale | Premium 2 & 3 BHK Flats Near Hinjewadi | Pune West 2026' ? title : `${title} | Supreme Riverside Punawale`;

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
            <meta property="og:site_name" content="Supreme Riverside Punawale" />
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
                        "tourBookingPage": `${url}supreme-riverside-punawale-contact`,
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
                        "name": "Supreme Riverside Site Office",
                        "image": "https://cdn.supremeuniversal.com/media/G4vv5v_Home--Banner.jpg",
                        "@id": "https://supreme-universal.in/location",
                        "url": "https://supreme-universal.in/supreme-riverside-punawale-location",
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
                        "name": "Supreme Riverside Punawale - Premium 2 & 3 BHK Flats",
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
                                "name": "Supreme Riverside Punawale",
                                "item": "https://supreme-universal.in/supreme-riverside-overview"
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        "name": "Main Navigation",
                        "url": "https://supreme-universal.in/",
                        "hasPart": [
                            { "@type": "WebPage", "name": "Overview", "url": "https://supreme-universal.in/supreme-riverside-overview" },
                            { "@type": "WebPage", "name": "Amenities", "url": "https://supreme-universal.in/supreme-riverside-amenities" },
                            { "@type": "WebPage", "name": "Floor Plans", "url": "https://supreme-universal.in/supreme-riverside-floor-plans" },
                            { "@type": "WebPage", "name": "Gallery", "url": "https://supreme-universal.in/supreme-riverside-gallery" },
                            { "@type": "WebPage", "name": "Location", "url": "https://supreme-universal.in/supreme-riverside-location" },
                            { "@type": "WebPage", "name": "FAQ", "url": "https://supreme-universal.in/supreme-riverside-faq" },
                            { "@type": "WebPage", "name": "Contact", "url": "https://supreme-universal.in/supreme-riverside-contact" },
                            { "@type": "WebPage", "name": "Blog", "url": "https://supreme-universal.in/blog" }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "name": "Supreme Riverside Punawale Walkthrough",
                        "description": "Experience the ultra-luxury lifestyle at Supreme Riverside, a 15-acre riverside township in Punawale, Pune West. Featuring 31-storey towers and 40+ world-class amenities.",
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
