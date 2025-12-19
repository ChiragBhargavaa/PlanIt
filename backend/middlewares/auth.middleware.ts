// Authentication middleware
// Verifies the JWT stored in cookies and attaches the decoded user payload to req

import jwt from "jsonwebtoken";
import { Request , Response , NextFunction } from 'express';

interface Payload{
    id: string;
}

declare global {
    namespace Express{
        interface Request{
            verifiedUser?: Payload
        }
    }
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
const token = req.cookies?.token;
  if (!token) return res.status(401).json({ message: 'User is not authenticated : No Token provided' });

  try{
    const decoded = jwt.verify(token , process.env.JWT_SECRET as string) as Payload;
    if(!decoded)  return res.status(401).json({ message: 'User is not authenticated' });
    req.verifiedUser = decoded;
    next();
  } catch (err){
    return res.status(401).json({ message: 'User is not authenticated : Invalid Token' });
  }
}