"use client";

import Image from "next/image";

export default function CTA() {
  return (
    <section className="w-full bg-[#FDFEFF] py-14">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Card */}
        <div className="relative bg-gradient-to-r from-pink-100 via-red-200 to-pink-100 backdrop-blur-lg border rounded-3xl shadow-sm overflow-visible">

          {/* Doctor Image */}
          <div className="absolute bottom-0 left-6 md:left-20 z-0 hidden md:block">
            <Image
              src="/logos/down.png"
              alt="Doctor"
              width={460}
              height={460}
              className="w-[220px] md:w-[400px] object-contain"
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
        
  <div className="absolute top-7 left-1/4 w-3 h-3 bg-red-500 rounded-full opacity-50 animate-bounce-slow"></div>
  <div className="absolute bottom-10 right-1/3 w-4 h-4 bg-red-200 rounded-full opacity-50 animate-bounce-slower"></div>
  <div className="absolute top-12 right-1/4 w-2 h-2 bg-red-300 rounded-full opacity-50 animate-bounce-slow"></div>
  <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full opacity-60 animate-bounce-slower"></div>
  <div className="absolute top-1/2 right-1/2 w-2.5 h-2.5 bg-red-300 rounded-full opacity-70 animate-bounce-slow"></div>
    </section>
  );
}