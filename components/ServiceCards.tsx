"use client";

import Image from "next/image";

const services = [
  { title: "Performance Marketing", image: "/performance.jpg" },
  { title: "SEO", image: "/seo.jpg" },
  { title: "GMB Profile Optimization", image: "/gb.jpg" },
  { title: "ORM", image: "/orm.avif" },
  { title: "Landing Page Creation", image: "/landing.jpg" },
  { title: "Website Development", image: "/web.avif" },
];

export default function ServiceImageCards() {
  return (
    <section className=" py-8">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Services <span className="text-red-600">We Offer</span>
          </h2>
         
          <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="relative h-50 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay badge */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition" />

                <span className="absolute top-3 left-3 bg-white/90 text-slate-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Service
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="font-bold text-slate-900 text-base md:text-lg">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}