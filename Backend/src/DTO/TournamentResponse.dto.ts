import { Exclude, Expose, Type } from "class-transformer";
import { TournamentType } from "@prisma/client";
import { MatchResponse } from "./MatchResponse.dto";
import { TournamentMembersRes } from "./TournamentMembersRes.dto";

@Exclude()
export class TournamentResponse{
    
    @Expose()
    id: String
     @Expose()
    title: String
     @Expose()
    startTime: Date
     @Expose()
    endTime: Date
    @Expose()
    type: TournamentType 


    
  @Expose()
  @Type(()=> MatchResponse)
  mathes: MatchResponse[]

  @Expose()
  @Type(()=>TournamentMembersRes)
  teams: TournamentMembersRes[]





}