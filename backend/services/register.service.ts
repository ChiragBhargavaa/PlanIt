import { randomBytes } from "node:crypto";
import { prisma } from "../config/prisma.js";
import { hashPassword } from "../utils/password.js";
import { sendVerificationMail } from "./mail.service.js";

const VERIFICATION_EXPIRY_MINUTES = 15;

export const registerUser = async (data: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) => {
  const hashed = await hashPassword(data.password);
  const token = randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + VERIFICATION_EXPIRY_MINUTES * 60 * 1000);

  const user = await prisma.user.create({
    data: {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      hashedPassword: hashed,
      emailVerified: false,
      emailVerificationToken: token,
      emailVerificationExpires: expires,
    },
  });

  console.log(user);

  await sendVerificationMail(data.email, token);

  return { user: { id: user.id, email: user.email }, email: user.email };
};
