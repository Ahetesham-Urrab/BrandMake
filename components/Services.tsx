"use client";

import { motion } from "framer-motion";
import {
  Search,
  Target,
  Users,
  TrendingUp,
  BarChart3,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Limited or poor online visibility",
    icon: <Search />,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "Weak market positioning",
    icon: <Target />,
    gradient: "from-red-400 to-red-600",
  },
  {
    title: "Low-quality or unqualified leads",
    icon: <Users />,
    gradient: "from-purple-400 to-purple-600",
  },
  {
    title: "Inconsistent patient flow",
    icon: <TrendingUp />,
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    title: "No clear tracking of marketing ROI",
    icon: <BarChart3 />,
    gradient: "from-indigo-400 to-indigo-600",
  },
  {
    title: "No Credibility and Growth",
    icon: <ShieldCheck />,
    gradient: "from-orange-400 to-orange-600",
  },
];

export default function Services() {
  return (
    <section className="py-10 relative overflow-hidden bg-[#FDFEFF]" id="services">
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Most Clinic/Hospital{" "}
            <span className="text-red-600">Face Challenges one of Below</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#EB433D] mx-auto rounded-full shadow-[0_0_10px_rgba(235,67,61,0.3)]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: 0 }}
              className="group relative h-full md:hover:-translate-y-2 transition-transform"
            >
              {/* Card */}
              <div className="relative h-full p-4 md:p-6 rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_4px_20px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-[#EB433D]/40 group-hover:shadow-[0_30px_60px_-15px_rgba(235,67,61,0.2)] overflow-hidden">

                {/* Index (desktop only) */}
                <span className="hidden md:block absolute top-6 right-8 text-6xl font-black text-slate-100 opacity-40 group-hover:text-[#EB433D]/5 transition-all duration-500 select-none">
                  0{index + 1}
                </span>

                {/* ✅ Gradient Icon */}
                <div className="relative mb-8 inline-flex group">
                  {/* Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
                  />

                  {/* Gradient Box */}
                  <div
                    className={`relative z-10 p-3 md:p-4 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl transition-all duration-500 group-hover:rotate-12`}
                  >
                    {/* White inner plate */}
                    <div className="w-9 h-9 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                      {service.icon &&
                        (service.icon as any).type && (
                          <service.icon.type
                            className="w-5 h-5 md:w-7 md:h-7 text-slate-900"
                          />
                        )}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="relative z-10">
                  <h4 className="text-lg md:text-2xl font-black text-slate-900 mb-3 flex items-center justify-between">
                    {service.title}
                    <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-red-50 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#EB433D]" />
                    </div>
                  </h4>
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#fe4d46] to-[#bc2928] w-1.5 group-hover:w-full transition-all duration-700 ease-in-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-10 text-center relative z-10">
        <div className="inline-block bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-xl px-6 md:px-14 py-4 md:py-7 rounded-2xl text-base md:text-2xl font-extrabold tracking-tight transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(235,67,61,0.45)]">
          If you relate to these — your marketing needs structure, not just promotion.
        </div>
      </div>
    </section>
  );
}