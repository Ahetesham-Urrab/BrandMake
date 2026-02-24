"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full bg-slate-50/60 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-red-50 rounded-[2.5rem] border rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
          {/* Left Image */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/unnamed.jpg"
              alt="Marketing illustration"
              width={380}
              height={280}
              className="w-full max-w-xs md:max-w-sm"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-3xl font-black leading-[1.1] tracking-tighter">
                <h3 className="text-4xl md:t4xt-5xl font-black bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent leading-tight mb-1">
                  Take the First Step Toward Predictable Clinic Growth

                </h3>
              </h2>

            <p className="text-sm md:text-base text-slate-600 mb-6">
              Book a strategy consultation with a healthcare marketing expert
              and discover how your clinic can grow
            </p>

            {/* Form */}
            <form className="flex flex-col gap-3 w-full">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 text-black placeholder:text-black/70 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
              />

              <input
                type="tel"
                placeholder="Type Your Number"
                className="w-full px-4 py-2 text-black placeholder:text-black/70 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
              />

              <input
                type="text"
                placeholder="Clinic Name"
                className="w-full px-4 py-2 text-black placeholder:text-black/70 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#dc2626]"
              />

              <button
                type="submit"
                className="w-full bg-[#dc2626] text-white px-8 py-2 rounded-md font-semibold hover:bg-red-700 transition"
              >
               Book A Free Consultation

              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
