import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import type { Route } from "./+types/sessions";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SectionHeading from "~/components/SectionHeading";
import SessionCard from "~/components/SessionCard";
import CTASection from "~/components/CTASection";
import { sessions } from "~/data/sessions";

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Session Archive — DataForge" },
    {
      name: "description",
      content:
        "Browse all DataForge recorded data engineering sessions. Deep-dives on PySpark, Kafka, Airflow, SQL, Delta Lake, ETL pipelines, and cloud data warehousing — available to enrolled students.",
    },
    { name: "keywords", content: "PySpark tutorial, Kafka streaming, Airflow DAG, SQL window functions, data engineering sessions, ETL pipeline recording, Delta Lake tutorial" },
    { property: "og:title", content: "Session Archive — DataForge" },
    {
      property: "og:description",
      content:
        "All recorded data engineering sessions — Airflow ETL, PySpark transformations, SQL window functions, Kafka architecture, and more.",
    },
  ];
}

const SESSIONS_PER_PAGE = 8;

export default function Sessions() {
  const [search, setSearch] = useState("");
  const [activeCourse, setActiveCourse] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Unique course names for filter tabs
  const courseNames = useMemo(() => {
    const names = [...new Set(sessions.map((s) => s.courseName))];
    return names;
  }, []);

  // Filtered sessions
  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return sessions.filter((s) => {
      const matchesCourse =
        activeCourse === "All" || s.courseName === activeCourse;
      const matchesSearch =
        !query ||
        s.title.toLowerCase().includes(query) ||
        s.courseName.toLowerCase().includes(query) ||
        s.tags.some((t) => t.toLowerCase().includes(query)) ||
        s.summary.toLowerCase().includes(query);
      return matchesCourse && matchesSearch;
    });
  }, [search, activeCourse]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / SESSIONS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * SESSIONS_PER_PAGE,
    safePage * SESSIONS_PER_PAGE
  );

  function handleSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function handleCourse(name: string) {
    setActiveCourse(name);
    setCurrentPage(1);
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* ── Page Header ── */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-sky-600/5 rounded-full blur-[120px]" />
            <div className="absolute top-1/3 -right-40 w-[400px] h-[400px] bg-violet-600/5 rounded-full blur-[100px]" />
            <div
              className="absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              {sessions.length} sessions available
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-5xl sm:text-6xl font-bold text-white leading-tight mb-4"
                >
                  Session{" "}
                  <span className="gradient-text">Archive</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-400 text-lg leading-relaxed max-w-2xl"
                >
                  Every live class, recorded and indexed. Deep-dives into Node.js, React, System
                  Design, DevOps, Databases, and Algorithms — all in one place.
                </motion.p>
              </div>

              {/* Search box */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="relative lg:w-80 flex-shrink-0"
              >
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder="Search sessions, topics, tags…"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#161b22] border border-white/8 text-gray-300 text-sm placeholder-gray-600 focus:outline-none focus:border-sky-500/40 focus:ring-1 focus:ring-sky-500/20 transition-all duration-200"
                />
                {search && (
                  <button
                    onClick={() => handleSearch("")}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-300 transition-colors"
                  >
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Filters + Grid ── */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Course filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-2 flex-wrap mb-10"
            >
              <button
                onClick={() => handleCourse("All")}
                className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  activeCourse === "All"
                    ? "bg-sky-500/20 text-sky-400 border-sky-500/40"
                    : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/8 hover:text-gray-300"
                }`}
              >
                All
                <span className="ml-2 text-xs opacity-70">({sessions.length})</span>
              </button>

              {courseNames.map((name) => {
                const count = sessions.filter((s) => s.courseName === name).length;
                // Short label: take up to first 2 words
                const label = name.split(" ").slice(0, 3).join(" ");
                return (
                  <button
                    key={name}
                    onClick={() => handleCourse(name)}
                    className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                      activeCourse === name
                        ? "bg-sky-500/20 text-sky-400 border-sky-500/40"
                        : "bg-white/5 text-gray-400 border-white/5 hover:bg-white/8 hover:text-gray-300"
                    }`}
                  >
                    {label}
                    <span className="ml-2 text-xs opacity-70">({count})</span>
                  </button>
                );
              })}

              <span className="ml-auto text-gray-500 text-sm">
                {filtered.length} {filtered.length === 1 ? "session" : "sessions"}
                {search && (
                  <span className="text-gray-600"> matching "{search}"</span>
                )}
              </span>
            </motion.div>

            {/* Results */}
            {paginated.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {paginated.map((session, i) => (
                    <SessionCard key={session.id} session={session} index={i} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center justify-center gap-2 mt-12"
                  >
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={safePage === 1}
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 text-gray-400 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    >
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                            safePage === page
                              ? "bg-sky-500/20 text-sky-400 border-sky-500/40"
                              : "bg-white/5 text-gray-400 border-white/8 hover:bg-white/10 hover:text-gray-300"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={safePage === totalPages}
                      className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/8 text-gray-400 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
                    >
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>

                    <span className="text-gray-500 text-sm ml-2">
                      Page {safePage} of {totalPages}
                    </span>
                  </motion.div>
                )}
              </>
            ) : (
              /* Empty state */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-28 text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-[#161b22] border border-white/5 flex items-center justify-center text-4xl mb-6">
                  🔍
                </div>
                <h3 className="text-white font-bold text-xl mb-2">No sessions found</h3>
                <p className="text-gray-400 text-sm max-w-sm mb-6">
                  No sessions match{" "}
                  {search ? (
                    <>
                      "{search}"
                      {activeCourse !== "All" && ` in ${activeCourse}`}
                    </>
                  ) : (
                    `the selected course filter`
                  )}
                  . Try adjusting your search or filter.
                </p>
                <button
                  onClick={() => {
                    handleSearch("");
                    handleCourse("All");
                  }}
                  className="px-5 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold hover:bg-sky-500/15 transition-all duration-200"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* ── Stats band ── */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1117] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {[
                { value: `${sessions.length}`, label: "Total Sessions" },
                { value: "16h+", label: "Total Runtime" },
                { value: "3", label: "Expert Instructors" },
                { value: "6", label: "Courses Covered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-gray-500 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What to expect ── */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <SectionHeading
              eyebrow="About Sessions"
              title="What each session "
              highlight="includes"
              description="Sessions are live class recordings, not edited tutorials. You get the real experience."
              className="mb-12"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: "🎥",
                  title: "Full Recording",
                  description:
                    "Complete class recording uploaded within 2 hours of the live session ending.",
                  color: "from-sky-500 to-blue-600",
                },
                {
                  icon: "💻",
                  title: "Code & Slides",
                  description:
                    "Every session includes downloadable code examples, slides, and reference links.",
                  color: "from-violet-500 to-purple-600",
                },
                {
                  icon: "🗂️",
                  title: "Topic Index",
                  description:
                    "Each session has a timestamped topic list so you can jump to what matters most.",
                  color: "from-emerald-500 to-teal-600",
                },
                {
                  icon: "❓",
                  title: "Live Q&A",
                  description:
                    "Sessions include the live Q&A segment — real questions from students, answered in depth.",
                  color: "from-amber-500 to-orange-600",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
                >
                  <div
                    className={`inline-flex w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} items-center justify-center text-2xl mb-4`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <CTASection
          title="Want access to all data engineering sessions?"
          description="Enrol in any plan to get lifetime access to every recorded pipeline session, Spark notebooks, Airflow DAGs, and upcoming live classes."
          primaryCTA={{ label: "View Pricing", href: "/pricing" }}
          secondaryCTA={{ label: "Browse Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
