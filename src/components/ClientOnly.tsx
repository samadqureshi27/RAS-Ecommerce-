"use client";

import dynamic from "next/dynamic";

const CartPersistence = dynamic(() => import("@/components/CartPersistence"), {
  ssr: false,
});

export default function ClientOnly() {
  return <CartPersistence />;
}
