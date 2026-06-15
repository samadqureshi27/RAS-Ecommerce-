import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Package, Printer, Clock, BadgeCheck } from "lucide-react";
import { getFeaturedProducts, getNewProducts, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const benefits = [
  {
    icon: Package,
    title: "Premium Materials",
    desc: "We source only the highest-grade board, paper, and film for every product we produce.",
  },
  {
    icon: Printer,
    title: "Custom Printing",
    desc: "Full-colour CMYK printing on every product. Your design, your brand — printed to perfection.",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Standard production in 5–7 business days. Rush orders available. We never miss a deadline.",
  },
  {
    icon: BadgeCheck,
    title: "Bulk Discounts",
    desc: "The more you order, the better the price. Competitive bulk pricing for businesses of all sizes.",
  },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewProducts();

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 60%, #1B2A4A 100%)" }}>
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #C9A84C 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="fade-in">
            <p className="text-xs tracking-[0.4em] uppercase font-semibold mb-6" style={{ color: "#C9A84C" }}>
              Premium Packaging · Est. 2020
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
             >
              Packaging That{" "}
              <span className="gold-text">Makes Your</span>
              <br />
              Brand Shine
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-xl">
              Custom boxes, paper cups, business cards, shopping bags, and labels —
              all printed to your design. Built to protect, crafted to impress.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="btn-gold inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
              >
                Shop All Products
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-widest uppercase text-white border border-white/30 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              >
                Our Story
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-10 mt-14 pt-10 border-t border-white/10">
              {[
                { num: "5K+", label: "Happy Clients" },
                { num: "50+", label: "Products" },
                { num: "4.9★", label: "Average Rating" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p className="text-2xl font-bold text-white">{num}</p>
                  <p className="text-xs text-white/50 tracking-wider uppercase mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image */}
          <div className="relative lg:flex items-center justify-center hidden">
            <div className="relative w-[420px] h-[520px]">
              <div className="absolute inset-0 rounded-3xl overflow-hidden" style={{ transform: "rotate(-3deg)" }}>
                <Image
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                  alt="RAS Packaging"
                  fill
                  className="object-cover"
                  priority
                  sizes="420px"
                />
              </div>
              {/* Floating card */}
              <div
                className="absolute -bottom-6 -left-12 bg-white rounded-2xl shadow-2xl px-6 py-4 fade-in"
                style={{ animationDelay: "0.3s" }}
              >
                <p className="text-xs text-[#C9A84C] font-bold tracking-widest uppercase mb-1">Bestseller</p>
                <p className="text-sm font-bold text-[#1B2A4A]">Custom Mailer Box</p>
                <p className="text-xs text-[#9B9489] mt-0.5">From PKR 850</p>
              </div>
              {/* Badge */}
              <div
                className="absolute -top-6 -right-8 w-20 h-20 rounded-full flex flex-col items-center justify-center text-center fade-in"
                style={{
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8CC80 100%)",
                  animationDelay: "0.5s",
                  boxShadow: "0 8px 24px rgba(201,168,76,0.4)",
                }}
              >
                <p className="text-[10px] font-bold text-[#1B2A4A] leading-tight">FREE<br/>DELIVERY<br/>10K+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="bg-[#F8F7F4] border-y border-[#E8E6E1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
            {["Custom Printing Available", "Eco-Friendly Materials", "Bulk Discounts", "Made in Pakistan", "Fast Turnaround"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span className="text-xs font-semibold tracking-widest uppercase text-[#1B2A4A]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">Browse By</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">
            Shop By Category
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/shop?category=${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-square hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 16vw"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(27,42,74,0.85) 0%, rgba(27,42,74,0.2) 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                <p className="text-xs font-bold tracking-widest uppercase text-white leading-tight">{cat.name}</p>
                <p className="text-[10px] text-white/60 mt-0.5">{cat.productCount} products</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">Client Favourites</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">
                Bestsellers
              </h2>
            </div>
            <Link
              href="/shop?filter=bestsellers"
              className="flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors"
            >
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Banner CTA */}
      <section className="relative overflow-hidden py-24"
        style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=1200&q=60"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">
            The RAS Difference
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Brand Deserves Better Packaging
          </h2>
          <p className="text-lg text-white/70 mb-10">
            Every RAS product is manufactured with premium materials, printed with precision,
            and delivered on time — because your packaging is the first thing your customer touches.
          </p>
          <Link
            href="/shop"
            className="btn-gold inline-flex items-center gap-3 px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase"
          >
            Discover The Collection
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">Just Launched</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">
              New Arrivals
            </h2>
          </div>
          <Link
            href="/shop?filter=new"
            className="flex items-center gap-2 text-sm font-semibold text-[#1B2A4A] hover:text-[#C9A84C] transition-colors"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Why RAS */}
      <section className="bg-[#F8F7F4] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">
              The RAS Promise
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center group">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}
                >
                  <Icon size={28} className="text-[#C9A84C]" />
                </div>
                <h3 className="text-base font-bold text-[#1B2A4A] mb-2">{title}</h3>
                <p className="text-sm text-[#6B6560] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">Client Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B2A4A]">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: "Ahmed R.",
              review: "The custom mailer boxes we ordered completely elevated our unboxing experience. Print quality is sharp and the boxes arrived perfectly on time. Our customers keep commenting on the packaging!",
              rating: 5,
              product: "Custom Printed Mailer Box",
            },
            {
              name: "Sara M.",
              review: "We switched our café to RAS Packaging kraft cups and the difference is night and day. No leaks, great quality, and our custom logo looks fantastic. Will never go back.",
              rating: 5,
              product: "Single Wall Kraft Cup 8oz",
            },
            {
              name: "Bilal K.",
              review: "The Spot UV business cards are absolutely stunning. Every person I hand one to stops and asks where I had them made. Worth every rupee — quality that speaks for itself.",
              rating: 5,
              product: "Spot UV Luxury Business Cards",
            },
          ].map(({ name, review, rating, product }) => (
            <div
              key={name}
              className="bg-white border border-[#E8E6E1] rounded-2xl p-7 hover:border-[#C9A84C] transition-all hover:shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(rating)].map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-lg">★</span>
                ))}
              </div>
              <p className="text-sm text-[#6B6560] leading-relaxed italic mb-5">&ldquo;{review}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #1B2A4A, #243660)" }}
                >
                  {name[0]}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1B2A4A]">{name}</p>
                  <p className="text-[10px] text-[#C9A84C] font-semibold">{product}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
