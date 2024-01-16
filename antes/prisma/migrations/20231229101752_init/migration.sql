/*
  Warnings:

  - Added the required column `userFunctionId` to the `Subject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Subject" ADD COLUMN     "userFunctionId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Subject" ADD CONSTRAINT "Subject_userFunctionId_fkey" FOREIGN KEY ("userFunctionId") REFERENCES "UserFunction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
