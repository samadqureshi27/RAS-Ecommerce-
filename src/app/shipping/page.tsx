import type { Metadata } from "next";
import { Truck, Clock, MapPin, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Delivery Policy",
  description: "RAS Packaging delivery information — free delivery on orders over PKR 10,000, nationwide shipping, and standard 5–7 day production timeline.",
};

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Shipping</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Delivery Policy</h1>
          <p className="text-lg text-white/70">
            Fast, reliable delivery across Pakistan — on time, every time.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Key highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {[
            { icon: Truck, title: "Free Delivery", desc: "On orders above PKR 10,000" },
            { icon: Clock, title: "5–7 Day Production", desc: "Standard turnaround after proof approval" },
            { icon: MapPin, title: "Nationwide Delivery", desc: "All major cities across Pakistan" },
            { icon: Package, title: "Secure Packaging", desc: "Orders are packed to prevent transit damage" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#F8F7F4] rounded-2xl p-5 text-center">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1B2A4A, #243660)" }}>
                <Icon size={22} className="text-[#C9A84C]" />
              </div>
              <h3 className="font-bold text-[#1B2A4A] text-sm mb-1">{title}</h3>
              <p className="text-xs text-[#6B6560]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Policy content */}
        <div className="prose max-w-none space-y-10">
          {[
            {
              title: "Production Timeline",
              content: [
                "Standard production: 5–7 business days after artwork proof approval.",
                "Rush production: 2–3 business days available for selected products at additional cost.",
                "Production begins only after written approval of the digital proof.",
                "Production timelines exclude weekends and public holidays.",
              ],
            },
            {
              title: "Delivery Times",
              content: [
                "Lahore (same-day): Available for select orders placed before 12:00 PM on weekdays.",
                "Lahore (next-day): Standard for all Lahore orders.",
                "Other major cities (Karachi, Islamabad, Faisalabad, etc.): 2–3 business days after dispatch.",
                "Remote areas: 4–7 business days after dispatch.",
              ],
            },
            {
              title: "Delivery Charges",
              content: [
                "Free delivery on all orders above PKR 10,000.",
                "PKR 250 flat delivery charge on orders below PKR 10,000.",
                "Oversize or heavy items may incur additional freight charges — you will be informed before order confirmation.",
              ],
            },
            {
              title: "Order Tracking",
              content: [
                "A tracking number is sent via SMS/WhatsApp once your order is dispatched.",
                "You can track your order on our Track Order page or directly with the courier.",
                "For queries about your shipment, contact us at hello@raspackaging.com.",
              ],
            },
            {
              title: "Damaged in Transit",
              content: [
                "If your order arrives damaged, please photograph the packaging and products immediately.",
                "Report damage within 48 hours of delivery via email or WhatsApp.",
                "We will arrange a replacement or refund at no cost to you.",
              ],
            },
          ].map(({ title, content }) => (
            <div key={title}>
              <h2 className="text-xl font-bold text-[#1B2A4A] mb-4 pb-2 border-b border-[#E8E6E1]">{title}</h2>
              <ul className="space-y-2.5">
                {content.map((line, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#6B6560]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#9B9489] mt-12 pt-6 border-t border-[#E8E6E1]">
          Last updated: June 2026. For questions, contact us at{" "}
          <a href="mailto:hello@raspackaging.com" className="text-[#C9A84C] hover:underline">hello@raspackaging.com</a>.
        </p>
      </section>
    </div>
  );
}
