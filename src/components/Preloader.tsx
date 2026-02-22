
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    isLoading: boolean;
}

const Preloader = ({ isLoading }: PreloaderProps) => {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0, transition: { duration: 0.5 } }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-center"
                    >
                        <div className="relative mb-6">
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight uppercase leading-none">
                                Supreme
                            </h1>
                            <h2 className="text-xl md:text-2xl text-supreme-gold tracking-[0.4em] uppercase font-light mt-1">
                                Riverside
                            </h2>
                            {/* Architectural Arc branding element */}
                            <svg className="absolute -top-4 -right-6 w-12 h-12 text-supreme-gold opacity-80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                                <path d="M10 90 A 80 80 0 0 1 90 10" />
                            </svg>
                        </div>
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                            className="h-[1px] bg-supreme-gold mx-auto mt-4"
                        />
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="text-gray-400 text-sm tracking-[0.3em] uppercase mt-4"
                        >
                            Luxury Living at Punawale
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
