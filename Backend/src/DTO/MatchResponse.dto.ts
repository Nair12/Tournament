import { Exclude, Expose,Type } from "class-transformer";
import { TeamResponse } from "./TeamReponse.dto";
import {MatchType} from "@prisma/client"
import { TournamentResponse } from "./TournamentResponse.dto";



@Exclude()
export class MatchResponse{
     
  @Expose()
  id:String

  @Expose()
  matchType: MatchType

  @Expose()
  tournamentId: String | null

  @Expose()
  teamAId: String
  @Expose()
  teamBId: String
    
  @Expose()
  @Type(()=>TournamentResponse)
  tournament: TournamentResponse | null 

  @Expose()
  @Type(()=>TeamResponse)
  teamA:TeamResponse

  @Expose()
  @Type(()=> TeamResponse)
  teamB: TeamResponse 
  
  @Expose()
  startTime: Date | null // Filling if match planned in future

  
  createdAt:Date
  updatedAt: Date




}