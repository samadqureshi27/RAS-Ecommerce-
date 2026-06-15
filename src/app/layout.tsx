import type { Metadata, Viewport } from "next";
import { Cinzel, Raleway } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";
import CartDrawer from "@/components/CartDrawer";
import ClientOnly from "@/components/ClientOnly";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RAS Packaging | Premium Custom Packaging Solutions",
    template: "%s | RAS Packaging",
  },
  description:
    "Discover RAS Packaging — premium custom packaging solutions including boxes, paper cups, business cards, shopping bags, and labels. Made in Pakistan.",
  keywords: "packaging, custom boxes, paper cups, business cards, shopping bags, labels, custom packaging Pakistan, RAS Packaging",
  openGraph: {
    title: "RAS Packaging",
    description: "Premium custom packaging solutions for businesses of all sizes.",
    type: "website",
    siteName: "RAS Packaging",
  },
  icons: {
    icon: "/RAS%20logo.jpeg",
    apple: "/RAS%20logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1B2A4A",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${raleway.variable}`}>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <CartDrawer />
          <ClientOnly />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
