import { MatchType } from "@prisma/client";
import { IsBase32 } from "class-validator";



export class MatchRegisterRequest{
       
    matchType:MatchType

    teamAID:String
    teamBId: String
    
    tournamentId?:String


    startTime?:Date
    
}