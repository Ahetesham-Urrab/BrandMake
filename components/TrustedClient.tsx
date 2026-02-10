"use client";

import React from "react";
import { motion } from "framer-motion";

const logos = [
  { name: "AirCool", src: "logos/AirCool.png" },
  { name: "Alpha Realty", src: "logos/Alpha Realty Logo.webp" },
  { name: "Avanza", src: "logos/Avanza Logo white.webp", darkBg: true },
  { name: "Geometrix", src: "logos/Geometrix.png" },
  { name: "HNS", src: "logos/HNS.png" },
  { name: "JH", src: "logos/JH.png" },
  { name: "Phantom", src: "logos/phantom logo.webp" },
  { name: "SunC", src: "logos/SunC logo.webp" },
];

export default function TrustedClient() {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 tracking-tight">
          Trusted By <span className="text-red-600">Industry Leaders</span>
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
