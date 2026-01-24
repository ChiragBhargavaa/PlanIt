import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Nav from "./components/Nav";
import HomeLogged from "./pages/HomeLogged";
import Map from "./pages/Map";
import Profile from "./pages/Profile";

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
    path: "/homelogged",
    element: (
      <>
        <Nav />
        <HomeLogged />
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
  {
    path: "/map",
    element: (
      <>
        <Map />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Nav />
        <Profile />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
