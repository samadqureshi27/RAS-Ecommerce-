import type { Metadata } from "next";
import Link from "next/link";
import { RefreshCw, CheckCircle, XCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Exchanges",
  description: "RAS Packaging returns and exchanges policy — 30-day returns on manufacturing defects with free replacements.",
};

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Policy</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Returns & Exchanges</h1>
          <p className="text-lg text-white/70">We stand behind every product we ship.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Summary boxes */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {[
            { icon: CheckCircle, color: "green", title: "30-Day Window", desc: "Report any issues within 30 days of delivery" },
            { icon: RefreshCw, color: "gold", title: "Free Replacement", desc: "Manufacturing defects replaced at no cost" },
            { icon: AlertCircle, color: "navy", title: "Photo Required", desc: "Send photos within 48 hours for transit damage" },
          ].map(({ icon: Icon, color, title, desc }) => (
            <div key={title} className="bg-[#F8F7F4] rounded-2xl p-5 text-center">
              <Icon size={28} className={`mx-auto mb-3 ${color === "green" ? "text-green-500" : color === "gold" ? "text-[#C9A84C]" : "text-[#1B2A4A]"}`} />
              <h3 className="font-bold text-[#1B2A4A] text-sm mb-1">{title}</h3>
              <p className="text-xs text-[#6B6560]">{desc}</p>
            </div>
          ))}
        </div>

        <div className="space-y-10">
          {[
            {
              icon: CheckCircle,
              iconColor: "text-green-500",
              title: "What We Accept Returns For",
              items: [
                "Manufacturing defects (tears, wrong cuts, structural failures)",
                "Significant colour deviation from approved proof (more than 10% CMYK difference)",
                "Incorrect print content — wrong text, artwork, or size — due to our error",
                "Products damaged during transit (report within 48 hours with photos)",
                "Items missing from your order",
              ],
            },
            {
              icon: XCircle,
              iconColor: "text-red-500",
              title: "What We Cannot Accept Returns For",
              items: [
                "Custom orders where the approved proof was printed correctly",
                "Minor colour variations inherent to print processes (within industry tolerances)",
                "Errors in artwork submitted and approved by the customer",
                "Change of mind after production has begun",
                "Damage caused by improper storage or use after delivery",
              ],
            },
          ].map(({ icon: Icon, iconColor, title, items }) => (
            <div key={title}>
              <div className="flex items-center gap-3 mb-4 pb-2 border-b border-[#E8E6E1]">
                <Icon size={22} className={iconColor} />
                <h2 className="text-xl font-bold text-[#1B2A4A]">{title}</h2>
              </div>
              <ul className="space-y-2.5">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#6B6560]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-xl font-bold text-[#1B2A4A] mb-4 pb-2 border-b border-[#E8E6E1]">How to Request a Return</h2>
            <ol className="space-y-4">
              {[
                "Email hello@raspackaging.com or WhatsApp us within 30 days of delivery.",
                "Include your order number, description of the issue, and clear photos.",
                "Our team will review your request within 1 business day.",
                "If approved, we will arrange a free replacement or full refund — your choice.",
                "Replacements are produced and dispatched within 5–7 business days.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style={{ background: "#C9A84C" }}>
                    {i + 1}
                  </span>
                  <p className="text-sm text-[#6B6560] pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-14 text-center bg-[#F8F7F4] rounded-3xl p-8">
          <p className="text-sm text-[#6B6560] mb-4">Need to start a return or have a question?</p>
          <Link href="/contact" className="btn-gold inline-flex px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase">
            Contact Support
          </Link>
        </div>

        <p className="text-xs text-[#9B9489] mt-10 pt-6 border-t border-[#E8E6E1]">
          Last updated: June 2026.
        </p>
      </section>
    </div>
  );
}
