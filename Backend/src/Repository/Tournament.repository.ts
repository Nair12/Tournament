import { Injectable } from "@nestjs/common";
import { PrismaService } from "prisma/PrismaClient";
import { ITournamentRepository } from "./ITournament.repository";
import { Tournament, Team } from "@prisma/client";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest";




@Injectable()
export class TournamentRepository extends ITournamentRepository{
     constructor(private prisma:PrismaService){
           super()
    }

    async getTournament(id: string): Promise<Tournament | null> {

    const tournament = await this.prisma.tournament.
    findUnique({where:{id: id},include:{teams:true,mathes:true}})
    
    if(!tournament){
        return null
    }
    
    return tournament

    }

    async addTournament(payload: TournamentRegisterRequest): Promise<void> {
         
        await this.prisma.tournament.create({data:{
            title:String(payload.title),
            startTime:new Date(payload.startTime).toISOString(),
            endTime:new Date(payload.endTime).toISOString(),
            type:payload.type
        }
        })
       

    }

   async getTeams(id: String): Promise<Team[]> {   

       const teams  = await this.prisma.team.
       findMany(
        {where:
            {tournaments: {
                some:
                {TournamentId:String(id)}

        }}}
    )

    if(teams) return []
    return teams
    }

    async addTeam(teamId: String,tournamentId:String): Promise<void> {

        await this.prisma.tournamentMembers.create({data:{
            teamId:String(teamId),
            TournamentId:String(tournamentId)
        }})
        

    }
  
   
    

    
   

}