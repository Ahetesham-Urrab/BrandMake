"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Activity,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <section
      className="py-16 md:py-8 relative overflow-hidden bg-[#FDFEFF]"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="flex flex-col space-y-10">
            {/* ---------- TITLE (mobile first) ---------- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-8 bg-[#EB433D]" />
                <span className="text-[#EB433D] font-black tracking-[0.3em] uppercase text-xs">
                  About Brand Make
                </span>
              </div>

              <p className="text-slate-800 text-xl md:text-2xl font-bold leading-tight max-w-xl border-l-4 border-[#EB433D] pl-6 py-1">
                Brand Make is a specialized healthcare performance marketing
                agency focused on helping clinics and hospitals grow in a
                rapidly evolving digital landscape.
              </p>
            </motion.div>

            {/* ---------- IMAGE (mobile 2nd) ---------- */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 lg:hidden relative"
            >
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" />

              <div className="relative z-10 rounded-[2.5rem] overflow-hidden border-[8px] border-white shadow-2xl group">
                <img
                  src="/team_strategy.avif"
                  alt="Healthcare Marketing Strategy"
                  className="w-full h-[360px] object-cover"
                />

                {/* Overlay Card (mobile) */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-[#EB433D] font-black text-xl">10X</p>
                      <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest">
                        ROI
                      </p>
                    </div>
                    <div className="border-x border-slate-100">
                      <p className="text-slate-900 font-black text-xl">
                        1 Lac+
                      </p>
                      <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest">
                        Lead Generated
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-900 font-black text-xl">100+</p>
                      <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                </div>

                {/* Badge (mobile) */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-3xl z-20 flex flex-col items-center justify-center shadow-2xl rotate-[-10deg] transition-transform duration-500">
                  <TrendingUp className="w-6 h-6 text-[#EB433D] mb-1" />
                  <p className="text-[#EB433D] font-black text-lg leading-none">
                    #1
                  </p>
                  <p className="text-[8px] font-black uppercase text-slate-400 mt-1">
                    Agency
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ---------- CONTENT (mobile 3rd) ---------- */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-3 space-y-8"
            >
              <p className="text-slate-500 text-lg leading-relaxed max-w-lg pl-7 italic font-medium">
                Today, patients don’t just look for treatment — they look for
                trust, credibility, and confidence before choosing a clinic.
              </p>

              {/* List */}
              <div className="bg-slate-50/50 rounded-3xl p-8 border border-slate-100 space-y-5">
                <p className="font-black text-slate-900 uppercase tracking-widest text-xs">
                  We help healthcare providers:
                </p>
                <ul className="space-y-4">
                  {[
                    "Present their expertise with clarity and credibility",
                    "Reach patients actively searching for treatment",
                    "Align marketing with platform policies and algorithms",
                    "Build measurable, long-term growth systems",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#EB433D] mt-0.5 shrink-0" />
                      <span className="text-slate-600 font-semibold text-sm md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE (desktop only, untouched) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block relative lg:pt-10"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" />

            <div className="relative z-10 rounded-[4rem] overflow-hidden border-[16px] border-white shadow-2xl group">
              <img
                src="/team_strategy.avif"
                alt="Healthcare Marketing Strategy"
                className="w-full h-[460px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay Card (desktop) */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-[#EB433D] font-black text-2xl">10X</p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest">
                      ROI
                    </p>
                  </div>
                  <div className="border-x border-slate-100">
                    <p className="text-slate-900 font-black text-2xl">1 Lac+</p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest">
                      Lead Generated
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-900 font-black text-2xl">100+</p>
                    <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge (desktop) */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-white rounded-3xl z-20 flex flex-col items-center justify-center shadow-2xl border border-slate-50 rotate-[-10deg] group hover:rotate-0 transition-transform duration-500">
                <TrendingUp className="w-6 h-6 text-[#EB433D] mb-1" />
                <p className="text-[#EB433D] font-black text-lg leading-none">
                  #1
                </p>
                <p className="text-[8px] font-black uppercase text-slate-400 mt-1">
                  Agency
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 mt-8 md:mt-10 text-center relative z-10">
          <div className="inline-block bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white shadow-xl px-6 md:px-14 py-4 md:py-7 rounded-2xl text-base md:text-2xl font-extrabold tracking-tight transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(235,67,61,0.45)]">
            Patient Trust + Strategic Positioning + Algorithm Alignment = Sustainable Growth
          </div>
        </div>
      </motion.div>
    </section>
  );
}
