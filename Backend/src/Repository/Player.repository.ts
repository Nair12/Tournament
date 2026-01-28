import { PlayerAddRequest } from "src/DTO/PlayerAddRequset.dto";
import { PlayerResponse } from "src/DTO/PlayerResponse.dto";
import { IPlayerRepository } from "./IPlayer.repository";
import { PrismaService } from "prisma/PrismaClient";
import { Player } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { TeamCreateRequest } from "src/DTO/TeamCreateRequest.dto";



@Injectable()
export class PlayerRepository extends IPlayerRepository {
    
    constructor(private prisma: PrismaService) {
        super()
    }

    async getPlayer(id: string): Promise<Player | null> {

        const player = await this.prisma.player.findUnique({ where: { id: id }, include: { team: true } })

        if (!player) {
            return null
        }

        return player

    }
    async addPlayer(payload: PlayerAddRequest): Promise<void> {

        const res = await this.prisma.player.create({
            data: {
                name: String(payload.name),
                password: String(payload.password),
                email: String(payload.email)
            }
        })

        console.log("Result:" + res)



    }

    async playerExists(email: string): Promise<boolean> {
        const player = await this.prisma.player.findUnique({ where: { email: email } })
        if (player != null) {
            return true
        }
        return false
    }

    async findByName(name: string): Promise<Player | null> {
        const player = await this.prisma.player.findUnique({ where: { name: name } })
        if(!player){
            return null
        }
        return player

    }
    async findByEmail(email: string): Promise<Player | null> {
        const player = await this.prisma.player.findUnique({where:{email:email}})
        if(!player) return null
        return player

    }




}