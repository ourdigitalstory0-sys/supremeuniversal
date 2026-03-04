
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = 'Supreme Riverside Punawale | Premium 2 & 3 BHK Flats Near Hinjewadi | Pune West 2026',
    description = 'Supreme Riverside Punawale by Supreme Universal – ultra-luxury 2 & 3 BHK riverside flats near Hinjewadi IT Park, Pune. 15-acre IGBC certified township with 31-storey towers, 40+ world-class amenities, Pune Metro Line 3 proximity, and unmatched property appreciation in Punawale 2026. Book your exclusive site visit today!',
    keywords = 'Supreme Riverside, Supreme Riverside Punawale, Supreme Riverside Pune, Supreme Riverside price, Supreme Riverside price list 2026, Supreme Riverside 2 BHK price, Supreme Riverside 3 BHK price, Supreme Riverside floor plan, Supreme Riverside RERA number, Supreme Riverside possession date, Supreme Riverside booking, Supreme Riverside reviews, Supreme Riverside latest offers, Supreme Riverside brochure, Supreme Riverside site visit, Supreme Riverside payment plan, buy flat Supreme Riverside, Supreme Riverside vs Kohinoor Uptown Avenue, Supreme Riverside vs Siddhashila Eela, Supreme Riverside vs Kolte Patil, Supreme Riverside construction status, Luxury flats behind Siddhashila Eela, best project in Punawale 2026, top projects Punawale, flats in Punawale, 2 BHK flats in Punawale, 3 BHK flats in Punawale Pune, 2 BHK flats in Punawale under 1 crore, 2 BHK flats in Punawale near Hinjewadi, 3 BHK Luxurious flats in Punawale near Hinjewadi, 3 BHK river view apartment Punawale, luxury flats in Punawale, high rise apartments in Punawale, property in Punawale Pune, new projects in Punawale 2026, apartments near Hinjewadi, apartments near Hinjewadi IT Park, flats near Hinjewadi Phase 1, flats near Hinjewadi Phase 3, property near Mumbai Pune Expressway, waterfront apartments West Pune price list, waterfront apartments Pune West, premium projects Pune West, residential projects Pune West, luxury apartments Tathawade Road Punawale, Pune Metro Line 3 connectivity, Pune Ring Road real estate, property appreciation Punawale 2026, NRI property investment Pune West, NRI buy flat Punawale, rental income Punawale, investment properties Pune, Supreme Universal Pune projects, Supreme Universal Punawale, 31 storey towers Pune, skywalk bridge luxury apartments, IGBC certified apartments Pune, Chhatrapati Shivaji Maharaj Chowk properties, Mumbai Pune Expressway Bypass projects, Tathawade Road premium homes',
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
                                "item": "https://supreme-universal.in/supreme-riverside-punawale-overview"
                            }
                        ]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "SiteNavigationElement",
                        "name": "Main Navigation",
                        "url": "https://supreme-universal.in/",
                        "hasPart": [
                            { "@type": "WebPage", "name": "Overview", "url": "https://supreme-universal.in/supreme-riverside-punawale-overview" },
                            { "@type": "WebPage", "name": "Amenities", "url": "https://supreme-universal.in/supreme-riverside-punawale-amenities" },
                            { "@type": "WebPage", "name": "Floor Plans", "url": "https://supreme-universal.in/supreme-riverside-punawale-floor-plans" },
                            { "@type": "WebPage", "name": "Gallery", "url": "https://supreme-universal.in/supreme-riverside-punawale-gallery" },
                            { "@type": "WebPage", "name": "Location", "url": "https://supreme-universal.in/supreme-riverside-punawale-location" },
                            { "@type": "WebPage", "name": "FAQ", "url": "https://supreme-universal.in/supreme-riverside-punawale-faq" },
                            { "@type": "WebPage", "name": "Contact", "url": "https://supreme-universal.in/supreme-riverside-punawale-contact" },
                            { "@type": "WebPage", "name": "Blog", "url": "https://supreme-universal.in/blog" }
                        ]
                    }
                ])}
            </script>
        </Helmet>
    );
};

export default SEO;
