import { Controller, Inject,Get, Param, Post,Body } from "@nestjs/common";
import { privateDecrypt } from "crypto";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest";
import { TournamentResponse } from "src/DTO/TournamentResponse";
import { ITournamentService } from "src/Services/ITournament.service";



@Controller("Tournament")
export class TournamentController{
    constructor(
        @Inject(ITournamentService)
        private service:ITournamentService
    ){}


    
    @Get(':id')
    async getTournament(@Param('id') id:string):Promise<TournamentResponse | []> {
       const tournament =  await this.service.getTournament(id)
       if(!tournament) return []
       return tournament

    }


    @Post()
    async addTournament(@Body() payload:TournamentRegisterRequest){
        await this.service.registerTournament(payload)
        return {message:"Tournament added succsessfully"}
    }






}
