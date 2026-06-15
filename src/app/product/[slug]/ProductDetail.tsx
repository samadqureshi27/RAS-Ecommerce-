"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, Heart, Star, Check, Truck, RefreshCw, Shield, ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem, toggleCart } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);
  const [adding, setAdding] = useState(false);
  const [activeTab, setActiveTab] = useState<"description" | "ingredients" | "how-to-use">("description");

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    setAdding(true);
    for (let i = 0; i < quantity; i++) addItem(product);
    setTimeout(() => {
      setAdding(false);
      toggleCart();
    }, 600);
  };

  const handleBuyNow = () => {
    if (!product.inStock) return;
    for (let i = 0; i < quantity; i++) addItem(product);
    router.push("/checkout");
  };

  const discount = product.compareAtPrice
    ? Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E8E6E1] bg-[#F8F7F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-[#9B9489]">
          <Link href="/" className="hover:text-[#1B2A4A] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#1B2A4A] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#1B2A4A] font-medium">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-[#9B9489] hover:text-[#1B2A4A] transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F8F7F4]">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {discount > 0 && (
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full">
                  -{discount}% OFF
                </div>
              )}
              {!product.inStock && (
                <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                  <span className="text-sm font-bold text-[#9B9489] border border-[#9B9489] px-6 py-3 rounded-full">
                    Sold Out
                  </span>
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === i ? "border-[#C9A84C]" : "border-[#E8E6E1] hover:border-[#C9A84C]"
                    }`}
                  >
                    <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <div className="mb-2">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-[#C9A84C]">{product.brand}</p>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1B2A4A] mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-[#C9A84C] text-[#C9A84C]" : "text-[#E8E6E1] fill-[#E8E6E1]"} />
                ))}
              </div>
              <span className="text-sm text-[#9B9489]">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E8E6E1]">
              <span className="text-3xl font-bold text-[#1B2A4A]">
                PKR {product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-xl text-[#9B9489] line-through">
                    PKR {product.compareAtPrice.toLocaleString()}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-red-50 text-red-600 text-sm font-bold">
                    Save {discount}%
                  </span>
                </>
              )}
            </div>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#9B9489] mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[#6B6560]">
                    <Check size={15} className="text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-2 sm:gap-4 mb-5">
              <div className="flex items-center border border-[#E8E6E1] rounded-full overflow-hidden flex-shrink-0">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 sm:px-4 py-3 text-[#1B2A4A] hover:bg-[#F8F7F4] transition-colors font-semibold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-3 sm:px-5 py-3 text-sm font-bold text-[#1B2A4A] min-w-[36px] sm:min-w-[48px] text-center" aria-live="polite">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 sm:px-4 py-3 text-[#1B2A4A] hover:bg-[#F8F7F4] transition-colors font-semibold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock || adding}
                className={`flex-1 py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all ${
                  adding ? "bg-green-500 text-white" : product.inStock ? "btn-gold" : "bg-[#E8E6E1] text-[#9B9489] cursor-not-allowed"
                }`}
              >
                <ShoppingBag size={18} />
                {adding ? "Added to Bag!" : product.inStock ? "Add to Bag" : "Sold Out"}
              </button>

              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="p-4 rounded-full border border-[#E8E6E1] hover:border-[#C9A84C] transition-all"
                aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={18} className={wishlisted ? "fill-red-500 text-red-500" : "text-[#9B9489]"} />
              </button>
            </div>

            {/* Buy now */}
            {product.inStock && (
              <button
                onClick={handleBuyNow}
                className="btn-navy w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase mb-6"
              >
                Buy Now
              </button>
            )}

            {/* Shipping perks */}
            <div className="grid grid-cols-3 gap-3 mb-6 p-4 bg-[#F8F7F4] rounded-2xl">
              {[
                { icon: Truck, label: "Free delivery on PKR 10,000+" },
                { icon: RefreshCw, label: "Easy 30-day returns" },
                { icon: Shield, label: "100% authentic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <Icon size={18} className="text-[#C9A84C]" />
                  <p className="text-[10px] text-[#6B6560] leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-[#F8F7F4] text-xs text-[#6B6560] font-medium capitalize">
                  {tag.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16 border-t border-[#E8E6E1] pt-12">
          <div className="flex gap-0 border-b border-[#E8E6E1] mb-8 overflow-x-auto scrollbar-hide">
            {(["description", "ingredients", "how-to-use"] as const).map((tab) => {
              const label = tab === "ingredients" ? "Specifications" : tab === "how-to-use" ? "Applications" : "Overview";
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-shrink-0 px-4 sm:px-6 py-3 text-sm font-semibold tracking-wide transition-all border-b-2 -mb-px ${
                    activeTab === tab
                      ? "border-[#C9A84C] text-[#1B2A4A]"
                      : "border-transparent text-[#9B9489] hover:text-[#1B2A4A]"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <div className="max-w-2xl text-sm text-[#6B6560] leading-relaxed">
            {activeTab === "description" && <p>{product.description}</p>}
            {activeTab === "ingredients" && (
              <p>{product.ingredients ?? "Full specifications will be available soon."}</p>
            )}
            {activeTab === "how-to-use" && (
              <p>{product.howToUse ?? "Application details coming soon."}</p>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#E8E6E1]">
            <h2 className="text-2xl font-bold text-[#1B2A4A] mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
