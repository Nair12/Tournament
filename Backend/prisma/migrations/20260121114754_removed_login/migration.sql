/*
  Warnings:

  - You are about to drop the column `login` on the `Player` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Player" DROP COLUMN "login";

-- CreateIndex
CREATE UNIQUE INDEX "Player_name_key" ON "Player"("name");
