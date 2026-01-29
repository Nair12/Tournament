import { Inject, Injectable } from "@nestjs/common";
import { Player, Prisma } from "@prisma/client";
import { IPlayerService } from "src/Services/IPlayer.service";
import { IPlayerFassade } from "./IPlayerFassade";
import { PlayerResponse } from "src/DTO/PlayerResponse.dto";

@Injectable()
export class PlayerFassade extends IPlayerFassade {

    constructor(
        @Inject(IPlayerService)
        private readonly service: IPlayerService
    ) {
        super()
    }

    async getPlayer(id: string): Promise<PlayerResponse | null> {
        const player = await this.service.getPlayer(id)
        if(!player){
            return null
        }
        return player
    }
    async updateTeam(teamId: string, playerId: string,tx:Prisma.TransactionClient):Promise<PlayerResponse> {
       const res = await this.service.updateTeam(teamId, playerId,tx)
       return res

    }

}