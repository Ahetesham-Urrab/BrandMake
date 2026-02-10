"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  // Animation variants for the parent container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between each child animation
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: easeOut } 
    },
  };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl leading-snug font-extrabold text-black sm:text-4xl md:text-5xl xl:text-6xl"
            >
              <span className="block">#1 Professional</span>
              <span className="block bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent">
                Digital Marketing Agency
              </span>
              <span className="block">You Can Trust</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p 
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-800 sm:text-base md:text-lg lg:mx-0"
            >
              At Brand Make, our team of experts is dedicated to helping your
              business grow online with tailored strategies in SEO, PPC, social
              media, and content marketing.
            </motion.p>

            {/* Features - Animated list */}
            <motion.div 
              variants={itemVariants}
              className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 lg:mx-0"
            >
              {[
                "Award-Winning Service",
                "Proven Results",
                "Expert Team",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }} // Subtle nudge on hover
                  className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-900 lg:justify-start"
                >
                  <CheckCircle className="h-5 w-5 text-[#EB433D]" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="w-full rounded-xl bg-[#EB433D] px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-200 transition sm:w-auto"
              >
                Enquire Now
              </motion.button>

              <motion.a
                whileHover={{ backgroundColor: "rgba(0,0,0,1)", color: "#fff" }}
                href="#services"
                className="w-full rounded-xl border-2 border-black px-8 py-4 text-center text-base font-bold text-black transition sm:w-auto"
              >
                View All Services
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto hidden w-full max-w-xl md:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }} // Gentle floating effect
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/banner.svg"
                alt="Professional Marketing Agency"
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
            
            {/* Optional: Add a decorative glow behind the image */}
            <div className="absolute -inset-4 -z-10 bg-red-100 blur-3xl opacity-30 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* MODAL - Simplified Framer Motion entrance */}
      {open && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-2xl"
          >
            <p className="mb-6 text-xl font-bold text-black">
              Let's build your brand!
            </p>
            <button
              onClick={() => setOpen(false)}
              className="w-full rounded-xl bg-[#EB433D] py-3 font-bold text-white transition hover:bg-red-600"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}