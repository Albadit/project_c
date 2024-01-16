/*
  Warnings:

  - Made the column `image` on table `QaQuestion` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Subject` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "QaQuestion" ALTER COLUMN "image" SET NOT NULL;

-- AlterTable
ALTER TABLE "Subject" ALTER COLUMN "image" SET NOT NULL;
