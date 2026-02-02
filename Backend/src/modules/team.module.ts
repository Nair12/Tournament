import { Module } from "@nestjs/common";
import { TeamController } from "src/Controllers/Team.controller";
import { IPlayerFassade } from "src/Fassade/IPlayerFassade";
import { ITeamRepository } from "src/Repository/ITeam.repository";
import { TeamRepository } from "src/Repository/Team.repository";
import { ITeamService } from "src/Services/ITeam.service";
import { TeamService } from "src/Services/Team.service";
import { ITeamValidator } from "src/Validators/ITeamValidator";
import { TeamValidador } from "src/Validators/TeamValdator";
import { PlayerModule } from "./player.module";


@Module(
    {
        imports:[PlayerModule],
        controllers:[TeamController],
        providers:[
            {
                provide:ITeamRepository,
                useClass:TeamRepository

            },
            {
                provide:ITeamService,
                useClass:TeamService
            },
            {
                provide: ITeamValidator,
                useClass: TeamValidador
            },
       
       
        ],
        exports:[ITeamService]
    })
    export class TeamModule {}
