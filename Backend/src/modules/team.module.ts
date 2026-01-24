import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/PrismaClient";
import { TeamController } from "src/Controllers/Team.controller";
import { ITeamRepository } from "src/Repository/ITeam.repository";
import { TeamRepository } from "src/Repository/Team.repository";
import { ITeamService } from "src/Services/ITeam.service";
import { TeamService } from "src/Services/Team.service";


@Module(
    {
        controllers:[TeamController],
        providers:[
            {
                provide:ITeamRepository,
                useClass:TeamRepository

            },
            {
                provide:ITeamService,
                useClass:TeamService
            }
        ],
        exports:[ITeamService]
    })
    export class TeamModule {}
