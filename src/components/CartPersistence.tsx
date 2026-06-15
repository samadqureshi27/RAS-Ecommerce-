"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/types";

// This component is dynamically imported with ssr:false in layout.tsx,
// so localStorage is NEVER touched during server rendering.
export default function CartPersistence() {
  const { state, hydrateCart } = useCart();

  // Load cart from localStorage once after mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem("ras-cart");
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          hydrateCart(parsed);
        }
      }
    } catch {
      // storage unavailable or corrupt — start fresh
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist whenever cart changes
  useEffect(() => {
    try {
      localStorage.setItem("ras-cart", JSON.stringify(state.items));
    } catch {
      // ignore write errors
    }
  }, [state.items]);

  return null;
}
