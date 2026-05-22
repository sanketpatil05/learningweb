import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FAQ } from "~/data/faqs";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openId === faq.id;
        return (
          <motion.div
            key={faq.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-sky-500/30 bg-[#161b22]"
                : "border-white/5 bg-[#161b22] hover:border-white/10"
            }`}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-white" : "text-gray-200"}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                  isOpen ? "bg-sky-500/20 text-sky-400" : "bg-white/5 text-gray-400"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </motion.div>
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
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
