import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import CourseCard from "~/components/CourseCard";
import SessionCard from "~/components/SessionCard";
import TestimonialCard from "~/components/TestimonialCard";
import SectionHeading from "~/components/SectionHeading";
import CTASection from "~/components/CTASection";
import FAQAccordion from "~/components/FAQAccordion";
import PricingCard from "~/components/PricingCard";
import { courses } from "~/data/courses";
import { sessions } from "~/data/sessions";
import { testimonials } from "~/data/testimonials";
import { pricingPlans } from "~/data/pricing";
import { faqs } from "~/data/faqs";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "DataForge — Data Engineering & Analytics Bootcamp" },
    {
      name: "description",
      content:
        "Master Data Engineering, SQL, PySpark, Apache Airflow, Kafka, and cloud data platforms with live mentorship from engineers at Swiggy, Meesho, and PhonePe. Small batches. Real pipelines. Real outcomes.",
    },
    { property: "og:title", content: "DataForge — Data Engineering & Analytics Bootcamp" },
    {
      property: "og:description",
      content:
        "Live training in Data Engineering, PySpark, Kafka, Airflow, SQL, and cloud data platforms from engineers who've built at Petabyte scale.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "keywords", content: "data engineering classes, PySpark course, SQL training, Apache Airflow, Kafka course, big data bootcamp, data analytics training, ETL pipeline training, cloud data engineering" },
  ];
}

const stats = [
  { value: "8,500+", label: "Data Engineers Trained" },
  { value: "₹58 LPA", label: "Highest Package" },
  { value: "84%", label: "Placement Rate" },
  { value: "4.9/5", label: "Average Rating" },
];

const whyUs = [
  {
    icon: "🔧",
    title: "Real Industry Projects",
    description:
      "Build end-to-end ETL pipelines, streaming systems, and cloud data warehouses. Every project mirrors what data engineers do at Swiggy, PhonePe, and Meesho.",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: "⚡",
    title: "Big Data Technologies",
    description:
      "Hands-on with the full modern data stack: PySpark, Kafka, Airflow, dbt, Snowflake, Delta Lake, BigQuery, and more. No toy datasets.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: "🏗️",
    title: "Production-Level Pipelines",
    description:
      "Learn idempotency, data quality checks, schema evolution, SLA alerting, and failure handling — the things that separate hobby projects from production pipelines.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: "☁️",
    title: "Cloud & Distributed Systems",
    description:
      "Deep coverage of AWS (S3, Glue, Redshift), GCP (BigQuery, Dataflow), and Azure Data Factory. Build cloud-native architectures from scratch.",
    color: "from-cyan-500 to-sky-600",
  },
  {
    icon: "💼",
    title: "Interview Preparation",
    description:
      "Targeted prep for data engineering roles at product companies. SQL interview patterns, pipeline design questions, and system design for data systems.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: "🎯",
    title: "Live Mentorship",
    description:
      "1:1 sessions with data engineers from Swiggy, Amazon, and PhonePe. Get your pipeline architecture reviewed and career trajectory mapped by practitioners.",
    color: "from-rose-500 to-pink-600",
  },
];

