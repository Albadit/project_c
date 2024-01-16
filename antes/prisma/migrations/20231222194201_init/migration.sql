/*
  Warnings:

  - You are about to drop the column `lesson_data` on the `Lesson` table. All the data in the column will be lost.
  - You are about to drop the column `quiz_data` on the `Quiz` table. All the data in the column will be lost.
  - You are about to drop the `UserLesson` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `lessonData` to the `Lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quizData` to the `Quiz` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserLesson" DROP CONSTRAINT "UserLesson_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "UserLesson" DROP CONSTRAINT "UserLesson_userId_fkey";

-- AlterTable
ALTER TABLE "Lesson" DROP COLUMN "lesson_data",
ADD COLUMN     "lessonData" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "quiz_data",
ADD COLUMN     "quizData" JSONB NOT NULL;

-- DropTable
DROP TABLE "UserLesson";

-- CreateTable
CREATE TABLE "UserProgress" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "completion" BOOLEAN NOT NULL,

    CONSTRAINT "UserProgress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProgress" ADD CONSTRAINT "UserProgress_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
