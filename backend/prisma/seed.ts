import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import cities from "./cities_seed.json" with { type: "json" };

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("Seeding cities...");

  for (const city of cities) {
    await prisma.city.upsert({
      where: {
        name_state_country: {
          name: city.name,
          state: city.state,
          country: city.country
        }
      },
      update: {},
      create: {
        name: city.name,
        state: city.state,
        country: city.country,
        latitude: city.latitude,
        longitude: city.longitude,
        timezone: city.timezone,
        popularity: city.popularity,
        average_time_spent: city.average_time_spent,
        vibe: city.vibe
      }
    });
  }

  console.log("City seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
