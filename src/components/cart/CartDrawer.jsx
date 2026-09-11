import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartDrawer({ onNavigateCheckout = () => {}, onContinueShopping = () => {} }) {
  const { cart, cartOpen, setCartOpen, updateQuantity, removeFromCart, subtotal, totalItems } = useCart();

  if (!cartOpen) return null;

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
                <ShoppingBag size={16} />
              </div>
              <div>
                <h3 className="text-sm font-black uppercase tracking-wider text-[var(--secondary)]">
                  Your Shopping Cart
                </h3>
                <span className="text-[11px] text-[var(--secondary)]/60 font-semibold">
                  {totalItems} {totalItems === 1 ? 'Item' : 'Items'} selected
                </span>
              </div>
            </div>

            <button
              onClick={() => setCartOpen(false)}
              className="p-2 rounded-[3px] hover:bg-gray-200 text-[var(--secondary)] transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X size={18} />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 thin-scrollbar">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-[3px] bg-gray-100 flex items-center justify-center mx-auto text-[var(--secondary)]/30">
                  <ShoppingBag size={32} />
                </div>
                <h4 className="text-base font-black uppercase text-[var(--secondary)]">
                  Your Cart is Empty
                </h4>
                <p className="text-xs text-[var(--secondary)]/60 max-w-xs mx-auto">
                  Explore our signature jacket catalog and select your favorite bespoke design to purchase.
                </p>
                <button
                  onClick={() => {
                    setCartOpen(false);
                    onContinueShopping();
                  }}
                  className="px-6 py-2.5 bg-[var(--secondary)] hover:bg-[var(--accent)] text-white text-xs font-bold uppercase tracking-widest rounded-[3px] transition-colors cursor-pointer"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.key}
                  className="flex gap-4 p-3.5 bg-gray-50/80 rounded-[3px] border border-[var(--secondary)]/10 relative group"
                >
                  {/* Item Image */}
                  <div className="w-20 h-24 rounded-[3px] overflow-hidden bg-gray-200 flex-shrink-0 relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h4 className="text-xs font-black uppercase text-[var(--secondary)] truncate">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.key)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-1.5 py-0.5 bg-white border border-gray-200 text-[9.5px] font-bold text-[var(--secondary)] rounded-[2px]">
                          Size: {item.size}
                        </span>
                        {item.color && (
                          <span className="text-[9.5px] text-[var(--secondary)]/70 font-medium truncate">
                            {item.color}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price & Quantity Controls */}
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

                      <span className="text-sm font-black text-[var(--secondary)]">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-[var(--secondary)]/10 bg-white space-y-3 shadow-lg">
              {/* Shipping highlight */}
              <div className="flex items-center gap-2 p-2 bg-emerald-50 text-emerald-800 text-[10.5px] font-semibold rounded-[3px]">
                <Truck size={14} className="text-emerald-600 flex-shrink-0" />
                <span>Complimentary Express Worldwide Courier Shipping</span>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center py-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--secondary)]/70">
                  Subtotal
                </span>
                <span className="text-xl font-black text-[var(--secondary)]">
                  ${subtotal} USD
                </span>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setCartOpen(false);
                  onNavigateCheckout();
                }}
                className="w-full py-3.5 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[9.5px] text-[var(--secondary)]/50 uppercase font-medium">
                <ShieldCheck size={12} className="text-emerald-600" />
                <span>256-Bit SSL Encrypted & Insured Checkout</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
