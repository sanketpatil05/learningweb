import { Link } from "react-router";
import { motion } from "framer-motion";
import type { PricingPlan } from "~/data/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  index?: number;
}

export default function PricingCard({ plan, index = 0 }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden flex flex-col ${
        plan.highlighted
          ? "ring-2 ring-sky-500/50 shadow-2xl shadow-sky-500/10 scale-105"
          : "border border-white/5"
      }`}
    >
      {/* Highlighted gradient bg */}
      {plan.highlighted && (
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-violet-500/5 pointer-events-none" />
      )}

      <div className={`relative p-8 flex flex-col h-full ${plan.highlighted ? "bg-[#161b22]" : "bg-[#161b22]"}`}>
        {/* Badge */}
        {plan.badge && (
          <div className={`inline-flex self-start mb-4 px-3 py-1 rounded-full text-xs font-bold ${
            plan.highlighted
              ? "bg-sky-500/20 text-sky-400 border border-sky-500/30"
              : "bg-violet-500/20 text-violet-400 border border-violet-500/30"
          }`}>
            {plan.badge}
          </div>
        )}

        {/* Plan name */}
        <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-6">{plan.tagline}</p>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-end gap-1">
            <span className="text-gray-400 text-lg">₹</span>
            <span className="text-white text-5xl font-bold tracking-tight">
              {plan.monthlyPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-gray-500 text-sm mt-1">{plan.priceNote}</p>
        </div>

        {/* CTA */}
        <Link
          to="/contact"
          className={`w-full py-3 rounded-xl text-sm font-bold text-center transition-all duration-200 mb-8 ${
            plan.highlighted
              ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white hover:opacity-90 shadow-lg shadow-sky-500/25"
              : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
          }`}
        >
          {plan.ctaText}
        </Link>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* Features */}
        <ul className="flex flex-col gap-3 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className={`mt-0.5 w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center ${
                feature.included
                  ? plan.highlighted
                    ? "bg-sky-500/20 text-sky-400"
                    : "bg-emerald-500/15 text-emerald-400"
                  : "bg-white/5 text-gray-600"
              }`}>
                {feature.included ? (
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <span className={`text-sm ${feature.included ? "text-gray-300" : "text-gray-600"}`}>
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
