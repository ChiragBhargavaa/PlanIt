import { useSearchParams, useLocation, Link } from "react-router-dom";
import taj from "../assets/taj.png";

export default function VerifyEmail() {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const error = searchParams.get("error");
  const email = location.state?.email || "";

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
            <h2 className="text-2xl font-bold mb-2">Check your inbox</h2>
            <p className="text-white/90">We sent you a verification link.</p>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-slate-800">
              {error ? "Link invalid or expired" : "Verify your email"}
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              {error
                ? "The verification link may have expired. Please sign up again or request a new link."
                : "We sent a verification link to your email. Click it to verify your account and sign in."}
            </p>
            {email && !error && (
              <p className="text-slate-600 text-sm mt-2 font-medium">{email}</p>
            )}
          </div>

          <div className="space-y-3">
            <Link
              to="/signup"
              className="block w-full py-3 rounded-xl font-semibold text-center text-white bg-[#44001b] hover:bg-[#510012] transition"
            >
              Back to Sign up
            </Link>
            <Link
              to="/login"
              className="block w-full py-3 rounded-xl font-semibold text-center text-slate-700 border border-slate-300 hover:bg-slate-50 transition"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
