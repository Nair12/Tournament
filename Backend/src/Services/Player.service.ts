import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { IPlayerService } from "./IPlayer.service";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";
import { ConflictException, Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";


@Injectable()
export class PlayerService extends IPlayerService {

    constructor(
        @Inject(IPlayerRepository)
        private playerRepository: IPlayerRepository
    ) {
        super()
    }


    async getPlayer(id: string): Promise<PlayerResponse | null> {

        const player = await this.playerRepository.getPlayer(id)
        if (!player) {
            return null
        }

        return plainToInstance(PlayerResponse, player, { excludeExtraneousValues: true })


    }
    async registerPlayer(payload: PlayerAddRequest): Promise<void> {

        if (await this.playerRepository.playerExists(String(payload.email))) {
            throw new ConflictException("Player exists")
        }
        if (await this.playerRepository.findByName(String(payload.name)) != null)
        {
           throw new ConflictException("Name is already taken")
        }

        await this.playerRepository.addPlayer(payload)


    }
}