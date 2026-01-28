import { TeamResponse } from "src/DTO/TeamReponse.dto";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest.dto";
import { TournamentResponse } from "src/DTO/TournamentResponse.dto";



export abstract class ITournamentService{
        
     abstract getTournament(id:String):Promise<TournamentResponse>
     abstract registerTournament(payload:TournamentRegisterRequest):Promise<void>
     abstract getTeams(id:String):Promise<TeamResponse[]>
     abstract addTeam(teamId:String,tournamentId:String):Promise<void>


}