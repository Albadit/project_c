-- DropForeignKey
ALTER TABLE "Lesson" DROP CONSTRAINT "Lesson_quizId_fkey";

-- AlterTable
ALTER TABLE "Lesson" ALTER COLUMN "quizId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
