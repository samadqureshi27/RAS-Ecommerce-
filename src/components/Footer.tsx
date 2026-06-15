import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "All Products", href: "/shop" },
    { label: "Custom Boxes", href: "/shop?category=boxes" },
    { label: "Paper Cups", href: "/shop?category=cups" },
    { label: "Business Cards", href: "/shop?category=cards" },
    { label: "Shopping Bags", href: "/shop?category=bags" },
  ],
  Help: [
    { label: "FAQ", href: "/faq" },
    { label: "Delivery Policy", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "Track My Order", href: "/track-order" },
    { label: "Contact Us", href: "/contact" },
  ],
  Company: [
    { label: "About RAS", href: "/about" },
    { label: "Our Materials", href: "/materials" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Press & Media", href: "/press" },
    { label: "Careers", href: "/careers" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10" style={{ background: "#243660" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold tracking-wide text-white">
                Stay Updated with RAS Packaging
              </h3>
              <p className="text-sm text-white/60 mt-1">
                Subscribe for new product launches, bulk deal alerts, and packaging tips.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 md:w-72 px-5 py-3 rounded-l-full text-sm focus:outline-none bg-white/10 border border-white/20 text-white placeholder-white/40 focus:border-[#C9A84C] transition-colors"
              />
              <button className="btn-gold px-6 py-3 rounded-r-full text-sm font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/RAS%20logo.jpeg" alt="RAS Packaging Logo" width={48} height={48} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-[0.15em] uppercase text-white">
                  RAS
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-[#C9A84C]">Packaging</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs">
              Premium custom packaging solutions for businesses of all sizes. From mailer boxes to business cards — quality you can see, service you can trust.
            </p>
            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span>hello@raspackaging.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span>+92 300 0000000</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <MapPin size={15} className="text-[#C9A84C] flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/20 text-white/60 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-white/40">
              © 2026 RAS Packaging. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
