-- CreateTable
CREATE TABLE "FaceitProfile" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "faceitId" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "avatar" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FaceitProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FaceitStats" (
    "id" TEXT NOT NULL,
    "faceitProfileId" TEXT NOT NULL,
    "mathes" INTEGER NOT NULL,
    "country" TEXT NOT NULL,
    "kdRatio" DOUBLE PRECISION NOT NULL,
    "winRate" DOUBLE PRECISION NOT NULL,
    "avg" DOUBLE PRECISION NOT NULL,
    "adr" DOUBLE PRECISION NOT NULL,
    "skillLevel" INTEGER NOT NULL,
    "elo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FaceitStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SegmentStats" (
    "id" TEXT NOT NULL,
    "faceitStatsId" TEXT NOT NULL,
    "map" TEXT NOT NULL,
    "matches" INTEGER NOT NULL,
    "winRate" DOUBLE PRECISION NOT NULL,
    "kdRatio" DOUBLE PRECISION NOT NULL,
    "adr" DOUBLE PRECISION NOT NULL,
    "headshotPercentage" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SegmentStats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WeaponStats" (
    "id" TEXT NOT NULL,
    "faceitStatsId" TEXT NOT NULL,
    "weapon" TEXT NOT NULL,
    "kills" INTEGER NOT NULL,
    "accuracy" DOUBLE PRECISION NOT NULL,
    "headshotPercentage" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "WeaponStats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FaceitProfile_playerId_key" ON "FaceitProfile"("playerId");

-- CreateIndex
CREATE UNIQUE INDEX "FaceitProfile_faceitId_key" ON "FaceitProfile"("faceitId");

-- CreateIndex
CREATE UNIQUE INDEX "FaceitStats_faceitProfileId_key" ON "FaceitStats"("faceitProfileId");

-- AddForeignKey
ALTER TABLE "FaceitProfile" ADD CONSTRAINT "FaceitProfile_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FaceitStats" ADD CONSTRAINT "FaceitStats_faceitProfileId_fkey" FOREIGN KEY ("faceitProfileId") REFERENCES "FaceitProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SegmentStats" ADD CONSTRAINT "SegmentStats_faceitStatsId_fkey" FOREIGN KEY ("faceitStatsId") REFERENCES "FaceitStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WeaponStats" ADD CONSTRAINT "WeaponStats_faceitStatsId_fkey" FOREIGN KEY ("faceitStatsId") REFERENCES "FaceitStats"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
