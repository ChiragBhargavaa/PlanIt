import { Router } from "express";
import { authPing, login, register, logout } from "../controllers/auth.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";


const router = Router();

router.get("/ping", authPing);
router.post("/login", login);
router.post("/register", register);
router.post("/logout", requireAuth, logout);

export default router;