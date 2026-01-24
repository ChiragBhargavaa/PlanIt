import { Request, Response } from "express";
import { parseToken } from "../utils/cookie.parser.js";
import { getUserById } from "../services/user.detail.service.js";

export const pingUser = (req: Request, res: Response) => {
  res.send("pong");
};

export const distanceEstimator = (req: Request , res: Response) => {
  
};

export const getUser = async (req: Request, res: Response) => {

  type User ={
    id: string | undefined| null;
  }


  const user: User | null = parseToken(req.cookies.token as string);
  if(!user) {
    return res.status(401).json({ success: false, message: "User not authenticated" });
  }


  const data = await getUserById(user.id as string);
  if (!data) {
    return res.status(404).json({ success: false, message: "User not found" });
  }
  
  return res.status(200).json({ 
    success: true, 
    message: "User fetched successfully", 
    data: data
  });
};

