import { BadRequestException, Inject, Injectable } from "@nestjs/common";
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
        const profileId = payload.faceitId;

        const existingStats = await this.prisma.faceitStats.findUnique({
            where: { faceitProfileId: profileId },
        });

        if (existingStats) {
          
            return this.prisma.faceitStats.update({
                where: { faceitProfileId: profileId },
                data: {
                    adr: parseFloat(payload.adr) || 0,
                    kdRatio: parseFloat(payload.kdRatio) || 0,
                    winRate: parseFloat(payload.winRate) || 0,
                    avg: payload.avg || 0,
                    matches: payload.matches || 0,
                    segments: {
                        deleteMany: {},
                        createMany: {
                            data: payload.segmentStats.map(s => ({
                                map: s.mapName || 'unknown',
                                kdRatio: parseFloat(s.kdRatio) || 0,
                                winRate: parseFloat(s.winRate) || 0,
                                matches: s.matches || 0,
                                adr: parseFloat(s.adr) || 0,
                                headshotPercentage: 0,
                                imgRegular:s.imgRegular,
                            }))
                        }
                    }
                },
                include:{segments:{orderBy:{kdRatio:"desc"}}}

            });
        } else {
            return this.prisma.faceitStats.create({
                data: {
                    adr: parseFloat(payload.adr) || 0,
                    kdRatio: parseFloat(payload.kdRatio) || 0,
                    winRate: parseFloat(payload.winRate) || 0,
                    avg: payload.avg || 0,
                    matches: payload.matches || 0,
                    faceitProfile: {
                        connect: { faceitId: profileId }
                    },
                    segments: {
                        createMany: {
                            data: payload.segmentStats.map(s => ({
                                map: s.mapName || 'unknown',
                                kdRatio: parseFloat(s.kdRatio) || 0,
                                winRate: parseFloat(s.winRate) || 0,
                                matches: s.matches || 0,
                                adr: parseFloat(s.adr) || 0,
                                headshotPercentage: 0,
                                imgRegular:s.imgRegular,                        
                            }))
                        }
                    }
                },
                include:{segments:{orderBy:{kdRatio: 'desc'}}}
                

            });
        }
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
                country: "UK"
            }
        });
    }
    async findByFaceitId(faceitId: string): Promise<FaceitProfile | null> {
        throw new Error("Method not implemented.");
    }
    async getStats(faceitId: string): Promise<FaceitStats | null> {
        const stats = await this.prisma.faceitStats.findUnique({ where: { faceitProfileId: faceitId }, include: { segments: {orderBy:{kdRatio:"desc"}}, weapons: true } })
        console.log("Current stats:" + JSON.stringify(stats))
        return stats

    }


}