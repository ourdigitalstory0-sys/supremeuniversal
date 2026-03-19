import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';
import NoiseOverlay from '../components/NoiseOverlay';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';

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
        "description": post.excerpt,
        "image": [
            post.image
        ],
        "datePublished": post.datePublished || "2026-02-26T08:00:00+08:00",
        "dateModified": post.dateModified || "2026-02-26T09:20:00+08:00",
        "author": [{
            "@type": "Organization",
            "name": post.author,
            "url": "https://www.supreme-universal.in/"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Supreme Universal",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.supremeuniversal.com/media/supreme-logo.png"
            },
            "url": "https://www.supreme-universal.in/"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.supreme-universal.in/blog/${id}`
        },
        "keywords": `${post.category}, Supreme Rivana Punawale, Punawale real estate, Pune West property, Supreme Universal`,
        "wordCount": post.content.replace(/<[^>]*>/g, '').split(/\s+/).length.toString(),
        "inLanguage": "en-IN",
        "isAccessibleForFree": true,
        "about": [
            {
                "@type": "Place",
                "name": "Punawale",
                "sameAs": "https://en.wikipedia.org/wiki/Punawale"
            },
            {
                "@type": "Thing",
                "name": "Real Estate in Pune",
                "sameAs": "https://en.wikipedia.org/wiki/Real_estate_in_India"
            }
        ]
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <SEO
                title={`${post.title} | Supreme Rivana Punawale Blog`}
                description={post.excerpt}
                url={`https://www.supreme-universal.in/blog/${id}`}
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
            <div className="pt-20">
                <Breadcrumbs />
            </div>

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
            <section className="py-8 md:py-10 pb-12 md:pb-16">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    {/* Render raw HTML for demo, use a parser in prod! */}
                    <div
                        className="prose prose-base sm:prose-lg lg:prose-xl max-w-none text-gray-600 font-light font-sans leading-relaxed prose-headings:font-serif prose-headings:text-supreme-black"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>
            </section>

            {/* SEO Keyword Tag Cloud — Visible on every blog post */}
            <section className="py-12 md:py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                    <h3 className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-supreme-gold mb-6">Related Searches for Supreme Rivana Punawale</h3>
                    <div className="flex flex-wrap gap-2 mb-10">
                        {[
                            "Supreme Rivana Punawale", "Supreme Rivana Punawale price list 2026", "Supreme Rivana Punawale floor plan",
                            "Supreme Rivana Punawale RERA number", "Supreme Rivana Punawale 2 BHK price", "Supreme Rivana Punawale 3 BHK price",
                            "Supreme Rivana Punawale brochure", "Supreme Rivana Punawale possession date", "Supreme Rivana Punawale amenities",
                            "Supreme Rivana Punawale site visit", "Supreme Rivana Punawale reviews", "Supreme Rivana Punawale master plan",
                            "Flats in Punawale", "2 BHK flats Punawale near Hinjewadi", "3 BHK apartments Punawale",
                            "Luxury apartments Pune West", "New launch projects PCMC", "Property investment Punawale 2026",
                            "Best project in Punawale", "Flats near Hinjewadi IT Park", "Apartments near Wakad",
                            "River view apartments Pune", "Premium flats near Mumbai Pune Expressway",
                            "IGBC certified homes Punawale", "NRI property investment Pune",
                            "Supreme Universal projects Pune", "High ROI flats Pune West",
                            "Gated community Punawale", "Ready to move flats near Hinjewadi",
                            "Luxury residences Punawale Pune", "Under construction flats Punawale",
                            "Supreme Rivana Punawale vs Puneville", "Supreme Rivana Punawale vs ANP Autograph",
                            "Best 2 BHK under 1 crore Punawale", "Supreme Rivana Punawale construction update"
                        ].map((keyword, idx) => (
                            <Link
                                key={idx}
                                to="/supreme-rivana-location"
                                className="px-3 py-1.5 text-[10px] md:text-[11px] font-sans text-gray-500 bg-gray-50 border border-gray-100 rounded-full hover:bg-supreme-gold/10 hover:border-supreme-gold/30 hover:text-supreme-black transition-all duration-300 whitespace-nowrap"
                            >
                                {keyword}
                            </Link>
                        ))}
                    </div>

                    {/* Branded Internal CTA */}
                    <div className="bg-supreme-black p-8 md:p-10 border-l-4 border-supreme-gold">
                        <h4 className="font-serif text-2xl text-supreme-gold mb-3">Explore Supreme Rivana Punawale</h4>
                        <p className="text-white/70 font-sans font-light mb-6 leading-relaxed">
                            Discover why <strong className="text-white">Supreme Rivana Punawale</strong> is the top-ranked luxury project in Pune West 2026 — featuring 31-storey towers, 15-acre riverside township, and 40+ world-class amenities near Hinjewadi IT Park.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <Link to="/supreme-rivana-overview" className="inline-block bg-supreme-gold text-supreme-black px-5 py-2.5 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white transition-colors">Project Overview</Link>
                            <Link to="/supreme-rivana-floor-plans" className="inline-block border border-white/30 text-white px-5 py-2.5 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">Floor Plans</Link>
                            <Link to="/supreme-rivana-contact" className="inline-block border border-white/30 text-white px-5 py-2.5 font-sans font-semibold uppercase tracking-widest text-xs hover:bg-white/10 transition-colors">Get Price List</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Articles */}
            <section className="py-16 md:py-24 bg-supreme-gray border-t border-gray-100">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-12">
                        <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs block mb-4">Continue Reading</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-supreme-black">
                            Related <span className="italic font-light text-supreme-gold">Insights</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts
                            .filter(p => p.id !== post.id)
                            .slice(0, 3)
                            .map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.id}`}
                                    className="group bg-white flex flex-col h-full hover:shadow-xl transition-shadow duration-500"
                                >
                                    <div className="relative overflow-hidden aspect-[4/3]">
                                        <img
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute top-3 left-3 bg-supreme-black text-white text-[10px] font-sans uppercase tracking-widest px-3 py-1">
                                            {relatedPost.category}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <p className="text-gray-400 text-xs font-sans mb-3">{relatedPost.date}</p>
                                        <h3 className="text-lg font-serif text-supreme-black mb-3 leading-tight group-hover:text-supreme-gold transition-colors duration-300">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-500 font-sans font-light text-sm flex-grow line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                        <span className="mt-4 inline-flex items-center gap-2 text-supreme-black font-sans font-semibold uppercase tracking-[0.1em] text-[10px] group-hover:text-supreme-gold transition-colors">
                                            Read Article
                                            <span className="w-4 h-[1px] bg-supreme-gold"></span>
                                        </span>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BlogPost;
