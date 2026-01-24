/*
  Warnings:

  - A unique constraint covering the columns `[captainId]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `matchType` on the `Match` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `captainId` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MatchType" AS ENUM ('Tournament', 'Single');

-- AlterTable
ALTER TABLE "Match" DROP COLUMN "matchType",
ADD COLUMN     "matchType" "MatchType" NOT NULL;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "captainId" TEXT NOT NULL;

-- DropEnum
DROP TYPE "MathType";

-- CreateIndex
CREATE UNIQUE INDEX "Team_captainId_key" ON "Team"("captainId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_captainId_fkey" FOREIGN KEY ("captainId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
