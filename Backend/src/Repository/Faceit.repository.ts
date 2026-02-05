import { Inject, Injectable } from "@nestjs/common";
import { IFaceitRepository } from "./IFaceit.repository";
import { FaceitProfile, FaceitStats, PrismaClient } from "@prisma/client";
import { PlayerFassade } from "src/Fassade/PlayerFassade";
import { IPlayerService } from "src/Services/IPlayer.service";
import { randomUUID } from "node:crypto";
import { PrismaService } from "prisma/PrismaClient";
import { FaceitUser } from "faceit-visa";
import { FaceitUserRequstDto } from "src/DTO/Faceit/FaceitUserRequest.dto";
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";


@Injectable()
export class FaceitRepository extends IFaceitRepository {


    constructor(

        private prisma: PrismaService,
    ) {
        super()
    }
    async updateStats(payload: FaceitStatsDto): Promise<FaceitStats> {

        const stats = await this.prisma.faceitStats.upsert({
            where: { faceitProfileId: payload.faceitId },
            update: {
                adr: parseFloat(payload.adr),
                kdRatio: parseFloat(payload.kdRatio),
                winRate: parseFloat(payload.winRate),
                avg: payload.avg,
                segments: {
                    deleteMany: {},
                    createMany: {
                        data: payload.segmentStats.map(s => ({
                            kdRatio:parseFloat(s.kdRatio),
                            adr:parseFloat(payload.adr),
                            map:s.mapName,
                            winRate:parseFloat(s.winRate),
                            matches:s.matches,
                            headshotPercentage:0,
                        })),
                    }



                },
            },
                create: {
                    adr: parseFloat(payload.adr),
                    kdRatio: parseFloat(payload.kdRatio),
                    winRate: parseFloat(payload.winRate),
                    avg: payload.avg,
                    matches: payload.matches,
                    segments:{
                        createMany:{
                            data: payload.segmentStats.map(s=>({
                                 kdRatio:parseFloat(s.kdRatio),
                                 adr:parseFloat(payload.adr),
                                 map:s.mapName,
                                 winRate:parseFloat(s.winRate),
                                 matches:s.matches,
                                 headshotPercentage:0,

                            }))
                        }
                    },
                    faceitProfile: {
                        connect: {
                            faceitId: payload.faceitId
                        }
                    },
                    

                    

                }
            
            })

            return stats 
    }

    async getOrCreate(payload: FaceitUserRequstDto): Promise<FaceitProfile> {

        return await this.prisma.faceitProfile.upsert({
            where: { faceitId: payload.guid },
            update: {
                nickname: payload.nickname,
                avatar: payload.picture || null,
                skillLevel: payload.skillLevel,
                elo: payload.elo,
            },
            create: {
                faceitId: payload.guid,
                nickname: payload.nickname,
                avatar: payload.picture || null,
                skillLevel: payload.skillLevel,
                elo: payload.elo,
                player: {
                    connect: { email: payload.email }
                },
                country:"UK"
            }
        });
    }
    async findByFaceitId(faceitId: string): Promise<FaceitProfile | null> {
        throw new Error("Method not implemented.");
    }
    async getStats(faceitId: string): Promise<FaceitStats | null> {
        const stats = await this.prisma.faceitStats.findUnique({ where: { faceitProfileId: faceitId }, include: { segments: true, weapons: true } })
        return stats

    }


}