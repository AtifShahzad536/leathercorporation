import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, MessageSquare, ArrowRight, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ onNavigateInquiry = () => {}, onContinueShopping = () => {} }) {
  const { cart, cartOpen, setCartOpen, updateQuantity, removeFromCart, totalItems } = useCart();

  if (!cartOpen) return null;

  // Build WhatsApp text from cart items
  const buildWhatsAppLink = () => {
    let text = `Hello HAMLO SPORTS! I would like to request a B2B wholesale / team uniform quote for the following items:\n\n`;
    cart.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} - Estimated Qty: ${item.quantity} units (Size: ${item.size || 'Custom Team Roster'}, Color: ${item.color || 'Custom Team Colors'})\n`;
    });
    text += `\nPlease provide 3D mockups and volume tier pricing.`;
    return `https://wa.me/923000000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[260]">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          onClick={() => setCartOpen(false)}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Slide-over panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="absolute top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col justify-between"
        >
          {/* Header */}
          <div className="p-5 border-b border-[var(--secondary)]/10 flex items-center justify-between bg-gray-50/50">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-[3px] bg-[var(--secondary)] text-white flex items-center justify-center">
                <FileText size={16} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-[var(--secondary)]">
                  B2B Team Quote Request
                </h3>
                <span className="text-[11px] text-[var(--secondary)]/60 font-semibold">
                  {totalItems} {totalItems === 1 ? 'Design' : 'Designs'} selected for quotation
                </span>
              </div>
            </div>

            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-[3px] hover:bg-gray-200 text-[var(--secondary)] transition-colors cursor-pointer"
              aria-label="Close quote drawer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 thin-scrollbar">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-[3px] bg-gray-100 flex items-center justify-center mx-auto text-[var(--secondary)]/30">
                  <FileText size={32} />
                </div>
                <h4 className="text-base font-black uppercase text-[var(--secondary)]">
                  Quote List is Empty
                </h4>
                <p className="text-xs text-[var(--secondary)]/60 max-w-xs mx-auto">
                  Select custom sports uniforms or jerseys from our catalog to get instant factory volume pricing & free 3D mockups.
                </p>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    onContinueShopping();
                  }}
                  className="px-6 py-2.5 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-widest rounded-[3px] transition-colors cursor-pointer"
                >
                  Explore Sports Catalog
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="p-3.5 bg-gray-50 rounded-[3px] border border-gray-200 flex gap-3 relative group"
                >
                  <img
                    src={item.image}
                    alt="HAMLO SPORTS Custom Uniform Cart Item"
                    className="w-16 h-20 object-cover rounded-[2px] bg-white flex-shrink-0"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-black uppercase text-[var(--secondary)] leading-snug line-clamp-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.key)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="flex gap-2 text-[10px] text-gray-500 mt-1">
                        <span>Roster: <strong>{item.size || 'Custom'}</strong></span>
                        <span>•</span>
                        <span>Tier: <strong>Starting ${item.price}</strong></span>
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-200">
                      <div className="flex items-center border border-gray-300 rounded-[3px] bg-white">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="px-2 text-xs font-bold text-[var(--secondary)] min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 text-gray-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus size={11} />
                        </button>
                      </div>

                      <span className="text-[11px] font-bold text-[var(--accent)] uppercase tracking-wider">
                        {item.quantity >= 101 ? 'Tier 4 Rate' : item.quantity >= 51 ? 'Tier 3 Rate' : item.quantity >= 25 ? 'Tier 2 Rate' : 'Team Batch'}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Quote Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[var(--secondary)]/10 bg-white space-y-3 shadow-lg">
              {/* Highlight */}
              <div className="flex items-center gap-2 p-2 bg-emerald-50 text-emerald-800 text-[10.5px] font-semibold rounded-[3px]">
                <Sparkles size={14} className="text-emerald-600 flex-shrink-0" />
                <span>Free 12-Hour 3D Digital Mockup with Custom Colors & Logos</span>
              </div>

              {/* Action 1: Send on WhatsApp */}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setCartOpen(false)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare size={16} />
                <span>Instant WhatsApp Quote</span>
              </a>

              {/* Action 2: Go to Inquiry Form */}
              <button
                onClick={() => {
                  setCartOpen(false);
                  onNavigateInquiry(cart[0]?.name || 'Custom Sports Uniforms');
                }}
                className="w-full py-3 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white font-bold text-xs uppercase tracking-widest rounded-[3px] shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <FileText size={14} />
                <span>Submit Detailed Inquiry Form</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[9.5px] text-[var(--secondary)]/50 uppercase font-medium">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>Factory Direct Sialkot • No Upfront Payment Required</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
