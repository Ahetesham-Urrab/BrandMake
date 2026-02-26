"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  // Show CTA after 120vh
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 1.2);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= STICKY CTA ================= */}
      <div
        className={`
          fixed bottom-0 left-1/2 -translate-x-1/2 z-40
          w-full max-w-md md:hidden
          transition-all duration-300 ease-out
          ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"}
        `}
      >
        <div className="bg-gradient-to-b from-[#fe4d46] to-[#bc2928] text-white px-4 py-3 shadow-xl">
          <p className="text-lg font-semibold text-center mb-2">
            Book A Strategy Call
          </p>

          <div className="flex gap-3">
            {/* BOOK NOW → OPEN MODAL */}
           

            {/* CHAT */}
            <a
              href="https://wa.me/+918668303520"
              className="flex-1 flex items-center justify-center gap-2 bg-white text-red-500 font-semibold py-2 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Chat Now
            </a>
             <button
              onClick={() => setOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 bg-white text-red-500 font-semibold py-2 rounded-full"
            >
              <Phone className="w-4 h-4" />
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
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
              className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl"
            >
              <h3 className="text-xl font-black text-slate-900 text-center mb-4">
                Book a Strategy Call
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />

                <input
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />

                <input
                  type="text"
                  placeholder="Clinic Name"
                  className="w-full placeholder:text-black/70 rounded-xl border border-slate-300 px-4 py-3 text-sm focus:ring-2 focus:ring-[#EB433D]/40"
                  required
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-b from-[#fe4d46] to-[#bc2928] py-3 font-bold text-white shadow-lg hover:scale-[1.02] transition-all"
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
      </AnimatePresence>
    </>
  );
}