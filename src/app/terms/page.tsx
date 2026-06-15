import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "RAS Packaging terms of service — your rights and obligations when using our website and placing orders.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    content: `By accessing our website or placing an order, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`,
  },
  {
    title: "Orders & Payment",
    content: `All orders are subject to availability and acceptance. Prices are listed in Pakistani Rupees (PKR) and inclusive of applicable taxes. For custom print orders, a 50% advance payment is required before production begins. The remaining balance is due on delivery or dispatch.`,
  },
  {
    title: "Custom Orders",
    content: `Custom printed products are manufactured to your specifications. You are responsible for the accuracy of all artwork and information provided. We are not liable for errors in artwork that was approved by you. A digital proof is provided for all orders — production begins only after written approval.`,
  },
  {
    title: "Intellectual Property",
    content: `By submitting artwork, you confirm that you own or have the right to use all content provided. You grant RAS Packaging a limited licence to use your artwork solely for fulfilling your order. We retain ownership of all our website content, designs, and branding.`,
  },
  {
    title: "Cancellations",
    content: `Orders may be cancelled free of charge within 2 hours of placement. Once production has begun, cancellations are not possible and advance payments are non-refundable. Please review your artwork carefully before approving.`,
  },
  {
    title: "Liability",
    content: `RAS Packaging's liability is limited to the value of the defective products. We are not liable for indirect losses, loss of profit, or consequential damages arising from the use of our products.`,
  },
  {
    title: "Governing Law",
    content: `These terms are governed by the laws of Pakistan. Any disputes shall be resolved in the courts of Lahore, Punjab.`,
  },
  {
    title: "Changes to Terms",
    content: `We reserve the right to update these terms at any time. Material changes will be communicated via email. Continued use of our services after changes constitutes acceptance of the updated terms.`,
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        <p className="text-sm text-[#6B6560] leading-relaxed">
          Please read these Terms of Service carefully before placing an order with RAS Packaging. These terms constitute a legally binding agreement between you and RAS Packaging.
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
