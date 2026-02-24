"use client";

import Image from "next/image";

const services = [
  {
    title: "Performance Marketing",
    image: "/performance.jpg",
  },
  {
    title: "SEO",
    image: "/seo.jpg",
  },
  {
    title: "GMB Profile Optimization",
    image: "/gb.jpg",
  },
  {
    title: "ORM",
    image: "/orm.avif",
  },
  {
    title: "Landing Page Creation",
    image: "/landing.jpg",
  },
  {
    title: "Website Development",
    image: "/web.avif",
  },
];

export default function ServiceImageCards() {
  return (
    <section className="bg-[#EAF7FB] py-10">
      <div className="max-w-6xl mx-auto px-6">
         <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">
            Services  <span className="text-red-600">We Offer</span>
          </h2>
            <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-62 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-slate-900 text-base">
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