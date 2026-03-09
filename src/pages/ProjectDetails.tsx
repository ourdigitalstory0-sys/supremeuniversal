import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioProjects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { MapPin, Calendar, Building2, CheckCircle2, ArrowLeft, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import SEO from '../components/SEO';
import QuickEnquireModal from '../components/QuickEnquireModal';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = portfolioProjects.find(p => p.id === id);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!project) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-supreme-black mb-4">Project Not Found</h1>
                    <Link to="/" className="text-supreme-gold flex items-center gap-2 justify-center">
                        <ArrowLeft className="w-4 h-4" /> Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title={project.seo.title}
                description={project.seo.description}
                url={`https://supreme-universal.in/projects/${project.id}`}
                image={project.image.startsWith('http') ? project.image : `https://supreme-universal.in${project.image}`}
            />
            <Helmet>
                {/* Enhanced RealEstateListing Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "RealEstateListing",
                        "name": project.name,
                        "description": project.seo.description,
                        "image": project.image.startsWith('http') ? project.image : `https://supreme-universal.in${project.image}`,
                        "url": `https://supreme-universal.in/projects/${project.id}`,
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": project.fullLocation,
                            "addressLocality": project.location.split(',')[0].trim(),
                            "addressRegion": "Maharashtra",
                            "addressCountry": "IN",
                            "postalCode": project.fullLocation.match(/\d{6}/)?.[0] || ""
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "18.6517",
                            "longitude": "73.7483"
                        },
                        "offers": {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Accommodation",
                                "name": project.type,
                                "numberOfRooms": project.type.match(/\d/)?.[0] || "3",
                                "amenityFeature": project.amenities.map(a => ({
                                    "@type": "LocationFeatureSpecification",
                                    "name": a.title
                                }))
                            },
                            "seller": {
                                "@type": "RealEstateAgent",
                                "name": "Supreme Universal",
                                "url": "https://supreme-universal.in/"
                            }
                        }
                    })}
                </script>

                {/* BreadcrumbList Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://supreme-universal.in/" },
                            { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://supreme-universal.in/projects" },
                            { "@type": "ListItem", "position": 3, "name": project.name, "item": `https://supreme-universal.in/projects/${project.id}` }
                        ]
                    })}
                </script>
            </Helmet>

            <Navbar onEnquire={() => setIsModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={`${project.name} Elevation - ${project.type} at ${project.location}`}
                        className="w-full h-full object-cover"
                        loading="eager"
                    />
                    <div className="absolute inset-0 bg-supreme-black/40"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.3em] text-xs mb-6 block">
                            Corporate Collection
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6">
                            {project.name}
                        </h1>
                        <div className="flex flex-col items-center gap-6 mt-8">
                            <div className="flex items-center justify-center gap-2 text-white/80">
                                <MapPin className="w-4 h-4 text-supreme-gold" />
                                <span className="text-sm md:text-lg tracking-wider uppercase font-light">{project.location}</span>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-supreme-gold animate-pulse" />
                                    <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-white">{project.status}</span>
                                </div>
                                <div className="px-4 py-2 bg-supreme-gold/20 backdrop-blur-md border border-supreme-gold/30 rounded-full flex items-center gap-3">
                                    <Shield className="w-3 h-3 text-supreme-gold" />
                                    <span className="text-[10px] md:text-xs font-sans font-bold uppercase tracking-widest text-supreme-gold">{project.reraNumber}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

                        {/* Left Side: Info */}
                        <div className="lg:col-span-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl md:text-5xl font-serif text-supreme-black mb-8 leading-tight">
                                    {project.tagline}
                                </h2>
                                <p className="text-gray-600 font-sans text-lg leading-relaxed mb-12">
                                    {project.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                                    {project.highlights.map((highlight, idx) => (
                                        <div key={idx} className="flex gap-4 items-start p-6 bg-gray-50 border border-gray-100">
                                            <CheckCircle2 className="w-5 h-5 text-supreme-gold mt-1 shrink-0" />
                                            <p className="text-supreme-black font-sans text-sm md:text-base leading-relaxed">{highlight}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-serif text-supreme-black mb-8">Curated Amenities</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                                    {project.amenities.map((amenity, idx) => (
                                        <div key={idx} className="text-center p-6 border border-gray-100 hover:border-supreme-gold transition-colors duration-500 group">
                                            <div className="text-supreme-gold mb-3 flex justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                                <Building2 className="w-5 h-5" />
                                            </div>
                                            <div className="text-supreme-black text-[10px] uppercase tracking-widest font-bold">
                                                {amenity.title}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-serif text-supreme-black mb-8">Technical Specifications</h3>
                                <div className="space-y-4 mb-16">
                                    {project.specifications.map((spec, idx) => (
                                        <div key={idx} className="border border-gray-100 rounded-sm overflow-hidden">
                                            <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                                                <span className="text-supreme-gold font-sans font-bold uppercase tracking-widest text-[10px]">
                                                    {spec.category}
                                                </span>
                                            </div>
                                            <div className="px-6 py-6 bg-white">
                                                <ul className="space-y-3">
                                                    {spec.details.map((detail, dIdx) => (
                                                        <li key={dIdx} className="flex gap-3 items-start text-sm text-gray-600 font-sans">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-supreme-gold mt-1.5 shrink-0" />
                                                            {detail}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-serif text-supreme-black mb-8">Project Gallery</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
                                    {project.gallery.map((img, idx) => (
                                        <div key={idx} className={`overflow-hidden rounded-sm group ${idx === 0 ? 'md:col-span-2' : ''}`}>
                                            <img
                                                src={img}
                                                alt={`${project.name} Interior & Lifestyle Gallery ${idx + 1}`}
                                                className="w-full h-64 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                loading="lazy"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-serif text-supreme-black mb-8">Micro-Market Connectivity</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {project.connectivity.map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center p-4 border-b border-gray-100 group hover:bg-gray-50 transition-colors">
                                            <span className="text-gray-600 font-sans text-sm tracking-wide">{item.title}</span>
                                            <span className="text-supreme-gold font-serif text-lg">{item.dist}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side: Quick Stats & Sticky Form Trigger */}
                        <div className="lg:col-span-4">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="sticky top-32"
                            >
                                <div className="bg-supreme-black p-10 text-white rounded-sm">
                                    <h4 className="text-xl font-serif mb-8 text-supreme-gold">Quick Overview</h4>

                                    <div className="space-y-8 mb-12">
                                        <div className="flex gap-4">
                                            <Building2 className="w-5 h-5 text-supreme-gold shrink-0" />
                                            <div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Configuration</div>
                                                <div className="text-sm font-sans">{project.type}</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <Calendar className="w-5 h-5 text-supreme-gold shrink-0" />
                                            <div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Status</div>
                                                <div className="text-sm font-sans">{project.status}</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <MapPin className="w-5 h-5 text-supreme-gold shrink-0" />
                                            <div>
                                                <div className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Address</div>
                                                <div className="text-sm font-sans leading-relaxed">{project.fullLocation}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="w-full bg-supreme-gold text-supreme-black py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors duration-500"
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Static Inquiry Section for Conversion Hardening */}
            <section className="py-24 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-supreme-black mb-8">
                            Secure your future with <span className="italic text-supreme-gold">{project.name}</span>
                        </h2>
                        <p className="text-gray-500 font-sans text-lg mb-12 max-w-2xl mx-auto">
                            Join the elite circle of homeowners. Download the latest price list and brochures for our {project.location} landmark.
                        </p>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="bg-supreme-black text-white px-12 py-6 text-xs font-bold uppercase tracking-[0.2em] hover:bg-supreme-gold transition-all duration-500"
                        >
                            Request Information Package
                        </button>
                    </motion.div>
                </div>
            </section>

            <Contact />
            <Footer />
            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectDetails;
