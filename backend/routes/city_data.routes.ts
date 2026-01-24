import { Router } from "express";
import { getCityData } from "../controllers/city_data.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import {getCityDetails} from "../controllers/cityDetails.controller.js"


const router = Router();

router.get("/city_by_vibe",requireAuth, getCityData);
router.get("city-details",requireAuth ,getCityDetails);


export default router;