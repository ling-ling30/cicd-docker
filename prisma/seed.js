const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const task1 = await prisma.task.upsert({
    where: { id: 1 },
    update: {},
    create: {
      task: "Morning run",
    },
  });
  const task2 = await prisma.task.upsert({
    where: { id: 2 },
    update: {},
    create: {
      task: "Eat a healthy breakfast",
    },
  });
  const task3 = await prisma.task.upsert({
    where: { id: 3 },
    update: {},
    create: {
      task: "Do Homework",
    },
  });
  const task4 = await prisma.task.upsert({
    where: { id: 4 },
    update: {},
    create: {
      task: "Take out the trash",
    },
  });
  console.log(task1, task2, task3, task4);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
