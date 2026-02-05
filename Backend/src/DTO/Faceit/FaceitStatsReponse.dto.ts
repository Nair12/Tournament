import { Exclude, Expose, Type, Transform } from "class-transformer";
import { FaceitSegmentStats } from "./FaceitSegmentsStats.dto";

@Exclude()
export class FaceitStatsDto {

    @Expose()
    @Transform(({obj})=> obj.player_id)
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
    // Добавляем текущую серию побед (Longest Win Streak / Current Win Streak)
    @Transform(({ obj }) => obj.lifetime?.['Current Win Streak'] || obj.currentWinStreak)
    currentWinStreak: string;

    @Expose()
    @Transform(({ obj }) => obj.lifetime?.['Longest Win Streak'] || obj.longestWinStreak)
    longestWinStreak: string;

    @Expose()
    // Добавляем ADR (если ты его считаешь вручную или берешь среднее из сегментов)
    @Transform(({ obj }) => obj.adr || "0")
    adr: string;

    @Expose()
    @Type(() => FaceitSegmentStats)
    // ОШИБКА БЫЛА ТУТ: Transform должен стоять ПЕРЕД @Type в некоторых версиях, 
    // чтобы правильно направить массив в декоратор.
    @Transform(({ obj }) => obj.segments || obj.segmentStats)
    segmentStats: FaceitSegmentStats[];
}