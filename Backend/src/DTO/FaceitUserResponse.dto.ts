import { Exclude, Expose } from "class-transformer";


@Exclude()
export class FaceitUserResponse {
    @Expose()
    nickname: string;
    @Expose()
    avatar?: string;
}