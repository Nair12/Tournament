import { Match } from "@prisma/client";
import { MatchRegisterRequest } from "src/DTO/MatchRegisterRequest";
import { IMatchRepository } from "./IMatch.repository";
import { Inject } from "@nestjs/common";
import { PrismaService } from "prisma/PrismaClient";
import { privateDecrypt } from "crypto";


export class MatchRepository extends IMatchRepository{

    constructor(
        @Inject(PrismaService)
        private service:PrismaService
    ){
        super()
    }

    async getMatch(id: String): Promise<Match | null> {

     const match = await this.service.match.findUnique({where:{id:String(id)}})

     if(!match){
        return null
     }
     return match

    }
    async registerMatch(payload: MatchRegisterRequest): Promise<void> {
        
        await this.service.match.create({
            data:{
                teamAId:String(payload.teamAId),
                teamBId:String(payload.teamBId),
                startTime: payload.startTime? payload.startTime: new Date(),
                matchType:payload.matchType


            }
        })



    }
    async deleteMatch(id: String): Promise<Match | null> {
          
        const match = await this.service.match.delete({where:{id:String(id)}})

        if(!match){
            return null
        }
        return match

    }

}