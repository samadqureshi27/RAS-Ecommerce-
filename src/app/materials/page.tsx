import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Materials",
  description: "RAS Packaging uses only premium, responsibly sourced materials — corrugated board, kraft paper, art board, food-grade PE, and more.",
};

const materials = [
  {
    name: "Corrugated Board",
    grades: ["Single-wall B-flute", "Double-wall B/C-flute", "Triple-wall"],
    uses: "Mailer boxes, shipping boxes, retail display boxes",
    detail: "Our corrugated board is sourced from FSC-certified mills. Burst strength tested to 275 PSI minimum.",
  },
  {
    name: "Rigid Chipboard",
    grades: ["1.5mm", "2mm", "2.5mm"],
    uses: "Luxury rigid gift boxes, set-up boxes, jewellery packaging",
    detail: "Grey chipboard wrapped in premium art paper, available with soft-touch matte, gloss, or spot UV finish.",
  },
  {
    name: "Kraft Paper",
    grades: ["80gsm", "100gsm", "120gsm"],
    uses: "Paper bags, cups, wrapping paper, eco packaging",
    detail: "Sustainably sourced natural brown kraft. Biodegradable and fully recyclable. Food-grade available.",
  },
  {
    name: "Art Board",
    grades: ["300gsm", "350gsm", "400gsm"],
    uses: "Business cards, folding cartons, window boxes",
    detail: "Coated one side or two sides (C1S/C2S). Available with matte, gloss, or silk lamination.",
  },
  {
    name: "Food-Grade PE Coating",
    grades: ["PE-coated kraft", "PE-coated white board"],
    uses: "Paper cups, food containers, takeaway packaging",
    detail: "FDA-compliant polyethylene coating. Leak-proof and heat-resistant up to 90°C.",
  },
  {
    name: "BOPP Film",
    grades: ["Matte BOPP", "Gloss BOPP", "Clear BOPP"],
    uses: "Product labels, stickers, flexible packaging",
    detail: "Biaxially oriented polypropylene — waterproof, oil-resistant, and compatible with permanent adhesive.",
  },
];

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Quality</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Materials</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every RAS product starts with premium raw materials, responsibly sourced and rigorously quality-tested.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((mat) => (
            <div key={mat.name} className="bg-[#F8F7F4] rounded-2xl p-6 border border-[#E8E6E1] hover:border-[#C9A84C] transition-all">
              <h3 className="text-base font-bold text-[#1B2A4A] mb-3">{mat.name}</h3>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {mat.grades.map((g) => (
                  <span key={g} className="px-2.5 py-1 rounded-full bg-white border border-[#E8E6E1] text-[10px] font-semibold text-[#6B6560]">{g}</span>
                ))}
              </div>
              <p className="text-xs text-[#C9A84C] font-semibold mb-2">{mat.uses}</p>
              <p className="text-xs text-[#6B6560] leading-relaxed">{mat.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
