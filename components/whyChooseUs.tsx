"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Target, BarChart3, Leaf } from 'lucide-react';

const chooseItems = [
  {
    title: 'Strategical',
    desc: 'It helps businesses define goals, allocate resources, differentiate from competitors, and maximize ROI. A strategic approach aligns channels, enables data-driven decisions, and fosters adaptability in the ever-changing digital landscape.',
    icon: <Target size={48} className="text-[#EB433D]" />,
    align: 'left'
  },
  {
    title: 'Trackable',
    desc: 'Digital marketing performance tracking measures effectiveness of efforts, informs decisions. Key metrics include website traffic, conversion rates, social media engagement, ROI. Regular monitoring helps optimize strategies and allocate resources efficiently.',
    icon: <BarChart3 size={48} className="text-[#EB433D]" />,
    align: 'right'
  },
  {
    title: 'Sustainable',
    desc: 'Ensuring business growth sustainability demands strategic planning, adaptive innovation, responsible resource management, and fostering a culture of resilience. It requires aligning short-term gains with long-term objectives to thrive amidst evolving market dynamics.',
    icon: <Leaf size={48} className="text-[#EB433D]" />,
    align: 'left'
  }
];

const WhyChoose = () => {
  return (
    <section id="whychoose" className="relative py-8 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Why <span className="text-red-600 italic">Brand Make?</span>
          </h2>
            <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-[#EB433D] via-[#EB433D]/40 to-transparent">
            {/* Animated Glow on Line */}
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3], boxShadow: ["0 0 0px #EB433D", "0 0 20px #EB433D", "0 0 0px #EB433D"] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-full"
            />
          </div>

          {chooseItems.map((item, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col-reverse items-center mb-6 group ${
                item.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Card Section */}
              <motion.div 
                initial={{ opacity: 0, x: item.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full md:w-1/2 relative z-10 ${
                  item.align === 'left' ? 'md:pr-20 text-center md:text-right' : 'md:pl-20 text-center md:text-left'
                }`}
              >
                <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/50 group-hover:shadow-[#EB433D]/20 transition-all duration-500">
                  <h3 className="text-2xl font-black text-[#EB433D] mb-4 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-[#992A2A] leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Connector Line - Stretches from card to center */}
                <div className={`hidden md:block absolute top-1/2 w-20 h-[2px] bg-gradient-to-r from-[#EB433D] to-transparent transform -translate-y-1/2 z-0
                  ${item.align === 'left' ? 'right-0 rotate-0' : 'left-0 rotate-180'}`} 
                />
              </motion.div>

              {/* Central Connector Dot - FIXED POSITIONING */}
              <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-[#EB433D] rounded-full shadow-[0_0_12px_#EB433D] z-30 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-125" />

              {/* Icon Section */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`w-full md:w-1/2 flex justify-center mb-8 md:mb-0 relative z-10 ${
                  item.align === 'left' ? 'md:justify-start md:pl-20' : 'md:justify-end md:pr-20'
                }`}
              >
                <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 border border-slate-50 relative">
                    <div className="absolute inset-0 bg-[#EB433D]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.icon}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Dots (Purely visual) */}
      <div className="absolute top-7 left-[12%] w-3 h-3 bg-red-500 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-[20%] w-4 h-4 bg-red-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-1/2 left-[5%] w-2 h-2 bg-red-400 rounded-full opacity-40 animate-ping"></div>
    </section>
  );
};

export default WhyChoose;