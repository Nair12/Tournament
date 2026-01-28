import { TournamentType } from "@prisma/client"
import { Type } from "class-transformer"

export class TournamentRegisterRequest{ 


  title: String

  @Type(()=>Date)
  startTime: Date

  @Type(()=>Date)
  endTime: Date
  
  type: TournamentType 

}

