
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = 'Supreme Riverside Punawale | Premium 2 & 3 BHK Pune',
    description = 'Supreme Riverside Punawale offers ultra-luxury 2 & 3 BHK flats near Hinjewadi IT Park. Experience premium riverside living, 31-storey towers, 40+ amenities, and high property appreciation in Pune West for 2026.',
    keywords = 'Supreme Riverside, Supreme Riverside Punawale, Supreme Riverside price, Supreme Riverside 2 BHK price, Supreme Riverside 3 BHK price, Supreme Riverside floor plan, Best project in Punawale vs Kohinoor Uptown Avenue, Supreme Riverside vs Siddhashila Eela, Luxury flats behind Siddhashila Eela, 3 BHK Luxurious flats in Punawale near Hinjewadi, Waterfront apartments West Pune price list, Pune Metro Line 3 connectivity, Pune Ring Road real estate, Property appreciation Punawale 2026, 31 storey towers Pune, Skywalk bridge luxury apartments, Mumbai-Pune Expressway Bypass projects, Tathawade Road premium homes, Chhatrapati Shivaji Maharaj Chowk properties, Supreme Riverside RERA number, Supreme Riverside possession date, Supreme Riverside booking, Supreme Riverside reviews, Buy flat in Supreme Riverside, Supreme Riverside latest offers, Flats in Punawale, 2 BHK flats in Punawale, 3 BHK flats in Punawale Pune, Property in Punawale Pune, New projects in Punawale, High rise apartments in Punawale, Luxury flats in Punawale, Apartments near Hinjewadi, Flats near Hinjewadi IT Park, Property near Mumbai Pune Expressway, Premium projects in Pune West, Residential projects in Pune West',
    image = '/hero-bg.png',
    url = 'https://supreme-universal.in/'
}: SEOProps) => {
    const fullTitle = title === 'Supreme Riverside Punawale | Premium 2 & 3 BHK Pune' ? title : `${title} | Supreme Riverside Punawale`;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content="Supreme Riverside Punawale" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional SEO Tags */}
            <meta name="robots" content="index, follow" />
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
                                "name": "Near Hinjewadi IT Park",
                                "value": "true"
                            }
                        ],
                        "tourBookingPage": `${url}supreme-riverside-punawale-contact`,
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
                    }
                ])}
            </script>
        </Helmet>
    );
};

export default SEO;
