/*
  Warnings:

  - You are about to drop the column `quiz` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `lesson_id` on the `subject` table. All the data in the column will be lost.
  - You are about to drop the column `lesson_order` on the `subject` table. All the data in the column will be lost.
  - You are about to drop the `events` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `functions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qa_answers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qa_questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `qa_tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `data` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject_id` to the `lesson` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `time` on the `lesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `quiz_data` to the `quiz` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `time` on the `quiz` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `time` on the `user_lesson` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "calendar" DROP CONSTRAINT "calendar_event_id_fkey";

-- DropForeignKey
ALTER TABLE "calendar" DROP CONSTRAINT "calendar_user_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_answers" DROP CONSTRAINT "qa_answers_question_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_answers" DROP CONSTRAINT "qa_answers_user_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_questions" DROP CONSTRAINT "qa_questions_user_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_tags" DROP CONSTRAINT "qa_tags_qa_question_id_fkey";

-- DropForeignKey
ALTER TABLE "qa_tags" DROP CONSTRAINT "qa_tags_tag_id_fkey";

-- DropForeignKey
ALTER TABLE "subject" DROP CONSTRAINT "subject_lesson_id_fkey";

-- DropForeignKey
ALTER TABLE "user_lesson" DROP CONSTRAINT "user_lesson_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_function_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_role_id_fkey";

-- AlterTable
ALTER TABLE "lesson" ADD COLUMN     "data" JSONB NOT NULL,
ADD COLUMN     "order" INTEGER NOT NULL,
ADD COLUMN     "subject_id" INTEGER NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "quiz",
ADD COLUMN     "quiz_data" JSONB NOT NULL,
DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "subject" DROP COLUMN "lesson_id",
DROP COLUMN "lesson_order";

-- AlterTable
ALTER TABLE "user_lesson" DROP COLUMN "time",
ADD COLUMN     "time" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "events";

-- DropTable
DROP TABLE "functions";

-- DropTable
DROP TABLE "qa_answers";

-- DropTable
DROP TABLE "qa_questions";

-- DropTable
DROP TABLE "qa_tags";

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "tags";

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "role_id" INTEGER NOT NULL,
    "first_name" VARCHAR(50) NOT NULL,
    "last_name" VARCHAR(50) NOT NULL,
    "user_function_id" INTEGER NOT NULL,
    "bio" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(32) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "level" INTEGER NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_function" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_function_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(50) NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qa_tag" (
    "id" SERIAL NOT NULL,
    "qa_question_id" INTEGER NOT NULL,
    "tag_id" INTEGER NOT NULL,

    CONSTRAINT "qa_tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qa_question" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "qa_question_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qa_answer" (
    "id" SERIAL NOT NULL,
    "question_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,
    "date_create" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "qa_answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_user_function_id_fkey" FOREIGN KEY ("user_function_id") REFERENCES "user_function"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar" ADD CONSTRAINT "calendar_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "calendar" ADD CONSTRAINT "calendar_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_tag" ADD CONSTRAINT "qa_tag_qa_question_id_fkey" FOREIGN KEY ("qa_question_id") REFERENCES "qa_question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_tag" ADD CONSTRAINT "qa_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_question" ADD CONSTRAINT "qa_question_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_answer" ADD CONSTRAINT "qa_answer_question_id_fkey" FOREIGN KEY ("question_id") REFERENCES "qa_question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qa_answer" ADD CONSTRAINT "qa_answer_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson" ADD CONSTRAINT "lesson_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_lesson" ADD CONSTRAINT "user_lesson_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
