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
        "description": post.excerpt,
        "image": [
            post.image
        ],
        "datePublished": post.datePublished || "2026-02-26T08:00:00+08:00",
        "dateModified": post.dateModified || "2026-02-26T09:20:00+08:00",
        "author": [{
            "@type": "Organization",
            "name": post.author,
            "url": "https://supreme-universal.in/"
        }],
        "publisher": {
            "@type": "Organization",
            "name": "Supreme Universal",
            "logo": {
                "@type": "ImageObject",
                "url": "https://cdn.supremeuniversal.com/media/supreme-logo.png"
            },
            "url": "https://supreme-universal.in/"
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://supreme-universal.in/blog/${id}`
        },
        "keywords": `${post.category}, Supreme Riverside Punawale, Punawale real estate, Pune West property, Supreme Universal`,
        "wordCount": post.content.replace(/<[^>]*>/g, '').split(/\s+/).length.toString(),
        "inLanguage": "en-IN",
        "isAccessibleForFree": true
    };

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <SEO
                title={`${post.title} | Supreme Riverside Blog`}
                description={post.excerpt}
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
