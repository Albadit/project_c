/*
  Warnings:

  - Made the column `image` on table `Event` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Event" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "image" SET NOT NULL;
