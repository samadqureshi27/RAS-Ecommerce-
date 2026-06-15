import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Founded in Lahore, Pakistan — RAS Packaging brings together print specialists, material engineers, and brand designers to create packaging that elevates your product.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-28" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Packaging Backed<br />by Passion
          </h1>
          <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            RAS Packaging was born from a simple belief: every business — no matter the size —
            deserves packaging that looks as premium as the product inside.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="RAS Packaging Production"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Who We Are</p>
            <h2 className="text-3xl font-bold text-[#1B2A4A] mb-6">
              Crafted for Real Impact
            </h2>
            <div className="space-y-4 text-[#6B6560] leading-relaxed">
              <p>
                Founded in Lahore, Pakistan, RAS Packaging brings together the expertise of
                print specialists, material engineers, and brand-obsessed designers to create
                packaging that genuinely elevates your product.
              </p>
              <p>
                Every material is carefully selected for quality, durability, and print
                compatibility. We use premium kraft boards, rigid chipboards, food-grade papers,
                and certified inks — because the packaging your customer holds is a direct
                reflection of your brand.
              </p>
              <p>
                We believe great packaging isn&apos;t just about wrapping a product. It&apos;s about
                creating a moment — an unboxing experience that builds loyalty, drives
                word-of-mouth, and makes your brand unforgettable.
              </p>
            </div>
            <Link
              href="/shop"
              className="btn-gold inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
            >
              Shop the Collection
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">Our Values</p>
            <h2 className="text-3xl font-bold text-[#1B2A4A]">
              What We Stand For
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Quality First",
                desc: "We never compromise on materials or print quality. Every order goes through a strict QC process before it leaves our facility.",
                icon: "✓",
              },
              {
                title: "Custom Everything",
                desc: "Your brand is unique — your packaging should be too. We offer full customisation on every product we make.",
                icon: "🎨",
              },
              {
                title: "Sustainability",
                desc: "From responsibly sourced kraft paper to soy-based inks and recyclable materials, we are committed to reducing our environmental footprint.",
                icon: "🌿",
              },
              {
                title: "On-Time Delivery",
                desc: "We understand that your business runs on deadlines. Our 5–7 day standard turnaround is a commitment, not a target.",
                icon: "🚚",
              },
              {
                title: "Fair Pricing",
                desc: "Premium quality shouldn't break the bank. Our bulk pricing tiers ensure every business gets value for money.",
                icon: "💛",
              },
              {
                title: "Made in Pakistan",
                desc: "Proudly manufactured in Pakistan to international standards, supporting local industry and skilled craftspeople.",
                icon: "🇵🇰",
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-[#E8E6E1] hover:border-[#C9A84C] hover:shadow-lg transition-all">
                <span className="text-3xl mb-4 block">{icon}</span>
                <h3 className="text-base font-bold text-[#1B2A4A] mb-2">{title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
