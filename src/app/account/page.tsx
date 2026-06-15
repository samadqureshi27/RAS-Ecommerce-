"use client";

import { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AccountPage() {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    // Integrate with your auth provider here
    alert(tab === "login" ? "Login functionality coming soon." : "Registration coming soon.");
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] flex items-center justify-center py-20 px-4">
      <div className="w-full max-w-md">
        {/* Logo area */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-full overflow-hidden mx-auto mb-4 shadow-md">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/RAS%20logo.jpeg" alt="RAS Packaging" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">My Account</h1>
          <p className="text-sm text-[#9B9489] mt-1">Sign in to manage your orders and preferences</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#E8E6E1] overflow-hidden">
          {/* Tabs */}
          <div className="flex">
            {(["login", "register"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 py-4 text-sm font-bold tracking-widest uppercase transition-all ${
                  tab === t ? "text-white" : "text-[#9B9489] bg-[#F8F7F4] hover:bg-[#E8E6E1]"
                }`}
                style={tab === t ? { background: "linear-gradient(135deg, #1B2A4A, #243660)" } : {}}
              >
                {t === "login" ? "Sign In" : "Register"}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-7 space-y-5">
            {tab === "register" && (
              <div>
                <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#1B2A4A] mb-2">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9489]" />
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required={tab === "register"}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] focus:outline-none focus:border-[#C9A84C] transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-[#1B2A4A] mb-2">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9489]" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold tracking-[0.15em] uppercase text-[#1B2A4A]">Password</label>
                {tab === "login" && (
                  <a href="#" className="text-xs text-[#C9A84C] hover:underline">Forgot password?</a>
                )}
              </div>
              <div className="relative">
                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9B9489]" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-12 py-3 rounded-xl border border-[#E8E6E1] text-sm text-[#1B2A4A] focus:outline-none focus:border-[#C9A84C] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9B9489] hover:text-[#1B2A4A]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-gold w-full py-4 rounded-full text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : tab === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-[#9B9489] mt-6">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-[#C9A84C] hover:underline">Terms</a> and{" "}
          <a href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
