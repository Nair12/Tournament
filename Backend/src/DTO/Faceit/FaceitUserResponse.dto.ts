import { Exclude, Expose } from "class-transformer";


@Exclude()
export class FaceitUserResponse {
    @Expose()
    nickname: string;
    @Expose()
    avatar?: string;

    @Expose()
    elo: number; 

    @Expose()
    country: string;

    @Expose()
    skillLevel: number;
}