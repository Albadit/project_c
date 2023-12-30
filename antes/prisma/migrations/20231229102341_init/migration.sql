/*
  Warnings:

  - You are about to drop the column `name` on the `Subject` table. All the data in the column will be lost.
  - You are about to drop the column `userFunctionId` on the `Subject` table. All the data in the column will be lost.
  - Added the required column `title` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subject" DROP CONSTRAINT "Subject_userFunctionId_fkey";

-- AlterTable
ALTER TABLE "Subject" DROP COLUMN "name",
DROP COLUMN "userFunctionId",
ADD COLUMN     "title" TEXT NOT NULL;
