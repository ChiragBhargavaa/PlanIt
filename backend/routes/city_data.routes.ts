import { Router } from "express";
import { getCityData } from "../controllers/city_data.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";


const router = Router();

router.get("/city_by_vibe", getCityData);


export default router;