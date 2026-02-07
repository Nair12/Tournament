import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { IPlayerService } from "./IPlayer.service";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset.dto";
import { PlayerResponse } from "src/DTO/PlayerResponse.dto";
import { ConflictException, forwardRef, Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Player, Prisma } from "@prisma/client";
import { AuthService } from "./Auth.service";
import { LoginRequest } from "src/DTO/LoginRequest.dto";
import * as bcrypt from 'bcrypt'
import { PlayerWithProfile } from "src/Repository/Player.repository";

@Injectable()
export class PlayerService extends IPlayerService {
    constructor(
        @Inject(IPlayerRepository)
        private playerRepository: IPlayerRepository,
        @Inject(forwardRef(() => AuthService))
        private authSerive: AuthService
    ) {
        super()
    }


    async updateTeam(teamId: string, playerId: string, tx?: Prisma.TransactionClient): Promise<PlayerResponse> {
        const player = await this.playerRepository.updateTeamId(teamId, playerId, tx)

        return plainToInstance(PlayerResponse, player, { excludeExtraneousValues: true })
    }


    async getPlayer(id: string): Promise<PlayerResponse | null> {

        const player = await this.playerRepository.getPlayer(id)
        if (!player) {
            return null
        }

        return plainToInstance(PlayerResponse, player,{excludeExtraneousValues:true})


    }
    async registerPlayer(payload: PlayerAddRequest): Promise<void> {

        if (await this.playerRepository.playerExists(String(payload.email))) {
            throw new ConflictException("Player exists")
        }

        const hashedPassword = await bcrypt.hash(payload.password.toString(), 10)
        payload.password = hashedPassword

        await this.playerRepository.addPlayer(payload)

    }

    // getUserData(id:string): Promise<PlayerResponse> {
    // }




    async findByEmail(email: string): Promise<PlayerWithProfile | null> {
        const player = this.playerRepository.findByEmail(email)
        if (!player) return null
        return player

    }

    async login(payload: LoginRequest): Promise<any> {
        const res = this.authSerive.validate(payload)
        return res
    }


}