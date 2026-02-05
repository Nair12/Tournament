import { Exclude, Expose, Transform } from "class-transformer";
@Exclude()
export class FaceitSegmentStats {
    @Expose()
    @Transform(({ obj }) => obj.label || obj.mapName)
    mapName: string; // Например: "de_mirage"

    @Expose()
    @Transform(({ obj }) => obj.img_regular || obj.mapImage)
    mapImage: string; // Ссылка на картинку карты

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
    // ADR часто нет в стандартных сегментах, но если оно появится в будущем:
    @Transform(({ obj }) => obj.stats?.['Average ADR'] || obj.adr || "0")
    adr: string;
}