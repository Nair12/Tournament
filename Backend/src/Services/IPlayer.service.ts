import { Player, Prisma } from "@prisma/client";
import { LoginRequest } from "src/DTO/LoginRequest.dto";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset.dto";
import { PlayerResponse } from "src/DTO/PlayerResponse.dto";
import { PlayerWithProfile } from "src/Repository/Player.repository";



export abstract class IPlayerService{

    abstract getPlayer(id:string):Promise<PlayerResponse | null>
    abstract registerPlayer(payload:PlayerAddRequest):Promise<void>

    abstract findByEmail(email:string):Promise<PlayerWithProfile | null>

    abstract login(payload:LoginRequest):Promise<any>
    
    // abstract getUserData(id:string):Promise<PlayerResponse>

    abstract updateTeam(teamId: string, playerId: string,tx?:Prisma.TransactionClient):Promise<PlayerResponse>
    

}