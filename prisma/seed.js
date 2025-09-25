import { PrismaClient } from "../src/generated/prisma/index.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  const passwordPlain = "password123";
  const hashedPassword = await bcrypt.hash(passwordPlain, 10);

  await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: hashedPassword,
    },
  });

  console.log("Seed selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
