import { motion } from "framer-motion";
import type { Route } from "./+types/pricing";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import PricingCard from "~/components/PricingCard";
import FAQAccordion from "~/components/FAQAccordion";
import CTASection from "~/components/CTASection";
import { pricingPlans } from "~/data/pricing";
import { faqs } from "~/data/faqs";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Pricing — DataForge" },
    {
      name: "description",
      content:
        "Simple, transparent pricing for DataForge data engineering courses. SQL & Analytics Starter, Data Engineering Pro, or Premium Mentorship Program — 7-day money-back guarantee.",
    },
    { property: "og:title", content: "Pricing — DataForge" },
    {
      property: "og:description",
      content:
        "Simple pricing for serious data engineering training. Starter, Pro, or Premium Mentorship — no hidden fees.",
    },
  ];
}

const pricingFAQs = faqs.filter((f) =>
  ["Pricing & Payment", "Mentorship", "Career"].includes(f.category)
);

// Feature rows for comparison table
const comparisonFeatures = [
  {
    feature: "Courses included",
    beginner: "2 courses",
    pro: "All 6 courses",
    premium: "All 6 courses",
  },
  {
    feature: "Recorded sessions",
    beginner: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Resource downloads",
    beginner: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Community Discord",
    beginner: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Certificate of completion",
    beginner: true,
    pro: true,
    premium: true,
  },
  {
    feature: "Group Q&A sessions",
    beginner: "Monthly",
    pro: "Weekly",
    premium: "Daily",
  },
  {
    feature: "1:1 Mentorship",
    beginner: false,
    pro: "2x / month",
    premium: "Unlimited",
  },
  {
    feature: "Code reviews",
    beginner: false,
    pro: true,
    premium: "Detailed",
  },
  {
    feature: "Mock interviews",
    beginner: false,
    pro: false,
    premium: "5x / month",
  },
  {
    feature: "Job placement assistance",
    beginner: false,
    pro: false,
    premium: true,
  },
];

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/15 text-emerald-400">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-gray-600">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    );
  }
  return <span className="text-gray-300 text-sm font-medium">{value}</span>;
}

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/4 rounded-full blur-[120px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Simple, transparent pricing
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Invest in your{" "}
              <span className="gradient-text">career</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed mb-6 max-w-2xl mx-auto"
            >
              No hidden fees. No content paywalls. Every plan includes lifetime access to recordings, code, and our community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400"
            >
              {[
                "7-day money-back guarantee",
                "No-cost EMI available",
                "Cancel anytime",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-emerald-400"
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
                  {item}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Pricing Cards ── */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {pricingPlans.map((plan, i) => (
                <PricingCard key={plan.id} plan={plan} index={i} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center text-gray-500 text-sm mt-8"
            >
              Prices shown in INR. GST applicable as per government regulations.
            </motion.p>
          </div>
        </section>

        {/* ── Comparison Table ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-5xl mx-auto">
            <SectionHeading
              eyebrow="Compare Plans"
              title="Everything in "
              highlight="one place"
              description="A detailed look at what each plan includes — pick the one that fits your goals."
              className="mb-14"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-x-auto rounded-2xl border border-white/5"
            >
              <table className="w-full min-w-[600px] text-sm">
                <thead>
                  <tr className="bg-[#161b22]">
                    <th className="text-left px-6 py-4 text-gray-400 font-semibold w-2/5">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-gray-300 font-bold">
                      Beginner
                      <div className="text-gray-500 text-xs font-normal mt-0.5">₹999/mo</div>
                    </th>
                    <th className="px-6 py-4 text-center relative">
                      <span className="text-sky-400 font-bold">Pro</span>
                      <div className="text-gray-500 text-xs font-normal mt-0.5">₹2,499/mo</div>
                      <div className="absolute top-2 right-3 px-1.5 py-0.5 rounded-md bg-sky-500/15 text-sky-400 text-[10px] font-bold border border-sky-500/20">
                        Popular
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-violet-400 font-bold">
                      Premium
                      <div className="text-gray-500 text-xs font-normal mt-0.5">₹7,999/mo</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-t border-white/5 ${
                        i % 2 === 0 ? "bg-[#0d1117]" : "bg-[#161b22]/50"
                      }`}
                    >
                      <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <CellValue value={row.beginner} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center bg-sky-500/3">
                        <div className="flex justify-center">
                          <CellValue value={row.pro} />
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div className="flex justify-center">
                          <CellValue value={row.premium} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* ── Testimonial callout ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  quote:
                    "The Pro plan was worth every rupee. The weekly Q&As and code reviews levelled up my skills faster than 2 years of self-study.",
                  name: "Aditya K.",
                  role: "Got offer at ₹28 LPA",
                  seed: "aditya",
                },
                {
                  quote:
                    "Premium mentorship completely transformed my interview prep. Cleared Amazon SDE-2 after 3 months on the plan.",
                  name: "Sneha R.",
                  role: "Amazon SDE-2 · ₹42 LPA",
                  seed: "sneha",
                },
                {
                  quote:
                    "Started with Beginner and upgraded to Pro after one month. The course content alone is better than any platform I've tried.",
                  name: "Rahul P.",
                  role: "Backend Engineer · ₹18 LPA",
                  seed: "rahulp",
                },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                >
                  <svg
                    className="w-6 h-6 text-sky-400/40 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.seed}`}
                      alt={t.name}
                      className="w-9 h-9 rounded-full bg-[#21262d]"
                    />
                    <div>
                      <p className="text-white text-sm font-semibold">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing FAQ ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="FAQ"
              title="Pricing "
              highlight="questions"
              description="Everything you need to know about our plans, payments, and mentorship."
              className="mb-12"
            />
            <FAQAccordion faqs={pricingFAQs} />
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Start building data pipelines today"
          description="Pick a plan, join the next data engineering cohort, and start building skills that compound. 7-day refund if it's not for you."
          primaryCTA={{ label: "Get Started", href: "/contact" }}
          secondaryCTA={{ label: "Browse Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
