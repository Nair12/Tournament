/*
  Warnings:

  - You are about to drop the column `country` on the `FaceitStats` table. All the data in the column will be lost.
  - You are about to drop the column `elo` on the `FaceitStats` table. All the data in the column will be lost.
  - You are about to drop the column `mathes` on the `FaceitStats` table. All the data in the column will be lost.
  - You are about to drop the column `skillLevel` on the `FaceitStats` table. All the data in the column will be lost.
  - Added the required column `matсhes` to the `FaceitStats` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FaceitProfile" ADD COLUMN     "country" TEXT NOT NULL DEFAULT 'UK',
ADD COLUMN     "elo" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "skillLevel" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "FaceitStats" DROP COLUMN "country",
DROP COLUMN "elo",
DROP COLUMN "mathes",
DROP COLUMN "skillLevel",
ADD COLUMN     "matсhes" INTEGER NOT NULL;
