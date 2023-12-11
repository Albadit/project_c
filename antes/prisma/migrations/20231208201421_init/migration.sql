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
ALTER TABLE "event" ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "time",
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "description",
DROP COLUMN "time",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "role" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "subject" ALTER COLUMN "name" SET DATA TYPE TEXT,
ALTER COLUMN "description" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "tag" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user" ALTER COLUMN "first_name" SET DATA TYPE TEXT,
ALTER COLUMN "last_name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user_function" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "user_lesson" DROP COLUMN "results",
DROP COLUMN "time";
