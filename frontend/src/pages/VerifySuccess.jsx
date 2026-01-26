import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import taj from "../assets/taj.png";

export default function VerifySuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => navigate("/homelogged", { replace: true }), 2500);
    return () => clearTimeout(t);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] px-4">
      <div className="w-full max-w-md bg-[#fffdf9] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:flex relative items-center justify-center min-h-[320px]">
          <img
            src={taj}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-2xl font-bold mb-2">You&apos;re all set</h2>
            <p className="text-white/90">Welcome to PlanIt.</p>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800">
              You are now verified
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Redirecting you to the app…
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-8 h-8 border-2 border-[#44001b] border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </div>
    </div>
  );
}
