import { Router } from "express";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";
import cityDataRoutes from "./city_data.routes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/city-data", cityDataRoutes);

export default router;