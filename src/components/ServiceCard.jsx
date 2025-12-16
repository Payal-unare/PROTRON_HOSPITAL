import React from "react";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="p-6 bg-white border rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
      <div className="text-4xl mb-3 text-red-500">{icon}</div>
      <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
