import { Exclude, Expose, Type } from "class-transformer";
import { PlayerResponse } from "./Player/PlayerResponse.dto";




@Exclude()
export class TeamResponse
{ 
   @Expose()
   id:String

   @Expose()
   name:String

   @Expose()
   @Type(()=>PlayerResponse)
   players: PlayerResponse[]

   @Expose()
   @Type(()=>PlayerResponse)
   captain: PlayerResponse

   @Expose()
   avatar: string
   
}