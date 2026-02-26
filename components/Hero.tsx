"use client";

import { useState } from "react";
import { motion, easeOut } from "framer-motion";
import { PhoneCallIcon } from "lucide-react";

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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <section className="relative flex min-h-svh flex-col md:flex-row items-center overflow-hidden">
      {/* ✅ MOBILE LOGO (ONLY MOBILE) */}
      <div className="absolute top-4 left-1/2 z-20 -translate-x-1/2 md:hidden">
        <img src="/logos/bmlogo.png" alt="Logo" className="h-auto w-auto" />
      </div>

      {/* --- DIGITAL STRUCTURE BACKGROUND --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
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
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
        </svg>

        <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-red-100/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-gray-200/50 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 flex-1">
        <div className="grid items-center gap-10 md:gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="mt-[110px] md:mt-0 text-3xl font-extrabold leading-tight text-black sm:text-3xl md:text-4xl xl:text-5xl"
            >
              <span className="block">More Genuine Leads</span>
              <span className="block bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent">
                More Patients. Stronger Practice.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-700 sm:text-base md:text-lg lg:mx-0"
            >
              Be visible where real patients search, compare, and choose – with
              Performance Marketing
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="flex w-full items-center justify-center rounded-xl bg-[#EB433D] px-8 py-4 text-base font-bold text-white shadow-lg shadow-red-200 sm:w-auto"
              >
                <PhoneCallIcon className="mr-2 h-5 w-5" />
                Book A Strategy Call
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE (DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative hidden md:block mx-auto w-full max-w-xl"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-20"
            >
              <img
                src="/down1.png"
                alt="Marketing Agency"
                className="w-full rounded-3xl"
              />
            </motion.div>

            <div className="absolute -inset-4 -z-10 rounded-full bg-red-100 blur-3xl opacity-30" />
          </motion.div>
        </div>
      </div>

      {/* MOBILE IMAGE AT BOTTOM */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 md:hidden z-10"
      >
        <div className="relative mx-auto w-[370px] max-w-md px-4 ">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20"
          >
            <img
              src="/down1.png"
              alt="Marketing Agency"
              className="w-[370px] rounded-3xl"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* CONTACT MODAL */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="w-full max-w-sm rounded-2xl bg-white p-6 sm:p-8 shadow-2xl"
          >
            {/* Heading */}
            <h3 className="text-xl font-black text-slate-900 text-center mb-3">
              Book a Strategy Call
            </h3>
            {/* <p className="text-sm text-slate-500 text-center mb-6">
              Fill in your details and we’ll get back to you
            </p> */}

            {/* Form */}
            <form className="space-y-4">
              <div>
                {/* <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full Name
                </label> */}
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full  placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />
              </div>

              <div>
                {/* <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Phone Number
                </label> */}
                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full  placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />
              </div>

              <div>
                {/* <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Email Address
                </label> */}
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full  placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-sm font-semibold text-slate-700 mb-1">
                  Full Name
                </label> */}
                <input
                  type="text"
                  placeholder="Clinic Name"
                  className="w-full  placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full  placeholder:text-black/70 rounded-xl bg-gradient-to-b from-[#fe4d46] to-[#bc2928] py-3 font-bold text-white shadow-lg hover:scale-[1.02] transition-all"
              >
                Request Callback
              </button>
            </form>

            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-sm font-semibold text-slate-500 hover:text-slate-800"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
