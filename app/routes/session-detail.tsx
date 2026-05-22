import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Route } from "./+types/session-detail";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import SessionCard from "~/components/SessionCard";
import { sessions } from "~/data/sessions";
import type { Session, Resource } from "~/data/sessions";

export function meta({ data }: Route.MetaArgs) {
  if (!data?.session) return [{ title: "Session Not Found — DataForge" }];
  return [
    { title: `${data.session.title} — DataForge` },
    { name: "description", content: data.session.summary },
    { property: "og:title", content: `${data.session.title} — DataForge` },
    { property: "og:description", content: data.session.summary },
  ];
}

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const session = sessions.find((s) => s.slug === params.sessionSlug);
  if (!session) throw new Response("Not Found", { status: 404 });

  const relatedSessions = sessions
    .filter((s) => s.courseId === session.courseId && s.id !== session.id)
    .slice(0, 3);

  return { session, relatedSessions };
}

const resourceIcons: Record<Resource["type"], { icon: string; label: string; color: string }> = {
  pdf: { icon: "📄", label: "PDF", color: "text-red-400 bg-red-500/10 border-red-500/20" },
  code: { icon: "💻", label: "Code", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  link: { icon: "🔗", label: "Link", color: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
  slides: { icon: "📊", label: "Slides", color: "text-violet-400 bg-violet-500/10 border-violet-500/20" },
};

export default function SessionDetail({ loaderData }: Route.ComponentProps) {
  const { session, relatedSessions } = loaderData as {
    session: Session;
    relatedSessions: Session[];
  };

  const formattedDate = new Date(session.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#030712] pt-16">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="flex items-center gap-2 text-sm text-gray-500 flex-wrap">
            <Link to="/sessions" className="hover:text-sky-400 transition-colors">
              Sessions
            </Link>
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-gray-400 truncate max-w-[120px] sm:max-w-none">
              {session.courseName}
            </span>
            <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white font-medium truncate max-w-[160px] sm:max-w-sm">
              {session.title}
            </span>
          </nav>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* ── Left column: video + details ── */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Video player */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative w-full rounded-2xl overflow-hidden border border-white/8 bg-[#0d1117] shadow-2xl shadow-black/40"
                  style={{ paddingBottom: "56.25%" }}
                >
                  <iframe
                    src={session.videoUrl}
                    title={session.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-presentation allow-popups"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Session title + meta */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-lg bg-sky-500/15 border border-sky-500/25 text-sky-400 text-xs font-semibold">
                    Session #{session.sessionNumber}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs">
                    {session.courseName}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 text-xs">
                    {session.duration}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-4">
                  {session.title}
                </h1>
                <p className="text-gray-400 text-base leading-relaxed">{session.summary}</p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="flex flex-wrap gap-2"
              >
                {session.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-xl bg-white/5 border border-white/8 text-gray-300 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0d1117] border border-white/5 rounded-2xl p-6"
              >
                <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-sky-400 to-violet-500 inline-block" />
                  About This Session
                </h2>
                <p className="text-gray-400 leading-relaxed">{session.description}</p>
              </motion.div>

              {/* Topics covered */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0d1117] border border-white/5 rounded-2xl p-6"
              >
                <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 rounded-full bg-gradient-to-b from-sky-400 to-violet-500 inline-block" />
                  Topics Covered
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {session.topics.map((topic: string, i: number) => (
                    <motion.li
                      key={topic}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <svg
                        className="w-4 h-4 mt-0.5 text-sky-400 flex-shrink-0"
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
                      {topic}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Resources */}
              {session.resources.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-[#0d1117] border border-white/5 rounded-2xl p-6"
                >
                  <h2 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                    <span className="w-1 h-5 rounded-full bg-gradient-to-b from-sky-400 to-violet-500 inline-block" />
                    Session Resources
                  </h2>
                  <div className="flex flex-col gap-3">
                    {session.resources.map((resource: Resource, i: number) => {
                      const meta = resourceIcons[resource.type];
                      return (
                        <motion.a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.06 }}
                          className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-all duration-200 group"
                        >
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl border flex-shrink-0 ${meta.color}`}
                          >
                            {meta.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm font-semibold group-hover:text-sky-400 transition-colors truncate">
                              {resource.title}
                            </p>
                            <p className="text-gray-500 text-xs capitalize">{meta.label}</p>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-500 group-hover:text-sky-400 transition-colors flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </div>

            {/* ── Right column: instructor card + session info ── */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-6">
                {/* Instructor card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-[#0d1117] border border-white/5 rounded-2xl p-6"
                >
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                    Instructor
                  </p>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={session.instructorAvatar}
                      alt={session.instructor}
                      className="w-14 h-14 rounded-full border-2 border-white/10 bg-[#161b22] flex-shrink-0"
                    />
                    <div>
                      <p className="text-white font-bold text-base">{session.instructor}</p>
                      <p className="text-sky-400 text-xs mt-0.5">{session.courseName}</p>
                    </div>
                  </div>
                  <div className="w-full h-px bg-white/5 mb-4" />
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 text-sky-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{formattedDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 text-violet-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{session.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{session.resources.length} resource{session.resources.length !== 1 ? "s" : ""}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                      <span>{session.topics.length} topics</span>
                    </div>
                  </div>
                </motion.div>

                {/* Back to sessions */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    to="/sessions"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/5 border border-white/8 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                    All Sessions
                  </Link>
                </motion.div>

                {/* Join CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-sky-500/20 rounded-2xl p-6 text-center"
                >
                  <p className="text-white font-bold mb-2">Want live access?</p>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    Join the next cohort for live sessions, 1:1 mentorship, and placement support.
                  </p>
                  <Link
                    to="/pricing"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-500 text-white text-sm font-bold hover:opacity-90 transition-opacity shadow-lg shadow-sky-500/20"
                  >
                    View Plans
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>

          {/* ── Related sessions ── */}
          {relatedSessions.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-6 rounded-full bg-gradient-to-b from-sky-400 to-violet-500" />
                <h2 className="text-2xl font-bold text-white">More from {session.courseName}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedSessions.map((s: Session, i: number) => (
                  <SessionCard key={s.id} session={s} index={i} compact />
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
