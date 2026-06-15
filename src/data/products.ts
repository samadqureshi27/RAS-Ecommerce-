import { Product, Category } from "@/types";

export const products: Product[] = [
  // ── Boxes ──────────────────────────────────────────────────────────────────
  {
    id: "1",
    slug: "custom-printed-mailer-box",
    name: "Custom Printed Mailer Box",
    brand: "RAS Packaging",
    price: 850,
    compareAtPrice: 1100,
    images: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
      "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=600&q=80",
    ],
    category: "boxes",
    tags: ["mailer-box", "custom-print", "corrugated", "bestseller"],
    description:
      "Our best-selling custom printed mailer box is crafted from premium double-wall corrugated board with full-colour printing inside and out. Perfect for e-commerce brands, subscription boxes, and product launches. Self-locking design requires no tape and assembles in seconds.",
    benefits: [
      "Full-colour CMYK printing on all panels",
      "Double-wall corrugated for superior protection",
      "Self-locking tuck-end — no tape needed",
      "Available in sizes from 4×4×2 to 20×14×10 inches",
    ],
    ingredients:
      "Material: Double-wall corrugated B-flute kraft board | Printing: 4-colour CMYK offset | Finish: Matte or gloss lamination | MOQ: 50 units",
    howToUse:
      "Ideal for e-commerce shipments, subscription boxes, cosmetics, electronics, food delivery, and premium product packaging.",
    rating: 4.9,
    reviewCount: 312,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "2",
    slug: "luxury-rigid-gift-box",
    name: "Luxury Rigid Gift Box",
    brand: "RAS Packaging",
    price: 2200,
    compareAtPrice: 2800,
    images: [
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    ],
    category: "boxes",
    tags: ["rigid-box", "gift-box", "luxury", "magnetic", "bestseller"],
    description:
      "Elevate your gifting with our premium rigid gift box. Constructed from 2mm chipboard with full-colour printing, soft-touch matte lamination, and a magnetic closure that snaps shut with a satisfying click. Lined with satin fabric for an ultra-luxury unboxing experience.",
    benefits: [
      "2mm rigid chipboard construction",
      "Magnetic snap closure",
      "Soft-touch matte lamination exterior",
      "Satin fabric interior lining",
    ],
    ingredients:
      "Material: 2mm grey chipboard wrapped in art paper | Printing: Offset litho | Finish: Soft-touch matte + spot UV option | Closure: Magnet | MOQ: 30 units",
    howToUse:
      "Perfect for luxury gifts, jewellery, watches, premium cosmetics, corporate hampers, and high-end retail packaging.",
    rating: 4.8,
    reviewCount: 198,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "3",
    slug: "corrugated-shipping-box",
    name: "Heavy-Duty Corrugated Shipping Box",
    brand: "RAS Packaging",
    price: 450,
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
      "https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=600&q=80",
    ],
    category: "boxes",
    tags: ["shipping-box", "corrugated", "heavy-duty", "new"],
    description:
      "Industrial-strength double-wall corrugated shipping boxes engineered for maximum protection during transit. RSC (Regular Slotted Container) style with a burst strength of 275 PSI — ready for even the most demanding courier networks.",
    benefits: [
      "275 PSI burst-strength tested",
      "Double-wall corrugated construction",
      "Standard RSC fold for fast assembly",
      "Stackable up to 200 kg when filled",
    ],
    ingredients:
      "Material: Double-wall C/B flute corrugated kraft | Burst Strength: 275 PSI | Edge Crush Test: 44 ECT | MOQ: 20 units",
    howToUse:
      "Ideal for shipping fragile electronics, industrial parts, bulk food items, and heavy products through courier and freight services.",
    rating: 4.7,
    reviewCount: 145,
    inStock: true,
    isNew: true,
  },
  {
    id: "4",
    slug: "die-cut-window-display-box",
    name: "Die-Cut Window Display Box",
    brand: "RAS Packaging",
    price: 1100,
    compareAtPrice: 1400,
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    ],
    category: "boxes",
    tags: ["window-box", "display", "retail"],
    description:
      "Show off your product with a custom die-cut window box featuring a crystal-clear PVC window panel. Full-colour printing on premium art board lets your product speak for itself on retail shelves.",
    benefits: [
      "Custom die-cut shape and window size",
      "Crystal-clear 0.3mm PVC window panel",
      "Premium 350gsm art board",
      "Shelf-ready retail design",
    ],
    ingredients:
      "Material: 350gsm art board | Window: 0.3mm clear PVC | Printing: 4C offset | Finish: Gloss or matte lamination | MOQ: 50 units",
    howToUse:
      "Perfect for toys, cosmetics, food items, electronics accessories, candles, and any retail product that benefits from visible packaging.",
    rating: 4.6,
    reviewCount: 89,
    inStock: true,
  },

  // ── Paper Cups ─────────────────────────────────────────────────────────────
  {
    id: "5",
    slug: "single-wall-kraft-cup-8oz",
    name: "Single Wall Kraft Cup 8oz",
    brand: "RAS Packaging",
    price: 18,
    images: [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    ],
    category: "cups",
    tags: ["paper-cup", "hot-drink", "kraft", "coffee", "bestseller"],
    description:
      "Our single-wall kraft paper cup is the go-to choice for cafés, bakeries, and fast-food outlets. Made from food-grade PE-coated kraft paper, it is leak-proof, heat-resistant, and features a natural brown aesthetic that customers love. Price is per piece (MOQ 500 pcs).",
    benefits: [
      "Food-grade PE coating — 100% leak-proof",
      "Handles liquids up to 90°C",
      "Natural kraft brown aesthetic",
      "Compatible with all standard 80mm lids",
    ],
    ingredients:
      "Material: 210gsm food-grade PE-coated kraft paper | Capacity: 8oz (240ml) | Temperature: Up to 90°C | Lid diameter: 80mm | MOQ: 500 pcs",
    howToUse:
      "Ideal for hot coffee, tea, hot chocolate, and soups at cafés, restaurants, offices, and events.",
    rating: 4.8,
    reviewCount: 421,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "6",
    slug: "double-wall-insulated-cup-12oz",
    name: "Double Wall Insulated Cup 12oz",
    brand: "RAS Packaging",
    price: 32,
    images: [
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    ],
    category: "cups",
    tags: ["double-wall", "insulated", "coffee-cup", "new"],
    description:
      "The double-wall insulated cup eliminates the need for a cup sleeve. The air gap between two kraft paper layers keeps drinks hotter for longer and prevents heat transfer to the hand. Custom printed with your brand design. Price per piece (MOQ 300 pcs).",
    benefits: [
      "Dual-layer air-gap insulation — no sleeve needed",
      "Keeps beverages hot 30% longer",
      "Full-colour custom printing available",
      "Comfortable to hold without burning hands",
    ],
    ingredients:
      "Material: Double-layer 210gsm + 190gsm PE-coated kraft | Capacity: 12oz (360ml) | Lid diameter: 90mm | MOQ: 300 pcs",
    howToUse:
      "Premium coffee shops, specialty tea bars, food trucks, and anywhere a superior hot-cup experience is required.",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    isNew: true,
  },
  {
    id: "7",
    slug: "clear-cold-cup-16oz",
    name: "Clear Cold Drink Cup 16oz",
    brand: "RAS Packaging",
    price: 14,
    images: [
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    ],
    category: "cups",
    tags: ["cold-cup", "clear", "iced-drinks"],
    description:
      "Crystal-clear PETE cold drink cup perfect for iced coffee, smoothies, milkshakes, and cold beverages. The clarity showcases colourful drinks beautifully. Compatible with flat and dome lids. Price per piece (MOQ 500 pcs).",
    benefits: [
      "Crystal-clear PETE for maximum drink visibility",
      "BPA-free and food-safe",
      "Compatible with flat and dome lids",
      "Ribbed side wall for better grip",
    ],
    ingredients:
      "Material: 0.28mm food-grade PETE | Capacity: 16oz (480ml) | Lid: 98mm flat or dome | BPA-free: Yes | MOQ: 500 pcs",
    howToUse:
      "Smoothie bars, juice shops, bubble tea shops, ice cream parlours, cold-brew cafés, and summer event catering.",
    rating: 4.5,
    reviewCount: 178,
    inStock: true,
  },

  // ── Business Cards ─────────────────────────────────────────────────────────
  {
    id: "8",
    slug: "premium-matte-business-cards",
    name: "Premium Matte Business Cards",
    brand: "RAS Packaging",
    price: 1800,
    compareAtPrice: 2400,
    images: [
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
      "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=600&q=80",
    ],
    category: "cards",
    tags: ["business-cards", "matte", "premium", "bestseller"],
    description:
      "Make a lasting first impression with our premium matte business cards. Printed on thick 350gsm art board with a smooth soft-touch matte lamination on both sides — they feel as impressive as they look. Price per 500 cards.",
    benefits: [
      "350gsm premium art board",
      "Soft-touch matte lamination both sides",
      "Full-colour CMYK + 1 PMS spot option",
      "Standard 3.5 × 2 inch size",
    ],
    ingredients:
      "Stock: 350gsm coated art board | Lamination: Soft-touch matte both sides | Size: 3.5\" × 2\" | Printing: 4C CMYK offset | Qty: 500 cards",
    howToUse:
      "Networking events, conferences, corporate meetings, sales calls, retail counters, and any professional setting where first impressions count.",
    rating: 4.9,
    reviewCount: 534,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "9",
    slug: "spot-uv-luxury-business-cards",
    name: "Spot UV Luxury Business Cards",
    brand: "RAS Packaging",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?w=600&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
    ],
    category: "cards",
    tags: ["business-cards", "spot-uv", "luxury", "new"],
    description:
      "Our most premium business card offering. 400gsm silk board with a velvet matte lamination base and raised spot UV coating on selected design elements — creating a stunning tactile contrast that demands to be touched. Price per 500 cards.",
    benefits: [
      "400gsm premium silk board",
      "Raised spot UV on selected design elements",
      "Velvet matte lamination base",
      "Optional gold or silver foil stamping",
    ],
    ingredients:
      "Stock: 400gsm silk art board | Lamination: Velvet matte | Spot UV: Raised gloss on print | Foil: Gold/silver optional | Qty: 500 cards",
    howToUse:
      "High-end corporate executives, luxury brands, boutique agencies, real estate professionals, and anyone who wants their card to be unforgettable.",
    rating: 4.8,
    reviewCount: 267,
    inStock: true,
    isNew: true,
  },

  // ── Shopping Bags ──────────────────────────────────────────────────────────
  {
    id: "10",
    slug: "kraft-paper-handle-bag",
    name: "Kraft Paper Handle Bag",
    brand: "RAS Packaging",
    price: 95,
    compareAtPrice: 130,
    images: [
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    ],
    category: "bags",
    tags: ["paper-bag", "kraft", "eco-friendly", "bestseller"],
    description:
      "Our best-selling kraft paper handle bag is 100% recyclable and made from sustainably sourced paper. Twisted rope handles are reinforced at stress points for durability. Available in 4 sizes with custom printing on both sides. Price per piece.",
    benefits: [
      "100% recyclable and biodegradable",
      "Reinforced twisted paper rope handles",
      "Custom printing on both sides",
      "Available in 4 sizes: S, M, L, XL",
    ],
    ingredients:
      "Material: 120gsm brown kraft paper | Handle: Twisted paper rope | Base: Flat glued | Printing: 1–4 colour flexo | MOQ: 200 pcs",
    howToUse:
      "Retail shops, boutiques, bakeries, restaurants, gift shops, brand events, and any business looking for an eco-friendly carrier bag.",
    rating: 4.7,
    reviewCount: 389,
    inStock: true,
    isBestseller: true,
  },
  {
    id: "11",
    slug: "glossy-laminated-gift-bag",
    name: "Glossy Laminated Gift Bag",
    brand: "RAS Packaging",
    price: 195,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
      "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80",
    ],
    category: "bags",
    tags: ["gift-bag", "glossy", "luxury", "ribbon", "new"],
    description:
      "A premium gift bag with full-colour offset printing and high-gloss lamination for a mirror-like finish. Satin ribbon handles add a luxury boutique feel. Cardboard insert base keeps it upright and rigid. Price per piece.",
    benefits: [
      "High-gloss lamination for premium shine",
      "Satin ribbon handles",
      "Full-colour offset printing",
      "Cardboard bottom insert for rigidity",
    ],
    ingredients:
      "Material: 157gsm art paper + gloss lamination | Handle: Satin ribbon | Base: Cardboard insert | Printing: 4C offset | MOQ: 100 pcs",
    howToUse:
      "Jewellery stores, fashion boutiques, luxury brand gifting, product launches, high-end events, and corporate hampers.",
    rating: 4.6,
    reviewCount: 134,
    inStock: true,
    isNew: true,
  },

  // ── Labels & Tags ──────────────────────────────────────────────────────────
  {
    id: "12",
    slug: "custom-bopp-sticker-labels",
    name: "Custom BOPP Sticker Labels",
    brand: "RAS Packaging",
    price: 2800,
    compareAtPrice: 3500,
    images: [
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=80",
      "https://images.unsplash.com/photo-1615461065929-4f8ffed6ca40?w=600&q=80",
    ],
    category: "labels",
    tags: ["sticker-labels", "bopp", "waterproof", "custom"],
    description:
      "Waterproof BOPP (Biaxially Oriented Polypropylene) sticker labels with a permanent adhesive that bonds to plastic, glass, and paper. High-gloss or matte finish available. Supplied on rolls or sheets. Price per 1,000 labels.",
    benefits: [
      "100% waterproof and oil-resistant",
      "Permanent pressure-sensitive adhesive",
      "Full-colour digital or offset printing",
      "Custom shape die-cutting available",
    ],
    ingredients:
      "Material: White/clear BOPP film | Adhesive: Permanent acrylic | Liner: Silicone-coated glassine | Printing: 4C digital or offset | MOQ: 1,000 labels",
    howToUse:
      "Product labelling for bottles, jars, packaging boxes, food containers, cosmetics, pharmaceuticals, and branded merchandise.",
    rating: 4.8,
    reviewCount: 276,
    inStock: true,
  },
];

export const categories: Category[] = [
  {
    id: "1",
    name: "Boxes",
    slug: "boxes",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&q=80",
    productCount: 4,
  },
  {
    id: "2",
    name: "Paper Cups",
    slug: "cups",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    productCount: 3,
  },
  {
    id: "3",
    name: "Business Cards",
    slug: "cards",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
    productCount: 2,
  },
  {
    id: "4",
    name: "Shopping Bags",
    slug: "bags",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=600&q=80",
    productCount: 2,
  },
  {
    id: "5",
    name: "Labels & Tags",
    slug: "labels",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?w=600&q=80",
    productCount: 1,
  },
  {
    id: "6",
    name: "Gift Wrapping",
    slug: "gift-wrapping",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    productCount: 0,
  },
];

export const getAllCategories = (): string[] => {
  return [...new Set(products.map((p) => p.category))];
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.isBestseller).slice(0, 4);
};

export const getNewProducts = (): Product[] => {
  return products.filter((p) => p.isNew).slice(0, 4);
};
