import React from "react";

export default function DoctorCard({ name, role, img }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition">
      <img
        src={img}
        className="w-full h-56 object-cover rounded-lg"
      />
      <h3 className="text-xl mt-3 text-blue-600 font-semibold">{name}</h3>
      <p className="text-gray-500">{role}</p>
    </div>
  );
}
