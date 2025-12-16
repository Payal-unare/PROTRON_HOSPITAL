import React from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
    const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    navigate("/login"); // redirect to login page
  };

  return (
    <section className="pt-28 pb-32 bg-[#0b1220] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight">
            Contact <span className="text-red-500">Proton Hospital</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Reach out to us for appointments, medical inquiries, or emergency
            assistance. Our team is available 24/7 to support you.
          </p>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* ================= FORM ================= */}
          
          <div className="bg-[#020617] border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">
              Book an Appointment
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
              />

              {/* Department Dropdown */}
              <select
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500 text-gray-300"
              >
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Critical Care</option>
                <option>General Medicine</option>
              </select>

              {/* Doctor Dropdown */}
              <select
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500 text-gray-300"
              >
                <option>Select Doctor</option>
                <option>Dr. Sameer Patil – Cardiology</option>
                <option>Dr. Priya Mehta – Neurology</option>
                <option>Dr. Rohan Desai – Orthopedics</option>
              </select>

              <textarea
                rows="4"
                placeholder="Describe your concern"
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
              />
              <></>
              <button
                type="submit"
                className="
                  w-full py-4 rounded-xl font-bold
                  bg-gradient-to-r from-red-600 to-blue-600
                  hover:shadow-[0_20px_60px_rgba(59,130,246,0.45)]
                  transition
                "
                
              >
                Submit Request
              </button>
            </form>
          </div>
           
          {/* ================= INFO & IMAGE ================= */}
          <div className="space-y-10">

            {/* Image */}
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580281657521-6c5a1c40c02a?q=80&w=2000"
                alt="Hospital Contact"
                className="w-full h-[320px] object-cover hover:scale-105 transition duration-700"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-[#020617] border border-white/10 rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-6">Emergency & Support</h4>

              <div className="space-y-4 text-gray-300">
                <p>
                  <span className="text-gray-400">Emergency:</span>{" "}
                  <span className="text-red-500 font-semibold">24/7 Available</span>
                </p>
                <p>
                  <span className="text-gray-400">Phone:</span>{" "}
                  +91 98765 43210
                </p>
                <p>
                  <span className="text-gray-400">Email:</span>{" "}
                  contact@protonhospital.com
                </p>
                <p>
                  <span className="text-gray-400">Location:</span>{" "}
                  Amravati, Maharashtra
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
