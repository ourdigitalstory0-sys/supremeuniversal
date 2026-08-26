import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const QUICK_QUESTIONS = [
    'What is the price of 2 BHK?',
    'When is possession?',
    'Where is the project located?',
    'What amenities are available?',
];

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            content: 'Hello! 👋 I\'m your Supreme Rivana assistant. Ask me anything about pricing, floor plans, location, or amenities!'
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showPulse, setShowPulse] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Stop pulsing after 10 seconds
        const timer = setTimeout(() => setShowPulse(false), 10000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setShowPulse(false);
            messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isOpen, messages]);

    const sendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;

        const userMsg: Message = { role: 'user', content: text };
        const history = messages.slice(1); // exclude the greeting

        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    history: history.map(m => ({ role: m.role, content: m.content }))
                })
            });

            const data = await res.json() as { success: boolean; reply: string };

            setMessages(prev => [...prev, {
                role: 'assistant',
                content: data.reply || 'Please call us at +91-7744009295 for more details!'
            }]);
        } catch {
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Connection issue. Please call us directly at +91-7744009295!'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.85, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed bottom-24 right-4 md:right-6 z-[200] w-[calc(100vw-2rem)] max-w-sm bg-supreme-black border border-white/10 shadow-2xl flex flex-col overflow-hidden"
                        style={{ maxHeight: '70vh' }}
                    >
                        {/* Header */}
                        <div className="bg-supreme-gold px-4 py-3 flex items-center justify-between flex-shrink-0">
                            <div className="flex items-center gap-2">
                                <Bot size={18} className="text-white" />
                                <div>
                                    <p className="text-white font-sans font-semibold text-sm leading-none">Supreme Rivana AI</p>
                                    <p className="text-white/80 text-[10px] mt-0.5">Real Estate Assistant</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-0">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] px-3 py-2 text-xs font-sans leading-relaxed ${
                                        msg.role === 'user'
                                            ? 'bg-supreme-gold text-white rounded-l-lg rounded-tr-lg'
                                            : 'bg-white/10 text-white/90 rounded-r-lg rounded-tl-lg'
                                    }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 px-3 py-2 rounded-r-lg rounded-tl-lg">
                                        <Loader2 size={14} className="text-supreme-gold animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Questions */}
                        {messages.length <= 1 && (
                            <div className="px-3 pb-2 flex flex-wrap gap-1.5 flex-shrink-0">
                                {QUICK_QUESTIONS.map(q => (
                                    <button
                                        key={q}
                                        onClick={() => sendMessage(q)}
                                        className="text-[10px] px-2 py-1 border border-supreme-gold/40 text-supreme-gold/80 hover:bg-supreme-gold/10 transition-colors rounded font-sans"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Input */}
                        <div className="p-3 border-t border-white/10 flex gap-2 flex-shrink-0">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                                placeholder="Ask about pricing, amenities..."
                                className="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-white text-xs placeholder-white/30 focus:outline-none focus:border-supreme-gold transition-colors font-sans"
                            />
                            <button
                                onClick={() => sendMessage(input)}
                                disabled={!input.trim() || isLoading}
                                className="bg-supreme-gold text-white p-2 hover:bg-white hover:text-supreme-black transition-colors disabled:opacity-40"
                            >
                                <Send size={14} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <div className="fixed bottom-6 right-4 md:right-6 z-[200]">
                {/* Pulse ring when closed */}
                {!isOpen && showPulse && (
                    <span className="absolute inset-0 rounded-full bg-supreme-gold/40 animate-ping" />
                )}
                <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(prev => !prev)}
                    className="relative w-14 h-14 bg-supreme-gold text-white rounded-full shadow-2xl shadow-supreme-gold/40 flex items-center justify-center"
                    aria-label="Open AI Chat Assistant"
                >
                    <AnimatePresence mode="wait">
                        {isOpen
                            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X size={22} /></motion.div>
                            : <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageCircle size={22} /></motion.div>
                        }
                    </AnimatePresence>
                </motion.button>
            </div>
        </>
    );
};

export default ChatWidget;
