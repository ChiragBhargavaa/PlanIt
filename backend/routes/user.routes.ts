import { Router } from "express";
import { pingUser, getUser } from "../controllers/user.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/ping", pingUser);
router.get("/getUser",requireAuth, getUser);

export default router;