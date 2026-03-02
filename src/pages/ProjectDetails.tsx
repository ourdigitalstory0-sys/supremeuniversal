import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { portfolioProjects } from '../data/portfolioProjects';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { MapPin, Calendar, Building2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
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
            <Helmet>
                <title>{project.seo.title}</title>
                <meta name="description" content={project.seo.description} />
                <meta name="keywords" content={project.seo.keywords} />
                <link rel="canonical" href={`https://supreme-universal.in/projects/${project.id}`} />
            </Helmet>

            <Navbar onEnquire={() => setIsModalOpen(true)} />

            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover"
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
                        <div className="flex items-center justify-center gap-2 text-white/80">
                            <MapPin className="w-4 h-4 text-supreme-gold" />
                            <span className="text-sm md:text-lg tracking-wider uppercase font-light">{project.location}</span>
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
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                    {project.amenities.map((amenity, idx) => (
                                        <div key={idx} className="text-center p-6 border border-gray-100 hover:border-supreme-gold transition-colors duration-500">
                                            <div className="text-supreme-gold mb-4 flex justify-center italic text-sm uppercase tracking-widest font-bold">
                                                {amenity.title}
                                            </div>
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

            <Contact />
            <Footer />
            <QuickEnquireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default ProjectDetails;
