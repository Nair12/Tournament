import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";


@Controller('resume')
export class ResumeController{


    @UseGuards(JwtAuthGuard)
    @Post()
    async registerResume(@Body() payload){


    }

    @Get("Roles")
    async getRoles()
    {
        

    }

}
