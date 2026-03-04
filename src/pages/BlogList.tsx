import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import NoiseOverlay from '../components/NoiseOverlay';
import SEO from '../components/SEO';

import { blogPosts } from '../data/blogPosts';

const BlogList = () => {
    const collectionSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Real Estate Blog & Market Insights | Supreme Riverside Punawale",
        "description": "Read the latest news, market insights, and lifestyle guides about the West Pune real estate market, Punawale, Wakad, and Hinjewadi.",
        "url": "https://supreme-universal.in/blog",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": blogPosts.map((post, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://supreme-universal.in/blog/${post.id}`,
                "name": post.title,
                "image": post.image
            }))
        }
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <SEO
                title="Real Estate Blog & Market Insights | Supreme Riverside Punawale"
                description="Read the latest news, market insights, and lifestyle guides about the West Pune real estate market, Punawale, Wakad, and Hinjewadi."
                url="https://supreme-universal.in/blog"
            />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
            <CustomCursor />
            <NoiseOverlay />
            <Navbar />

            {/* Header */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-20 bg-supreme-black text-center relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-6 md:w-8 h-[1px] bg-supreme-gold"></span>
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-[10px] md:text-xs">
                                Knowledge Hub
                            </span>
                            <span className="w-6 md:w-8 h-[1px] bg-supreme-gold"></span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 md:mb-6">
                            Real Estate <br className="md:hidden" /><span className="italic font-light text-supreme-gold">Insights</span>
                        </h1>
                        <p className="text-white/70 max-w-2xl mx-auto font-light text-base md:text-lg px-2">
                            Expert analysis, lifestyle trends, and investment strategies for West Pune.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-24 bg-supreme-gray">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white flex flex-col h-full hover:shadow-2xl transition-shadow duration-500"
                            >
                                <Link to={`/blog/${post.id}`} className="block relative overflow-hidden aspect-[4/3]">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute top-4 left-4 bg-supreme-black text-white text-xs font-sans uppercase tracking-widest px-4 py-1">
                                        {post.category}
                                    </div>
                                </Link>

                                <div className="p-8 flex flex-col flex-grow">
                                    <p className="text-gray-400 text-sm font-sans mb-4">{post.date}</p>
                                    <h3 className="text-2xl font-serif text-supreme-black mb-4 leading-tight group-hover:text-supreme-gold transition-colors duration-300">
                                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 font-sans font-light mb-8 flex-grow">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto">
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-3 text-supreme-black font-sans font-semibold uppercase tracking-[0.1em] text-xs hover:text-supreme-gold transition-colors"
                                        >
                                            <span>Read Article</span>
                                            <span className="w-6 h-[1px] bg-supreme-black group-hover:bg-supreme-gold transition-colors"></span>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogList;
