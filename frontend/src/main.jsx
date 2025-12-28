import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Nav from "./components/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav />
        <Home />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Nav />
        <Login />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <Nav />
        <SignUp />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Nav />
        <About />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
