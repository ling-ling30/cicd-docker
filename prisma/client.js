import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
    testDb: {
      url: process.env.TEST_DATABASE_URL,
    },
  },
});

export default prisma;
