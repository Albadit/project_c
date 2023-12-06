/*
  Warnings:

  - You are about to drop the column `data` on the `lesson` table. All the data in the column will be lost.
  - Added the required column `lesson_data` to the `lesson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lesson" DROP COLUMN "data",
ADD COLUMN     "lesson_data" JSONB NOT NULL;
