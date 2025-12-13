import { Request, Response } from "express";

export const pingUser = (req: Request, res: Response) => {
  res.send("pong");
};