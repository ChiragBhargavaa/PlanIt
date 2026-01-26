import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { user, loading, logout } = useAuth();

  return (
    <div className="bg-transparent top-0 z-100 left-0 w-full min-h-[10vh] flex justify-center items-center">
      <ul className="flex justify-around items-center gap-8 text-2xl text-black">
        <li className="hover:text-yellow-300 hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-yellow-300 hover:underline">
          <Link to="/about">About</Link>
        </li>
        {loading ? null : user ? (
          <>
            <li className="hover:text-yellow-300 hover:underline">
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button
                type="button"
                onClick={logout}
                className="hover:text-yellow-300 hover:underline bg-transparent border-none cursor-pointer text-inherit text-2xl font-inherit"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="hover:text-yellow-300 hover:underline">
              <Link to="/login">Login</Link>
            </li>
            <li className="hover:text-yellow-300 hover:underline">
              <Link to="/signup">SignUp</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
