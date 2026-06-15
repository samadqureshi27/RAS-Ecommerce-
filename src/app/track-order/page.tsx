"use client";

import { useState } from "react";
import { Search, Package } from "lucide-react";

export default function TrackOrderPage() {
  const [orderId, setOrderId] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId.trim()) setSearched(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Orders</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Track My Order</h1>
          <p className="text-lg text-white/70">Enter your order number to see the latest status.</p>
        </div>
      </section>

      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <form onSubmit={handleSearch} className="space-y-4">
          <label className="block text-xs font-bold tracking-[0.2em] uppercase text-[#1B2A4A] mb-2">
            Order Number
          </label>
          <div className="flex gap-3">
            <input
              type="text"
              value={orderId}
              onChange={(e) => { setOrderId(e.target.value); setSearched(false); }}
              placeholder="e.g. RAS-20260001"
              className="flex-1 px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] bg-white focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#9B9489]"
            />
            <button type="submit" className="btn-gold px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
              <Search size={16} />
              Track
            </button>
          </div>
        </form>

        {searched && (
          <div className="mt-8 bg-[#F8F7F4] rounded-2xl p-6 text-center fade-in">
            <Package size={36} className="text-[#C9A84C] mx-auto mb-4" />
            <h3 className="font-bold text-[#1B2A4A] mb-2">Order Not Found</h3>
            <p className="text-sm text-[#6B6560]">
              We couldn&apos;t find order <strong>{orderId}</strong>. Please double-check your order number or{" "}
              <a href="/contact" className="text-[#C9A84C] hover:underline">contact us</a> for help.
            </p>
          </div>
        )}

        <div className="mt-10 bg-[#F8F7F4] rounded-2xl p-6 space-y-3">
          <h3 className="text-sm font-bold text-[#1B2A4A] mb-3">How to find your order number</h3>
          {[
            "Check the confirmation email sent to your registered email address.",
            "Log in to your account and go to Order History.",
            "Check the SMS confirmation sent after placing your order.",
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-3 text-sm text-[#6B6560]">
              <span className="w-5 h-5 rounded-full bg-[#C9A84C] text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              {tip}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
