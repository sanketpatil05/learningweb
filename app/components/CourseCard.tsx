import { Link } from "react-router";
import { motion } from "framer-motion";
import type { Course } from "~/data/courses";

interface CourseCardProps {
  course: Course;
  index?: number;
}

const levelColors = {
  Beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Advanced: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function CourseCard({ course, index = 0 }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative bg-[#161b22] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] via-transparent to-transparent" />
        {/* Icon overlay */}
        <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center text-xl shadow-lg`}>
          {course.icon}
        </div>
        {course.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Level + Duration */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium border ${levelColors[course.level]}`}>
            {course.level}
          </span>
          <span className="text-gray-500 text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
        </div>

        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors leading-tight">
          {course.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-xs border border-white/5"
            >
              {tech}
            </span>
          ))}
          {course.technologies.length > 4 && (
            <span className="px-2 py-0.5 rounded-md bg-white/5 text-gray-500 text-xs">
              +{course.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Rating + Students */}
        <div className="flex items-center gap-3 mb-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-white font-medium">{course.rating}</span>
            ({course.reviewCount})
          </span>
          <span>•</span>
          <span>{course.studentsEnrolled.toLocaleString()} students</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div>
            <span className="text-white font-bold text-xl">₹{course.price.toLocaleString()}</span>
            {course.originalPrice && (
              <span className="text-gray-500 text-sm line-through ml-2">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <Link
            to={`/courses/${course.slug}`}
            className="px-4 py-2 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold hover:bg-sky-500/20 transition-all duration-200 group-hover:border-sky-500/40"
          >
            View Course
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
