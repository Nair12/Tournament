import { Exclude, Expose, Transform } from "class-transformer";
@Exclude()
export class FaceitSegmentStats {
    @Expose()
    @Transform(({ obj }) => obj.label || obj.map)
    mapName: string; // Например: "de_mirage"

    @Expose()
    @Transform(({ obj }) => obj.img_regular || obj.imgRegular)
    imgRegular: string; // Ссылка на картинку карты

    @Expose()
    @Transform(({ obj }) => Number(obj.stats?.Matches || obj.matches))
    matches: number;

    @Expose()
    @Transform(({ obj }) => obj.stats?.['Win Rate %'] || obj.winRate)
    winRate: string;

    @Expose()
    @Transform(({ obj }) => obj.stats?.['Average K/D Ratio'] || obj.kdRatio)
    kdRatio: string;

    @Expose()
    @Transform(({ obj }) => Number(obj.stats?.Wins || obj.wins))
    wins: number;

    @Expose()
    @Transform(({ obj }) => obj.stats?.['Average Triple Kills'] || obj.triples)
    triples: string;

    @Expose()
    @Transform(({ obj }) => obj.stats?.['ADR'] || obj.adr || "0")
    adr: string;
}