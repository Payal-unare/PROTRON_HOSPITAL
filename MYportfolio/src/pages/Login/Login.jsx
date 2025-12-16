import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // later: add API / auth logic
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
          Login
        </h1>

        <p className="text-gray-400 text-center mb-8">
          Proton Hospital Patient Portal
        </p>

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
          className="w-full mb-6 bg-[#0b1220] border border-white/10 p-4 rounded-xl focus:outline-none focus:border-red-500"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="text-right text-sm text-red-400 mb-6 cursor-pointer">
          Forgot password?
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-red-600 to-blue-600 hover:opacity-90 transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-red-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
