import { Request, Response } from "express";

export const authPing = (req: Request, res: Response) => {
  res.send("auth pong");
};