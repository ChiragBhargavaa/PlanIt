import { Router } from "express";
import { authPing } from "../controllers/auth.controller.js";

const router = Router();

router.get("/ping", authPing);

export default router;