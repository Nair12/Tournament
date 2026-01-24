import { TeamResponse } from "src/DTO/TeamReponse";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest";
import { TournamentResponse } from "src/DTO/TournamentResponse";



export abstract class ITournamentService{
        
     abstract getTournament(id:String):Promise<TournamentResponse>
     abstract registerTournament(payload:TournamentRegisterRequest):Promise<void>
     abstract getTeams(id:String):Promise<TeamResponse[]>
     abstract addTeam(teamId:String,tournamentId:String):Promise<void>


}