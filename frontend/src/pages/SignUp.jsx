import { useState } from "react";
import { userSignUp } from "../services/api";
import taj from "../assets/taj.png";
import { useNavigate } from "react-router-dom";



export default function SignUp (){
  const navigate = useNavigate();
const [first_name, setFirst] = useState("");
const [last_name, setLast] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const checkSign = async () =>{
  try{
    const response = await userSignUp({
      first_name, last_name, email, password,
    });

    console.log("Succesful signup!", response.data);
    navigate("/homelogged");
  }

  catch(error){
    console.error("SignUp failed!", error.response && error.response.data);
  }
};
 return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5ef] px-4">
      <div className="w-full max-w-4xl bg-[#fffdf9] rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10">

        <div className="hidden md:flex relative items-center justify-center">
          <img
            src={taj}
            alt="taj"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 text-center text-white p-8">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p>Start planning smarter.</p>
          </div>
        </div>

       
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">
              Sign Up
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Create your account
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="First name"
              value={first_name}
              onChange={(e) => setFirst(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              placeholder="Last name"
              value={last_name}
              onChange={(e) => setLast(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border"
            />

            <button
              type="button"
              onClick={checkSign}
              className="w-full py-3 rounded-xl font-semibold text-white bg-[#44001b]"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

