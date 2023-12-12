/*
  Warnings:

  - You are about to drop the `calendar` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `event` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lesson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qa_answer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qa_question` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qa_tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `role` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subject` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_function` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_lesson` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "calendar" DROP CONSTRAINT "calendar_event_id_fkey";

-- DropForeignKey
ALTER TABLE "calendar" DROP CONSTRAINT "calendar_user_id_fkey";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_quiz_id_fkey";

-- DropForeignKey
ALTER TABLE "lesson" DROP CONSTRAINT "lesson_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_answer" DROP CONSTRAINT "qa_answer_question_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_answer" DROP CONSTRAINT "qa_answer_user_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_question" DROP CONSTRAINT "qa_question_user_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_tag" DROP CONSTRAINT "qa_tag_qa_question_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_tag" DROP CONSTRAINT "qa_tag_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_role_id_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_user_function_id_fkey";

-- DropForeignKey
ALTER TABLE "user_lesson" DROP CONSTRAINT "user_lesson_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "user_lesson" DROP CONSTRAINT "user_lesson_user_id_fkey";

-- DropTable
DROP TABLE "calendar";

-- DropTable
DROP TABLE "event";

-- DropTable
DROP TABLE "lesson";

-- DropTable
DROP TABLE "qa_answer";

-- DropTable
DROP TABLE "qa_question";

-- DropTable
DROP TABLE "qa_tag";

-- DropTable
DROP TABLE "quiz";

-- DropTable
DROP TABLE "role";

-- DropTable
DROP TABLE "subject";

-- DropTable
DROP TABLE "tag";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "user_function";

-- DropTable
DROP TABLE "user_lesson";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "userFunctionId" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(32) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserFunction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "UserFunction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calendar" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" INTEGER NOT NULL,

    CONSTRAINT "Calendar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QaTag" (
    "id" SERIAL NOT NULL,
    "qaQuestionId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "QaTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QaQuestion" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QaQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QaAnswer" (
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "dateCreate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "QaAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lesson" (
    "id" SERIAL NOT NULL,
    "subjectId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lesson_data" JSONB NOT NULL,

    CONSTRAINT "Lesson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quiz" (
    "id" SERIAL NOT NULL,
    "quiz_data" JSONB NOT NULL,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLesson" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "lessonId" INTEGER NOT NULL,
    "completion" BOOLEAN NOT NULL,

    CONSTRAINT "UserLesson_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userFunctionId_fkey" FOREIGN KEY ("userFunctionId") REFERENCES "UserFunction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calendar" ADD CONSTRAINT "Calendar_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QaTag" ADD CONSTRAINT "QaTag_qaQuestionId_fkey" FOREIGN KEY ("qaQuestionId") REFERENCES "QaQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QaTag" ADD CONSTRAINT "QaTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QaQuestion" ADD CONSTRAINT "QaQuestion_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QaAnswer" ADD CONSTRAINT "QaAnswer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "QaQuestion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QaAnswer" ADD CONSTRAINT "QaAnswer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lesson" ADD CONSTRAINT "Lesson_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLesson" ADD CONSTRAINT "UserLesson_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLesson" ADD CONSTRAINT "UserLesson_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
