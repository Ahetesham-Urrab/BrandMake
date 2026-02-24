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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Exact Header Style with Gradient Underline */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            What Makes{" "}
            <span className="text-red-600">
              {" "}
              Brand Make the Right Growth Partner
            </span>
          </h2>
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Desktop: 3 columns (2 rows) 
            Mobile: 2 columns (3 rows) 
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                relative p-6 md:p-6 rounded-[1.5rem] md:rounded-[2.5rem] border flex flex-col items-center text-center justify-center min-h-[180px] md:min-h-[280px] transition-all duration-300
               ${
                 item.red
                   ? "bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-xl"
                   : "bg-white border-slate-200 text-[#EB433D] shadow-lg shadow-slate-100"
               }
              `}
            >
              {/* Icon Container with Specific Image Border Box */}
              <div
                className={`
                p-3 md:p-4 rounded-2xl border-2 mb-4
                ${item.red ? "border-white/40 text-white" : "border-[#EB433D]/20 text-[#EB433D]"}
              `}
              >
                {item.icon}
              </div>

              {/* Headings used as Titles */}
              <h4
                className={`text-xs md:text-lg font-black leading-tight uppercase tracking-tight max-w-[220px] 
                ${item.red ? "text-white" : "text-[#EB433D]"}`}
              >
                {item.title}
              </h4>

              {/* Arrow Connection (Image 1 logic) */}
              <div
                className={`
                absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rotate-45 border-t-[6px] border-r-[6px] z-10 hidden md:block
                ${item.red ? "border-white/10" : "border-slate-50"}
              `}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
