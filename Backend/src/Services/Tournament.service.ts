import { Inject, NotFoundException } from "@nestjs/common";
import { ITournamentService } from "./ITournament.service";
import { ITournamentRepository } from "src/Repository/ITournament.repository";
import { TeamResponse } from "src/DTO/TeamReponse.dto";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest.dto";
import { TournamentResponse } from "src/DTO/TournamentResponse.dto";
import { plainToInstance } from "class-transformer";



export class TournamentSerivce extends ITournamentService {

    constructor(
        @Inject(ITournamentRepository)
        private repository : ITournamentRepository
    ){
        super()
    }



    async getTournament(id: string): Promise<TournamentResponse> {

       const tournament = await this.repository.getTournament(id)
       if(!tournament){
        throw new NotFoundException()
       }
       return plainToInstance(TournamentResponse,tournament,{excludeExtraneousValues:true})

    }
    async registerTournament(payload: TournamentRegisterRequest): Promise<void> {
        await this.repository.addTournament(payload,"akopoak-qsjqosj")
       
    }
    async getTeams(id: String): Promise<TeamResponse[]> {
        const teams = await this.repository.getTeams(id)
       
        if(!teams) return []

        return plainToInstance(TeamResponse,teams,{excludeExtraneousValues:true})
        

        
    }
    async addTeam(teamId: String,tournamentId:String): Promise<void> {
        await this.repository.addTeam(teamId,tournamentId)
    }
   
    


}