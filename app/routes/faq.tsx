import { useState } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Route } from "./+types/faq";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import FAQAccordion from "~/components/FAQAccordion";
import CTASection from "~/components/CTASection";
import { faqs } from "~/data/faqs";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "FAQ — DataForge" },
    {
      name: "description",
      content:
        "Answers to the most common questions about DataForge data engineering courses, PySpark training, SQL classes, mentorship, pricing, and career support.",
    },
    { property: "og:title", content: "FAQ — DataForge" },
  ];
}

const ALL_LABEL = "All";

const categoryIcons: Record<string, string> = {
  All: "✦",
  "Getting Started": "🚀",
  "Course Format": "📚",
  Mentorship: "🤝",
  "Pricing & Payment": "💳",
  Career: "💼",
  Technical: "⚙️",
};

export default function FAQ() {
  const categories = [
    ALL_LABEL,
    ...Array.from(new Set(faqs.map((f) => f.category))),
  ];

  const [activeCategory, setActiveCategory] = useState<string>(ALL_LABEL);

  const filteredFaqs =
    activeCategory === ALL_LABEL
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[120px] -translate-y-1/2" />
            <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] -translate-y-1/2" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          <div className="relative max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              {faqs.length} questions answered
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-5"
            >
              Frequently asked{" "}
              <span className="gradient-text">questions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Everything you need to know before enrolling. Can't find your answer?{" "}
              <Link to="/contact" className="text-sky-400 hover:text-sky-300 transition-colors underline underline-offset-4">
                Reach out to us
              </Link>
              .
            </motion.p>
          </div>
        </section>

        {/* ── Category filter tabs ── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((cat, i) => {
                const isActive = activeCategory === cat;
                return (
                  <motion.button
                    key={cat}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                      isActive
                        ? "bg-sky-500/15 border-sky-500/40 text-sky-400"
                        : "bg-white/5 border-white/8 text-gray-400 hover:text-white hover:bg-white/8 hover:border-white/12"
                    }`}
                  >
                    <span className="text-base leading-none">
                      {categoryIcons[cat] ?? "•"}
                    </span>
                    {cat}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded-md ${
                        isActive ? "bg-sky-500/20 text-sky-300" : "bg-white/5 text-gray-500"
                      }`}
                    >
                      {cat === ALL_LABEL
                        ? faqs.length
                        : faqs.filter((f) => f.category === cat).length}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── FAQ Accordion ── */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                No questions in this category yet.
              </div>
            ) : (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category heading when filtered */}
                {activeCategory !== ALL_LABEL && (
                  <div className="flex items-center gap-3 mb-8">
                    <span className="text-2xl">{categoryIcons[activeCategory] ?? "•"}</span>
                    <div>
                      <h2 className="text-xl font-bold text-white">{activeCategory}</h2>
                      <p className="text-gray-500 text-sm">
                        {filteredFaqs.length} question{filteredFaqs.length !== 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                )}
                <FAQAccordion faqs={filteredFaqs} />
              </motion.div>
            )}

            {/* Still have questions nudge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#0d1117] border border-white/5 rounded-2xl p-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center flex-shrink-0 text-xl">
                  💬
                </div>
                <div>
                  <p className="text-white font-semibold">Still have questions?</p>
                  <p className="text-gray-400 text-sm">
                    Our team replies within a few hours.
                  </p>
                </div>
              </div>
              <Link
                to="/contact"
                className="flex-shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20 flex items-center gap-2"
              >
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── Popular categories quick-jump ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1117] border-t border-white/5">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Browse by topic"
              title="Find answers "
              highlight="by category"
              centered
              className="mb-10"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {categories.slice(1).map((cat, i) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                  onClick={() => {
                    setActiveCategory(cat);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group bg-[#161b22] border border-white/5 rounded-2xl p-5 text-left hover:border-sky-500/30 hover:bg-[#161b22]/80 transition-all duration-200"
                >
                  <div className="text-2xl mb-3">{categoryIcons[cat] ?? "•"}</div>
                  <p className="text-white font-semibold text-sm group-hover:text-sky-400 transition-colors mb-1">
                    {cat}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {faqs.filter((f) => f.category === cat).length} questions
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Ready to start learning?"
          description="Join the next cohort and get personalized answers from instructors who've built at scale."
          primaryCTA={{ label: "View Courses", href: "/courses" }}
          secondaryCTA={{ label: "Contact Us", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}
