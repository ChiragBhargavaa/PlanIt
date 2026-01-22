import { Request, Response } from "express";
import { getCityDataService } from "../services/city_data.service.js";

export const getCityData = async (req: Request, res: Response) => {
  const { vibe } = req.params;
  const cityData = getCityDataService(vibe);
  res.json(cityData);
};

