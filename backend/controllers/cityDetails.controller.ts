import { Request, Response } from "express";
import { cityDetailsService } from "../services/cityDetails.service.js";

export const cityDetailsController = async (req: Request, res: Response) => {

    type City = {
        name: string;
    }
    const city: City = req.body;

    if(!city){
        return res.status(400).json({ success: false, message: "City is required" });
    }
    const cityDetails = await cityDetailsService(city.name);
    if(!cityDetails){
        return res.status(404).json({ success: false, message: "City not found" });
    }
    return res.status(200).json({ success: true, message: "City details fetched successfully", data: cityDetails });
}