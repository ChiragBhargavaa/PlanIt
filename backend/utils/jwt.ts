
import jwt from "jsonwebtoken";

export const signToken = (payload: { id: string }) => {
  return jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    { expiresIn: "7d" }
  );
};