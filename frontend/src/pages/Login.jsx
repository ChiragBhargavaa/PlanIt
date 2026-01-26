import { useState } from "react";
import { userLogin } from "../services/api";
import taj from "../assets/taj.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { refetch } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const checkLogin = async () => {
    setError("");
    try {
      const { data } = await userLogin({ email, password });
      if (data?.success) {
        await refetch();
        navigate("/homelogged");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen py-10 flex items-center justify-center bg-[#f8f5ef] px-4">
      <div className="w-full max-w-4xl bg-[#fffdf9] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10">
        <div className="hidden md:relative md:flex items-center justify-center">
          <img
            src={taj}
            alt="taj"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-white">Travel smarter. Plan better.</p>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">Login</h1>
            <p className="text-slate-500 text-sm mt-1">Login to your account</p>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-950"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-950"
              />
            </div>

            <div className="flex justify-end text-sm">
              <span className="text-blue-600 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            <button
              type="button"
              onClick={checkLogin}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#44001b] hover:bg-[#510012] transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-slate-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
