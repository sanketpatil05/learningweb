import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Route } from "./+types/about";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import CTASection from "~/components/CTASection";
import { instructors } from "~/data/instructors";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "About Us — DataForge" },
    {
      name: "description",
      content:
        "Learn about DataForge's mission to train the next generation of production-ready data engineers through live mentorship and real-world pipeline projects.",
    },
    { property: "og:title", content: "About Us — DataForge" },
  ];
}

const stats = [
  { value: "8,500+", label: "Data Engineers Trained", icon: "⚙️" },
  { value: "4.9/5", label: "Average Rating", icon: "⭐" },
  { value: "84%", label: "Placement Rate", icon: "📈" },
  { value: "50+", label: "Data Hiring Partners", icon: "🏢" },
  { value: "3", label: "Industry Expert Instructors", icon: "🎓" },
  { value: "₹58 LPA", label: "Highest Package", icon: "💰" },
];

const timeline = [
  {
    year: "2021",
    title: "Founded",
    description:
      "Three senior data engineers from Swiggy, Amazon, and PhonePe came together with a shared belief: data engineering education needed to be radically more practical — pipeline-first, production-focused, and outcome-driven.",
    color: "from-sky-500 to-blue-600",
  },
  {
    year: "2022",
    title: "First Data Engineering Cohort",
    description:
      "Our inaugural cohort of 20 students completed the Data Engineering Bootcamp. 17 landed data engineering and analytics roles within 3 months. Word spread fast across the data community.",
    color: "from-violet-500 to-purple-600",
  },
  {
    year: "2023",
    title: "Expanded to 10 Courses",
    description:
      "Launched dedicated courses for PySpark, Kafka, Airflow, Cloud Data Engineering, and SQL. Crossed 3,000 enrolled students, onboarded 50+ data hiring partners, and kept batch sizes under 20.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    year: "2024",
    title: "8,500+ Data Engineers Placed",
    description:
      "Students landed roles at Swiggy, PhonePe, Meesho, Flipkart, CRED, and top data-driven companies. Achieved 84% placement rate and our highest package of ₹58 LPA for a Senior Data Engineer role.",
    color: "from-amber-500 to-orange-600",
  },
];

const pillars = [
  {
    icon: "🔧",
    title: "Pipelines Over Theory",
    description:
      "We teach data engineering by building real pipelines, not slides about pipelines. Every concept — from idempotency to schema evolution — is demonstrated on real datasets and production scenarios.",
    gradient: "from-sky-500/20 to-blue-500/5",
    border: "border-sky-500/20",
  },
  {
    icon: "🤝",
    title: "Mentorship Over Lectures",
    description:
      "Data engineering is a craft. You learn it by having your DAGs reviewed, your Spark jobs profiled, and your architecture challenged by someone who's done it in production at scale.",
    gradient: "from-violet-500/20 to-purple-500/5",
    border: "border-violet-500/20",
  },
  {
    icon: "📊",
    title: "Outcomes Over Certificates",
    description:
      "A certificate means nothing. A production ETL job in your GitHub, a Snowflake warehouse you designed yourself, and an offer letter from a data-first company — that's what we optimise for.",
    gradient: "from-emerald-500/20 to-teal-500/5",
    border: "border-emerald-500/20",
  },
];

