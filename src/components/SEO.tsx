
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
    description = 'Supreme Riverside Punawale offers ultra-luxury 2 & 3 BHK flats near Hinjewadi IT Park. Experience premium riverside living, 40+ amenities, and great property appreciation in Pune West.',
    keywords = 'Supreme Riverside, Supreme Riverside Punawale, Supreme Riverside price, Supreme Riverside 2 BHK price, Supreme Riverside 3 BHK price, Supreme Riverside floor plan, Supreme Riverside brochure, Supreme Riverside RERA number, Supreme Riverside possession date, Supreme Riverside booking, Supreme Riverside reviews, Buy flat in Supreme Riverside, Supreme Riverside latest offers, Flats in Punawale, 2 BHK flats in Punawale, 3 BHK flats in Punawale Pune, Property in Punawale Pune, New projects in Punawale, High rise apartments in Punawale, Luxury flats in Punawale, Apartments near Hinjewadi, Flats near Hinjewadi IT Park, Property near Mumbai Pune Expressway, Premium projects in Pune West, Residential projects in Pune West',
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
                {JSON.stringify({
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
                        "streetAddress": "Near Lotus Business School, Punawale",
                        "addressLocality": "Pune West",
                        "addressRegion": "Maharashtra",
                        "postalCode": "411033",
                        "addressCountry": "IN"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": "18.6298",
                        "longitude": "73.7506"
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
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
