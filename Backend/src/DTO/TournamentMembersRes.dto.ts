import { Exclude,Type,Expose } from "class-transformer";
import { TeamResponse } from "./TeamReponse.dto";
import { TournamentResponse } from "./TournamentResponse.dto";


@Exclude()
export class TournamentMembersRes{

  @Expose()
  id: String 
  
  @Expose()
  teamId: String
  @Expose()
  TournamentId: String

  @Expose()
  @Type( () => TournamentResponse)
  Tournament: TournamentResponse 

  @Expose()
  @Type( () => TeamResponse)
  Team: TeamResponse

  createdAt: Date
  updatedAt: Date

    


}