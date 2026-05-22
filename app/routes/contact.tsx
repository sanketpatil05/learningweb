import { useState } from "react";
import { motion } from "framer-motion";
import type { Route } from "./+types/contact";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Contact Us — DataForge" },
    {
      name: "description",
      content:
        "Get in touch with the DataForge team for data engineering course questions, mentorship inquiries, corporate training, partnerships, or technical support.",
    },
    { property: "og:title", content: "Contact Us — DataForge" },
  ];
}

type SubjectOption =
  | "General Inquiry"
  | "Course Question"
  | "Mentorship"
  | "Technical Issue"
  | "Partnership";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: SubjectOption | "";
  message: string;
}

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "hello@dataforge.in",
    href: "mailto:hello@dataforge.in",
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+91 98765 43210",
    href: "https://wa.me/919876543210",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Office Hours",
    value: "Mon–Sat, 10 AM – 7 PM IST",
    href: null,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Address",
    value: "Indiranagar, Bangalore — 560 038",
    href: null,
    color: "text-violet-400",
    bg: "bg-violet-500/10 border-violet-500/20",
  },
];

const socialLinks = [
  {
    name: "Twitter / X",
    href: "#",
    color: "hover:text-sky-400 hover:border-sky-500/30",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    color: "hover:text-sky-400 hover:border-sky-500/30",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    color: "hover:text-white hover:border-white/20",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    color: "hover:text-red-400 hover:border-red-500/30",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  const inputClass =
    "w-full bg-[#0d1117] border border-white/8 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-sky-500/50 focus:bg-[#0d1117] transition-all duration-200";

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* Page header */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-sky-600/5 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[120px] -translate-y-1/2" />
          </div>
          <div className="relative max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              We respond within 24 hours
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4"
            >
              Let's <span className="gradient-text">talk</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Have a question about our courses, mentorship, or career support? Drop us a message
              and we'll get back to you quickly.
            </motion.p>
          </div>
        </section>

        {/* Main content */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              {/* ── LEFT: Contact form ── */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="lg:col-span-3"
              >
                <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-8">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
                        <svg
                          className="w-8 h-8 text-emerald-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-3">Message Sent!</h3>
                      <p className="text-gray-400 max-w-sm leading-relaxed">
                        Thanks for reaching out, {form.name.split(" ")[0]}. We'll reply to{" "}
                        <span className="text-sky-400">{form.email}</span> within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: "", email: "", phone: "", subject: "", message: "" });
                        }}
                        className="mt-6 text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <>
                      <h2 className="text-xl font-bold text-white mb-6">Send us a message</h2>
                      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Full Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Rahul Sharma"
                            className={inputClass}
                          />
                        </div>

                        {/* Email + Phone */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Email <span className="text-red-400">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              placeholder="you@example.com"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1.5">
                              Phone{" "}
                              <span className="text-gray-600 font-normal">(optional)</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handleChange}
                              placeholder="+91 98765 43210"
                              className={inputClass}
                            />
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Subject <span className="text-red-400">*</span>
                          </label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className={`${inputClass} appearance-none cursor-pointer`}
                          >
                            <option value="" disabled className="bg-[#161b22]">
                              Select a topic
                            </option>
                            {(
                              [
                                "General Inquiry",
                                "Course Question",
                                "Mentorship",
                                "Technical Issue",
                                "Partnership",
                              ] as SubjectOption[]
                            ).map((opt) => (
                              <option key={opt} value={opt} className="bg-[#161b22]">
                                {opt}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Message */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-1.5">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            placeholder="Tell us how we can help..."
                            className={`${inputClass} resize-none`}
                          />
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg
                                className="w-4 h-4 animate-spin"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                              </svg>
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>

              {/* ── RIGHT: Contact info + Discord + Map ── */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="lg:col-span-2 flex flex-col gap-6"
              >
                {/* Contact info cards */}
                <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-6">
                  <h2 className="text-lg font-bold text-white mb-5">Contact Details</h2>
                  <div className="flex flex-col gap-4">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-gray-500 text-xs mb-0.5">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className={`text-sm font-medium ${item.color} hover:opacity-80 transition-opacity`}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white text-sm font-medium">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social links */}
                <div className="bg-[#0d1117] border border-white/5 rounded-2xl p-6">
                  <h2 className="text-base font-bold text-white mb-4">Follow Us</h2>
                  <div className="grid grid-cols-2 gap-2">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-white/5 border border-white/8 text-gray-400 text-sm font-medium transition-all duration-200 ${social.color}`}
                      >
                        {social.icon}
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Discord */}
                <div className="bg-gradient-to-br from-indigo-500/10 to-violet-500/5 border border-indigo-500/20 rounded-2xl p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 00-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 00-5.487 0 12.36 12.36 0 00-.617-1.23A.077.077 0 008.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 00-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 00.031.055 20.03 20.03 0 005.993 2.98.078.078 0 00.084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 01-1.872-.878.075.075 0 01-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 01.078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 01.079.009c.12.098.245.195.372.288a.075.075 0 01-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 00-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 00.084.028 19.963 19.963 0 006.002-2.981.076.076 0 00.032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 00-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Join our Discord</h3>
                      <p className="text-gray-400 text-sm mt-0.5">
                        4,200+ members. Ask questions, share projects, network.
                      </p>
                    </div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-sm font-semibold hover:bg-indigo-500/30 transition-all duration-200"
                  >
                    Join Community
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Map placeholder */}
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white/5">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0d1117 0%, #161b22 30%, #0d1117 60%, #161b22 100%)",
                      backgroundSize: "40px 40px",
                    }}
                  />
                  {/* Grid pattern overlay */}
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  {/* Fake roads */}
                  <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 200">
                    <line x1="0" y1="100" x2="400" y2="100" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="200" y1="0" x2="200" y2="200" stroke="#38bdf8" strokeWidth="2" />
                    <line x1="0" y1="50" x2="400" y2="50" stroke="#a78bfa" strokeWidth="1" strokeDasharray="8,8" />
                    <line x1="0" y1="150" x2="400" y2="150" stroke="#a78bfa" strokeWidth="1" strokeDasharray="8,8" />
                    <line x1="100" y1="0" x2="100" y2="200" stroke="#a78bfa" strokeWidth="1" strokeDasharray="8,8" />
                    <line x1="300" y1="0" x2="300" y2="200" stroke="#a78bfa" strokeWidth="1" strokeDasharray="8,8" />
                  </svg>
                  {/* Pin */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-sky-500/30 border-2 border-sky-400 flex items-center justify-center animate-pulse">
                      <div className="w-3 h-3 rounded-full bg-sky-400" />
                    </div>
                    <span className="text-gray-400 text-xs font-medium px-3 py-1 rounded-full bg-[#0d1117]/80 border border-white/8">
                      Indiranagar, Bangalore
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
