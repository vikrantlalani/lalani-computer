"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Typography } from "./Typography";

export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
              isOpen ? "bg-white border-primary/30 shadow-md" : "bg-warm-bg1 border-primary/10 hover:border-primary/20"
            }`}
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              aria-expanded={isOpen}
            >
              <Typography
                variant="h3"
                className={`text-lg md:text-xl transition-colors ${
                  isOpen ? "text-primary" : "text-text-dark"
                }`}
              >
                {item.question}
              </Typography>
              <div
                className={`flex-shrink-0 ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? "bg-primary/10 text-primary" : "bg-transparent text-text-dark/50"
                }`}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 text-text-dark/80 leading-relaxed text-base md:text-lg">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
