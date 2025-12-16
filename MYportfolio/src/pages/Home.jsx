import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HeartPulse, Brain, Bone, Activity } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const doctors = [
    {
      name: "Dr. Sameer Patil",
      role: "Interventional Cardiologist",
      exp: "15+ Years",
      img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=900",
    },
    {
      name: "Dr. Priya Mehta",
      role: "Neurologist",
      exp: "12+ Years",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=900",
    },
    {
      name: "Dr. Rohan Desai",
      role: "Orthopedic Surgeon",
      exp: "10+ Years",
      img: "https://images.unsplash.com/photo-1606813907291-95a51c2f81e7?w=900",
    },
  ];

  const hoverFx = {
    y: -12,
    boxShadow: "0 30px 80px rgba(59,130,246,0.35)",
  };

  return (
    <div className="bg-[#0b1220] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2000')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617]/95 via-[#020617]/80 to-[#0b1220]/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <motion.h3
              whileHover={hoverFx}
              className="inline-block cursor-pointer text-[5rem] leading-none font-extrabold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                PROTON HOSPITAL
              </span>
            </motion.h3>

            <p className="mt-4 text-xl text-blue-200">
              Critical Care Center · Amravati
            </p>

            <p className="mt-8 text-lg text-gray-300 max-w-xl leading-relaxed">
              Where advanced medical science meets responsibility, precision,
              and round-the-clock critical care.
            </p>

            <div className="mt-10 flex gap-6">
              <motion.button
                whileHover={hoverFx}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/login")}
                className="bg-red-600 px-10 py-5 rounded-xl font-bold shadow-[0_20px_40px_rgba(220,38,38,0.4)]"
              >
                Book Appointment
              </motion.button>

              <Link to="/services">
                <motion.button
                  whileHover={hoverFx}
                  className="border border-white/30 px-10 py-5 rounded-xl hover:bg-white/10 transition"
                >
                  View Services
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT FLOATING STATS (RESTORED) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:flex flex-col gap-6"
          >
            {[
              ["24/7", "Emergency"],
              ["10,000+", "Patients"],
              ["15+", "Specialties"],
            ].map(([v, l], i) => (
              <motion.div
                key={i}
                whileHover={hoverFx}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10"
              >
                <div className="text-3xl font-bold">{v}</div>
                <div className="text-gray-400">{l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= DOCTORS ================= */}
      <section className="py-32 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-20">Medical Leadership</h2>

          <div className="flex gap-10 overflow-x-hidden">
            <motion.div
              animate={{ x: ["0%", "-60%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-10"
            >
              {[...doctors, ...doctors].map((doc, i) => (
                <motion.div
                  whileHover={hoverFx}
                  key={i}
                  className="w-[340px] bg-[#0b1220] rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
                >
                  <img
                    src={doc.img}
                    className="h-[420px] w-full object-cover"
                    alt={doc.name}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{doc.name}</h3>
                    <p className="text-gray-400 text-sm">{doc.role}</p>
                    <p className="text-red-500 mt-2 font-semibold">{doc.exp}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 bg-gradient-to-b from-[#020617] to-[#0b1220]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16">Specialized Care</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              ["Cardiology", HeartPulse],
              ["Neurology", Brain],
              ["Orthopedics", Bone],
              ["Critical Care", Activity],
            ].map(([label, Icon], i) => (
              <Link to="/services" key={i}>
                <motion.div
                  whileHover={hoverFx}
                  className="bg-[#020617] p-8 rounded-2xl border border-white/10"
                >
                  <Icon className="w-10 h-10 text-red-500 mb-6" />
                  <h3 className="text-xl font-bold">{label}</h3>
                  <p className="text-gray-400 mt-2">
                    Advanced diagnosis & treatment
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EMERGENCY CTA ================= */}
      <section className="py-32 bg-[#020617] text-center border-t border-white/10">
        <h2 className="text-5xl font-black">Emergency? We Are Ready.</h2>
        <p className="mt-6 text-lg text-gray-400">
          24/7 Critical Care & Emergency Response
        </p>

        <Link to="/contact">
          <motion.button
            whileHover={hoverFx}
            className="mt-10 bg-red-600 px-14 py-5 rounded-xl font-bold"
          >
            Contact Now
          </motion.button>
        </Link>
      </section>
    </div>
  );
}
