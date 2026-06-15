"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — replace with your API call
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #1B2A4A 0%, #243660 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#C9A84C] mb-4">Get In Touch</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/70 max-w-xl mx-auto">
            Have a project in mind? Need a bulk quote? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1B2A4A] mb-6">Reach Us Directly</h2>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: "Email", value: "hello@raspackaging.com", href: "mailto:hello@raspackaging.com" },
                  { icon: Phone, label: "Phone / WhatsApp", value: "+92 300 0000000", href: "tel:+923000000000" },
                  { icon: MapPin, label: "Address", value: "Lahore, Punjab, Pakistan", href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #1B2A4A, #243660)" }}>
                      <Icon size={18} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.15em] uppercase text-[#9B9489] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-[#1B2A4A] hover:text-[#C9A84C] transition-colors font-medium">{value}</a>
                      ) : (
                        <p className="text-sm text-[#1B2A4A] font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/923000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full px-6 py-4 rounded-2xl text-white font-semibold transition-all hover:opacity-90"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={22} />
              Chat on WhatsApp
            </a>

            {/* Hours */}
            <div className="bg-[#F8F7F4] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-[#C9A84C]" />
                <h3 className="text-sm font-bold text-[#1B2A4A]">Business Hours</h3>
              </div>
              <div className="space-y-1.5 text-sm text-[#6B6560]">
                <div className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="font-medium">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM – 3:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-[#9B9489]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-[#F8F7F4] rounded-3xl">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-5" style={{ background: "linear-gradient(135deg, #C9A84C, #E8CC80)" }}>
                  <Send size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1B2A4A] mb-3">Message Sent!</h3>
                <p className="text-[#6B6560] max-w-sm">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
                    { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com", required: true },
                    { name: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+92 300 0000000", required: false },
                    { name: "company", label: "Company Name", type: "text", placeholder: "Your business", required: false },
                  ].map(({ name, label, type, placeholder, required }) => (
                    <div key={name}>
                      <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#1B2A4A] mb-2">
                        {label} {required && <span className="text-red-500">*</span>}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required={required}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] bg-white focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#9B9489]"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#1B2A4A] mb-2">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] bg-white focus:outline-none focus:border-[#C9A84C] transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="bulk-order">Bulk Order Enquiry</option>
                    <option value="custom-printing">Custom Printing</option>
                    <option value="pricing">Pricing & Quotes</option>
                    <option value="existing-order">Existing Order</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#1B2A4A] mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your packaging needs, quantities, and timeline..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] bg-white focus:outline-none focus:border-[#C9A84C] transition-colors placeholder-[#9B9489] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
