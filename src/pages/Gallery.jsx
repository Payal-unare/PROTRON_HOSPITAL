import React from "react";
import { motion } from "framer-motion";

export default function Gallery() {
  const gallery = [
    {
      title: "Hospital Infrastructure",
      desc: "A modern healthcare environment built for efficiency, safety, and patient comfort.",
      main: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200",
      others: [
        "infrastructure2.png",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200",
      ],
    },
    {
      title: "Operation Theatre & ICU",
      desc: "Advanced modular operation theatres and fully equipped intensive care units.",
      main: "ot2.png",
      others: [
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200",
        "icu.png",
      ],
    },
    {
      title: "Diagnostics & Patient Care",
      desc: "Accurate diagnostics and compassionate patient-focused medical care.",
      main: "care4.png",
      others: [
        "care1.png",
        "care3.png",
      ],
    },
  ];

  const hoverFx = {
    y: -12,
    boxShadow: "0 30px 80px rgba(59,130,246,0.35)",
  };

  return (
    <section className="pt-32 pb-40 bg-[#020617] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-24"
        >
          <h1 className="text-5xl font-bold">
            Gallery
          </h1>
          <p className="mt-6 text-lg text-gray-400 leading-relaxed">
            Explore the infrastructure and facilities of Proton Critical Care
            Center — designed to deliver advanced medical care with safety,
            hygiene, and patient comfort at its core.
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-40">
          {gallery.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              {/* Section Header */}
              <div className="max-w-3xl mb-14">
                <h2 className="text-3xl font-bold">
                  {section.title}
                </h2>
                <p className="mt-4 text-gray-400">
                  {section.desc}
                </p>
              </div>

              {/* Image Layout */}
              <div className="grid lg:grid-cols-3 gap-10 items-stretch">

                {/* Main Image */}
                <motion.div
                  whileHover={hoverFx}
                  className="lg:col-span-2 overflow-hidden rounded-3xl bg-[#0b1220] border border-white/10"
                >
                  <img
                    src={section.main}
                    alt={section.title}
                    className="w-full h-[440px] object-cover transition-transform duration-700 hover:scale-[1.05]"
                  />
                </motion.div>

                {/* Side Images */}
                <div className="flex flex-col gap-10">
                  {section.others.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={hoverFx}
                      className="overflow-hidden rounded-3xl bg-[#0b1220] border border-white/10"
                    >
                      <img
                        src={img}
                        alt={section.title}
                        className="w-full h-[205px] object-cover transition-transform duration-700 hover:scale-[1.05]"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
