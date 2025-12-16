import React from "react";

export default function Services() {
  const list = [
    {
      title: "Interventional Cardiology",
      description:
        "Advanced cardiac treatment with angioplasty, angiography & emergency interventions.",
      icon: "💓",
    },
    {
      title: "Critical Care (ICU)",
      description:
        "Fully equipped ICU with ventilators, multipara monitors & round-the-clock specialists.",
      icon: "🏥",
    },
    {
      title: "Nephrology & Dialysis",
      description:
        "Modern dialysis centre with advanced machines and expert kidney care.",
      icon: "🩸",
    },
    {
      title: "Gynecology & Obstetrics",
      description:
        "Complete maternity care, pregnancy monitoring & safe delivery services.",
      icon: "🤱",
    },
    {
      title: "Orthopedics & Trauma",
      description:
        "Bone, joint & spine care including fracture treatment and joint replacement.",
      icon: "🦴",
    },
    {
      title: "Oncology & Cancer Care",
      description:
        "Comprehensive cancer diagnosis and surgical oncology by specialists.",
      icon: "🎗️",
    },
    {
      title: "Radiology & Imaging",
      description:
        "24/7 imaging: X-Ray, CT Scan, Sonography & advanced diagnostic support.",
      icon: "🖥️",
    },
    {
      title: "Pediatrics",
      description:
        "Specialized newborn, infant and child care by trained pediatricians.",
      icon: "🧸",
    },
  ];

  return (
    <div className="pt-28 bg-gradient-to-b from-[#f8fbff] to-[#eef3ff]">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600 opacity-10 blur-3xl"></div>
        <div className="relative py-24 px-6 text-center max-w-6xl mx-auto">
          
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Our Specialized Medical Services
          </h1>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mt-5">
            Delivering advanced healthcare with modern technology, expert doctors, 
            and patient-first care — all under one roof at Proton Critical Care Center.
          </p>
        </div>
      </div>

      {/* Highlight Panels */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 mt-10">
        {[
          {
            title: "24/7 Emergency",
            text: "Immediate care with round-the-clock Radiology, Pathology & Pharmacy.",
          },
          {
            title: "Modern Technology",
            text: "Modular OT, laminar flow, ventilators & advanced diagnostic equipment.",
          },
          {
            title: "Expert Specialists",
            text: "Highly trained, experienced medical professionals in every department.",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="
              p-7 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)]
              border border-slate-200 hover:shadow-[0_12px_40px_rgb(0,0,0,0.12)]
              transition-all duration-300
            "
          >
            <h3 className="text-2xl font-semibold text-blue-700">{item.title}</h3>
            <p className="text-slate-600 mt-2 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 pb-24">
        <h2 className="text-4xl font-bold text-center text-slate-900">
          Comprehensive Care for Every Need
        </h2>
        <p className="text-center text-slate-600 mt-3 max-w-2xl mx-auto">
          Every service at Proton Critical Care Center is designed with compassion, 
          accuracy and world-class expertise.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-16">
          {list.map((service) => (
            <div
              key={service.title}
              className="
                bg-white rounded-3xl p-8 border border-slate-200 
                shadow-[0_6px_25px_rgba(0,0,0,0.06)]
                hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]
                hover:-translate-y-2 transition-all duration-300 group
              "
            >
              <div
                className="
                  text-6xl mb-6 bg-blue-50 text-blue-600 p-4 w-fit mx-auto 
                  rounded-2xl group-hover:bg-blue-600 group-hover:text-white 
                  transition-all duration-300
                "
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-center text-slate-800">
                {service.title}
              </h3>

              <p className="text-slate-600 text-center mt-3 leading-relaxed">
                {service.description}
              </p>

              <div
                className="
                  h-1 w-0 bg-blue-600 mt-6 mx-auto rounded-full
                  group-hover:w-3/4 transition-all duration-500
                "
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
