"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronRight, Shield, Truck, Lock } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { state, totalPrice } = useCart();
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", province: "", postalCode: "",
    payment: "cod",
  });
  const [loading, setLoading] = useState(false);
  const [placed, setPlaced] = useState(false);

  const delivery = totalPrice >= 10000 ? 0 : 250;
  const total = totalPrice + delivery;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setPlaced(true);
  };

  if (state.items.length === 0 && !placed) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <ShoppingBag size={48} className="text-[#C9A84C] mb-4" />
        <h1 className="text-2xl font-bold text-[#1B2A4A] mb-3">Your bag is empty</h1>
        <p className="text-[#9B9489] mb-8">Add some products before checking out.</p>
        <Link href="/shop" className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase">
          Shop Now
        </Link>
      </div>
    );
  }

  if (placed) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, #C9A84C, #E8CC80)" }}>
          <span className="text-3xl">✓</span>
        </div>
        <h1 className="text-3xl font-bold text-[#1B2A4A] mb-3">Order Placed!</h1>
        <p className="text-[#6B6560] max-w-sm mb-8">
          Thank you for your order. We will confirm via WhatsApp/email within 1 hour and begin production after payment confirmation.
        </p>
        <Link href="/shop" className="btn-gold px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F7F4]">
      {/* Header */}
      <div className="bg-white border-b border-[#E8E6E1] py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="font-display text-lg font-bold tracking-[0.18em] uppercase text-[#1B2A4A]">
            RAS <span className="text-[#C9A84C] text-xs tracking-[0.25em]">PACKAGING</span>
          </Link>
          <div className="flex items-center gap-1.5 text-xs text-[#9B9489]">
            <Lock size={13} className="text-[#C9A84C]" />
            Secure Checkout
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E6E1]">
              <h2 className="text-base font-bold text-[#1B2A4A] mb-5">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "firstName", label: "First Name", type: "text", required: true },
                  { name: "lastName", label: "Last Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                  { name: "phone", label: "Phone / WhatsApp", type: "tel", required: true },
                ].map(({ name, label, type, required }) => (
                  <div key={name}>
                    <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[#6B6560] mb-1.5">{label}</label>
                    <input
                      type={type}
                      name={name}
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      required={required}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] focus:outline-none focus:border-[#C9A84C] transition-colors bg-[#FAFAF9]"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E6E1]">
              <h2 className="text-base font-bold text-[#1B2A4A] mb-5">Delivery Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[#6B6560] mb-1.5">Street Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    placeholder="House/flat number, street name"
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] focus:outline-none focus:border-[#C9A84C] transition-colors bg-[#FAFAF9]"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { name: "city", label: "City", placeholder: "Lahore" },
                    { name: "province", label: "Province", placeholder: "Punjab" },
                    { name: "postalCode", label: "Postal Code", placeholder: "54000" },
                  ].map(({ name, label, placeholder }) => (
                    <div key={name}>
                      <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[#6B6560] mb-1.5">{label}</label>
                      <input
                        type="text"
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        placeholder={placeholder}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] focus:outline-none focus:border-[#C9A84C] transition-colors bg-[#FAFAF9]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl p-6 border border-[#E8E6E1]">
              <h2 className="text-base font-bold text-[#1B2A4A] mb-5">Payment Method</h2>
              <div className="space-y-3">
                {[
                  { value: "cod", label: "Cash on Delivery", desc: "Pay when your order arrives" },
                  { value: "bank", label: "Bank Transfer", desc: "We will share bank details after order confirmation" },
                  { value: "easypaisa", label: "Easypaisa / JazzCash", desc: "Mobile wallet payment" },
                ].map(({ value, label, desc }) => (
                  <label
                    key={value}
                    className={`flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      form.payment === value ? "border-[#C9A84C] bg-amber-50" : "border-[#E8E6E1] hover:border-[#C9A84C]/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value={value}
                      checked={form.payment === value}
                      onChange={handleChange}
                      className="mt-1 accent-[#C9A84C]"
                    />
                    <div>
                      <p className="text-sm font-semibold text-[#1B2A4A]">{label}</p>
                      <p className="text-xs text-[#9B9489]">{desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Place Order
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden sticky top-28">
              <div className="px-6 py-4 border-b border-[#E8E6E1]" style={{ background: "linear-gradient(135deg, #1B2A4A, #243660)" }}>
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <ShoppingBag size={18} className="text-[#C9A84C]" />
                  Order Summary
                </h2>
              </div>
              <div className="p-6 space-y-4">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-[#F8F7F4] flex-shrink-0">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="56px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#1B2A4A] line-clamp-2 leading-tight">{item.product.name}</p>
                      <p className="text-xs text-[#9B9489] mt-0.5">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-bold text-[#1B2A4A] flex-shrink-0">
                      PKR {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}

                <div className="pt-4 border-t border-[#E8E6E1] space-y-2">
                  <div className="flex justify-between text-sm text-[#6B6560]">
                    <span>Subtotal</span>
                    <span>PKR {totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-[#6B6560]">
                    <span>Delivery</span>
                    <span className={delivery === 0 ? "text-green-600 font-medium" : ""}>
                      {delivery === 0 ? "FREE" : `PKR ${delivery}`}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-[#1B2A4A] text-base pt-2 border-t border-[#E8E6E1]">
                    <span>Total</span>
                    <span>PKR {total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#9B9489] pt-2">
                  <Shield size={14} className="text-[#C9A84C]" />
                  <span>Secure checkout — your data is protected</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#9B9489]">
                  <Truck size={14} className="text-[#C9A84C]" />
                  <span>5–7 day production + 1–3 day delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
