import { Controller, Inject,Get, Param, Post,Body, UseGuards } from "@nestjs/common";
import { privateDecrypt } from "crypto";
import { TournamentRegisterRequest } from "src/DTO/TournamentRegisterRequest.dto";
import { TournamentResponse } from "src/DTO/TournamentResponse.dto";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";
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

    @UseGuards(JwtAuthGuard)
    @Post()
    async addTournament(@Body() payload:TournamentRegisterRequest){
        await this.service.registerTournament(payload)
        return {message:"Tournament added succsessfully"}
    }






}
