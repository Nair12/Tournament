import { Player } from "@prisma/client";
import { LoginRequest } from "src/DTO/LoginRequest";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";



export abstract class IPlayerService{

    abstract getPlayer(id:string):Promise<PlayerResponse | null>
    abstract registerPlayer(payload:PlayerAddRequest):Promise<void>

    abstract findByEmail(email:string):Promise<Player | null>

    abstract login(payload:LoginRequest):Promise<any>

}