import { Player, Prisma } from "@prisma/client";
import { PlayerResponse } from "src/DTO/PlayerResponse.dto";
import { PlayerRepository } from "src/Repository/Player.repository";


export abstract class IPlayerFassade {
    abstract getPlayer(id: string): Promise<PlayerResponse | null>
    abstract updateTeam(teamId:string, playerId:string,tx?:Prisma.TransactionClient):Promise<PlayerResponse>

}