import { Request, Response } from "express";
import { registerUser } from "../services/register.service.js";
import { loginService } from "../services/login.service.js";
import { verifyEmailByToken } from "../services/verify-email.service.js";
import { signToken } from "../utils/jwt.js";
import { prisma } from "../config/prisma.js";

export const authPing = (req: Request, res: Response) => {
  res.send("auth pong");
};

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
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ success: true, message: "Login successful", user });
  } catch (err) {
    const msg = (err as Error).message;
    if (msg === "Please verify your email before logging in") {
      return res.status(403).json({ success: false, message: msg });
    }
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

export const register = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password } = req.body;

  if (!email || !password || !first_name || !last_name) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    const { email: userEmail } = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "Check your email to verify your account",
      email: userEmail,
    });
  } catch (err: unknown) {
    console.error("REGISTER ERROR:", err);

    const e = err as { code?: string; message?: string };
    if (e.code === "P2002") {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    if (e.message === "Invalid credentials") {
      return res.status(401).json({
        success: false,
        message: e.message,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
};

const FRONTEND_URL = (process.env.FRONTEND_URL || process.env.FRONTEND_URLS?.split(",")[0] || "http://localhost:5173").replace(/\/$/, "");

export const verifyEmail = async (req: Request, res: Response) => {
  const token = req.query.token as string;

  if (!token) {
    return res.redirect(302, `${FRONTEND_URL}/verify-email?error=missing`);
  }

  try {
    const user = await verifyEmailByToken(token);

    if (!user) {
      return res.redirect(302, `${FRONTEND_URL}/verify-email?error=invalid`);
    }

    const jwt = signToken({ id: user.id });

    res.cookie("token", jwt, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.redirect(302, `${FRONTEND_URL}/verify-success`);
  } catch (err) {
    console.error("VERIFY EMAIL ERROR:", err);
    return res.redirect(302, `${FRONTEND_URL}/verify-email?error=invalid`);
  }
};

export const me = async (req: Request, res: Response) => {
  const id = req.verifiedUser?.id;
  if (!id) {
    return res.status(401).json({ success: false, message: "Not authenticated" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: { id: true, email: true, first_name: true, last_name: true, emailVerified: true },
    });

    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({ success: true, user });
  } catch (err) {
    console.error("ME ERROR:", err);
    return res.status(500).json({ success: false, message: "Failed to fetch user" });
  }
};

export const logout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  return res.status(200).json({ success: true, message: "Logout successful" });
};
