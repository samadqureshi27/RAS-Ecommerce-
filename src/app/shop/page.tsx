"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { SlidersHorizontal, Grid3X3, List, ChevronDown, X } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categoryFilters = ["All", "Boxes", "Cups", "Cards", "Bags", "Labels"];
const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Best Selling", value: "bestselling" },
  { label: "Newest", value: "new" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Top Rated", value: "rating" },
];

const priceRanges = [
  { label: "Under PKR 1,500", min: 0, max: 1500 },
  { label: "PKR 1,500 – 2,500", min: 1500, max: 2500 },
  { label: "PKR 2,500 – 3,500", min: 2500, max: 3500 },
  { label: "Above PKR 3,500", min: 3500, max: Infinity },
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "all";
  const initialFilter = searchParams.get("filter") ?? "";

  const [activeCategory, setActiveCategory] = useState(
    initialCategory !== "all" ? initialCategory.charAt(0).toUpperCase() + initialCategory.slice(1).replace("-", " ") : "All"
  );
  const [sortBy, setSortBy] = useState(initialFilter === "new" ? "new" : initialFilter === "bestsellers" ? "bestselling" : "featured");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState<{ label: string; min: number; max: number } | null>(null);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All") {
      result = result.filter(
        (p) => p.category.toLowerCase() === activeCategory.toLowerCase().replace(" ", "-")
      );
    }

    if (priceRange) {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max);
    }

    if (inStockOnly) result = result.filter((p) => p.inStock);
    if (onSaleOnly) result = result.filter((p) => !!p.compareAtPrice);

    switch (sortBy) {
      case "bestselling":
        result = result.filter((p) => p.isBestseller).concat(result.filter((p) => !p.isBestseller));
        break;
      case "new":
        result = result.filter((p) => p.isNew).concat(result.filter((p) => !p.isNew));
        break;
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [activeCategory, sortBy, priceRange, inStockOnly, onSaleOnly]);

  const clearFilters = () => {
    setActiveCategory("All");
    setPriceRange(null);
    setInStockOnly(false);
    setOnSaleOnly(false);
  };

  const activeFilterCount = [
    activeCategory !== "All",
    priceRange !== null,
    inStockOnly,
    onSaleOnly,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }} className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-3">
            Our Collection
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Shop All Products
          </h1>
          <p className="text-white/60 mt-3 text-sm">
            {products.length} premium packaging products
          </p>
        </div>
      </div>

      {/* Category pills */}
      <div className="sticky top-[73px] z-40 bg-white border-b border-[#E8E6E1] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3.5 scrollbar-hide">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all ${
                  activeCategory === cat
                    ? "text-white shadow-lg"
                    : "bg-[#F8F7F4] text-[#1B2A4A] hover:bg-[#E8E6E1]"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)", border: "1px solid #C9A84C" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-36 space-y-8">
              {/* Filter header */}
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold tracking-widest uppercase text-[#1B2A4A]">Filters</h3>
                {activeFilterCount > 0 && (
                  <button onClick={clearFilters} className="text-xs text-[#C9A84C] hover:underline font-semibold">
                    Clear All ({activeFilterCount})
                  </button>
                )}
              </div>

              {/* Price Range */}
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1B2A4A] mb-4 pb-2 border-b border-[#E8E6E1]">
                  Price Range
                </h4>
                <div className="space-y-2.5">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2.5 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange?.min === range.min && priceRange?.max === range.max}
                        onChange={() => setPriceRange(range)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                          priceRange?.min === range.min
                            ? "border-[#C9A84C] bg-[#C9A84C]"
                            : "border-[#E8E6E1] group-hover:border-[#C9A84C]"
                        }`}
                      >
                        {priceRange?.min === range.min && (
                          <div className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </div>
                      <span className="text-sm text-[#6B6560] group-hover:text-[#1B2A4A] transition-colors">
                        {range.label}
                      </span>
                    </label>
                  ))}
                  {priceRange && (
                    <button onClick={() => setPriceRange(null)} className="text-xs text-[#C9A84C] hover:underline mt-1">
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1B2A4A] mb-4 pb-2 border-b border-[#E8E6E1]">
                  Availability
                </h4>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={inStockOnly}
                      onChange={(e) => setInStockOnly(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      inStockOnly ? "bg-[#C9A84C] border-[#C9A84C]" : "border-[#E8E6E1] group-hover:border-[#C9A84C]"
                    }`}>
                      {inStockOnly && <span className="text-white text-[10px] font-bold">✓</span>}
                    </div>
                    <span className="text-sm text-[#6B6560] group-hover:text-[#1B2A4A] transition-colors">In Stock Only</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={onSaleOnly}
                      onChange={(e) => setOnSaleOnly(e.target.checked)}
                      className="sr-only"
                    />
                    <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${
                      onSaleOnly ? "bg-[#C9A84C] border-[#C9A84C]" : "border-[#E8E6E1] group-hover:border-[#C9A84C]"
                    }`}>
                      {onSaleOnly && <span className="text-white text-[10px] font-bold">✓</span>}
                    </div>
                    <span className="text-sm text-[#6B6560] group-hover:text-[#1B2A4A] transition-colors">On Sale</span>
                  </label>
                </div>
              </div>

              {/* Rating */}
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1B2A4A] mb-4 pb-2 border-b border-[#E8E6E1]">
                  Customer Rating
                </h4>
                <div className="space-y-2">
                  {[4.5, 4, 3.5].map((r) => (
                    <div key={r} className="flex items-center gap-2 cursor-pointer group">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < Math.floor(r) ? "text-[#C9A84C]" : "text-[#E8E6E1]"}`}>★</span>
                        ))}
                      </div>
                      <span className="text-xs text-[#9B9489] group-hover:text-[#1B2A4A]">& up</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E8E6E1]">
              <div className="flex items-center gap-3">
                {/* Mobile filter */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E6E1] text-sm font-medium text-[#1B2A4A] hover:border-[#C9A84C] transition-all"
                >
                  <SlidersHorizontal size={15} />
                  Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                </button>
                <p className="text-sm text-[#9B9489]">
                  <span className="font-semibold text-[#1B2A4A]">{filtered.length}</span> products
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-9 py-2.5 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] bg-white focus:outline-none focus:border-[#C9A84C] cursor-pointer font-medium"
                  >
                    {sortOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9B9489] pointer-events-none" />
                </div>

                {/* View toggle */}
                <div className="hidden sm:flex items-center border border-[#E8E6E1] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setView("grid")}
                    className={`p-2.5 transition-all ${view === "grid" ? "bg-[#1B2A4A] text-white" : "text-[#9B9489] hover:bg-[#F8F7F4]"}`}
                  >
                    <Grid3X3 size={16} />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    className={`p-2.5 transition-all ${view === "list" ? "bg-[#1B2A4A] text-white" : "text-[#9B9489] hover:bg-[#F8F7F4]"}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Active filter chips */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {activeCategory !== "All" && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "#1B2A4A" }}>
                    {activeCategory}
                    <button onClick={() => setActiveCategory("All")} className="hover:text-[#C9A84C]"><X size={12} /></button>
                  </span>
                )}
                {priceRange && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "#1B2A4A" }}>
                    {priceRange.label}
                    <button onClick={() => setPriceRange(null)} className="hover:text-[#C9A84C]"><X size={12} /></button>
                  </span>
                )}
                {inStockOnly && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "#1B2A4A" }}>
                    In Stock
                    <button onClick={() => setInStockOnly(false)} className="hover:text-[#C9A84C]"><X size={12} /></button>
                  </span>
                )}
                {onSaleOnly && (
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white"
                    style={{ background: "#1B2A4A" }}>
                    On Sale
                    <button onClick={() => setOnSaleOnly(false)} className="hover:text-[#C9A84C]"><X size={12} /></button>
                  </span>
                )}
              </div>
            )}

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-4xl mb-4">🔍</p>
                <p className="text-lg font-bold text-[#1B2A4A] mb-2">No products found</p>
                <p className="text-sm text-[#9B9489] mb-6">Try adjusting your filters</p>
                <button onClick={clearFilters} className="btn-gold px-8 py-3 rounded-full text-sm font-semibold">
                  Clear All Filters
                </button>
              </div>
            ) : view === "grid" ? (
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} view="list" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {sidebarOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full z-50 w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto slide-in-left">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E8E6E1]"
              style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
              <h3 className="text-white font-semibold">Filters</h3>
              <button onClick={() => setSidebarOpen(false)} className="text-white/60 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <div className="p-5 space-y-8">
              {/* Price range mobile */}
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1B2A4A] mb-4">Price Range</h4>
                <div className="space-y-3">
                  {priceRanges.map((range) => (
                    <label key={range.label} className="flex items-center gap-2.5 cursor-pointer">
                      <input type="radio" name="price-mobile" checked={priceRange?.min === range.min}
                        onChange={() => setPriceRange(range)} className="accent-[#C9A84C]" />
                      <span className="text-sm text-[#6B6560]">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-[#1B2A4A] mb-4">Availability</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={inStockOnly} onChange={(e) => setInStockOnly(e.target.checked)} className="accent-[#C9A84C]" />
                    <span className="text-sm text-[#6B6560]">In Stock Only</span>
                  </label>
                  <label className="flex items-center gap-2.5 cursor-pointer">
                    <input type="checkbox" checked={onSaleOnly} onChange={(e) => setOnSaleOnly(e.target.checked)} className="accent-[#C9A84C]" />
                    <span className="text-sm text-[#6B6560]">On Sale</span>
                  </label>
                </div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="btn-gold w-full py-3 rounded-full text-sm font-semibold"
              >
                Apply Filters ({filtered.length} products)
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-3 border-[#C9A84C] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
