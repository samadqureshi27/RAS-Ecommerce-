"use client";

import { useState } from "react";
import { X } from "lucide-react";

const messages = [
  "Free delivery on orders above PKR 10,000",
  "Custom printing available on all products — MOQ from 50 units",
  "New: Double Wall Insulated Cups & Spot UV Business Cards now available",
];

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  const [index, setIndex] = useState(0);

  if (!visible) return null;

  return (
    <div className="relative flex items-center justify-center px-10 py-2 sm:py-2.5 text-center"
      style={{ background: "linear-gradient(90deg, #1B2A4A 0%, #243660 50%, #1B2A4A 100%)" }}>
      <p className="text-[10px] sm:text-xs font-medium tracking-wider sm:tracking-widest uppercase text-white/90 leading-snug">
        {messages[index]}
        <span className="inline-flex gap-2 ml-4">
          {messages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${i === index ? "bg-[#C9A84C] scale-125" : "bg-white/40"}`}
            />
          ))}
        </span>
      </p>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 p-1 text-white/60 hover:text-white transition-colors"
      >
        <X size={14} />
      </button>
    </div>
  );
}
