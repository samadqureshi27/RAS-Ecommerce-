import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "RAS Packaging privacy policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: `We collect information you provide directly to us, such as your name, email address, phone number, delivery address, and payment details when you place an order. We also collect basic usage data (pages visited, device type) to improve our website.`,
  },
  {
    title: "How We Use Your Information",
    content: `We use your information to: process and fulfil your orders; send order confirmations and updates via SMS, WhatsApp, and email; respond to your enquiries; improve our products and website; and comply with legal obligations. We do not sell your personal data to third parties.`,
  },
  {
    title: "Sharing Your Information",
    content: `We may share your information with courier partners (for delivery), payment processors, and our print production partners — all of whom are bound by confidentiality agreements. We do not share your data with advertisers or data brokers.`,
  },
  {
    title: "Cookies",
    content: `Our website uses essential cookies to function correctly (e.g., cart storage) and optional analytics cookies to understand traffic. You can manage cookie preferences via our Cookie Policy page. Disabling cookies may affect site functionality.`,
  },
  {
    title: "Data Retention",
    content: `We retain your order data for 7 years as required by Pakistani tax law. You may request deletion of your account and marketing data at any time by emailing us at hello@raspackaging.com.`,
  },
  {
    title: "Security",
    content: `We implement industry-standard security measures including HTTPS encryption, secure server infrastructure, and access controls. However, no method of transmission over the internet is 100% secure.`,
  },
  {
    title: "Your Rights",
    content: `You have the right to access, correct, or delete the personal data we hold about you. To exercise these rights, contact us at hello@raspackaging.com. We will respond within 30 days.`,
  },
  {
    title: "Contact",
    content: `For privacy-related questions, contact our team at hello@raspackaging.com or write to us at: RAS Packaging, Lahore, Punjab, Pakistan.`,
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/60 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        <p className="text-sm text-[#6B6560] leading-relaxed">
          RAS Packaging (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your privacy. This policy explains how we collect and use your personal information when you use our website and services.
        </p>
        {sections.map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-lg font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-[#E8E6E1]">{title}</h2>
            <p className="text-sm text-[#6B6560] leading-relaxed">{content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
