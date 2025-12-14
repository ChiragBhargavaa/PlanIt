

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A000c] px-4">
      
      
      <div className="w-full max-w-4xl bg-[#fffdf9] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">


        <div className="hidden md:relative md:flex items-center justify-center">
          
        
          <img
            src="/taj.png"
            alt="taj"
            className="absolute inset-0 w-full h-full object-cover"
          />

 
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Text on top */}
          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-2">
              Welcome Back
            </h2>
            <p className="text-white-100">
              Travel smarter. Plan better.
            </p>
          </div>
        </div>

       
        <div className="p-8">

         
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">
              Login
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Login to your account
            </p>
          </div>

         
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-950"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-950"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-end text-sm">
              <span className="text-blue-600 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#44001b] hover:bg-[#510012] transition"
            >
              Login
            </button>
          </form>

          
          <p className="text-center text-sm text-slate-500 mt-6">
            Don’t have an account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Sign up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}
