
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
    keywords = 'Supreme Riverside, Supreme Riverside Punawale, 2 BHK in Punawale, 3 BHK in Punawale, 2 & 3 BHK Homes in Punawale Pune, Premium Apartments Pune, Luxury Homes Hinjewadi, Riverside Apartments, Real Estate Pune, Supreme Universal Projects, Flats near Hinjewadi, Apartments near Wakad, New Launch Punawale, Gated Community Pune, Properties near Mumbai-Pune Expressway',
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
                    "@type": "RealEstateListing",
                    "name": fullTitle,
                    "description": description,
                    "image": [image],
                    "url": url,
                    "datePosted": "2024-01-01",
                    "validFrom": "2024-01-01",
                    "offers": {
                        "@type": "Offer",
                        "priceCurrency": "INR",
                        "availability": "https://schema.org/PreOrder",
                        "url": url,
                        "category": "Apartment",
                        "priceSpecification": {
                            "@type": "PriceSpecification",
                            "priceCurrency": "INR",
                            "description": "Call for Price"
                        }
                    },
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
                    "provider": {
                        "@type": "Organization",
                        "name": "Supreme Universal",
                        "url": "https://supremeuniversal.in/"
                    }
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
