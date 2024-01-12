/*
  Warnings:

  - You are about to drop the column `end` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `start` on the `Event` table. All the data in the column will be lost.
  - Added the required column `dateEnd` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateStart` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "end",
DROP COLUMN "start",
ADD COLUMN     "dateEnd" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateStart" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "image" TEXT DEFAULT 'event_card.png';

-- AlterTable
ALTER TABLE "QaQuestion" ADD COLUMN     "image" TEXT DEFAULT 'qa_card.png';
