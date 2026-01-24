import { Module } from "@nestjs/common";
import { TournamentController } from "src/Controllers/Tournament.controller";
import { ITournamentRepository } from "src/Repository/ITournament.repository";
import { TournamentRepository } from "src/Repository/Tournament.repository";
import { ITournamentService } from "src/Services/ITournament.service";
import { TournamentSerivce } from "src/Services/Tournament.service";



@Module(
    {
        controllers:[TournamentController],
        providers:[
            {
                provide:ITournamentRepository,
                useClass:TournamentRepository

            },
            {
                provide:ITournamentService,
                useClass:TournamentSerivce
            }
        ],
        exports:[ITournamentService]
    }
)
export class ToruanamentModule{}