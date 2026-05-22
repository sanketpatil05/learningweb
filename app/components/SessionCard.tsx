import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Session } from "~/data/sessions";

interface SessionCardProps {
  session: Session;
  index?: number;
  compact?: boolean;
}

export default function SessionCard({ session, index = 0, compact = false }: SessionCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden" style={{ height: compact ? "160px" : "200px" }}>
        <img
          src={session.thumbnail}
          alt={session.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22]/80 via-transparent to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
          {session.duration}
        </div>

        {/* Session number */}
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-medium">
          Session #{session.sessionNumber}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Course name */}
        <p className="text-sky-400 text-xs font-semibold mb-2 truncate">{session.courseName}</p>

        <h3 className="text-white font-bold text-base mb-2 group-hover:text-sky-400 transition-colors leading-tight line-clamp-2">
          {session.title}
        </h3>

        {!compact && (
          <p className="text-gray-400 text-sm line-clamp-2 mb-3 leading-relaxed">
            {session.summary}
          </p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {session.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-xs border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Instructor + Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={session.instructorAvatar}
              alt={session.instructor}
              className="w-6 h-6 rounded-full bg-[#21262d]"
            />
            <span className="text-gray-400 text-xs">{session.instructor}</span>
          </div>
          <span className="text-gray-500 text-xs">
            {new Date(session.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Watch CTA */}
        <Link
          to={`/sessions/${session.slug}`}
          className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold hover:bg-sky-500/15 transition-all duration-200 group-hover:border-sky-500/40"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Watch Session
        </Link>
      </div>
    </motion.article>
  );
}
