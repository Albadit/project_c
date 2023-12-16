/*
  Warnings:

  - You are about to drop the column `answer` on the `QaAnswer` table. All the data in the column will be lost.
  - Added the required column `comment` to the `QaAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QaAnswer" DROP COLUMN "answer",
ADD COLUMN     "comment" TEXT NOT NULL;
