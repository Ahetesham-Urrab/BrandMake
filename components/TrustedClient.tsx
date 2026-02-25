"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "AirCool", src: "logos/1.jpg.jpeg" },
  { name: "Alpha Realty", src: "logos/2.jpg.jpeg" },
  { name: "Avanza", src: "logos/3.jpg.jpeg", darkBg: true },
  { name: "Geometrix", src: "logos/4.jpg.jpeg" },
  { name: "HNS", src: "logos/5.jpg.jpeg" },
  { name: "JH", src: "logos/6.jpg.jpeg" },
  { name: "Phantom", src: "logos/7.jpg.jpeg" },
 
];

export default function TrustedClient() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 tracking-tight">
         Trusted by <span className="text-red-600"> Healthcare Practices That Believe in Growth</span>
        </h2>
        <div className="h-1 w-12 bg-red-600 mx-auto mt-4 rounded-full" />
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex flex-none items-center gap-12 cursor-grab active:cursor-grabbing"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          drag="x"
          dragConstraints={{ left: -1000, right: 0 }}
          dragElastic={0.1}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-none w-48 h-24 flex items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="max-w-full max-h-full object-contain pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
