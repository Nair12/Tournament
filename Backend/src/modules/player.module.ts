import { Module } from "@nestjs/common";
import { PlayerController } from "src/Controllers/Player.controller";
import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { PlayerRepository } from "src/Repository/Player.repository";
import { IPlayerService } from "src/Services/IPlayer.service";
import { PlayerService } from "src/Services/Player.service";
import { TokenModule } from "./token.module";


@Module({
    imports:[TokenModule],
    controllers:[PlayerController],
    providers:[
        {
            provide:IPlayerRepository,
            useClass:PlayerRepository
        },
        {
            provide:IPlayerService,
            useClass:PlayerService
        }
    ],
    exports:[IPlayerService]


    
})
export class PlayerModule{}