//All Authentication related controllers

import { Request, Response } from "express";
import { registerUser } from "../services/register.service.js";
import { loginService } from "../services/login.service.js";

export const authPing = (req: Request, res: Response) => {
  res.send("auth pong");
};


//Controller for User Login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: "Email and password are required" });
  }

  try {
    const { token, user } = await loginService(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json({ success: true, message: "Login successful", user });
  } catch (err) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};


//Controller for User Singup
export const register = async(req: Request, res: Response) => {
  const { first_name , last_name , email, password } = req.body;

  if (!email || !password || !first_name || !last_name) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const user = await registerUser(req.body);

    const { token } = await loginService(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    return res.status(201).json({ success: true, message: "Register successful" });
  } catch (err: any) {
    console.error("REGISTER ERROR:", err);

    if (err.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Email already registered"
      });
    }

    if (err.message === "Invalid credentials") {
      return res.status(401).json({
        success: false,
        message: err.message
      });
    }

    return res.status(500).json({
      success: false,
      message: "Registration failed"
    });
  }
};

//Controller for Logout
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax"
  });

  return res.status(200).json({ success: true, message: "Logout successful" });
};