export default function Home() {
  const featuredCourses = courses.filter((c) => c.featured);
  const latestSessions = sessions.slice(0, 4);
  const previewFAQs = faqs.slice(0, 5);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-sky-600/8 rounded-full blur-[120px] pulse-slow" />
            <div
              className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[120px] pulse-slow"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                New Data Engineering cohort — March 2025
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
              >
                Become a{" "}
                <span className="gradient-text">Production-Ready</span>
                <br />
                Data Engineer.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-gray-400 text-xl leading-relaxed mb-8 max-w-xl lg:mx-0 mx-auto"
              >
                Industry-focused live classes on SQL, PySpark, Airflow, Kafka, and cloud data platforms. Build real ETL pipelines, streaming systems, and data warehouses — mentored by engineers from Swiggy, Amazon, and PhonePe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link
                  to="/pricing"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-2xl shadow-sky-500/25 flex items-center justify-center gap-2"
                >
                  Explore Data Courses
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/sessions"
                  className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-base hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch Latest Sessions
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="mt-10 flex flex-wrap items-center gap-6 justify-center lg:justify-start"
              >
                <div className="flex -space-x-3">
                  {["rahul", "priya", "arjun", "aditya", "sneha"].map((seed) => (
                    <img
                      key={seed}
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                      alt=""
                      className="w-9 h-9 rounded-full border-2 border-[#030712] bg-[#21262d]"
                    />
                  ))}
                  <div className="w-9 h-9 rounded-full border-2 border-[#030712] bg-sky-500/20 flex items-center justify-center">
                    <span className="text-sky-400 text-[9px] font-bold">+12K</span>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">
                  Join <span className="text-white font-semibold">8,500+ data engineers</span> already learning
                </p>
              </motion.div>
            </div>

            {/* Code window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 w-full max-w-lg"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-sky-500/10 to-violet-500/10 rounded-3xl blur-xl" />
                <div className="relative bg-[#161b22] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d1117]">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    <span className="ml-3 text-gray-500 text-xs font-code">etl_pipeline.py</span>
                  </div>
                  <div className="p-5 font-code text-sm leading-7">
                    <div className="text-gray-600">{"# PySpark ETL — S3 → Snowflake"}</div>
                    <div className="mt-1">
                      <span className="text-violet-400">from</span>{" "}
                      <span className="text-sky-300">pyspark.sql</span>{" "}
                      <span className="text-violet-400">import</span>{" "}
                      <span className="text-sky-300">SparkSession</span>
                    </div>
                    <div>
                      <span className="text-violet-400">from</span>{" "}
                      <span className="text-sky-300">pyspark.sql.functions</span>{" "}
                      <span className="text-violet-400">import</span>{" "}
                      <span className="text-sky-300">col, window</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sky-300">spark</span>{" "}
                      <span className="text-gray-400">=</span>{" "}
                      <span className="text-sky-300">SparkSession</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">builder</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">appName</span>
                      <span className="text-gray-300">(</span>
                      <span className="text-amber-300">"OrdersETL"</span>
                      <span className="text-gray-300">)</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">getOrCreate</span>
                      <span className="text-gray-300">()</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-sky-300">df</span>{" "}
                      <span className="text-gray-400">=</span>{" "}
                      <span className="text-sky-300">spark</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">read</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">parquet</span>
                      <span className="text-gray-300">(</span>
                      <span className="text-amber-300">"s3://dw/orders/"</span>
                      <span className="text-gray-300">)</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sky-300">result</span>{" "}
                      <span className="text-gray-400">=</span>{" "}
                      <span className="text-sky-300">df</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">groupBy</span>
                      <span className="text-gray-300">(</span>
                      <span className="text-amber-300">"city"</span>
                      <span className="text-gray-300">)</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">agg</span>
                      <span className="text-gray-300">({"{"}sum(</span>
                      <span className="text-amber-300">"revenue"</span>
                      <span className="text-gray-300">){"}"})</span>
                    </div>
                    <div className="mt-1">
                      <span className="text-sky-300">result</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">write</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">mode</span>
                      <span className="text-gray-300">(</span>
                      <span className="text-amber-300">"overwrite"</span>
                      <span className="text-gray-300">)</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-gray-300">.</span>
                      <span className="text-emerald-400">saveAsTable</span>
                      <span className="text-gray-300">(</span>
                      <span className="text-amber-300">"gold.city_revenue"</span>
                      <span className="text-gray-300">)</span>
                      <span className="inline-block w-2 h-5 bg-sky-400 ml-0.5 animate-pulse align-middle" />
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-[#161b22] border border-emerald-500/30 rounded-xl px-3 py-2 shadow-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-semibold">Pipeline Running</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-[#161b22] border border-sky-500/30 rounded-xl px-3 py-2 shadow-xl"
                >
                  <span className="text-sky-400 text-xs font-semibold">2.4B rows processed ⚡</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-16 border-y border-white/5 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Courses ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <SectionHeading eyebrow="Courses" title="10 courses across the " highlight="full data stack" centered={false} />
              <Link to="/courses" className="flex-shrink-0 flex items-center gap-2 text-sky-400 text-sm font-semibold hover:gap-3 transition-all duration-200">
                View all courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Latest Sessions ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
              <SectionHeading eyebrow="Sessions" title="Latest " highlight="pipeline sessions" centered={false} />
              <Link to="/sessions" className="flex-shrink-0 flex items-center gap-2 text-sky-400 text-sm font-semibold hover:gap-3 transition-all duration-200">
                All sessions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {latestSessions.map((session, i) => (
                <SessionCard key={session.id} session={session} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Why DataForge"
              title="Not just another "
              highlight="data course"
              description="We're obsessed with production depth, real pipeline experience, and your career outcomes — not just certificates."
              className="mb-14"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="group bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                >
                  <div className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Testimonials"
              title="Data engineers "
              highlight="who shipped pipelines"
              description="Real outcomes from students who built production data systems with us."
              className="mb-14"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={t} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing Preview ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Pricing"
              title="Simple, transparent "
              highlight="pricing"
              description="Invest in your career. Choose the plan that matches your goals."
              className="mb-14"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {pricingPlans.map((plan, i) => (
                <PricingCard key={plan.id} plan={plan} index={i} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/pricing" className="text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors inline-flex items-center gap-1.5">
                Compare plans in detail
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── FAQ Preview ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="FAQ"
              title="Common "
              highlight="questions"
              description="Everything you need to know before enrolling."
              className="mb-14"
            />
            <FAQAccordion faqs={previewFAQs} />
            <div className="text-center mt-10">
              <Link to="/faq" className="text-sky-400 text-sm font-semibold hover:text-sky-300 transition-colors inline-flex items-center gap-1.5">
                View all FAQs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Ready to build data pipelines that matter?"
          description="Join the next cohort and start building production-grade ETL systems, streaming pipelines, and cloud data warehouses with engineers who've done it at petabyte scale."
          primaryCTA={{ label: "Join Next Cohort", href: "/pricing" }}
          secondaryCTA={{ label: "Watch a Free Session", href: "/sessions" }}
        />
      </main>
      <Footer />
    </>
  );
}
