"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  BarChart3, 
  Globe, 
  Cpu, 
  MessageSquare, 
  Zap,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    title: "SEO Optimization",
    desc: "Rank higher on Google with our advanced data-driven SEO techniques.",
    icon: <Search className="w-6 h-6 md:w-8 md:h-8" />,
    accent: "bg-blue-600",
    light: "bg-blue-50",
  },
  {
    title: "Content Marketing",
    desc: "Storytelling that converts. We create content that speaks to your audience.",
    icon: <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />,
    accent: "bg-[#EB433D]",
    light: "bg-red-50",
  },
  {
    title: "Digital Strategy",
    desc: "Custom roadmaps designed to scale your business across all channels.",
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />,
    accent: "bg-purple-600",
    light: "bg-purple-50",
  },
  {
    title: "Data Analytics",
    desc: "Real-time insights and performance tracking to maximize your ROI.",
    icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" />,
    accent: "bg-emerald-600",
    light: "bg-emerald-50",
  },
  {
    title: "AI Automation",
    desc: "Leverage cutting-edge AI to streamline your marketing workflows.",
    icon: <Cpu className="w-6 h-6 md:w-8 md:h-8" />,
    accent: "bg-indigo-600",
    light: "bg-indigo-50",
  },
  {
    title: "PPC Advertising",
    desc: "Targeted ad campaigns that put your brand in front of the right buyers.",
    icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
    accent: "bg-orange-500",
    light: "bg-orange-50",
  },
];

export default function Services() {
  return (
    <section className="py-10 relative overflow-hidden" id="services">

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-4">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Our <span className="text-[#EB433D]">Services</span>
          </h2>
          <div className="h-1.5 w-16 bg-[#EB433D] mx-auto rounded-full shadow-[0_0_10px_rgba(235,67,61,0.3)]" />
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              {/* Main Card */}
              <div className="relative h-full p-5 md:p-6 rounded-[2.5rem] bg-white border border-slate-200 shadow-[0_4px_20px_-1px_rgba(0,0,0,0.05)] transition-all duration-500 group-hover:border-[#EB433D]/40 group-hover:shadow-[0_30px_60px_-15px_rgba(235,67,61,0.2)] overflow-hidden">
                
                {/* 2. Glassy Background Gradient (Before Hover) */}
                <div className={`absolute top-0 left-0 w-full h-full opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-500 bg-gradient-to-br ${service.accent} to-transparent`} />

                {/* 3. Static Index Number (Low Opacity) */}
                <span className="absolute top-6 right-8 text-6xl font-black text-slate-100 opacity-40 group-hover:opacity-100 group-hover:text-[#EB433D]/5 transition-all duration-500 select-none">
                  0{index + 1}
                </span>

                {/* 4. Styled Icon Container */}
                <div className="relative mb-10 inline-flex">
                  {/* The 'Glow' behind icon before hover */}
                  <div className={`absolute -inset-3 rounded-3xl ${service.light} opacity-60 blur-sm group-hover:opacity-0 transition-opacity`} />
                  
                  {/* The Icon Box */}
                  <div className="relative z-10 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group-hover:bg-[#EB433D] group-hover:rotate-12 group-hover:border-transparent transition-all duration-500">
                    <div className="text-slate-700 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* 5. Text Content */}
                <div className="relative z-10">
                  <h4 className="text-lg md:text-2xl font-black text-slate-900 mb-3 flex items-center justify-between">
                    {service.title}
                    <div className="p-1.5 rounded-full bg-slate-50 group-hover:bg-red-50 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#EB433D] transition-all" />
                    </div>
                  </h4>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium group-hover:text-slate-700 transition-colors">
                    {service.desc}
                  </p>
                </div>

                {/* 6. Glowing Energy Accent (Static + Hover) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-100 overflow-hidden">
                  <div className={`h-full ${service.accent} w-1.5 group-hover:w-full transition-all duration-700 ease-in-out`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}