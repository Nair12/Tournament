import { forwardRef, Module } from "@nestjs/common";
import { PlayerController } from "src/Controllers/Player.controller";
import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { PlayerRepository } from "src/Repository/Player.repository";
import { IPlayerService } from "src/Services/IPlayer.service";
import { PlayerService } from "src/Services/Player.service";
import { TokenModule } from "./token.module";
import { AuthModule } from "./auth.module";
import { IPlayerFassade } from "src/Fassade/IPlayerFassade";
import { PlayerFassade } from "src/Fassade/PlayerFassade";


@Module({
    imports:[TokenModule,forwardRef(()=>AuthModule)],
    controllers:[PlayerController],
    providers:[
        {
            provide:IPlayerRepository,
            useClass:PlayerRepository
        },
        {
            provide:IPlayerService,
            useClass:PlayerService
        },
        {
            provide:IPlayerFassade,
            useClass:PlayerFassade
        }
    ],
    exports:[IPlayerService,IPlayerFassade]


    
})
export class PlayerModule{}