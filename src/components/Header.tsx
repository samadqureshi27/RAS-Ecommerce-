"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Search, ShoppingBag, Menu, X, User, ChevronDown } from "lucide-react";

const navLinks = [
  {
    label: "Shop All",
    href: "/shop",
    children: [
      { label: "Boxes", href: "/shop?category=boxes" },
      { label: "Paper Cups", href: "/shop?category=cups" },
      { label: "Business Cards", href: "/shop?category=cards" },
      { label: "Shopping Bags", href: "/shop?category=bags" },
      { label: "Labels & Tags", href: "/shop?category=labels" },
      { label: "Gift Wrapping", href: "/shop?category=gift-wrapping" },
    ],
  },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Bestsellers", href: "/shop?filter=bestsellers" },
  { label: "Bulk Orders", href: "/shop?filter=bulk" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const { totalItems, toggleCart } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const Logo = () => (
    <Link href="/" className="flex items-center gap-2.5 group">
      <div
        className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ boxShadow: "0 2px 10px rgba(27,42,74,0.18)" }}
      >
        <Image src="/RAS%20logo.jpeg" alt="RAS Packaging" width={44} height={44} className="w-full h-full object-cover" />
      </div>
      <div className="hidden sm:block leading-none">
        <p className="font-display text-base font-bold tracking-[0.18em] uppercase" style={{ color: "#1B2A4A" }}>
          RAS
        </p>
        <p className="text-[9px] tracking-[0.28em] uppercase mt-0.5" style={{ color: "#C9A84C" }}>
          Packaging
        </p>
      </div>
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-md bg-white/96 backdrop-blur-sm" : "bg-white"
      }`}
      style={{ borderBottom: "1px solid #E8E6E1" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Desktop header ── */}
        <div className="hidden lg:flex items-center justify-between py-4 gap-8">
          {/* Logo */}
          <Logo />

          {/* Nav links */}
          <nav className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 text-sm font-medium tracking-wide py-5 transition-colors"
                  style={{ color: "#1B2A4A" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A84C")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1B2A4A")}
                >
                  {link.label}
                  {link.children && (
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-2xl border border-[#E8E6E1] py-2 fade-in"
                    style={{ borderTop: "2px solid #C9A84C" }}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm transition-colors"
                        style={{ color: "#1B2A4A" }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = "#C9A84C"; e.currentTarget.style.background = "#F8F7F4"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = "#1B2A4A"; e.currentTarget.style.background = ""; }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2.5 rounded-full transition-all"
              style={{ color: "#1B2A4A" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F8F7F4"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#1B2A4A"; }}
            >
              <Search size={19} />
            </button>
            <Link
              href="/account"
              className="p-2.5 rounded-full transition-all"
              style={{ color: "#1B2A4A" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#F8F7F4"; e.currentTarget.style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "#1B2A4A"; }}
            >
              <User size={19} />
            </Link>
            <button
              onClick={toggleCart}
              className="relative p-2.5 rounded-full transition-all"
              style={{ color: "#1B2A4A" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F8F7F4"; (e.currentTarget as HTMLElement).style.color = "#C9A84C"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "#1B2A4A"; }}
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white leading-none"
                  style={{ background: "#C9A84C" }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile header — 3-column grid ── */}
        <div className="lg:hidden grid grid-cols-3 items-center py-3.5">
          {/* Left: hamburger */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 -ml-1 rounded-md transition-colors"
              style={{ color: "#1B2A4A" }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Center: logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="w-10 h-10 rounded-full overflow-hidden transition-transform group-hover:scale-105"
                style={{ boxShadow: "0 2px 8px rgba(27,42,74,0.16)" }}
              >
                <Image src="/RAS%20logo.jpeg" alt="RAS Packaging" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div className="leading-none">
                <p className="font-display text-sm font-bold tracking-[0.18em] uppercase" style={{ color: "#1B2A4A" }}>
                  RAS
                </p>
                <p className="text-[8px] tracking-[0.25em] uppercase mt-0.5" style={{ color: "#C9A84C" }}>
                  Packaging
                </p>
              </div>
            </Link>
          </div>

          {/* Right: search + cart */}
          <div className="flex items-center justify-end gap-0.5">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full transition-all"
              style={{ color: "#1B2A4A" }}
            >
              <Search size={19} />
            </button>
            <button
              onClick={toggleCart}
              className="relative p-2 rounded-full transition-all"
              style={{ color: "#1B2A4A" }}
            >
              <ShoppingBag size={19} />
              {totalItems > 0 && (
                <span
                  className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: "#C9A84C" }}
                >
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="pb-4 fade-in">
            <div className="relative">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#9B9489" }} />
              <input
                type="text"
                placeholder="Search boxes, cups, business cards, bags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full pl-11 pr-10 py-3 rounded-xl text-sm focus:outline-none transition-all"
                style={{
                  border: "1.5px solid #C9A84C",
                  background: "#F8F7F4",
                  color: "#1B2A4A",
                  boxShadow: "0 0 0 3px rgba(201,168,76,0.08)",
                }}
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                style={{ color: "#9B9489" }}
              >
                <X size={15} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white fade-in" style={{ borderTop: "1px solid #E8E6E1" }}>
          <nav className="px-4 py-3 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#1B2A4A" }}
                onClick={() => setMobileOpen(false)}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#F8F7F4"; e.currentTarget.style.color = "#C9A84C"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = ""; e.currentTarget.style.color = "#1B2A4A"; }}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 border-t border-[#E8E6E1] mt-2">
              <Link
                href="/account"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-colors"
                style={{ color: "#1B2A4A" }}
                onClick={() => setMobileOpen(false)}
              >
                <User size={16} /> My Account
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
