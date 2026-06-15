"use client";

import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div
        className="fixed right-0 top-0 h-full z-50 w-full max-w-md bg-white shadow-2xl flex flex-col slide-in-right"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E6E1]"
          style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-[#C9A84C]" />
            <h2 className="text-lg font-semibold text-white tracking-wide">
              Your Bag
              {totalItems > 0 && (
                <span className="ml-2 text-sm font-normal text-[#C9A84C]">({totalItems} items)</span>
              )}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <div className="w-20 h-20 rounded-full bg-[#F8F7F4] flex items-center justify-center">
                <ShoppingBag size={32} className="text-[#C9A84C]" />
              </div>
              <p className="text-[#1B2A4A] font-semibold text-lg">Your bag is empty</p>
              <p className="text-sm text-[#9B9489]">Add packaging products to your order</p>
              <button
                onClick={closeCart}
                className="mt-2 btn-gold px-8 py-3 rounded-full text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {state.items.map((item) => (
                <li key={item.product.id} className="flex gap-4 pb-5 border-b border-[#E8E6E1] last:border-0">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#F8F7F4] flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-[#1B2A4A] leading-tight line-clamp-2">
                      {item.product.name}
                    </h3>
                    <p className="text-xs text-[#9B9489] mt-0.5">{item.product.brand}</p>
                    <p className="text-sm font-bold mt-1" style={{ color: "#C9A84C" }}>
                      PKR {(item.product.price * item.quantity).toLocaleString()}
                    </p>

                    <div className="flex items-center gap-3 mt-2">
                      {/* Quantity */}
                      <div className="flex items-center gap-1 border border-[#E8E6E1] rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#1B2A4A] hover:bg-[#F8F7F4] transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-7 text-center text-sm font-medium text-[#1B2A4A]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#1B2A4A] hover:bg-[#F8F7F4] transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-[#9B9489] hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="px-6 py-5 border-t border-[#E8E6E1] bg-[#F8F7F4] space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#6B6560]">
                <span>Subtotal</span>
                <span>PKR {totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-[#6B6560]">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">
                  {totalPrice >= 10000 ? "FREE" : `PKR ${(250).toLocaleString()}`}
                </span>
              </div>
              {totalPrice < 10000 && (
                <p className="text-xs text-[#9B9489] italic">
                  Add PKR {(10000 - totalPrice).toLocaleString()} more for free delivery
                </p>
              )}
              <div className="flex justify-between font-bold text-[#1B2A4A] text-base pt-2 border-t border-[#E8E6E1]">
                <span>Total</span>
                <span>PKR {(totalPrice + (totalPrice >= 10000 ? 0 : 250)).toLocaleString()}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              onClick={closeCart}
              className="btn-gold w-full py-4 rounded-full text-sm font-semibold tracking-widest uppercase block text-center"
            >
              Checkout
            </Link>
            <button
              onClick={closeCart}
              className="w-full py-3 rounded-full text-sm font-medium text-[#6B6560] hover:text-[#1B2A4A] transition-colors underline-offset-2 hover:underline"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
