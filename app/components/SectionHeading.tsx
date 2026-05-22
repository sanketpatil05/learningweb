import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  const fullTitle = highlight
    ? title.replace(highlight, `__HIGHLIGHT__`)
    : title;
  const parts = fullTitle.split("__HIGHLIGHT__");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
          <span className="text-sky-400 text-sm font-semibold uppercase tracking-widest">
            {eyebrow}
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {parts[0]}
        {highlight && <span className="gradient-text">{highlight}</span>}
        {parts[1]}
      </h2>
      {description && (
        <p className={`mt-4 text-gray-400 text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
