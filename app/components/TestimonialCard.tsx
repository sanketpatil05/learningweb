import { motion } from "framer-motion";
import type { Testimonial } from "~/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative bg-[#161b22] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300"
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 text-sm leading-relaxed mb-5">
        "{testimonial.content}"
      </blockquote>

      {/* Outcome badge */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-5">
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
        {testimonial.outcome}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full bg-[#21262d]"
        />
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.role} · {testimonial.company}</div>
        </div>
        <div className="ml-auto text-xs text-gray-500 text-right">
          {testimonial.course}
        </div>
      </div>
    </motion.div>
  );
}
