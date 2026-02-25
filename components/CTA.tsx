"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full bg-slate-50/60 py-14">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Card */}
        <div className="relative bg-red-50 border rounded-3xl shadow-sm overflow-visible">

          {/* Doctor Image */}
          <div className="absolute bottom-0 left-6 md:left-30 z-0 hidden md:block">
            <Image
              src="/doctor.png"
              alt="Doctor"
              width={460}
              height={460}
              className="w-[220px] md:w-[370px] object-contain"
              priority
            />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-8">

            {/* Spacer column (image space) */}
            <div className="hidden md:block md:w-1/2" />

            {/* Right Content */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#EB433D] to-black bg-clip-text text-transparent leading-tight mb-3">
                Take the First Step Toward Predictable Clinic Growth
              </h2>

              <p className="text-sm md:text-base text-slate-600 mb-6">
                Book a strategy consultation with a healthcare marketing expert
                and discover how your clinic can grow.
              </p>

              <form className="flex flex-col gap-3 max-w-md mx-auto md:mx-0">
                <input
                  type="text"
                  placeholder="Name"
                  className="px-4 py-2 rounded-md border focus:ring-2 focus:ring-red-600  placeholder:text-black/70 "
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="px-4 py-2 rounded-md border focus:ring-2 focus:ring-red-600  placeholder:text-black/70 "
                />
                <input
                  type="text"
                  placeholder="Clinic Name"
                  className="px-4 py-2 rounded-md border focus:ring-2 focus:ring-red-600  placeholder:text-black/70 "
                />
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition"
                >
                 Book A Strategy Call
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}