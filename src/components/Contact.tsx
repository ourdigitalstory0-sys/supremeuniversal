
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 bg-supreme-black text-white relative overflow-hidden">
            {/* Decorative bg */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-supreme-gold/10 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

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
                                Connect With Us
                            </span>
                            <span className="w-8 h-[1px] bg-supreme-gold"></span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white leading-tight mb-6">
                            Register Your <span className="italic font-light text-supreme-gold">Interest</span>
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-sans font-light">
                            Our sales team will get back to you shortly to help you find your dream home.
                        </p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    <div className="lg:w-5/12 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <h3 className="text-2xl font-serif text-supreme-gold">Site Experience Center</h3>
                            <p className="text-white/70 font-sans font-light leading-loose text-lg">
                                Supreme Riverside<br />
                                Near Lotus Business School,<br />
                                Punawale, Pune, Maharashtra - 411033
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <a href="tel:+917744009295" className="flex items-center gap-6 group">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-supreme-gold transition-colors duration-500">
                                    <Phone className="text-supreme-gold w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] font-sans text-white/40 mb-1 group-hover:text-supreme-gold transition-colors duration-300">Call Us</p>
                                    <p className="text-xl text-white font-sans font-light tracking-wide group-hover:text-supreme-gold transition-colors duration-300">+91 77440 09295</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6 group cursor-pointer">
                                <div className="p-4 bg-white/5 border border-white/10 rounded-full group-hover:border-supreme-gold transition-colors duration-500">
                                    <Mail className="text-supreme-gold w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] font-sans text-white/40 mb-1 group-hover:text-supreme-gold transition-colors duration-300">Email Us</p>
                                    <p className="text-xl text-white font-sans font-light tracking-wide group-hover:text-supreme-gold transition-colors duration-300">sales@supremeriverside.com</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-7/12">
                        <motion.form
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            action="https://formsubmit.co/propsmartrealty@gmail.com"
                            method="POST"
                            className="space-y-8 bg-white/5 p-8 md:p-12 border border-white/10"
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_subject" value="New Enquiry from Supreme Riverside Website" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name *"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans font-light tracking-wide focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans font-light tracking-wide focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative group">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans font-light tracking-wide focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30"
                                    />
                                </div>
                                <div className="relative group">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number *"
                                        required
                                        className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans font-light tracking-wide focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30"
                                    />
                                </div>
                            </div>

                            <div className="relative group pt-4">
                                <textarea
                                    name="message"
                                    placeholder="Your Message (Optional)"
                                    rows={3}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white font-sans font-light tracking-wide focus:outline-none focus:border-supreme-gold transition-colors placeholder-white/30 resize-none"
                                ></textarea>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full px-10 py-5 bg-supreme-gold text-supreme-black font-sans font-semibold tracking-[0.15em] uppercase hover:bg-white transition-all duration-300 shadow-xl shadow-supreme-gold/20 hover:shadow-white/20"
                                >
                                    Submit Request
                                </button>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
