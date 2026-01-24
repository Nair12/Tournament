import { Tournament,Team } from "@prisma/client";
import { TournamentResponse } from "src/DTO/TournamentResponse";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest";



export abstract class ITournamentRepository{

    abstract getTournament(id:string):Promise<Tournament | null>
    abstract addTournament(payload:TournamentRegisterRequest):Promise<void>
    abstract getTeams(id:String):Promise<Team[] | null>
    abstract addTeam(teamId:String,tournamentId:String):Promise<void>
    

}