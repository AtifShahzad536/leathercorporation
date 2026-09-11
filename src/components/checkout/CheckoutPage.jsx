import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, ArrowLeft, CheckCircle2, Lock, 
  CreditCard, Building2, Truck, PackageCheck, Sparkles 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CheckoutPage({ onNavigateHome = () => {}, onNavigateProducts = () => {} }) {
  const { cart, subtotal, clearCart } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'United States',
    postalCode: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    specialInstructions: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'LDR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setOrderComplete(true);
    clearCart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (orderComplete) {
    return (
      <div className="w-full bg-[#f8f9fa] min-h-[85vh] py-16 text-[var(--secondary)]">
        <div className="w-[92%] max-w-2xl mx-auto bg-white border border-[var(--secondary)]/10 rounded-[3px] p-8 md:p-12 text-center shadow-xl space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 size={36} />
          </div>

          <div>
            <span className="text-[10px] font-bold text-[var(--accent)] uppercase tracking-widest block mb-1">
              ORDER CONFIRMED & IN QUEUE
            </span>
            <h1 className="text-2xl sm:text-4xl font-black uppercase text-[var(--secondary)]">
              Thank You For Your Order
            </h1>
            <p className="text-xs sm:text-sm text-[var(--secondary)]/70 max-w-md mx-auto mt-2">
              Your order confirmation and tracking details have been sent to <strong>{formData.email || 'your email'}</strong>.
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-[3px] p-4 text-left space-y-2 text-xs">
            <div className="flex justify-between font-semibold">
              <span className="text-gray-500">Order Reference:</span>
              <span className="font-mono font-bold text-[var(--secondary)]">{orderId}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-gray-500">Payment Status:</span>
              <span className="text-emerald-700 font-bold">Authorized & Secured</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-gray-500">Estimated Dispatch:</span>
              <span>2-3 Business Days (DHL Express Insured)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all cursor-pointer"
            >
              Return to Home
            </button>
            <button
              onClick={onNavigateProducts}
              className="px-6 py-3 border border-[var(--secondary)]/20 hover:border-[var(--accent)] text-[var(--secondary)] hover:text-[var(--accent)] font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all cursor-pointer"
            >
              Explore More Jackets
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="w-full bg-[#f8f9fa] min-h-[75vh] py-20 text-[var(--secondary)]">
        <div className="w-[92%] max-w-lg mx-auto bg-white border border-[var(--secondary)]/10 rounded-[3px] p-8 text-center shadow-lg space-y-4">
          <h2 className="text-xl font-black uppercase text-[var(--secondary)]">
            Your Cart is Empty
          </h2>
          <p className="text-xs text-[var(--secondary)]/60">
            Please add at least one jacket from our catalog before proceeding to checkout.
          </p>
          <button
            onClick={onNavigateProducts}
            className="px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-bold text-xs uppercase tracking-widest rounded-[3px] transition-all cursor-pointer"
          >
            Browse Jacket Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#f8f9fa] min-h-screen py-10 text-[var(--secondary)]">
      <div className="w-[92%] mx-auto">
        
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-[11px] font-medium tracking-wider uppercase text-[var(--secondary)]/60 mb-6">
          <button onClick={onNavigateProducts} className="hover:text-[var(--accent)] transition-colors flex items-center gap-1 cursor-pointer">
            <ArrowLeft size={12} /> BACK TO CATALOG
          </button>
          <span>/</span>
          <span className="text-[var(--secondary)] font-bold">SECURE CHECKOUT</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Form Column */}
          <div className="flex-1 w-full bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-[var(--secondary)]/10">
              <Lock size={16} className="text-emerald-600" />
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-[var(--secondary)]">
                Secure Delivery & Payment Details
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Contact Information */}
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3">
                  1. Customer Contact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">First Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Alexander"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Last Name *</label>
                    <input
                      required
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Vance"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@domain.com"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Phone / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3">
                  2. Shipping Destination
                </h3>
                <div className="space-y-3">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Street Address *</label>
                    <input
                      required
                      type="text"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="742 Evergreen Terrace, Suite 4B"
                      className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">City *</label>
                      <input
                        required
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="New York"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Country *</label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)] bg-white"
                      >
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Germany">Germany</option>
                        <option value="France">France</option>
                        <option value="Italy">Italy</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Japan">Japan</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Postal Code *</label>
                      <input
                        required
                        type="text"
                        value={formData.postalCode}
                        onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                        placeholder="10001"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] mb-3">
                  3. Payment Method
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-[3px] border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--secondary)]'
                        : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <CreditCard size={16} className={paymentMethod === 'card' ? 'text-[var(--accent)]' : ''} />
                    <span>Credit / Debit Card</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bank')}
                    className={`p-3 rounded-[3px] border flex items-center gap-2 text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'bank'
                        ? 'border-[var(--accent)] bg-[var(--accent)]/5 text-[var(--secondary)]'
                        : 'border-gray-200 bg-white text-gray-600'
                    }`}
                  >
                    <Building2 size={16} className={paymentMethod === 'bank' ? 'text-[var(--accent)]' : ''} />
                    <span>Direct Wire / B2B Transfer</span>
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="space-y-3 p-4 bg-gray-50 rounded-[3px] border border-gray-200">
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Card Number *</label>
                      <input
                        required
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        placeholder="4532 •••• •••• 8892"
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Expiry Date *</label>
                        <input
                          required
                          type="text"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                          placeholder="MM / YY"
                          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold uppercase tracking-wider block mb-1">Security CVC *</label>
                        <input
                          required
                          type="password"
                          maxLength={4}
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                          placeholder="•••"
                          className="w-full px-3 py-2 text-xs border border-gray-300 rounded-[3px] bg-white focus:outline-none focus:border-[var(--accent)]"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-gray-50 rounded-[3px] border border-gray-200 text-xs text-[var(--secondary)]/80 space-y-1.5">
                    <p className="font-semibold">Official Export Proforma Invoice details will be generated upon confirmation.</p>
                    <p className="text-[11px] text-gray-500">SWIFT / IBAN instructions and escrow assurance documents will be dispatched instantly.</p>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[var(--accent)] hover:bg-[var(--accent)]/90 text-white font-black text-xs uppercase tracking-[0.2em] rounded-[3px] shadow-xl transition-all cursor-pointer"
              >
                Place Insured Order (${subtotal} USD)
              </button>
            </form>
          </div>

          {/* Right Summary Column */}
          <div className="w-full lg:w-96 flex-shrink-0 bg-white border border-[var(--secondary)]/10 rounded-[3px] p-6 shadow-sm space-y-5">
            <h3 className="text-xs font-black uppercase tracking-wider text-[var(--secondary)] pb-3 border-b border-[var(--secondary)]/10">
              Order Summary ({cart.length} {cart.length === 1 ? 'item' : 'items'})
            </h3>

            {/* Cart Items List */}
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1 thin-scrollbar">
              {cart.map((item) => (
                <div key={item.key} className="flex gap-3 text-xs">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-16 object-cover rounded-[2px] bg-gray-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[var(--secondary)] truncate">{item.name}</h4>
                    <p className="text-[10px] text-gray-500">Size: {item.size} • Qty: {item.quantity}</p>
                    <span className="font-bold text-[var(--secondary)] mt-1 block">${item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Breakdown */}
            <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span className="font-bold text-[var(--secondary)]">${subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Worldwide Insured Courier:</span>
                <span className="text-emerald-600 font-bold uppercase text-[10px]">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Customs & Export Handling:</span>
                <span className="text-emerald-600 font-bold uppercase text-[10px]">INCLUDED</span>
              </div>
              <div className="flex justify-between text-sm font-black pt-3 border-t border-gray-200 text-[var(--secondary)]">
                <span>Total Due:</span>
                <span className="text-xl text-[var(--accent)]">${subtotal} USD</span>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="p-3 bg-gray-50 rounded-[3px] border border-gray-200 text-[10.5px] text-gray-600 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-[var(--secondary)]">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>100% Genuine Full-Grain Guarantee</span>
              </div>
              <p>Direct tannery-to-doorstep international insured courier shipping with tracking.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
