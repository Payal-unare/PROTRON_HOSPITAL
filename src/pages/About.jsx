import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="pt-28 pb-32 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-6 space-y-32">

        {/* ================= ABOUT INTRO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-5xl font-black tracking-tight">
            About <span className="text-red-500">Proton Hospital</span>
          </h2>

          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            Proton Hospital is a multi-speciality critical care center dedicated to
            delivering world-class medical treatment with precision, compassion,
            and integrity. We combine advanced medical technology with highly
            experienced doctors to ensure every patient receives safe, reliable,
            and timely care.
          </p>
        </motion.div>

        {/* ================= IMAGE + MISSION ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2000"
            alt="Proton Hospital Building"
            className="rounded-3xl shadow-2xl border border-white/10"
          />

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Mission & Vision</h3>

            <p className="text-gray-300 leading-relaxed mb-6">
              Our mission is to make advanced healthcare accessible, affordable,
              and trustworthy for every patient. We strive to create an environment
              where medical excellence meets human care.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Our vision is to become a regional leader in critical care by
              continuously improving patient outcomes through innovation,
              ethics, and medical expertise.
            </p>
          </motion.div>
        </div>

        {/* ================= WHY PROTON ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-14">Why Choose Proton Hospital</h3>

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

        {/* ================= PATIENT SUCCESS STORIES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-16">
            Patient <span className="text-red-500">Success Stories</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                name: "Mr. Rajesh Kulkarni",
                story:
                  "After a severe cardiac emergency, Proton Hospital saved my life with immediate intervention and exceptional care. I am deeply grateful.",
              },
              {
                name: "Mrs. Anjali Deshmukh",
                story:
                  "The doctors and ICU staff treated my father with incredible compassion. Their professionalism gave our family confidence during a difficult time.",
              },
              {
                name: "Mr. Imran Shaikh",
                story:
                  "From diagnosis to recovery, everything was handled with transparency and care. Proton Hospital truly puts patients first.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-[#020617] p-8 rounded-3xl border border-white/10 shadow-xl hover:-translate-y-2 transition"
              >
                <p className="text-gray-300 italic leading-relaxed">
                  “{p.story}”
                </p>
                <p className="mt-6 font-semibold text-red-400">
                  — {p.name}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
