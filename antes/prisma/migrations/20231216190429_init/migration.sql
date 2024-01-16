/*
  Warnings:

  - You are about to drop the column `question` on the `QaQuestion` table. All the data in the column will be lost.
  - Added the required column `title` to the `QaQuestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QaQuestion" DROP COLUMN "question",
ADD COLUMN     "title" TEXT NOT NULL;
