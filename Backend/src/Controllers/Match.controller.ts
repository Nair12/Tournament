import {
    Controller, Inject, NotFoundException, Get, Post,
    Body, BadRequestException, Delete, Param,
    InternalServerErrorException,
    UseGuards
} from "@nestjs/common";
import { privateDecrypt } from "crypto";
import { applyMixins } from "rxjs/internal/util/applyMixins";
import { MatchRegisterRequest } from "src/DTO/MatchRegisterRequest";
import { MatchResponse } from "src/DTO/MatchResponse";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";
import { IMatchSerivce } from "src/Services/IMatch.service";



@Controller("Match")
export class MatchController {

    constructor(
        @Inject(IMatchSerivce)
        private readonly service: IMatchSerivce
    ) { }


    @Get(':id')
    async getMatch(@Param('id') id: string): Promise<MatchResponse | null> {
        const match = await this.service.getMatch(id)

        if (!match) {
            throw new NotFoundException("Match not found")
        }
        return match

    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async registerMatch(@Body() payload: MatchRegisterRequest) 
    {
        await this.service.registerMatch(payload)
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async deleteMatch(@Param('id') id: string) {
        const match = await this.service.deleteMatch(id)
        if (!match) {
            throw new InternalServerErrorException("Failed to delete match")
        }
        return match

    }






}
