/*
  Warnings:

  - You are about to drop the column `matсhes` on the `FaceitStats` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[faceitStatsId]` on the table `SegmentStats` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `matches` to the `FaceitStats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FaceitStats" DROP COLUMN "matсhes",
ADD COLUMN     "matches" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "SegmentStats_faceitStatsId_key" ON "SegmentStats"("faceitStatsId");
