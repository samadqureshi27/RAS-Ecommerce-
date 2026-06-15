import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join the RAS Packaging team in Lahore, Pakistan. We are looking for talented people passionate about packaging, print, and brand.",
};

const openings = [
  {
    title: "Graphic Designer",
    type: "Full-time",
    location: "Lahore, Pakistan",
    desc: "Create print-ready artwork for clients across all product categories. Proficiency in Adobe Illustrator and Photoshop required. Packaging design experience is a bonus.",
  },
  {
    title: "Sales Executive",
    type: "Full-time",
    location: "Lahore, Pakistan",
    desc: "Build and maintain relationships with B2B clients. Handle inbound enquiries, prepare quotations, and coordinate with production. Strong communication skills essential.",
  },
  {
    title: "Production Coordinator",
    type: "Full-time",
    location: "Lahore, Pakistan",
    desc: "Coordinate print production schedules, liaise with suppliers, and ensure on-time delivery. Prior experience in a print or packaging environment preferred.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Join Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Careers at RAS</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            We are a small, passionate team building Pakistan&apos;s best packaging brand. Come grow with us.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
        <div>
          <h2 className="text-xl font-bold text-[#1B2A4A] mb-8">Current Openings</h2>
          <div className="space-y-5">
            {openings.map((job) => (
              <div key={job.title} className="bg-[#F8F7F4] rounded-2xl p-6 border border-[#E8E6E1] hover:border-[#C9A84C] transition-all">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3 className="text-base font-bold text-[#1B2A4A]">{job.title}</h3>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase text-white" style={{ background: "#1B2A4A" }}>{job.type}</span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase" style={{ background: "linear-gradient(135deg, #C9A84C, #E8CC80)", color: "#1B2A4A" }}>{job.location}</span>
                  </div>
                </div>
                <p className="text-sm text-[#6B6560] leading-relaxed mb-4">{job.desc}</p>
                <Link
                  href={`/contact?subject=careers&role=${encodeURIComponent(job.title)}`}
                  className="text-sm font-semibold text-[#C9A84C] hover:underline"
                >
                  Apply via Email →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1B2A4A] rounded-3xl p-10 text-center text-white">
          <h2 className="text-xl font-bold mb-3">Don&apos;t see your role?</h2>
          <p className="text-white/70 text-sm mb-6">
            We are always interested in hearing from talented people. Send us your CV and tell us how you can contribute.
          </p>
          <Link href="/contact" className="btn-gold inline-flex px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase">
            Send Your CV
          </Link>
        </div>
      </section>
    </div>
  );
}
