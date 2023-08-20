-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "development";

-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "testing";

-- CreateTable
CREATE TABLE "development"."task" (
    "id" SERIAL NOT NULL,
    "task" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testing"."testing" (
    "id" SERIAL NOT NULL,
    "task" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "complete" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "testing_pkey" PRIMARY KEY ("id")
);
