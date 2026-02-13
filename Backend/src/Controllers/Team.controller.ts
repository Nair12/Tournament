import { Body, Controller,Delete,Get, Inject, NotFoundException, Param,Post, Query, Req, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { randomUUID } from "crypto";
import { diskStorage } from "multer";
import { extname } from "path";
import { TeamCreateRequest } from "src/DTO/TeamCreateRequest.dto";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";
import { ITeamRepository } from "src/Repository/ITeam.repository";
import { ITeamService } from "src/Services/ITeam.service";
import { ITeamValidator } from "src/Validators/ITeamValidator";



@Controller("Team")
export class TeamController{
    constructor(
        @Inject(ITeamService)
        private readonly service:ITeamService,
    ){}

    @Get()
    async getTeamByName(@Query('q')query:string)
    {
      const teams = await this.service.getByQuery(query)
      return teams
     

    }

    
    @Get(":id")
    @UseGuards(JwtAuthGuard)
    async getTeam(@Param('id')id:string,@Req() req){
        
        const userId = req.user['userId']

        
        
     
        const team = await this.service.getTeam(id,userId)
        if(!team){
            throw new NotFoundException()
        }
        console.log("Team: " + JSON.stringify(team))
        return team
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor("avatar",{
        storage:diskStorage({
        destination:'./Uploads/teams',
            filename:(req,file,cb)=>{
               const uuid = randomUUID()
               const ext = extname(file.originalname)
                 const filename = `${uuid}${ext}`
                 cb(null,filename)
             }
         })
        

     }
    ))
    async registerTeam(@Body() payload:TeamCreateRequest, @Req() req, @UploadedFile() file:Express.Multer.File)
    {
      
        const userId = req.user['userId']
        console.log(userId)
        const team = await this.service.createTeam(payload, userId, file.filename)
        return team
    }

    @UseGuards(JwtAuthGuard)
    @Delete(":id")
    async deleteTeam(@Param('id')id:string){
        const team = this.service.deleteTeam(id)
        return team
    }
}

