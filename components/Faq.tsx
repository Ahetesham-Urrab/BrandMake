"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "Why is our clinic getting enquiries but not actual patients?",
    answer: "Many clinics generate leads, but not all leads are treatment-ready. Without proper targeting, positioning, and lead filtration, sales teams spend time on low-intent enquiries that rarely convert into consultations."
  },
  {
    question: "Why does our clinic struggle with poor-quality leads?",
    answer: "Low-quality leads often come from broad targeting, generic messaging, or lack of pre-qualification. High-intent patient acquisition requires precise targeting and a structured funnel."
  },
  {
    question: "How is Brand Make different from a typical digital marketing agency?",
    answer: "We specialize in healthcare performance marketing. Instead of just running ads, we build end-to-end growth systems — including strategy, positioning, visibility, lead filtration, and performance tracking."
  },
  {
    question: "What kind of results have you delivered for healthcare clients?",
    answer: "Our case studies show improvements in local visibility, lead quality, brand searches, and patient enquiries — leading to measurable business growth for clinics."
  },
  {
    question: "How soon can we expect to see results?",
    answer: "Initial improvements in visibility and lead quality can typically be seen within the first few months, while sustained growth builds over time."
  },
   {
    question: "Do you work with specific specialties only?",
    answer: "We primarily work with healthcare providers, including plastic surgery, dermatology, and multi-specialty clinics."
  },
   {
    question: "What happens after we book a strategy consultation?",
    answer: "We conduct a discovery discussion to understand your clinic, current marketing efforts, challenges, and goals — and determine whether our approach is the right fit."
  }
];

const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation variants for the individual items appearing on scroll
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      variants={itemVariants}
      className="mb-4 overflow-hidden rounded-2xl border border-red-50 bg-white shadow-sm transition-all hover:shadow-md"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-3 text-left md:p-4"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600">
            <HelpCircle size={20} />
          </div>
          <span className="text-lg font-bold text-slate-800 md:text-lg">
            {question}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-slate-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="border-t border-slate-50 p-5 pt-0 text-slate-600 md:p-6 md:pt-0">
              <p className="leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQSection() {
  return (
    <section className="relative overflow-hidden bg-[#FDFEFF] py-10 px-6">
      {/* Abstract Background Decoration */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/5 blur-3xl" />
      <div className="absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 md:text-4xl">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="mt-4 h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* This container handles the stagger effect as you scroll into view */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }} // 0.15s delay between each item
          className="flex flex-col"
        >
          {faqData.map((faq, index) => (
            <FAQItem key={index} index={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}