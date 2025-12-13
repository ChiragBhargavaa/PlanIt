import { Router } from "express";
import { pingUser } from "../controllers/user.controller.js";

const router = Router();

router.get("/ping", pingUser);

export default router;