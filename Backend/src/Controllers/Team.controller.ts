import { Body, Controller,Delete,Get, Inject, NotFoundException, Param,Post, Query } from "@nestjs/common";
import { TeamCreateRequest } from "src/DTO/TeamCreateRequest";
import { ITeamRepository } from "src/Repository/ITeam.repository";
import { ITeamService } from "src/Services/ITeam.service";



@Controller("Team")
export class TeamController{
    constructor(
        @Inject(ITeamService)
        private readonly service:ITeamService
    ){}

    @Get()
    async getTeamByName(@Query('q')query:string)
    {
      const teams = await this.service.getByQuery(query)
      return teams
     

    }


    @Get(":id")
    async getTeam(@Param('id')id:string){
        const team = await this.service.deleteTeam(id)
        if(!team){
            throw new NotFoundException()
        }
        return team
    }


    @Post()
    async registerTeam(@Body() payload:TeamCreateRequest)
    {
        const team = await this.service.createTeam(payload)
        return team
    }

    @Delete(":id")
    async deleteTeam(@Param('id')id:string){
        const team = this.service.deleteTeam(id)
        return team
    }
}

