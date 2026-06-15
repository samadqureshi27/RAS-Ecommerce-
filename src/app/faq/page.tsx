"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    category: "Orders & MOQ",
    items: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ varies by product: Boxes from 20–50 units, Paper Cups from 300–500 pcs, Business Cards from 500 cards, Shopping Bags from 100–200 pcs, and Labels from 1,000 labels. Contact us for custom quantity pricing.",
      },
      {
        q: "Can I order a sample before placing a bulk order?",
        a: "Yes! We offer sample orders for most products. Sample fees vary by product and are credited against your first bulk order. Contact us to arrange samples.",
      },
      {
        q: "How do I place a bulk order?",
        a: "You can order directly through our website, or contact us via WhatsApp or email for bulk order quotes. For orders above PKR 50,000, we recommend getting in touch directly for the best pricing.",
      },
    ],
  },
  {
    category: "Custom Printing",
    items: [
      {
        q: "What file formats do you accept for custom artwork?",
        a: "We accept AI, PDF, EPS, and high-resolution PNG/JPG (300 DPI minimum). All files should be in CMYK colour mode with 3mm bleed on all sides. Our design team can assist if needed.",
      },
      {
        q: "Do you offer design services?",
        a: "Yes, we offer basic design assistance at no extra charge for simple layouts. For complex designs or branding projects, our design team can help at an affordable rate. Ask us when placing your order.",
      },
      {
        q: "What printing techniques do you offer?",
        a: "We offer CMYK offset printing, digital printing, flexographic printing, foil stamping (gold/silver), spot UV coating, embossing, and debossing — depending on the product.",
      },
      {
        q: "Can I get a digital proof before printing?",
        a: "Absolutely. We send a digital proof for approval before every print run. No production begins until you approve the proof. Physical samples are available on request.",
      },
    ],
  },
  {
    category: "Production & Delivery",
    items: [
      {
        q: "How long does production take?",
        a: "Standard production time is 5–7 business days after artwork approval. Rush orders (2–3 days) are available for certain products at an additional cost. Delivery adds 1–3 days within Pakistan.",
      },
      {
        q: "Do you deliver across Pakistan?",
        a: "Yes, we deliver nationwide via reliable courier partners. Standard delivery takes 2–4 business days after dispatch. Same-day or next-day delivery is available in Lahore.",
      },
      {
        q: "Is delivery free?",
        a: "Free delivery is available on orders above PKR 10,000. A flat delivery charge of PKR 250 applies to orders below this threshold.",
      },
    ],
  },
  {
    category: "Payments & Returns",
    items: [
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, Easypaisa, JazzCash, and cash on delivery (COD) for eligible orders. For bulk orders, 50% advance is required before production begins.",
      },
      {
        q: "What is your return policy?",
        a: "We accept returns within 30 days for manufacturing defects or printing errors. Custom orders are non-refundable unless there is a verified production error. See our Returns page for full details.",
      },
      {
        q: "What if my order arrives damaged?",
        a: "If products are damaged in transit, contact us within 48 hours with photos. We will arrange a replacement or refund at no cost to you.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Support</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/70">
            Everything you need to know about RAS Packaging products and services.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        {faqs.map((section) => (
          <div key={section.category}>
            <h2 className="text-lg font-bold text-[#C9A84C] tracking-[0.15em] uppercase mb-5 pb-3 border-b border-[#E8E6E1]">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((item, i) => {
                const key = `${section.category}-${i}`;
                const isOpen = openIndex === key;
                return (
                  <div key={key} className={`rounded-2xl border transition-all ${isOpen ? "border-[#C9A84C] shadow-sm" : "border-[#E8E6E1]"}`}>
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                    >
                      <span className="text-sm font-semibold text-[#1B2A4A]">{item.q}</span>
                      <ChevronDown
                        size={18}
                        className={`text-[#C9A84C] flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-[#6B6560] leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center bg-[#F8F7F4] rounded-3xl p-10">
          <h3 className="text-xl font-bold text-[#1B2A4A] mb-3">Still have questions?</h3>
          <p className="text-sm text-[#6B6560] mb-6">Our team is happy to help with any queries not covered above.</p>
          <Link href="/contact" className="btn-gold inline-flex px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
