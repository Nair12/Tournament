import { forwardRef, Module } from "@nestjs/common";
import { FaceitController } from "src/Controllers/Faceit.controller";
import { FaceitRepository } from "src/Repository/Faceit.repository";
import { IFaceitRepository } from "src/Repository/IFaceit.repository";
import { FaceitService } from "src/Services/Faceit/FaceitService";
import { IFaceitService } from "src/Services/Faceit/IFaceitService";
import { PlayerModule } from "./player.module";
import { AuthModule } from "./auth.module";
import { FaceitOAuthService } from "src/Services/Faceit/FaceitOAuthService";
import { FaceitDataOrchestrator } from "src/Repository/FaceitDataOrchestrator.repository";
import { FaceitRedisRepository } from "src/Repository/FaceitRedis.repository";
import { FaceitApiService } from "src/Services/Faceit/FaceitApiService";
import { IFaceitApiService } from "src/Services/Faceit/IFaceitApi.service";
import { RedisModule } from "./redis.module";



@Module({
    imports:[forwardRef(()=>PlayerModule), forwardRef(()=>AuthModule),RedisModule],
    controllers:[FaceitController],
    providers:[
        {
            provide:IFaceitService,
            useClass:FaceitService,
        },
        {
            provide:IFaceitApiService,
            useClass:FaceitApiService
        },
         FaceitRepository,
         FaceitRedisRepository,
         FaceitOAuthService,
        
        {
            provide:IFaceitRepository,
            useClass:FaceitDataOrchestrator,
        },
      
      

        
    ],
    exports:[IFaceitService]
})
export class FaceitModule{}