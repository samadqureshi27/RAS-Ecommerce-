"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Heart, Star, Eye } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
  view?: "grid" | "list";
}

export default function ProductCard({ product, view = "grid" }: ProductCardProps) {
  const { addItem, toggleCart } = useCart();
  const [hovered, setHovered] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [adding, setAdding] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    setAdding(true);
    addItem(product);
    setTimeout(() => {
      setAdding(false);
      toggleCart();
    }, 600);
  };

  const stars = (rating: number) => (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={11}
          fill={i <= Math.floor(rating) ? "#C9A84C" : "none"}
          stroke={i <= Math.floor(rating) ? "#C9A84C" : "#D4D0CB"}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );

  /* ── List view ── */
  if (view === "list") {
    return (
      <Link
        href={`/product/${product.slug}`}
        className="flex gap-4 bg-white rounded-2xl overflow-hidden border border-[#E8E6E1] hover:border-[#C9A84C] hover:shadow-md transition-all duration-300"
      >
        <div className="relative w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0 bg-[#F8F7F4]">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 96px, 144px"
          />
        </div>
        <div className="flex-1 min-w-0 p-3 sm:p-4 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-1" style={{ color: "#C9A84C" }}>
              {product.brand}
            </p>
            <h3 className="text-sm font-semibold leading-snug mb-1" style={{ color: "#1B2A4A" }}>
              {product.name}
            </h3>
            <p className="text-xs leading-relaxed line-clamp-2 mb-2 hidden sm:block" style={{ color: "#6B6560" }}>
              {product.description}
            </p>
            <div className="flex items-center gap-1.5">
              {stars(product.rating)}
              <span className="text-[10px]" style={{ color: "#9B9489" }}>({product.reviewCount})</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 sm:mt-3 gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 min-w-0">
              <span className="text-sm sm:text-base font-bold" style={{ color: "#1B2A4A" }}>
                PKR {product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs line-through" style={{ color: "#9B9489" }}>
                  PKR {product.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="btn-gold flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <ShoppingBag size={12} />
              <span className="hidden sm:inline">{product.inStock ? "Add to Bag" : "Sold Out"}</span>
              <span className="sm:hidden">{product.inStock ? "Add" : "Out"}</span>
            </button>
          </div>
        </div>
      </Link>
    );
  }

  /* ── Grid view ── */
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8E6E1] hover:border-[#C9A84C] hover:shadow-lg transition-all duration-300 flex flex-col"
      onMouseEnter={() => { setHovered(true); if (product.images[1]) setImageIndex(1); }}
      onMouseLeave={() => { setHovered(false); setImageIndex(0); }}
    >
      {/* Badges */}
      <div className="absolute top-2.5 left-2.5 z-10 flex flex-col gap-1.5">
        {product.isNew && (
          <span
            className="px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase text-white rounded-full"
            style={{ background: "#1B2A4A" }}
          >
            New
          </span>
        )}
        {product.isBestseller && (
          <span
            className="px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase rounded-full"
            style={{ background: "linear-gradient(135deg,#C9A84C,#E8CC80)", color: "#1B2A4A" }}
          >
            Bestseller
          </span>
        )}
        {discount > 0 && (
          <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-widest uppercase text-white rounded-full bg-red-500">
            -{discount}%
          </span>
        )}
      </div>

      {/* Wishlist */}
      <button
        className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setWishlisted(!wishlisted); }}
      >
        <Heart
          size={14}
          fill={wishlisted ? "#ef4444" : "none"}
          stroke={wishlisted ? "#ef4444" : "#9B9489"}
          strokeWidth={2}
        />
      </button>

      {/* Image */}
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative w-full bg-[#F8F7F4]" style={{ paddingBottom: "100%" }}>
          <Image
            src={product.images[imageIndex] ?? product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span
                className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border"
                style={{ color: "#9B9489", borderColor: "#9B9489" }}
              >
                Sold Out
              </span>
            </div>
          )}

          {/* Quick view pill */}
          {hovered && product.inStock && (
            <div className="absolute bottom-3 left-0 right-0 flex justify-center fade-in">
              <span
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg"
                style={{ background: "white", color: "#1B2A4A" }}
              >
                <Eye size={12} /> Quick View
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-col flex-1 p-4 pt-3">
        <p className="text-[9px] font-bold tracking-[0.22em] uppercase mb-1" style={{ color: "#C9A84C" }}>
          {product.brand}
        </p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="text-sm font-semibold leading-snug mb-2 line-clamp-2 hover:text-[#C9A84C] transition-colors" style={{ color: "#1B2A4A" }}>
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mb-3">
          {stars(product.rating)}
          <span className="text-[10px]" style={{ color: "#9B9489" }}>({product.reviewCount})</span>
        </div>

        <div className="flex items-center gap-2 mb-3 mt-auto">
          <span className="text-base font-bold" style={{ color: "#1B2A4A" }}>
            PKR {product.price.toLocaleString()}
          </span>
          {product.compareAtPrice && (
            <span className="text-xs line-through" style={{ color: "#9B9489" }}>
              PKR {product.compareAtPrice.toLocaleString()}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock || adding}
          className={`w-full py-2.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-1.5 transition-all ${
            adding
              ? "bg-green-500 text-white"
              : product.inStock
              ? "btn-gold"
              : "cursor-not-allowed"
          }`}
          style={!product.inStock && !adding ? { background: "#E8E6E1", color: "#9B9489" } : {}}
        >
          <ShoppingBag size={13} />
          {adding ? "Added!" : product.inStock ? "Add to Bag" : "Sold Out"}
        </button>
      </div>
    </div>
  );
}
