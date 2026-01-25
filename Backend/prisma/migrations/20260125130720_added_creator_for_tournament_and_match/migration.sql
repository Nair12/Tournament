/*
  Warnings:

  - You are about to drop the column `endTime` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `Tournament` table. All the data in the column will be lost.
  - Added the required column `creatorId` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avatar` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "creatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "avatar" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "endTime",
DROP COLUMN "startTime",
ADD COLUMN     "creatorId" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AddForeignKey
ALTER TABLE "Tournament" ADD CONSTRAINT "Tournament_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Match" ADD CONSTRAINT "Match_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
