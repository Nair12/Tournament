import { Match } from "@prisma/client";
import { PrismaService } from "prisma/PrismaClient";
import { MatchRegisterRequest } from "src/DTO/MatchRegisterRequest";


export abstract class IMatchRepository{
    
   abstract getMatch(id:String):Promise<Match | null>

   abstract registerMatch(payload:MatchRegisterRequest,creatorId:string):Promise<void>

   abstract deleteMatch(id:String):Promise<Match | null>

}