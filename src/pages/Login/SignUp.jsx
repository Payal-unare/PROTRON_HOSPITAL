import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);
    // later: add API / auth logic

    navigate("/login");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-[#020617] border border-white/10 rounded-3xl p-10 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          Sign Up
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Proton Hospital Patient Registration
        </p>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full mb-4 bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full mb-4 bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          className="w-full mb-6 bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 hover:opacity-90 transition"
        >
          Create Account
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-red-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </form>
    </section>
  );
};

export default Signup;
