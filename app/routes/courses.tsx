import { useState } from "react";
import { motion } from "framer-motion";
import type { Route } from "./+types/courses";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import CourseCard from "~/components/CourseCard";
import CTASection from "~/components/CTASection";
import { courses } from "~/data/courses";
import type { Course } from "~/data/courses";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Data Engineering Courses — DataForge" },
    {
      name: "description",
      content:
        "Explore all DataForge courses — Data Engineering Bootcamp, SQL Masterclass, PySpark, Kafka, Airflow, Cloud Data Engineering, and more. Production-level curriculum taught by data engineers from Swiggy, Amazon, and PhonePe.",
    },
    { name: "keywords", content: "data engineering course, SQL training, PySpark course, Apache Spark training, Kafka course, Airflow training, ETL pipeline course, big data bootcamp, cloud data engineering, data warehousing" },
    { property: "og:title", content: "Data Engineering Courses — DataForge" },
    {
      property: "og:description",
      content:
        "10 production-level data engineering courses: SQL, PySpark, Kafka, Airflow, Cloud Data Engineering, ETL Pipelines, and more.",
    },
  ];
}

type Level = "All" | "Beginner" | "Intermediate" | "Advanced";

const levelTabs: Level[] = ["All", "Beginner", "Intermediate", "Advanced"];

const levelColors: Record<Exclude<Level, "All">, string> = {
  Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
};

const stats = [
  { value: "10", label: "Courses" },
  { value: "420+", label: "Total Hours" },
  { value: "8,500+", label: "Students" },
  { value: "4.9/5", label: "Avg Rating" },
];

export default function Courses() {
  const [activeLevel, setActiveLevel] = useState<Level>("All");

  const filtered: Course[] =
    activeLevel === "All"
      ? courses
      : courses.filter((c) => c.level === activeLevel);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* ── Hero ── */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-sky-600/6 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-violet-600/6 rounded-full blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {courses.length} courses available
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6"
            >
              Master the{" "}
              <span className="gradient-text">modern data stack</span>
              <br />
              from first principles.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Every course is built around real production data systems — not toy datasets. Learn
              SQL, PySpark, Kafka, Airflow, and cloud data platforms exactly as used at top data companies.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Filter + Grid ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2 flex-wrap mb-12"
            >
              {levelTabs.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                    activeLevel === level
                      ? level === "All"
                        ? "bg-sky-500/20 text-sky-400 border-sky-500/40"
                        : `${levelColors[level as Exclude<Level, "All">]} `
                      : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/8 hover:text-gray-300"
                  }`}
                >
                  {level}
                  {level !== "All" && (
                    <span className="ml-2 text-xs opacity-70">
                      ({courses.filter((c) => c.level === level).length})
                    </span>
                  )}
                </button>
              ))}

              <span className="ml-auto text-gray-500 text-sm">
                {filtered.length} {filtered.length === 1 ? "course" : "courses"}
              </span>
            </motion.div>

            {/* Course grid */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((course, i) => (
                  <CourseCard key={course.id} course={course} index={i} />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24"
              >
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-white font-bold text-xl mb-2">No courses found</h3>
                <p className="text-gray-400">Try a different filter.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── Learning path callout ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="Learning Path"
              title="Not sure where to "
              highlight="start?"
              description="Follow our recommended data engineering learning path — from SQL foundations to distributed data systems."
              className="mb-12"
            />
            <div className="flex flex-col lg:flex-row items-stretch gap-4">
              {[
                {
                  step: "01",
                  title: "SQL & Analytics Foundations",
                  sub: "Advanced SQL, window functions, data modelling, dbt",
                  color: "from-emerald-500 to-teal-600",
                  icon: "🗄️",
                },
                {
                  step: "02",
                  title: "Python & Linux for Data",
                  sub: "Pandas, NumPy, shell scripting, automation",
                  color: "from-sky-500 to-blue-600",
                  icon: "🐍",
                },
                {
                  step: "03",
                  title: "Batch & Stream Processing",
                  sub: "PySpark, Delta Lake, Kafka, Flink pipelines",
                  color: "from-orange-500 to-amber-500",
                  icon: "⚡",
                },
                {
                  step: "04",
                  title: "Cloud Data Engineering",
                  sub: "Airflow, Snowflake, AWS/GCP/Azure data services",
                  color: "from-violet-500 to-purple-600",
                  icon: "☁️",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex-1 relative bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                >
                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-white/10 z-10" />
                  )}
                  <div className="text-gray-600 text-xs font-bold mb-3">{item.step}</div>
                  <div
                    className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} items-center justify-center text-2xl mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Ready to build production data pipelines?"
          description="Join 8,500+ data engineers who've levelled up their careers with DataForge's industry-focused data engineering curriculum."
          primaryCTA={{ label: "View Pricing", href: "/pricing" }}
          secondaryCTA={{ label: "Watch Free Sessions", href: "/sessions" }}
        />
      </main>
      <Footer />
    </>
  );
}
