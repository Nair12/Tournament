import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";


@Controller('resume')
export class ResumeController{


    @UseGuards(JwtAuthGuard)
    @Post()
    async registerResume(@Body() payload:ResumeRegisterRequest){


    }

    @Get("Roles")
    async getRoles()
    {


    }

}
