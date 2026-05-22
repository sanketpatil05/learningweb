import { useState } from "react";
import { useLoaderData, Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import type { Route } from "./+types/course-detail";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SessionCard from "~/components/SessionCard";
import CTASection from "~/components/CTASection";
import { courses } from "~/data/courses";
import { sessions } from "~/data/sessions";

export async function loader({ params }: Route.LoaderArgs) {
  const course = courses.find((c) => c.slug === params.courseSlug);
  if (!course) {
    throw new Response("Course not found", { status: 404 });
  }
  return { course };
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) {
    return [{ title: "Course Not Found — DataForge" }];
  }
  const { course } = data;
  return [
    { title: `${course.title} — DataForge` },
    { name: "description", content: course.shortDescription },
    { property: "og:title", content: `${course.title} — DataForge` },
    { property: "og:description", content: course.shortDescription },
    { property: "og:image", content: course.thumbnail },
  ];
}

const levelColors = {
  Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  Advanced: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function CourseDetail() {
  const { course } = useLoaderData<typeof loader>();
  const [openModule, setOpenModule] = useState<number | null>(0);

  const relatedSessions = sessions.filter((s) => s.courseId === course.id);

  const totalLessons = course.curriculum.reduce(
    (sum, mod) => sum + mod.lessons.length,
    0
  );

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712]">
        {/* ── Hero Banner ── */}
        <section className="relative pt-24 pb-0 overflow-hidden">
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src={course.thumbnail}
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/70 via-[#030712]/85 to-[#030712]" />
          </div>

          {/* Colour glow matching course */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br ${course.color} opacity-[0.06] rounded-full blur-[120px] pointer-events-none`}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Breadcrumb */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-sm text-gray-500 mb-8"
            >
              <Link to="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/courses" className="hover:text-gray-300 transition-colors">
                Courses
              </Link>
              <span>/</span>
              <span className="text-gray-300 truncate">{course.title}</span>
            </motion.nav>

            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
              {/* Left: hero content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-5"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center text-3xl shadow-lg`}
                  >
                    {course.icon}
                  </div>
                  <span
                    className={`px-3 py-1 rounded-lg text-xs font-semibold border ${levelColors[course.level]}`}
                  >
                    {course.level}
                  </span>
                  {course.featured && (
                    <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-sky-500/15 text-sky-400 border border-sky-500/25">
                      Featured
                    </span>
                  )}
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4"
                >
                  {course.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl"
                >
                  {course.shortDescription}
                </motion.p>

                {/* Quick stats row */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-wrap items-center gap-6 text-sm"
                >
                  {/* Rating */}
                  <div className="flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-semibold">{course.rating}</span>
                    <span className="text-gray-500">({course.reviewCount} reviews)</span>
                  </div>
                  {/* Students */}
                  <div className="flex items-center gap-1.5 text-gray-400">
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
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{course.studentsEnrolled.toLocaleString()} students</span>
                  </div>
                  {/* Duration */}
                  <div className="flex items-center gap-1.5 text-gray-400">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{course.duration}</span>
                  </div>
                  {/* Instructor */}
                  <div className="flex items-center gap-2">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full bg-[#21262d]"
                    />
                    <span className="text-gray-300">{course.instructor}</span>
                  </div>
                </motion.div>
              </div>

              {/* Right: thumbnail card — desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-2xl">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="w-16 h-16 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                      <svg
                        className="w-7 h-7 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                    Preview available
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">
              {/* ── Left Column ── */}
              <div className="space-y-12">
                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-4">About this course</h2>
                  <p className="text-gray-400 leading-relaxed text-base">{course.description}</p>
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-white mb-5">Technologies covered</h2>
                  <div className="flex flex-wrap gap-2.5">
                    {course.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-xl bg-[#161b22] border border-white/8 text-gray-300 text-sm font-medium hover:border-sky-500/30 hover:text-sky-300 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Curriculum Accordion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-end justify-between mb-5">
                    <h2 className="text-2xl font-bold text-white">Curriculum</h2>
                    <span className="text-gray-500 text-sm">
                      {course.curriculum.length} modules · {totalLessons} lessons
                    </span>
                  </div>

                  <div className="space-y-2">
                    {course.curriculum.map((mod, i) => {
                      const isOpen = openModule === i;
                      return (
                        <div
                          key={i}
                          className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                            isOpen
                              ? "border-sky-500/25 bg-[#161b22]"
                              : "border-white/5 bg-[#161b22] hover:border-white/10"
                          }`}
                        >
                          <button
                            onClick={() => setOpenModule(isOpen ? null : i)}
                            className="w-full flex items-center justify-between gap-4 p-5 text-left"
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                  isOpen
                                    ? "bg-sky-500/20 text-sky-400"
                                    : "bg-white/5 text-gray-500"
                                }`}
                              >
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span
                                className={`font-semibold text-sm sm:text-base transition-colors ${
                                  isOpen ? "text-white" : "text-gray-200"
                                }`}
                              >
                                {mod.title}
                              </span>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                              <span className="text-gray-500 text-xs hidden sm:block">
                                {mod.lessons.length} lessons
                              </span>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                                  isOpen
                                    ? "bg-sky-500/20 text-sky-400"
                                    : "bg-white/5 text-gray-400"
                                }`}
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
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </motion.div>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                              >
                                <div className="px-5 pb-5">
                                  <div className="w-full h-px bg-white/5 mb-4" />
                                  <ul className="space-y-2.5">
                                    {mod.lessons.map((lesson, j) => (
                                      <li
                                        key={j}
                                        className="flex items-center gap-3 text-gray-400 text-sm"
                                      >
                                        <div className="w-5 h-5 rounded-full bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                                          <svg
                                            className="w-3 h-3 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                          </svg>
                                        </div>
                                        {lesson}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>

              {/* ── Right Sidebar ── */}
              <div className="lg:sticky lg:top-24 space-y-5">
                {/* Price + Enroll Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  className="bg-[#161b22] border border-white/8 rounded-2xl p-6 shadow-2xl"
                >
                  {/* Price */}
                  <div className="mb-5">
                    <div className="flex items-end gap-2 mb-1">
                      <span className="text-white text-4xl font-bold">
                        ₹{course.price.toLocaleString()}
                      </span>
                      {course.originalPrice && (
                        <span className="text-gray-500 text-lg line-through mb-0.5">
                          ₹{course.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    {course.originalPrice && (
                      <span className="text-emerald-400 text-sm font-semibold">
                        {Math.round(
                          ((course.originalPrice - course.price) / course.originalPrice) * 100
                        )}
                        % off — limited time
                      </span>
                    )}
                  </div>

                  {/* Enroll CTA */}
                  <Link
                    to="/pricing"
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white font-bold text-base hover:opacity-90 transition-opacity shadow-xl shadow-sky-500/20 mb-3"
                  >
                    Enroll Now
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
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/8 text-gray-300 text-sm font-semibold hover:bg-white/8 transition-all duration-200">
                    Add to Wishlist
                  </button>

                  <p className="text-center text-gray-500 text-xs mt-3">
                    7-day money-back guarantee
                  </p>

                  {/* Quick stats */}
                  <div className="mt-5 pt-5 border-t border-white/5 space-y-3">
                    {[
                      {
                        icon: "🕐",
                        label: "Duration",
                        value: course.duration,
                      },
                      {
                        icon: "📚",
                        label: "Modules",
                        value: `${course.curriculum.length} modules`,
                      },
                      {
                        icon: "🎯",
                        label: "Lessons",
                        value: `${totalLessons} lessons`,
                      },
                      {
                        icon: "📊",
                        label: "Level",
                        value: course.level,
                      },
                      {
                        icon: "♾️",
                        label: "Access",
                        value: "Lifetime",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between text-sm"
                      >
                        <span className="text-gray-500 flex items-center gap-1.5">
                          <span>{item.icon}</span>
                          {item.label}
                        </span>
                        <span className="text-gray-300 font-medium">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Instructor Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="bg-[#161b22] border border-white/8 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold text-base mb-4">Your instructor</h3>
                  <div className="flex items-start gap-4">
                    <img
                      src={course.instructorAvatar}
                      alt={course.instructor}
                      className="w-14 h-14 rounded-xl bg-[#21262d] flex-shrink-0"
                    />
                    <div>
                      <p className="text-white font-semibold">{course.instructor}</p>
                      <p className="text-gray-400 text-sm mt-0.5">Senior Software Engineer</p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-3.5 h-3.5 text-amber-400 fill-amber-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="text-gray-500 text-xs ml-1">
                          {course.rating} · {course.reviewCount} reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-4 leading-relaxed">
                    Industry practitioner with experience building production systems at scale.
                    Passionate about mentorship and career development.
                  </p>
                </motion.div>

                {/* Share */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="bg-[#161b22] border border-white/8 rounded-2xl p-5"
                >
                  <p className="text-gray-400 text-sm mb-3">Share this course</p>
                  <div className="flex items-center gap-2">
                    {["Twitter", "LinkedIn", "WhatsApp"].map((platform) => (
                      <button
                        key={platform}
                        className="flex-1 py-2 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs font-medium hover:bg-white/10 hover:text-gray-300 transition-all duration-200"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Sessions ── */}
        {relatedSessions.length > 0 && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0d1117]">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">
                      Sessions
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">
                    Related{" "}
                    <span className="gradient-text">recordings</span>
                  </h2>
                </div>
                <Link
                  to="/sessions"
                  className="flex-shrink-0 flex items-center gap-2 text-sky-400 text-sm font-semibold hover:gap-3 transition-all duration-200"
                >
                  All sessions
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSessions.map((session, i) => (
                  <SessionCard key={session.id} session={session} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <CTASection
          title={`Ready to master ${course.title.split(":")[0]}?`}
          description="Enrol today and start building production-level systems with expert mentorship. Limited seats per batch."
          primaryCTA={{ label: "Enroll Now", href: "/pricing" }}
          secondaryCTA={{ label: "Browse All Courses", href: "/courses" }}
        />
      </main>
      <Footer />
    </>
  );
}
