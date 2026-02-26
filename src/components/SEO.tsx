
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
}

const SEO = ({
    title = 'Supreme Riverside | 2 & 3 BHK Homes in Punawale, Pune',
    description = 'Supreme Riverside Punawale offers ultra-luxury 2 & 3 BHK Homes near Hinjewadi. Experience premium riverside living with world-class amenities in Punawale, Pune.',
    keywords = 'Supreme Riverside, Supreme Riverside Punawale, 2 BHK in Punawale, 3 BHK in Punawale, 2 & 3 BHK Homes in Punawale Pune, Premium Apartments Pune, Luxury Homes Hinjewadi, Riverside Apartments, Real Estate Pune, Supreme Universal Projects, Supreme Universal Pune, Supreme Towers Koregaon Park, Supreme Villagio Somatane, Supreme Estia Baner, Designs That Elevate The Way You Live, Timeless Luxury Real Estate, Crafting Spaces That Reflect Your Aspirations, Flats near Hinjewadi, Apartments near Wakad, New Launch Punawale, Gated Community Pune, Properties near Mumbai-Pune Expressway',
    image = '/hero-bg.png',
    url = 'https://supreme-universal.in/'
}: SEOProps) => {
    const fullTitle = title === 'Supreme Riverside | Premium 2 & 3 BHK Apartments in Punawale' ? title : `${title} | Supreme Riverside`;

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
            <meta property="og:site_name" content="Supreme Riverside" />

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
            <meta name="geo.placename" content="Punawale, Pune" />
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
                        "addressLocality": "Pune",
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
                        }
                    ],
                    "tourBookingPage": `${url}supreme-riverside-punawale-contact`,
                    "petsAllowed": "True",
                    "telephone": "+917744009295",
                    "provider": {
                        "@id": "https://supreme-universal.in/#organization"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
