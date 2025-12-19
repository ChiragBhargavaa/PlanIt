import  {prisma} from "../config/prisma.js"
import { hashPassword, comparePassword } from "../utils/password.js";

export const registerUser = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  const hashed = await hashPassword(data.password);

  return prisma.user.create({
    data: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      hashedPassword: hashed
    }
  });
};