-- DropForeignKey
ALTER TABLE "FaceitStats" DROP CONSTRAINT "FaceitStats_faceitProfileId_fkey";

-- AlterTable
ALTER TABLE "SegmentStats" ADD COLUMN     "imgRegular" TEXT,
ADD COLUMN     "imgSmall" TEXT;

-- AddForeignKey
ALTER TABLE "FaceitStats" ADD CONSTRAINT "FaceitStats_faceitProfileId_fkey" FOREIGN KEY ("faceitProfileId") REFERENCES "FaceitProfile"("faceitId") ON DELETE RESTRICT ON UPDATE CASCADE;
