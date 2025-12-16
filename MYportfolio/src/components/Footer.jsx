import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/protonhospital logo.png";

export default function Footer() {
  const hoverFx = {
    y: -6,
    boxShadow: "0 20px 50px rgba(59,130,246,0.35)",
  };

  return (
    <footer className="bg-[#020617] border-t border-white/10 text-gray-300 py-16 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Logo & Brand */}
        <div className="flex flex-col gap-4">
          <img src={Logo} alt="Proton Hospital Logo" className="w-14 h-14 object-contain" />
          <h2 className="text-xl font-bold text-white">Proton Hospital</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Advanced medical care with compassion and precision. 24/7 critical care for all patients.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>
          {["Home", "Services", "Gallery", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={`/${link.toLowerCase()}`}
              className="text-gray-400 hover:text-blue-300 transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">123 Medical Street, Amravati, India</p>
          <p className="text-gray-400 text-sm">Email: info@protonhospital.com</p>
          <p className="text-gray-400 text-sm">Phone: +91 98765 43210</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <motion.a
                key={i}
                whileHover={hoverFx}
                href="#"
                className="w-10 h-10 bg-[#0b1220] flex items-center justify-center rounded-full text-gray-400 hover:text-blue-300 transition"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
        &copy; 2025 Proton Hospital. All rights reserved.
      </div>
    </footer>
  );
}
