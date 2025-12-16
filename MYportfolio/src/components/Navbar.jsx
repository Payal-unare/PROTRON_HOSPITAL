import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../assets/protonhospital logo.png";

export default function Navbar() {
  // Hover effect same as cards/buttons
  const hoverFx = {
    y: -6,
    boxShadow: "0 20px 50px rgba(59,130,246,0.35)",
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={Logo}
            alt="Proton Hospital Logo"
            className="w-11 h-11 object-contain"
          />
          <div className="leading-tight">
            <motion.h1
              whileHover={hoverFx}
              className="text-xl font-bold text-white group-hover:text-blue-300 transition inline-block"
            >
              Proton Hospital
            </motion.h1>
            <p className="text-xs text-blue-300 font-medium">
              Critical Care Center
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-8 text-[15px] font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: "Gallery", path: "/gallery" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `relative transition-all duration-300
                 ${isActive ? "text-blue-300" : "text-gray-300 hover:text-blue-300"}
                 after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                 after:w-0 after:bg-blue-400 after:transition-all after:duration-300
                 hover:after:w-full`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
