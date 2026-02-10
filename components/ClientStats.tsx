"use client";

import React from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

/* ---------------- Counter ---------------- */
const Counter = ({ value, color }: { value: string; color: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value.includes(".")
      ? parseFloat(latest.toFixed(1))
      : Math.round(latest)
  );

  useSpring(count, { stiffness: 40, damping: 20 });

  React.useEffect(() => {
    count.set(isInView ? numericValue : 0);
  }, [isInView, numericValue, count]);

  return (
    <motion.h4
      ref={ref}
      className="text-4xl md:text-5xl font-black tracking-tight"
      style={{ color }}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.h4>
  );
};

/* ---------------- Data ---------------- */
const caseStudies = [
  {
    client: "HEAL PSORIASIS",
    title: "Dominating the search landscape for",
    highlight: "Mumbai's Top Specialty Care",
    stats: [
      { label: "1st Page Keywords", value: "100+", color: "#f97316" },
      { label: "Organic Growth", value: "500%", color: "#a855f7" },
      { label: "Monthly Reach", value: "121M", color: "#0ea5e9" },
      { label: "Monthly Traffic", value: "2K+", color: "#ef4444" },
    ],
  },
  {
    client: "DENTAL CLINIC",
    title: "Scaling patient acquisition for a",
    highlight: "Premium Dental Network",
    stats: [
      { label: "CPL Reduction", value: "40%", color: "#10b981" },
      { label: "Monthly Leads", value: "450+", color: "#f59e0b" },
      { label: "Conv. Rate", value: "12%", color: "#6366f1" },
      { label: "Ad ROI", value: "8.2x", color: "#ec4899" },
    ],
  },
];

/* ---------------- Component ---------------- */
export default function ClientStats() {
  return (
    <section className="py-20 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Real Growth <span className="text-red-600 italic">Measured</span>
          </h2>
          <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base">
            Performance-driven results that speak louder than promises
          </p>
        </div>

        {/* Slider */}
        <div className="relative bg-white rounded-[2.5rem] border shadow-[0_25px_80px_-25px_rgba(0,0,0,0.12)] p-6 md:p-12 lg:p-16">

          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={50}
            loop
            speed={700}
            grabCursor
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }}
          >
            {caseStudies.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="grid gap-10 lg:grid-cols-12 items-center">

                  {/* LEFT */}
                  <div className="lg:col-span-5 space-y-5 text-center lg:text-left">
                    <p className="text-xs font-semibold tracking-widest text-red-600 uppercase">
                      Case Study · {item.client}
                    </p>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                      {item.title}
                      <br />
                      <span className="text-red-600">{item.highlight}</span>
                    </h3>
                  </div>

                  {/* RIGHT */}
                  <div className="lg:col-span-7 grid grid-cols-2 gap-4 sm:gap-6">
                    {item.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-slate-50 p-5 sm:p-6 text-center shadow-md hover:shadow-xl transition"
                      >
                        <Counter value={stat.value} color={stat.color} />
                        <p className="mt-1 text-xs font-bold tracking-wide text-slate-500 uppercase">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-40 flex justify-between pointer-events-none">
            <button className="swiper-prev pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition">
              <ArrowLeft size={20} />
            </button>
            <button className="swiper-next pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
