import { Exclude, Expose, Type, Transform, plainToInstance } from "class-transformer";
import { FaceitSegmentStats } from "./FaceitSegmentsStats.dto";
import { ConsoleLogger } from "@nestjs/common";
import { raw } from "express";

@Exclude()
export class FaceitStatsDto {

    @Expose()
    @Transform(({ obj }) => obj.player_id)
    faceitId: string

    @Expose()
    @Transform(({ obj }) => obj.lifetime?.['Average K/D Ratio'] || obj.kdRatio)
    kdRatio: string;

    @Expose()
    @Transform(({ obj }) => Number(obj.lifetime?.Matches || obj.matches))
    matches: number;

    @Expose()
    @Transform(({ obj }) => obj.lifetime?.['Win Rate %'] || obj.winRate)
    winRate: string;

    @Expose()
    @Transform(({ obj }) => Number(obj.lifetime?.['Average Headshots %'] || obj.avg))
    avg: number;

    @Expose()
    @Transform(({ obj }) => obj.lifetime?.['Current Win Streak'] || obj.currentWinStreak)
    currentWinStreak: string;

    @Expose()
    @Transform(({ obj }) => obj.lifetime?.['Longest Win Streak'] || obj.longestWinStreak)
    longestWinStreak: string;

    @Expose()
    @Transform(({ obj }) => obj.lifetime?.['ADR']|| obj.adr || "0")
    adr: string;

    @Expose()
    @Transform(({ obj }) => {
        const rawSegments = obj.segments;
          
        console.log("SEGMENTS:" + rawSegments)

        if (!rawSegments || !Array.isArray(rawSegments)) {
            console.log("Segments empty");
            return [];
        }

        return rawSegments.map(item =>
            plainToInstance(FaceitSegmentStats, item, { excludeExtraneousValues: true })
        );
    })
    segmentStats: FaceitSegmentStats[];
}