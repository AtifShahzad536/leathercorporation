import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Paperclip, Smile, ChevronLeft, ShieldCheck, Sparkles } from 'lucide-react';

/**
 * LiveChatWidget Component
 * Benchmark: hamcospo.com sticky chat widget with "DON'T THINK! TALK TO US" speech bubble
 * Theme: HAMLO SPORTS (Radiant Orange #F26522, Deep Navy #1E1B6E, Off-White #FAF9F6)
 */

export default function LiveChatWidget({ onNavigateInquiry = () => {} }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: '👋 Hi! How can we help with your team uniforms today?' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    'I have a question about MOQs',
    'Tell me more about 12h 3D Mockups',
    'How does DDP USA Shipping work?'
  ];

  const handleSend = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text }];
    setMessages(newMessages);
    setInputValue('');

    // Automated smart assistant response
    setTimeout(() => {
      let botReply = "Thanks for reaching out! Our design and production desk in Sialkot is ready. We offer zero minimum orders, free 12-hour 3D mockups, and doorstep DDP delivery.";
      if (text.toLowerCase().includes('moq')) {
        botReply = "There are zero minimum order requirements! You can order 1 single replacement jersey or 5,000 full team kits with full dye-sublimation.";
      } else if (text.toLowerCase().includes('mockup') || text.toLowerCase().includes('3d')) {
        botReply = "Send us your team logo and roster colors, and our 3D CAD team will deliver an interactive 3D digital proof within 12 hours free of charge!";
      } else if (text.toLowerCase().includes('shipping') || text.toLowerCase().includes('ddp')) {
        botReply = "All orders ship via expedited air cargo with pre-cleared US/EU customs (DDP). 2–3 weeks guaranteed doorstep delivery with zero surprise fees.";
      }

      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: botReply }
      ]);
    }, 800);
  };

  return (
    <div className="fixed bottom-0 right-4 sm:right-6 z-[120] flex flex-col items-end select-none">
      
      {/* ── EXPANDED LIVE CHAT WINDOW ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="w-[330px] sm:w-[380px] h-[520px] bg-white rounded-t-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-neutral-200 flex flex-col overflow-hidden mb-2"
          >
            {/* Chat Header (HAMLO Radiant Orange & Deep Navy) */}
            <div className="bg-[var(--accent)] text-white px-5 py-4 flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-black/10 p-1 rounded-full transition-colors cursor-pointer"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex flex-col">
                  <h4 className="font-black text-sm uppercase tracking-wider leading-none">
                    Customer Support
                  </h4>
                  <span className="text-[10px] text-white/90 font-medium flex items-center gap-1 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    Hamlo Sports Factory Desk • Online
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-1 rounded-full transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body & Conversation */}
            <div className="flex-1 p-4 overflow-y-auto bg-neutral-50/70 space-y-3 flex flex-col">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start items-start gap-2.5'}`}
                >
                  {msg.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[var(--secondary)] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 shadow">
                      H
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[var(--secondary)] text-white rounded-br-xs shadow-md'
                        : 'bg-white text-[var(--secondary)] border border-neutral-200/80 rounded-tl-xs shadow-sm font-medium'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Quick Prompt Bubbles */}
              {messages.length <= 2 && (
                <div className="pt-2 flex flex-col gap-2 items-end">
                  {quickQuestions.map((q, qIdx) => (
                    <button
                      key={qIdx}
                      onClick={() => handleSend(q)}
                      className="px-3.5 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all text-[11px] font-bold shadow-xs cursor-pointer text-right max-w-[90%]"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct WhatsApp / B2B Fast Action */}
            <div className="px-4 py-2 bg-neutral-100/90 border-t border-neutral-200 flex items-center justify-between text-[11px]">
              <span className="text-neutral-500 font-medium">Need instant quote?</span>
              <a
                href="https://wa.me/923105464116?text=Hi%20HAMLO%20SPORTS,%20I%20want%20to%20order%20custom%20team%20uniforms"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[var(--accent)] hover:underline flex items-center gap-1"
              >
                <span>WhatsApp Live Desk</span> &rarr;
              </a>
            </div>

            {/* Message Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-neutral-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type here and press enter..."
                className="flex-1 text-xs px-3 py-2 border border-neutral-200 rounded-full focus:outline-none focus:border-[var(--accent)] text-[var(--secondary)] placeholder:text-neutral-400"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[var(--accent)] hover:bg-[var(--secondary)] text-white flex items-center justify-center transition-colors cursor-pointer shadow flex-shrink-0"
              >
                <Send size={13} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── STICKY BOTTOM BUTTON & SPEECH BUBBLE ── */}
      <div className="relative flex flex-col items-end">
        
        {/* Animated Hand-drawn Style Speech Bubble: "DON'T THINK! TALK TO US" */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-2 relative pointer-events-auto cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <div className="relative bg-black text-white text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-2xl shadow-2xl flex flex-col items-center border border-white/20">
              <span className="text-[9px] text-white/70 font-semibold tracking-widest block">
                DON'T THINK!
              </span>
              <span className="text-white font-black text-xs tracking-wider">
                TALK TO US
              </span>

              {/* Hand-Drawn Curved Arrow Indicator pointing down to Online button */}
              <svg 
                className="absolute -bottom-5 right-6 w-8 h-8 text-black filter drop-shadow" 
                viewBox="0 0 40 40" 
                fill="none"
              >
                <path 
                  d="M10 5 C 10 22, 28 20, 25 35" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                />
                <path 
                  d="M18 30 L 25 36 L 30 28" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>
          </motion.div>
        )}

        {/* Sticky Trigger Tab: [ Online  💬 ] */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2.5 px-6 py-2.5 rounded-t-xl text-white font-black text-xs uppercase tracking-wider shadow-[0_-5px_20px_rgba(0,0,0,0.25)] transition-all duration-300 cursor-pointer ${
            isOpen
              ? 'bg-[var(--secondary)]'
              : 'bg-[var(--accent)] hover:brightness-110'
          }`}
          aria-label="Toggle Live Support Chat"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
          <span>{isOpen ? 'Close' : 'Online'}</span>
          <MessageSquare size={14} className="fill-white" />
        </button>

      </div>

    </div>
  );
}

