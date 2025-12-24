import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
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

        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-black tracking-tight">
            Contact <span className="text-blue-500">Proton Hospital</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Reach out to us for appointments, medical inquiries, or emergency assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* ===== CONTACT FORM (UNCHANGED) ===== */}
          <div className="bg-[#020617] border border-white/10 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Book an Appointment</h3>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input name="name" placeholder="Full Name" required className="w-full p-4 rounded-xl bg-[#0b1220]" />
              <input name="email" type="email" placeholder="Email" required className="w-full p-4 rounded-xl bg-[#0b1220]" />
              <input name="phone" placeholder="Phone" required className="w-full p-4 rounded-xl bg-[#0b1220]" />

              <select name="department" required className="w-full p-4 rounded-xl bg-[#0b1220] text-gray-300">
                <option value="">Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Critical Care</option>
              </select>

              <select name="doctor" required className="w-full p-4 rounded-xl bg-[#0b1220] text-gray-300">
                <option value="">Select Doctor</option>
                <option>Dr. Sameer Patil</option>
                <option>Dr. Priya Mehta</option>
              </select>

              <textarea
                name="message"
                rows="4"
                placeholder="Describe your concern"
                required
                className="w-full p-4 rounded-xl bg-[#0b1220]"
              />

              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold bg-gradient-to-r from-red-600 to-blue-600"
              >
                Submit Request
              </button>
            </form>
          </div>

          {/* ===== GOOGLE MAP (ADDED ONLY) ===== */}
          <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.8143985486627!2d77.75936367525358!3d20.919785580702456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a50002a16a1f%3A0xea90f6e4b0b0c057!2sPROTON%20CRITICAL%20CARE%20CENTRE!5e0!3m2!1sen!2sin!4v1766605425688!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[520px]"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
