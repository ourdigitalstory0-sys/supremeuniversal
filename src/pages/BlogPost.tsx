import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import NoiseOverlay from '../components/NoiseOverlay';
import SEO from '../components/SEO';

import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
    const { id } = useParams();

    const post = blogPosts.find(p => p.id === id);

    if (!post) {
        return (
            <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
                <Navbar />
                <div className="flex-grow flex items-center justify-center flex-col text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-serif text-supreme-black mb-4">404</h1>
                    <p className="text-gray-500 mb-8 font-light">The article you are looking for does not exist.</p>
                    <Link to="/blog" className="inline-flex items-center gap-3 text-supreme-black font-sans font-semibold uppercase tracking-[0.1em] text-xs hover:text-supreme-gold transition-colors block">
                        <span>Back to Blog</span>
                        <span className="w-6 h-[1px] bg-supreme-gold"></span>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": post.title,
        "image": [
            post.image
        ],
        "datePublished": "2026-02-26T08:00:00+08:00",
        "dateModified": "2026-02-26T09:20:00+08:00",
        "author": [{
            "@type": "Organization",
            "name": post.author,
            "url": "https://supreme-universal.in/"
        }]
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <SEO
                title={`${post.title} | Supreme Riverside Blog`}
                description="Expert analysis on why Punawale is the top real estate investment in West Pune for 2026."
                url={`https://supreme-universal.in/blog/${id}`}
                image={post.image}
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>
            </Helmet>

            <CustomCursor />
            <NoiseOverlay />
            <Navbar />

            {/* Article Header */}
            <section className="pt-24 md:pt-32 pb-0 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                    <div className="mb-8 md:mb-10">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-supreme-gold transition-colors font-sans text-xs md:text-sm tracking-widest uppercase mb-6 md:mb-8">
                            <ArrowLeft size={16} /> Back to Insights
                        </Link>

                        <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 md:mb-6">
                            <span className="text-supreme-gold font-sans font-semibold uppercase tracking-widest text-[10px] md:text-xs">
                                {post.category}
                            </span>
                            <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="text-gray-400 font-sans text-xs md:text-sm">{post.date}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-supreme-black leading-tight mb-6 md:mb-8">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                            <div className="w-10 h-10 rounded-full bg-supreme-gold flex items-center justify-center text-white font-serif italic text-lg shadow-lg">
                                S
                            </div>
                            <div>
                                <p className="text-sm font-sans font-bold text-supreme-black">{post.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-10">
                <div className="container mx-auto px-6 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="aspect-[21/9] w-full relative overflow-hidden shadow-2xl"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                            fetchPriority="high"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-8 md:py-10 pb-20 md:pb-32">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    {/* Render raw HTML for demo, use a parser in prod! */}
                    <div
                        className="prose prose-base sm:prose-lg lg:prose-xl max-w-none text-gray-600 font-light font-sans leading-relaxed prose-headings:font-serif prose-headings:text-supreme-black"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPost;
