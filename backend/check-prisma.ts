import { prisma } from "./config/prisma.js";

async function main() {
  try {
    await prisma.$connect();
    console.log("Prisma connected successfully");

    const result = await prisma.$queryRaw`SELECT 1`;
    console.log("Query result:", result);
  } catch (err) {
    console.error("Prisma connection failed:", err);
  } finally {
    await prisma.$disconnect();
  }
}

main();