"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Activity,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const brandPoints = [
  {
    title: "Patient Trust",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Strategic Positioning",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Algorithm Alignment",
    icon: <Activity className="w-5 h-5" />,
  },
];

export default function About() {
  return (
    <section
      className="py-20 md:py-18 relative overflow-hidden bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Overline Label */}
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#EB433D]" />
                <span className="text-[#EB433D] font-black tracking-[0.3em] uppercase text-xs">
                  About Brand Make
                </span>
              </div>

              {/* Main Content Block */}
              <div className="space-y-6">
                <p className="text-slate-800 text-xl md:text-2xl font-bold leading-tight max-w-xl border-l-4 border-[#EB433D] pl-6 py-1">
                  Brand Make is a specialized healthcare performance marketing
                  agency focused on helping clinics and hospitals grow in a
                  rapidly evolving digital landscape.{" "}
                </p>
                <p className="text-slate-500 text-lg leading-relaxed max-w-lg pl-7 italic font-medium">
                  Today, patients don’t just look for treatment — they look for
                  trust, credibility, and confidence before choosing a clinic.
                </p>
              </div>

              {/* Styled List Section */}
              <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 space-y-5">
                <p className="font-black text-slate-900 uppercase tracking-widest text-xs">
                  We help healthcare providers:
                </p>
                <ul className="space-y-4">
                  {[
                    " Present their expertise with clarity and credibility",
                    " Reach patients actively searching for treatment",
                    "Align marketing with platform policies and algorithms",
                    " Build measurable, long-term growth systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-[#EB433D] mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-slate-600 font-semibold text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brand Points Grid */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {brandPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-100 bg-white transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-red-500/5 hover:border-red-100"
                  >
                    <div className="w-10 h-10 rounded-xl  flex items-center justify-center text-slate-400 bg-[#EB433D] text-white transition-all duration-500">
                      {point.icon}
                    </div>
                    <span className="font-bold text-slate-900 text-[11px] text-center uppercase tracking-tighter">
                      {point.title}
                    </span>
                  </motion.div>
                ))}
              </div> */}
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative lg:pt-10"
          >
            {/* Soft background glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" />

            <div className="relative z-10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[8px] md:border-[16px] border-white shadow-2xl transition-all duration-700 hover:shadow-red-500/10 group">
              <img
                src="/team_strategy.avif"
                alt="Healthcare Marketing Strategy"
                className="w-full h-[500px] md:h-[460px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Floating Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-[#EB433D] font-black text-xl md:text-2xl">
                      ROI
                    </p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mt-1">
                      Focused
                    </p>
                  </div>
                  <div className="flex justify-center border-x border-slate-100">
                    <div className="text-center">
                      <p className="text-slate-900 font-black text-xl md:text-2xl">
                        100%
                      </p>
                      <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mt-1">
                        Trust
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-900 font-black text-xl md:text-2xl">
                      Scalable
                    </p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mt-1">
                      Growth
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-3xl z-20 flex flex-col items-center justify-center shadow-2xl border border-slate-50 rotate-[-10deg] group hover:rotate-0 transition-transform duration-500">
              <TrendingUp className="w-6 h-6 text-[#EB433D] mb-1" />
              <p className="text-[#EB433D] font-black text-lg leading-none">
                #1
              </p>
              <p className="text-[8px] font-black uppercase text-slate-400 mt-1">
                Agency
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        whileHover={{ y: -10 }}
        className="group relative h-full"
      >
        <div className="max-w-7xl mx-auto px-4 mt-10 text-center relative z-10">
          <div
            className="
      inline-block
      bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-xl
      text-white
      px-8 md:px-14
      py-5 md:py-7
      rounded-2xl
      text-lg md:text-2xl
      font-extrabold
      tracking-tight
      cursor-pointer
      transition-all
      duration-300
      ease-out

      hover:-translate-y-1
      hover:scale-[1.03]
      hover:shadow-[0_20px_50px_rgba(235,67,61,0.45)]
    "
          >
            Patient Trust + Strategic Positioning + Algorithm Alignment =
            Sustainable Growth
          </div>
        </div>
      </motion.div>
    </section>
  );
}
