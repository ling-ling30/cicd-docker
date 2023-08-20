const app = require("../app.js");
const request = require("supertest");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//hooks

beforeAll((done) => {
  async function main() {
    const deleteAll = await prisma.task.deleteMany({});
    const task1 = await prisma.task.upsert({
      where: { id: 1 },
      update: {},
      create: {
        id: 1,
        task: "Morning run",
      },
    });
    const task2 = await prisma.task.upsert({
      where: { id: 2 },
      update: {},
      create: {
        id: 2,
        task: "Eat a healthy breakfast",
      },
    });
    const task3 = await prisma.task.upsert({
      where: { id: 3 },
      update: {},
      create: {
        id: 3,
        task: "Do Homework",
      },
    });
    const task4 = await prisma.task.upsert({
      where: { id: 4 },
      update: {},
      create: {
        id: 4,
        task: "Take out the trash",
      },
    });
    // console.log(task1, task2, task3, task4);
  }
  main()
    .then(async () => {
      await prisma.$disconnect();
      done();
    })

    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      done();
    });
});

afterAll((done) => {
  async function deleteAllRecords() {
    await prisma.task.deleteMany({});
  }
  deleteAllRecords()
    .then(async () => {
      await prisma.$disconnect();
      done();
    })

    .catch(async (e) => {
      await prisma.$disconnect();
      done();
    });
});
describe("testing", () => {
  it("find all task", () => {
    request(app)
      .get("/api/tasks")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((res) => {
        console.log(res.body);
      });
  });

  it("Find one task", (done) => {
    request(app)
      .get("/api/tasks?id=3")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        const { status, body } = response;
        expect(body.status).toEqual("success");
        expect(status).toEqual(200);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });

  it("Find one task error", (done) => {
    request(app)
      .get("/api/tasks?id=6")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(400)
      .then((response) => {
        const { body, status } = response;
        expect(body).toEqual("data not found");
        expect(status).toEqual(400);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
  });
  it("Create products", (done) => {
    request(app)
      .post("/api/tasks")
      .send({
        task: "laundry",
      })
      .set("Accept", "application/json")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(201)
      .then((response) => {
        const { body, status } = response;

        expect(body.msg).toEqual("Task is created");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });
  it("update products", (done) => {
    request(app)
      .put("/api/tasks?id=2")
      .send({
        complete: true,
      })
      .set("Accept", "application/json")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(201)
      .then((response) => {
        const { body, status } = response;
        expect(body.msg).toEqual("task is updated");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });

  it("delete products", (done) => {
    request(app)
      .delete("/api/tasks?id=1")
      .expect("content-type", "application/json; charset=utf-8")
      .expect(200)
      .then((response) => {
        const { body, status } = response;
        expect(body.msg).toEqual("task deleted successfully");
        done();
      })
      .catch((err) => {
        console.log(err);
        done(err);
      });
  });
});
