"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Target, PhoneCallIcon } from "lucide-react";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* --- DIGITAL STRUCTURE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Tech Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Animated Data "Flow" Line with Arrowhead */}
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* The Arrowhead Definition */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9" /* Moves arrow to the very tip */
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#EB433D" />
            </marker>
          </defs>

          <motion.path
            d="M 0 650 C 150 400, 450 850, 750 100"
            stroke="#EB433D"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            markerEnd="url(#arrowhead)" /* Attaches the arrow to the end */
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Brand Color Glows */}
        <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-gray-200/50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-bold tracking-wider text-[#EB433D] uppercase"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EB433D]"></span>
              </span>
              Digital Growth Partner
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-3xl leading-tight font-extrabold text-black sm:text-3xl md:text-4xl xl:text-5xl"
            >
              <span className="block">More Genuine Leads</span>
              <span className="block bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent">
              More Patients. Stronger Practice.

              </span>
              {/* <span className="block">You Can Trust</span> */}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg lg:mx-0"
            >
              Be visible where real patients search, compare, and choose - with Performance Marketing</motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-3 lg:mx-0"
            >
              {["Award-Winning Service", "Proven Results", "Expert Team"].map(
                (item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-900 lg:justify-start"
                  >
                    <CheckCircle className="h-5 w-5 text-[#EB433D]" />
                    <span>{item}</span>
                  </motion.div>
                ),
              )}
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
                className="w-full rounded-xl bg-[#EB433D] px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-200 transition sm:w-auto flex"
              >
              <PhoneCallIcon className="h-5 w-5 me-2"/> Book A Strategy Call

              </motion.button>
              {/* <motion.a
                whileHover={{ backgroundColor: "#000", color: "#fff" }}
                href="#services"
                className="w-full rounded-xl border-2 border-black px-8 py-4 text-center text-base font-bold text-black transition sm:w-auto"
              >
                View Services
              </motion.a> */}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE - With Floating Data Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto hidden w-full max-w-xl md:block"
          >
            {/* Main Image Container */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <img
                src="/banner.svg"
                alt="Marketing Agency"
                className="w-full rounded-3xl shadow-2xl ring-1 ring-black/5"
              />
            </motion.div>

            {/* Floating Badge 1: ROI */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-8 top-1/4 z-30 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-black/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">
                  ROI Growth
                </p>
                <p className="text-lg font-extrabold text-black">+142%</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Engagement */}
            <motion.div
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-1/4 z-30 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl shadow-black/5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-[#EB433D]">
                <Target size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase text-gray-400">
                  Conversion Rate
                </p>
                <p className="text-lg font-extrabold text-black">12.4%</p>
              </div>
            </motion.div>

            {/* Background Accent Decorative Blur */}
            <div className="absolute -inset-4 -z-10 bg-red-100 blur-3xl opacity-30 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* MODAL */}
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
              Ready to scale your business?
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
