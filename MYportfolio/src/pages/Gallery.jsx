import React from "react";

export default function Gallery() {
  const gallery = [
    {
      title: "Hospital Infrastructure",
      desc: "A modern healthcare environment built for efficiency, safety, and patient comfort.",
      main: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1800",
      others: [
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200",
        "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=1200",
      ],
    },
    {
      title: "Operation Theatre & ICU",
      desc: "Advanced modular operation theatres and fully equipped intensive care units.",
      main: "https://images.unsplash.com/photo-1580281657521-6c5a1c40c02a?q=80&w=1800",
      others: [
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200",
        "https://images.unsplash.com/photo-1664303535827-78a06a7b25a7?q=80&w=1200",
      ],
    },
    {
      title: "Diagnostics & Patient Care",
      desc: "Accurate diagnostics and compassionate patient-focused medical care.",
      main: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=1800",
      others: [
        "https://images.unsplash.com/photo-1587502537745-84e8b0b6f8b5?q=80&w=1200",
        "https://images.unsplash.com/photo-1576091160501-bbe57469278b?q=80&w=1200",
      ],
    },
  ];

  return (
    <section className="pt-28 bg-slate-50 pb-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl font-semibold text-slate-900">
            Gallery
          </h1>
          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Explore the infrastructure and facilities of Proton Critical Care
            Center — designed to deliver advanced medical care with safety,
            hygiene, and patient comfort at its core.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-40">
          {gallery.map((section, index) => (
            <div key={index}>
              {/* Section Header */}
              <div className="max-w-3xl mb-12">
                <h2 className="text-3xl font-semibold text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-slate-600">
                  {section.desc}
                </p>
              </div>

              {/* Image Layout */}
              <div className="grid lg:grid-cols-3 gap-10 items-stretch">
                {/* Main Image */}
                <div className="lg:col-span-2 overflow-hidden rounded-2xl bg-white shadow-lg">
                  <img
                    src={section.main}
                    alt={section.title}
                    className="
                      w-full h-[420px] object-cover
                      transition-transform duration-700
                      hover:scale-[1.04]
                    "
                  />
                </div>

                {/* Side Images */}
                <div className="flex flex-col gap-10">
                  {section.others.map((img, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-2xl bg-white shadow-md"
                    >
                      <img
                        src={img}
                        alt={section.title}
                        className="
                          w-full h-[200px] object-cover
                          transition-transform duration-700
                          hover:scale-[1.04]
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
