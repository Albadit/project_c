/*
  Warnings:

  - You are about to drop the `QaTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "QaTag" DROP CONSTRAINT "QaTag_qaQuestionId_fkey";

-- DropForeignKey
ALTER TABLE "QaTag" DROP CONSTRAINT "QaTag_tagId_fkey";

-- AlterTable
ALTER TABLE "QaQuestion" ADD COLUMN     "tags" JSONB;

-- DropTable
DROP TABLE "QaTag";

-- DropTable
DROP TABLE "Tag";
