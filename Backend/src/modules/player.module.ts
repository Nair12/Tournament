import { Module } from "@nestjs/common";
import { PlayerController } from "src/Controllers/Player.controller";
import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { PlayerRepository } from "src/Repository/Player.repository";
import { IPlayerSerivce } from "src/Services/IPlayer.service";
import { PlayerService } from "src/Services/Player.service";


@Module({
    controllers:[PlayerController],
    providers:[
        {
            provide:IPlayerRepository,
            useClass:PlayerRepository
        },
        {
            provide:IPlayerSerivce,
            useClass:PlayerService
        }
    ],
    exports:[IPlayerSerivce]


    
})
export class PlayerModule{}