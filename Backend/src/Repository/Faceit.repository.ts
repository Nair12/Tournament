import { Inject, Injectable } from "@nestjs/common";
import { IFaceitRepository } from "./IFaceit.repository";
import { FaceitProfile, FaceitStats, PrismaClient } from "@prisma/client";
import { PlayerFassade } from "src/Fassade/PlayerFassade";
import { IPlayerService } from "src/Services/IPlayer.service";
import { randomUUID } from "node:crypto";
import { PrismaService } from "prisma/PrismaClient";
import { FaceitUser } from "faceit-visa";
import { FaceitUserDto } from "src/DTO/FaceitUser.dto";


@Injectable()
export class FaceitRepository extends IFaceitRepository{

    constructor(
        
        private prisma: PrismaService,
    ){
        super()
    }

    async getOrCreate(payload:FaceitUserDto): Promise<FaceitProfile> {
        
        return await this.prisma.faceitProfile.upsert({
        where: { faceitId: payload.guid}, 
        update: {
            nickname: payload.nickname,
            avatar: payload.picture || null,
        },
        create: {
            faceitId: payload.guid,
            nickname: payload.nickname,
            avatar: payload.picture|| null,
            player: {
                connect: { email: payload.email} 
            }
        }
    });
    }
    async findByFaceitId(faceitId: string): Promise<FaceitProfile | null> {
        throw new Error("Method not implemented.");
    }
    async getStats(faceitId: string): Promise<FaceitStats | null> {
        throw new Error("Method not implemented.");
    }
    

}