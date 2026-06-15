import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability",
  description: "RAS Packaging is committed to eco-friendly packaging — recyclable materials, responsible sourcing, and minimal waste production.",
};

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">🌿 Green Commitment</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Sustainability</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Packaging that is good for your brand and responsible for the planet.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { emoji: "♻️", title: "Recyclable Materials", desc: "The majority of our packaging range — kraft paper, corrugated board, and rigid chipboard — is fully recyclable and biodegradable." },
            { emoji: "🌳", title: "Responsibly Sourced", desc: "We prioritise FSC-certified paper and board suppliers who uphold responsible forest management practices." },
            { emoji: "🖨️", title: "Low-VOC Inks", desc: "We use soy-based and UV-cured inks wherever possible, significantly reducing volatile organic compound (VOC) emissions." },
            { emoji: "📦", title: "Right-Sized Packaging", desc: "We help clients select the most material-efficient box sizes to eliminate excess packaging and reduce waste." },
            { emoji: "🏭", title: "Waste Reduction", desc: "Production offcuts are recycled through certified waste partners. We aim for zero landfill in our production process." },
            { emoji: "🚚", title: "Local Manufacturing", desc: "Made in Pakistan — shorter supply chains mean lower transport emissions and fresher product for you." },
          ].map(({ emoji, title, desc }) => (
            <div key={title} className="bg-[#F8F7F4] rounded-2xl p-6 border border-[#E8E6E1]">
              <span className="text-3xl mb-4 block">{emoji}</span>
              <h3 className="font-bold text-[#1B2A4A] mb-2">{title}</h3>
              <p className="text-sm text-[#6B6560] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1B2A4A] rounded-3xl p-10 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Our 2026 Goals</h2>
          <div className="grid sm:grid-cols-3 gap-8 mt-6">
            {[
              { stat: "80%", label: "Recyclable or biodegradable product range" },
              { stat: "100%", label: "FSC-certified board suppliers" },
              { stat: "Zero", label: "Single-use plastic in our own packaging" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <p className="text-3xl font-bold text-[#C9A84C] mb-1">{stat}</p>
                <p className="text-sm text-white/70">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
