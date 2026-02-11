"use client";

import { motion } from "framer-motion";
import { Target, Leaf, LineChart, TrendingUp } from "lucide-react";

const brandPoints = [
  {
    title: "Strategical",
    desc: "Bespoke roadmaps tailored to your unique market position and competitor landscape.",
    icon: <Target className="w-5 h-5" />,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Trackable",
    desc: "Every click and conversion is monitored in real-time with pixel-perfect precision.",
    icon: <LineChart className="w-5 h-5" />,
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    title: "Sustainable",
    desc: "Long-term growth strategies that build lasting authority, not just quick spikes.",
    icon: <Leaf className="w-5 h-5" />,
    gradient: "from-orange-500 to-[#EB433D]",
  },
];

export default function About() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent leading-tight mb-6">
                Redefining the Digital Standard
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                We don't believe in "one size fits all." Our agency was built on the principle that digital marketing should be as unique as the brands we represent.
              </p>
            </motion.div>

            {/* Brand Points Vertical Stack */}
            <div className="space-y-4">
              {brandPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative p-6 rounded-2xl border border-slate-100 bg-white hover:border-[#EB433D]/20 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 cursor-default"
                >
                  <div className="flex gap-5 items-start">
                    {/* Icon with Dynamic Gradient Glow */}
                    <div className="relative shrink-0 mt-1">
                      <div className={`absolute inset-0 blur-lg opacity-20 group-hover:opacity-40 transition-opacity bg-gradient-to-br ${point.gradient}`} />
                      <div className="relative z-10 w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-700 group-hover:bg-[#EB433D] group-hover:text-white transition-all duration-300">
                        {point.icon}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#EB433D] transition-colors mb-1">
                        {point.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                        {point.desc}
                      </p>
                    </div>
                  </div>

                  {/* Micro-Interaction Bar */}
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-slate-50 overflow-hidden rounded-full">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${point.gradient}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Column - The "Modern Frame" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Decorative Shapes */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-50 rounded-full blur-3xl opacity-60" />
            
            {/* The Image Container */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 group">
              <img 
                src="/team_strategy.avif" 
                alt="Our Team Strategy"
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Floating Overlay Card */}
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#EB433D] font-black text-2xl">100%</p>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-tighter">Growth Transparency</p>
                  </div>
                  <div className="h-10 w-[1px] bg-slate-200" />
                  <div className="text-right">
                    <p className="text-slate-900 font-black text-2xl">24/7</p>
                    <p className="text-slate-600 text-xs font-bold uppercase tracking-tighter">Strategic Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geometry accents */}
            <div className="absolute top-1/4 -right-4 w-12 h-12 bg-[#EB433D] rounded-xl rotate-12 z-20 flex items-center justify-center text-white shadow-lg shadow-red-500/40">
              <TrendingUp className="w-6 h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}