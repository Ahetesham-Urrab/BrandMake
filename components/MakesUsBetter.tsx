"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  BrainCircuit,
  BarChart3,
  UserCheck,
  Filter,
  SearchIcon,
} from "lucide-react";

const partners = [
  {
    title: "Specialized focus on healthcare marketing",
    icon: <Stethoscope className="w-8 h-8 md:w-8 md:h-8" />,
    red: true,
  },
  {
    title: "Deep understanding of patient decision behaviour",
    icon: <BrainCircuit className="w-8 h-8 md:w-8 md:h-8" />,
    red: false,
  },
  {
    title: "Data-driven campaign management",
    icon: <BarChart3 className="w-8 h-8 md:w-8 md:h-8" />,
    red: true,
  },
  {
    title: "Emphasis on lead quality, not quantity",
    icon: <UserCheck className="w-8 h-8 md:w-8 md:h-8" />,
    red: false,
  },
  {
    title: "Full-funnel tracking and optimization",
    icon: <Filter className="w-8 h-8 md:w-8 md:h-8" />,
    red: true,
  },
  {
    title: "Transparent reporting and performance insights",
    icon: <SearchIcon className="w-8 h-8 md:w-8 md:h-8" />,
    red: false,
  },
];

export default function HealthcareGrowthGrid() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            What Makes{" "}
            <span className="text-red-600">
              Brand Make the Right Growth Partner
            </span>
          </h2>
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative
                p-4 md:p-5
                rounded-[1.25rem] md:rounded-[2rem]
                border
                flex flex-col items-center text-center justify-center
                min-h-[140px] md:min-h-[220px]
                transition-all duration-300
                ${
                  item.red
                    ? "bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-xl"
                    : "bg-white border-slate-200 text-[#EB433D] shadow-lg shadow-slate-100"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`
                  p-2 md:p-3
                  rounded-2xl
                  border-2
                  mb-3
                  ${
                    item.red
                      ? "border-white/40 text-white"
                      : "border-[#EB433D]/20 text-[#EB433D]"
                  }
                `}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h4
                className={`
                  text-[11px] md:text-xl
                  font-black
                  leading-tight
                  capitalize
                  tracking-tight
                  max-w-[300px]
                  ${item.red ? "text-white" : "text-[#EB433D]"}
                `}
              >
                {item.title}
              </h4>

              {/* Arrow */}
              {/* <div
                className={`
                  absolute top-1/2 -right-4 -translate-y-1/2
                  w-8 h-8 rotate-45
                  border-t-[6px] border-r-[6px]
                  z-10 hidden md:block
                  ${item.red ? "border-white/10" : "border-slate-50"}
                `}
              /> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}