import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, products } from "@/data/products";
import ProductDetail from "./ProductDetail";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found | RAS Packaging" };

  return {
    title: `${product.name} | RAS Packaging`,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | RAS Packaging`,
      description: product.description.slice(0, 160),
      images: [{ url: product.images[0], width: 600, height: 600, alt: product.name }],
      type: "website",
    },
  };
}

export default async function ProductPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();
  return <ProductDetail product={product} />;
}
