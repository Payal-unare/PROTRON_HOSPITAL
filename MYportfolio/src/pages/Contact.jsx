import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",     // 🔴 replace
        "YOUR_TEMPLATE_ID",    // 🔴 replace
        formRef.current,
        "YOUR_PUBLIC_KEY"      // 🔴 replace
      )
      .then(
        () => {
          alert("Appointment request sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send request. Please try again.");
          console.error(error);
        }
      );
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

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ================= FORM ================= */}
          <div className="bg-[#020617] border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Book an Appointment</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl"
              />

              <select
                name="department"
                required
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl text-gray-300"
              >
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Critical Care</option>
                <option>General Medicine</option>
              </select>

              <select
                name="doctor"
                required
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl text-gray-300"
              >
                <option value="">Select Doctor</option>
                <option>Dr. Sameer Patil</option>
                <option>Dr. Priya Mehta</option>
                <option>Dr. Rohan Desai</option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Describe your concern"
                required
                className="w-full bg-[#0b1220] border border-white/10 p-4 rounded-xl"
              />

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

          {/* ================= INFO ================= */}
          <div className="space-y-10">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580281657521-6c5a1c40c02a?q=80&w=2000"
                className="w-full h-[320px] object-cover"
                alt="Hospital"
              />
            </div>

            <div className="bg-[#020617] border border-white/10 rounded-3xl p-8">
              <h4 className="text-xl font-bold mb-6">Emergency & Support</h4>
              <p className="text-gray-300">📞 +91 98765 43210</p>
              <p className="text-gray-300">✉️ contact@protonhospital.com</p>
              <p className="text-gray-300">📍 Amravati, Maharashtra</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
