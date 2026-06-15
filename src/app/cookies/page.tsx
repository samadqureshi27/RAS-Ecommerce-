import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "RAS Packaging cookie policy — how we use cookies and how you can manage them.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Cookie Policy</h1>
          <p className="text-white/60 text-sm">Last updated: June 2026</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {[
          {
            title: "What Are Cookies?",
            content: `Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your browsing experience.`,
          },
          {
            title: "Cookies We Use",
            content: `Essential cookies: Required for the website to function (e.g., shopping cart storage, session management). These cannot be disabled.\n\nAnalytics cookies: Help us understand how visitors interact with our website (page views, traffic sources). We use this data to improve our site. These are optional.\n\nPreference cookies: Remember your settings and preferences across visits.`,
          },
          {
            title: "Managing Cookies",
            content: `You can manage or delete cookies through your browser settings. Disabling essential cookies will affect website functionality (e.g., your cart may not save). Analytics and preference cookies can be disabled without affecting core functionality.`,
          },
          {
            title: "Third-Party Cookies",
            content: `We do not currently use third-party advertising cookies. If we integrate third-party services (e.g., analytics tools), we will update this policy accordingly.`,
          },
          {
            title: "Contact",
            content: `For questions about our use of cookies, contact us at hello@raspackaging.com.`,
          },
        ].map(({ title, content }) => (
          <div key={title}>
            <h2 className="text-lg font-bold text-[#1B2A4A] mb-3 pb-2 border-b border-[#E8E6E1]">{title}</h2>
            <p className="text-sm text-[#6B6560] leading-relaxed whitespace-pre-line">{content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
