"use client";
import React from "react";
import { motion } from "framer-motion";
import {   SearchCheck,
  ClipboardList,
  Settings,
  Rocket, } from "lucide-react";

const steps = [
  {
    title: "Business Discovery & Market Analysis",
    icon: <SearchCheck />,
    color: "#84cc16",
  },
  {
    title: "Custom Strategy Development",
    icon: <ClipboardList />,
    color: "#1e3a8a",
  },
  {
    title: "Execution & Performance Optimization",
    icon: <Settings />,
    color: "#84cc16",
  },
  {
    title: "Scaling & Automation",
    icon: <Rocket />,
    color: "#1e3a8a",
  },
];

const ModernSnakeFlow = () => {
  return (
    <section className="py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Here's How <span className="text-red-600">Brand Make</span> Delivers End-to-End Growth Support
          </h2>
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Flow Container */}
        <div className="relative min-h-[400px] lg:h-[400px] flex items-center">
          {/* Desktop Snake Path */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg
              viewBox="0 0 1200 400"
              fill="none"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <defs>
                <linearGradient
                  id="pathGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#F1F5F9" />
                  <stop offset="50%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#F1F5F9" />
                </linearGradient>
              </defs>

              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d="M 0,136 C 150,136 150,264 300,264 C 450,264 450,136 600,136 C 750,136 750,264 900,264 C 1050,264 1050,136 1200,136"
                stroke="url(#pathGradient)"
                strokeWidth="40"
                strokeLinecap="round"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M 0,136 C 150,136 150,264 300,264 C 450,264 450,136 600,136 C 750,136 750,264 900,264 C 1050,264 1050,136 1200,136"
                stroke="#ef4444"
                strokeWidth="2"
                strokeDasharray="8 12"
              />
            </svg>
          </div>

          {/* Steps */}
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-12 lg:gap-8 w-full relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className={`flex flex-col items-center text-center ${
                    isEven ? "lg:-translate-y-16" : "lg:translate-y-16"
                  }`}
                >
                  {/* Title (mobile: always below icon, desktop: snake logic) */}
                  <div
                    className={`
                      flex flex-col items-center text-center
                      order-2 mt-4
                      lg:mt-0
                      ${isEven ? "lg:order-1 lg:mb-6" : "lg:order-3 lg:mt-6"}
                    `}
                  >
                    <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight max-w-[360px]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div className="relative group cursor-default order-1 lg:order-2">
                    <div
                      className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundColor: step.color }}
                    />
                    <div
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 relative z-10 transition-all duration-300 group-hover:scale-110"
                      style={{ borderTop: `4px solid ${step.color}` }}
                    >
                      {React.cloneElement(
                        step.icon as React.ReactElement,
                        { size: 28, color: "#000000" } as any,
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernSnakeFlow;
