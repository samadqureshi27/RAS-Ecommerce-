import type { Metadata } from "next";
import { Mail, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media",
  description: "RAS Packaging press and media resources — brand assets, press kit, and contact for media enquiries.",
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Media</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Press & Media</h1>
          <p className="text-lg text-white/70">Resources for journalists, bloggers, and media partners.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* About blurb */}
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A] mb-4">About RAS Packaging</h2>
          <p className="text-sm text-[#6B6560] leading-relaxed max-w-2xl">
            RAS Packaging is a Lahore-based premium custom packaging company serving businesses across Pakistan.
            We manufacture custom boxes, paper cups, business cards, shopping bags, and labels — with an emphasis
            on quality materials, precision printing, and fast turnaround. Founded in 2020, RAS Packaging has
            served over 5,000 businesses nationwide.
          </p>
        </div>

        {/* Brand assets */}
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A] mb-6">Brand Assets</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { title: "RAS Logo (JPEG)", desc: "High-resolution logo for print and digital use", file: "/RAS%20logo.jpeg" },
              { title: "Brand Colours", desc: "Navy #1B2A4A · Gold #C9A84C · Off-white #F8F7F4", file: null },
            ].map(({ title, desc, file }) => (
              <div key={title} className="flex items-start gap-4 bg-[#F8F7F4] rounded-2xl p-5 border border-[#E8E6E1]">
                <Download size={20} className="text-[#C9A84C] flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1B2A4A] text-sm mb-1">{title}</h3>
                  <p className="text-xs text-[#6B6560]">{desc}</p>
                  {file && (
                    <a href={file} download className="mt-2 inline-flex text-xs text-[#C9A84C] hover:underline font-semibold">
                      Download →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media contact */}
        <div className="bg-[#1B2A4A] rounded-3xl p-10">
          <h2 className="text-xl font-bold text-white mb-3">Media Enquiries</h2>
          <p className="text-white/70 text-sm mb-6">
            For press enquiries, interview requests, or partnership opportunities, please contact us directly.
          </p>
          <a
            href="mailto:hello@raspackaging.com"
            className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
          >
            <Mail size={16} />
            hello@raspackaging.com
          </a>
        </div>
      </section>
    </div>
  );
}
