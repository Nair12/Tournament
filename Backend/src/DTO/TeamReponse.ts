import { Exclude, Expose, Type } from "class-transformer";
import { PlayerResponse } from "./PlayerResponse";



@Exclude()
export class TeamResponse
{ 
   @Expose()
   id:String

   @Expose()
   teamName:String

   @Expose()
   @Type(()=>PlayerResponse)
   players: PlayerResponse[]
   




}