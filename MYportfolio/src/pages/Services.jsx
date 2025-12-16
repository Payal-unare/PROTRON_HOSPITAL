import React from "react";
import { motion } from "framer-motion";

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
    <section className="pt-28 pb-32 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-5xl font-black tracking-tight">
            Our <span className="text-red-500">Medical Services</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg leading-relaxed">
            Proton Hospital provides world-class care with advanced technology and experienced specialists. Explore our wide range of medical services designed for every patient’s needs.
          </p>
        </motion.div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {list.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#020617] p-8 rounded-3xl border border-white/10 shadow-xl hover:-translate-y-2 transition"
            >
              <div className="text-5xl mb-6 flex justify-center items-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">{service.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-12">
            Why Choose <span className="text-red-500">Proton Hospital</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["24/7 Emergency Care", "Round-the-clock critical care with rapid response teams."],
              ["Advanced Technology", "Modern ICUs, modular OTs, and high-precision diagnostics."],
              ["Expert Doctors", "Highly experienced specialists across multiple disciplines."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className="bg-[#020617] p-8 rounded-2xl border border-white/10 hover:-translate-y-2 transition"
              >
                <h4 className="text-xl font-bold mb-3">{title}</h4>
                <p className="text-gray-400">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
