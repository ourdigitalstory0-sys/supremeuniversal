import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const images = [
        { src: "https://cdn.supremeuniversal.com/media/Supreme-Rivana-Web-Banner_fzjUZ4.jpeg", title: "Project Exterior", alt: "Supreme Rivana Punawale Riverside Elevation", span: "md:col-span-2 md:row-span-2" },
        { src: "https://cdn.supremeuniversal.com/media/Supreme-Rivana-Ph-1_oAgU7k.jpeg", title: "Phase 1 Progress", alt: "Supreme Rivana Phase 1 Construction Status and Layout", span: "md:col-span-1 md:row-span-1" },
        { src: "https://cdn.supremeuniversal.com/media/Supreme-Rivana_zrFdYC.png", title: "Lifestyle Amenities", alt: "Luxury Lifestyle Amenities at Supreme Rivana Punawale", span: "md:col-span-1 md:row-span-1" },
        { src: "https://cdn.supremeuniversal.com/media/Supreme-Rivana-2_Fda9Xu.png", title: "Riverfront Living", alt: "Authentic Riverside Living Experience at Supreme Rivana", span: "col-span-1 md:col-span-1 md:row-span-1" },
        { src: "https://cdn.supremeuniversal.com/media/M2BVwg_tTi94FProjectListing500x665Arthousemin.jpg", title: "Luxury Interiors", alt: "Breathtaking Apartment Interiors at Supreme Rivana", span: "col-span-1 md:col-span-2 md:row-span-1" },
        { src: "https://cdn.supremeuniversal.com/media/1aejSz_FXHCOKProjectListing23min.jpg", title: "Architectural Detail", alt: "Modern Architecture of Supreme Rivana", span: "col-span-1 md:col-span-1 md:row-span-1" },
    ];

    return (
        <section id="gallery" className="py-24 md:py-32 bg-supreme-gray relative overflow-hidden">
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ImageGallery",
                    "name": "Supreme Rivana Punawale Photo Gallery",
                    "description": "Explore luxury interiors, amenities, and architectural views of Supreme Rivana Punawale 2 & 3 BHK apartments near Hinjewadi.",
                    "url": "https://www.supreme-universal.in/supreme-rivana-punawale-gallery",
                    "image": images.map(img => ({
                        "@type": "ImageObject",
                        "name": img.title,
                        "contentUrl": img.src,
                        "description": img.alt,
                        "thumbnail": img.src
                    }))
                })
            }} />
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs">
                                Visual Journey
                            </span>
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-supreme-black leading-tight">
                            The <span className="italic font-light text-supreme-gold">Gallery</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                    {images.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`group relative overflow-hidden cursor-pointer w-full h-full ${item.span}`}
                        >
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="object-cover w-full h-full transform transition-transform duration-[2s] ease-out group-hover:scale-110"
                                loading="lazy"
                                decoding="async"
                            />

                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-supreme-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    <span className="text-white text-lg md:text-xl font-serif tracking-widest uppercase">
                                        {item.title}
                                    </span>
                                    <div className="w-12 h-[1px] bg-supreme-gold mt-4"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center shadow-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/supreme-rivana-contact"
                            className="inline-flex items-center justify-center gap-4 text-supreme-black font-sans font-semibold uppercase tracking-[0.15em] text-xs hover:text-supreme-gold transition-colors"
                        >
                            <span>Schedule a Visit</span>
                            <span className="w-12 h-[1px] bg-supreme-gold"></span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
