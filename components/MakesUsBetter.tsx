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
    icon: <Stethoscope className="w-7 h-7" />,
    red: true,
  },
  {
    title: "Deep understanding of patient decision behaviour",
    icon: <BrainCircuit className="w-7 h-7" />,
    red: false,
  },
  {
    title: "Data-driven campaign management",
    icon: <BarChart3 className="w-7 h-7" />,
    red: true,
  },
  {
    title: "Emphasis on lead quality, not quantity",
    icon: <UserCheck className="w-7 h-7" />,
    red: false,
  },
  {
    title: "Full-funnel tracking and optimization",
    icon: <Filter className="w-7 h-7" />,
    red: true,
  },
  {
    title: "Transparent reporting and performance insights",
    icon: <SearchIcon className="w-7 h-7" />,
    red: false,
  },
];

export default function HealthcareGrowthGrid() {
  return (
    <section className="py-10 bg-[#FDFEFF]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header (shared) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            What Makes{" "}
            <span className="text-red-600">
              Brand Make the Right Growth Partner
            </span>
          </h2>
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* ================= DESKTOP GRID (UNCHANGED STRUCTURE) ================= */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {partners.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`
                group
                p-5 rounded-[2rem] border
                flex flex-col items-center text-center justify-center
                min-h-[220px]
                transition-all duration-300
                ${
                  item.red
                    ? "bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-xl"
                    : "bg-white border-slate-200 text-[#EB433D] shadow-lg shadow-slate-100"
                }
                hover:shadow-[0_20px_50px_rgba(235,67,61,0.35)]
              `}
            >
              {/* Icon */}
              <div
                className={`
                  p-3 rounded-2xl border-2 mb-4
                  transition-transform duration-300
                  group-hover:scale-110
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
                className={`text-xl font-black leading-tight ${
                  item.red ? "text-white" : "text-[#EB433D]"
                }`}
              >
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>

        {/* ================= MOBILE ZIG-ZAG GRID ================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {partners.map((item, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;
            const isRed = (row + col) % 2 === 0; // zig-zag

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className={`
                  group
                  p-4 rounded-2xl border
                  flex flex-col items-center text-center justify-center
                  min-h-[140px]
                  transition-all duration-300
                  ${
                    isRed
                      ? "bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-lg"
                      : "bg-white border-slate-200 text-[#EB433D] shadow-md"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className={`
                    p-2 rounded-xl border mb-3
                    transition-transform duration-300
                    group-hover:scale-105
                    ${
                      isRed
                        ? "border-white/40 text-white"
                        : "border-[#EB433D]/20 text-[#EB433D]"
                    }
                  `}
                >
                  {item.icon}
                </div>

                {/* Title */}
                <h4
                  className={`text-[11px] font-black leading-tight ${
                    isRed ? "text-white" : "text-[#EB433D]"
                  }`}
                >
                  {item.title}
                </h4>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}