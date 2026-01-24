import { Router } from "express";
import { getCityData } from "../controllers/city_data.controller.js";
import { requireAuth } from "../middlewares/auth.middleware.js";
import {cityDetailsController} from "../controllers/cityDetails.controller.js";


const router = Router();

router.get("/city_by_vibe",requireAuth, getCityData);
router.get("/city-details" ,cityDetailsController);


export default router;