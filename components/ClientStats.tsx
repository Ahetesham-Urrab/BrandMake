"use client";

import React from "react";
import Image from "next/image";
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
  const ref = React.useRef<HTMLHeadingElement | null>(null);
  const isInView = useInView(ref, { once: true });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value.includes(".") ? parseFloat(latest.toFixed(1)) : Math.round(latest),
  );

  useSpring(count, { stiffness: 40, damping: 20 });

  React.useEffect(() => {
    if (isInView) count.set(numericValue);
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
    client: "Centre for Cosmetic & Recontructive Surgery",
    logo: "/logos/4.jpg.jpeg", // put logo in public/logos
    title:
      "A premium plastic and cosmetic surgery clinic in Thane, offering world-class treatments with trusted expertise.",
    highlight: "Mumbai's Top Specialty Care",
    stats: [
      {
        label: "Increase in Treatment Searches in Thane",
        value: "40%",
        color: "#f97316",
      },
      { label: "Relevant, High-Intent Leads", value: "90%", color: "#a855f7" },
      { label: "Surgeries in First 4 Months", value: "60%", color: "#0ea5e9" },
      { label: "ROAS", value: "10X", color: "#ef4444" },
    ],
  },
  {
    client: "Avanza Hair Transplant Clinic",
    logo: "/logos/3.jpg.jpeg",
    title:
      "A leading celebrity clinic in India, known for premium treatments, looking to build a strong digital-led patient acquisition system.",
    highlight: "Premium Dental Network",
    stats: [
      { label: "Increase in Clinic Footfall", value: "50%", color: "#10b981" },
      { label: "Return on Ad Spend (ROAS)", value: "20X", color: "#f59e0b" },
      { label: "Reduced Cost Per Lead", value: "50%", color: "#6366f1" },
      { label: "Achieved CTR", value: "20% ", color: "#ec4899" },
    ],
  },
];
/* ---------------- Component ---------------- */
export default function ClientStats() {
  return (
    <section className="py-14 bg-[#FDFEFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            See the <span className="text-red-600">Real Impact We Deliver</span>
          </h2>
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Slider */}
        <div className="relative bg-gradient-to-br from-red-50 via-white to-red-100 rounded-[2.5rem] border shadow-xl p-6 md:p-12 lg:p-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={40}
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
                <div className="grid gap-6 lg:grid-cols-12 items-center">
                  {/* LEFT */}
                  <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
                    <span className="inline-block bg-white text-red-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                      Case Study
                    </span>

                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                      {item.client}
                    </h3>

                    <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                      {item.title}
                    </p>

                    {/* <p className="text-xs text-slate-500 font-medium">
                      Verified performance • Real patient demand growth
                    </p> */}
                  </div>

                  {/* RIGHT */}
                  <div className="lg:col-span-7 grid grid-cols-2 gap-3 sm:gap-6">
                    {item.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="rounded-2xl bg-white p-5 sm:p-6 text-center shadow-md
                                   hover:shadow-2xl hover:-translate-y-1
                                   transition-all duration-300 border border-slate-100"
                      >
                        <Counter value={stat.value} color={stat.color} />
                        <p className="mt-2 text-[11px] sm:text-xs font-semibold tracking-wide text-slate-500 uppercase">
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
            <button className="swiper-prev pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all">
              <ArrowLeft size={20} className="mx-auto"/>
            </button>
            <button className="swiper-next pointer-events-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all">
              <ArrowRight size={20} className="mx-auto"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




