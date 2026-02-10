import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post, Req, UseGuards } from "@nestjs/common";
import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";
import { IResumeService } from "src/Services/Resume/IResume.service";


@Controller('resume')
export class ResumeController{
   
    constructor(
        @Inject(IResumeService)
        private serivce:IResumeService
    ){}

    @UseGuards(JwtAuthGuard)
    @Get()
    @HttpCode(HttpStatus.NO_CONTENT)
    async getResumes()
    {
        console.log("Resumes started")
        const resumes = await this.serivce.getResumes()
        if(!resumes.length || resumes.length == 0) return
        
        console.log(resumes)
        return resumes
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async registerResume(@Body() payload:ResumeRegisterRequest,@Req()req){
        const userId = req.user['userId']
        const res = await this.serivce.registerResume(payload,userId)
        return res
    }
    
    @UseGuards(JwtAuthGuard)
    @Get("roles")
    async getRoles()
    {
        const roles = await this.serivce.getRoles()
        return roles 
    }

}
