import  {prisma} from "../config/prisma.js"
import { comparePassword } from "../utils/password.js";
import { signToken } from "../utils/jwt.js";


export const loginService = async (
  email: string,
  password: string
) => {
  const user = await prisma.user.findUnique({
    where: { email }
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValid = await comparePassword(password, user.hashedPassword);
  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  const token = signToken({ id: user.id });
  return {
    user: {
      id: user.id,
      email: user.email
    },
    token
  };
};