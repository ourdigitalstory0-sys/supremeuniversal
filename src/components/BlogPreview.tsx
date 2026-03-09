import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const BlogPreview = () => {
    // Get the 3 most recent posts
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section id="insights" className="py-24 bg-supreme-gray">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-supreme-gold font-sans font-semibold uppercase tracking-[0.2em] text-xs block mb-4">Property Insights</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-supreme-black leading-tight">
                            Latest from <br className="hidden md:block" />
                            <span className="italic font-light text-supreme-gold">Our Blog</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            to="/blog"
                            className="bg-supreme-black text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-supreme-gold transition-all duration-500 inline-block"
                        >
                            View All Articles
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {recentPosts.map((post, index) => (
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
                                />
                                <div className="absolute top-4 left-4 bg-supreme-black text-white text-[10px] font-sans uppercase tracking-widest px-4 py-1">
                                    {post.category}
                                </div>
                            </Link>

                            <div className="p-8 flex flex-col flex-grow">
                                <p className="text-gray-400 text-xs font-sans mb-4">{post.date}</p>
                                <h3 className="text-xl font-serif text-supreme-black mb-4 leading-tight group-hover:text-supreme-gold transition-colors duration-300">
                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                </h3>
                                <p className="text-gray-500 font-sans font-light text-sm mb-8 flex-grow line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-3 text-supreme-black font-sans font-semibold uppercase tracking-[0.1em] text-[10px] hover:text-supreme-gold transition-colors"
                                    >
                                        <span>Read More</span>
                                        <span className="w-6 h-[1px] bg-supreme-black group-hover:bg-supreme-gold transition-colors"></span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
