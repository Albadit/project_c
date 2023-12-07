/*
  Warnings:

  - You are about to drop the column `time` on the `lesson` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `results` on the `user_lesson` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `user_lesson` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "time",
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "description",
DROP COLUMN "time",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "subject" ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user_lesson" DROP COLUMN "results",
DROP COLUMN "time";
