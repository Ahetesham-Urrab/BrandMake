"use client";

import React from "react";
import { motion } from "framer-motion";
import { SearchCheck, ClipboardList, Settings, Rocket } from "lucide-react";

const steps = [
  {
    title: "Business Discovery & Market Analysis",
    icon: <SearchCheck />,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "Custom Strategy Development",
    icon: <ClipboardList />,
    gradient: "from-violet-400 to-indigo-600",
  },
  {
    title: "Execution & Performance Optimization",
    icon: <Settings />,
    gradient: "from-emerald-400 to-green-600",
  },
  {
    title: "Scaling & Automation",
    icon: <Rocket />,
    gradient: "from-amber-400 to-orange-600",
  },
];

export default function Process() {
  return (
    <>
      {/* ================= DESKTOP VERSION ================= */}
      <section className="py-8 overflow-hidden bg-[#FDFEFF] hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Here's How <span className="text-red-600">Brand Make</span>{" "}
              Delivers End-to-End Growth Support
            </h2>
            <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
          </div>

          {/* Flow Container */}
          <div className="relative min-h-[400px] h-[400px] flex items-center">
            {/* Snake Path */}
            <div className="absolute inset-0 pointer-events-none">
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
            <div className="grid grid-cols-4 gap-8 w-full relative z-10">
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
                      isEven ? "-translate-y-16" : "translate-y-16"
                    }`}
                  >
                    {/* Title */}
                    <div className={`order-2 mt-4 ${isEven ? "mb-6" : "mt-6"}`}>
                      <h3 className="text-lg md:text-xl font-black text-slate-900 leading-tight max-w-[360px]">
                        {step.title}
                      </h3>
                    </div>

                    {/* Icon */}
                    <div className="relative group order-1">
                      <div
                        className={`absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition bg-gradient-to-br ${step.gradient}`}
                      />
                      <div
                        className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${step.gradient}
                        shadow-xl flex items-center justify-center relative z-10 group-hover:scale-110 transition`}
                      >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-xl flex items-center justify-center shadow-md">
                          {React.cloneElement(step.icon, {
                            size: 26,
                            color: "#000",
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOBILE VERSION ================= */}
      <section className="block lg:hidden py-5 bg-[#FDFEFF]">
        <div className="max-w-md mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Here's How <span className="text-red-600">Brand Make</span>{" "}
              Delivers End-to-End Growth Support
            </h2>
            <div className="h-1 w-12 bg-red-600 mx-auto rounded-full mt-3" />
          </div>

          <div className="relative">
            <div className="absolute left-10 top-0 h-full w-[2px] bg-slate-200" />

            <div className="flex flex-col gap-10">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay: idx * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4 relative ml-3"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient}
      flex items-center justify-center shadow-lg`}
                    >
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                        {React.cloneElement(step.icon, {
                          size: 18,
                          color: "#000",
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <p className="text-base leading-tight font-bold text-slate-900 leading-snug ">
                    {step.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
