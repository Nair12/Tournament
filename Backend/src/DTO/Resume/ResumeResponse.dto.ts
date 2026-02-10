import { Exclude, Expose, Type } from "class-transformer"
import { RoleDto } from "./Role.dto"
import { PlayerResponse } from "../Player/PlayerResponse.dto"


@Exclude()
export class ResumeResponse{
    @Expose()
    description:string

    @Expose()
    type: 'Casual' | 'Professional'
    
    @Expose()
    language:string
    @Expose()
    roles:RoleDto[]

    @Expose()
    @Type(()=>PlayerResponse)
    player:PlayerResponse
}