const successMetrics = [
  { label: "Average time to first data offer", value: "3.5 months", sub: "for Premium students" },
  { label: "Resume shortlist rate", value: "76%", sub: "after our review" },
  { label: "Mock interview pass rate", value: "81%", sub: "predicting real results" },
  { label: "Student satisfaction score", value: "4.9 / 5", sub: "across all cohorts" },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/3 -left-60 w-[500px] h-[500px] bg-sky-600/6 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[120px]" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Our Story
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              We train data engineers who{" "}
              <span className="gradient-text">build real pipelines</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed max-w-2xl mx-auto"
            >
              DataForge was built by data engineers who were tired of courses that taught tools in isolation
              and never showed you how to build a complete, production-grade pipeline. We exist to fix that.
            </motion.p>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 bg-[#0d1117] border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-xs leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission & Philosophy ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Three pillars we "
              highlight="never compromise on"
              description="Everything we do at DataForge is guided by a simple belief: real pipeline experience beats resume buzzwords. Here's how we live that."
              className="mb-14"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`rounded-2xl border ${pillar.border} bg-gradient-to-br ${pillar.gradient} p-7`}
                >
                  <div className="text-4xl mb-5">{pillar.icon}</div>
                  <h3 className="text-white font-bold text-xl mb-3">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Instructors ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="The Team"
              title="Meet your "
              highlight="instructors"
              description="Not content creators. Not bootcamp graduates. Real engineers with battle scars from building at scale."
              className="mb-14"
            />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {instructors.map((instructor, i) => (
                <motion.div
                  key={instructor.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 group"
                >
                  {/* Avatar header */}
                  <div className="relative h-32 bg-gradient-to-br from-sky-500/10 via-violet-500/10 to-[#161b22] flex items-center justify-center">
                    <img
                      src={instructor.avatar}
                      alt={instructor.name}
                      className="w-24 h-24 rounded-full border-4 border-[#161b22] bg-[#0d1117] mt-8 relative z-10"
                    />
                  </div>

                  <div className="px-6 pt-2 pb-6">
                    <div className="text-center mb-4">
                      <h3 className="text-white font-bold text-xl">{instructor.name}</h3>
                      <p className="text-sky-400 text-sm mt-1">{instructor.role}</p>
                      <div className="flex items-center justify-center gap-1.5 mt-2">
                        <span className="text-gray-500 text-xs">{instructor.experience}</span>
                        <span className="text-gray-600">·</span>
                        <span className="text-gray-500 text-xs">{instructor.previousCompanies.join(", ")}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-5">
                      {instructor.bio}
                    </p>

                    {/* Specializations */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {instructor.specializations.map((spec) => (
                        <span
                          key={spec}
                          className="px-2 py-0.5 rounded-md bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Previous companies */}
                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                        Previously at
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {instructor.previousCompanies.map((company) => (
                          <span
                            key={company}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-300 text-xs font-medium"
                          >
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                        Highlights
                      </p>
                      <ul className="flex flex-col gap-2">
                        {instructor.achievements.slice(0, 3).map((ach) => (
                          <li key={ach} className="flex items-start gap-2 text-xs text-gray-400">
                            <svg
                              className="w-3.5 h-3.5 mt-0.5 text-emerald-400 flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                      {instructor.social.twitter && (
                        <a
                          href={instructor.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
                          aria-label="Twitter"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </a>
                      )}
                      {instructor.social.linkedin && (
                        <a
                          href={instructor.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-200"
                          aria-label="LinkedIn"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      )}
                      {instructor.social.github && (
                        <a
                          href={instructor.social.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 transition-all duration-200"
                          aria-label="GitHub"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Journey Timeline ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              eyebrow="Our Journey"
              title="Four years of "
              highlight="building something real"
              className="mb-16"
            />
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-violet-500/30 to-transparent -translate-x-1/2" />

              <div className="flex flex-col gap-12">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.1 }}
                    className={`relative flex flex-col sm:flex-row gap-6 sm:gap-0 ${
                      i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-16 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:pl-12"}`}>
                      <div
                        className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white text-xs font-bold mb-2`}
                      >
                        {item.year}
                      </div>
                      <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-6 sm:left-1/2 top-1 sm:top-2 -translate-x-1/2 flex-shrink-0">
                      <div
                        className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.color} border-2 border-[#030712] shadow-lg`}
                      />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden sm:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Success Metrics ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="The Numbers"
              title="Outcomes we're "
              highlight="proud of"
              description="We track what matters: jobs, salaries, and satisfaction. Not completion rates."
              className="mb-14"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {successMetrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#161b22] border border-white/5 rounded-2xl p-6 text-center hover:border-white/10 transition-all duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{metric.value}</div>
                  <div className="text-white text-sm font-semibold mb-1">{metric.label}</div>
                  <div className="text-gray-500 text-xs">{metric.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Be part of the next success story"
          description="Join thousands of developers who chose depth over shortcuts. Your engineering career starts here."
          primaryCTA={{ label: "View Courses", href: "/courses" }}
          secondaryCTA={{ label: "Meet the Team", href: "/about" }}
        />
      </main>
      <Footer />
    </>
  );
}
