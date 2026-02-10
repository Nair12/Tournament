import { PlayerAddRequest } from "src/DTO/Player/PlayerAddRequset.dto";
import { IPlayerRepository } from "./IPlayer.repository";
import { PrismaService } from "prisma/PrismaClient";
import { FaceitProfile, Player, Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { TeamCreateRequest } from "src/DTO/TeamCreateRequest.dto";


export  type PlayerWithProfile = Player & { faceitProfile: FaceitProfile | null };

@Injectable()
export class PlayerRepository extends IPlayerRepository {
   
    constructor(private prisma: PrismaService) {
        super()
    }

    async getPlayer(id: string): Promise<Player | null> {

        const player = await this.prisma.player.findUnique({ where: { id: id }, include: { team: true,faceitProfile:true } })
        console.log("Player:"+ player?.faceitProfile?.nickname)

        if (!player) {
            return null
        }

        return player

    }
    async addPlayer(payload: PlayerAddRequest): Promise<void> {

        const res = await this.prisma.player.create({
            data: {
                password: String(payload.password),
                email: String(payload.email)
            }
        })

        



    }

    async playerExists(email: string): Promise<boolean> {
        const player = await this.prisma.player.findUnique({ where: { email: email } })
        if (player != null) {
            return true
        }
        return false
    }

    async updateTeamId(teamId: string, playerId: string, tx?: Prisma.TransactionClient): Promise<Player> {
        const dbClient = tx ? tx : this.prisma
        const player = await dbClient.player.update({
            where: { id: String(playerId) },
            data: { teamId: String(teamId) }
        })
        return player
    }

    // async findByName(name: string): Promise<Player | null> {
    //     const player = await this.prisma.player.findUnique({ where: { name: name } })
    //     if(!player){
    //         return null
    //     }
    //     return player

    // }

    async findByEmail(email: string): Promise<PlayerWithProfile | null> {
        const player = await this.prisma.player.findUnique({where:{email:email},include:{faceitProfile:true}})
        if(!player) return null
        return player as PlayerWithProfile

    }




}