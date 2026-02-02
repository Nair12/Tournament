import { forwardRef, Module } from "@nestjs/common";
import { FaceitController } from "src/Controllers/Faceit.controller";
import { FaceitRepository } from "src/Repository/Faceit.repository";
import { IFaceitRepository } from "src/Repository/IFaceit.repository";
import { FaceitService } from "src/Services/FaceitService";
import { IFaceitService } from "src/Services/IFaceitService";
import { PlayerModule } from "./player.module";
import { AuthModule } from "./auth.module";
import { FaceitOAuthService } from "src/Services/FaceitOAuthService";



@Module({
    imports:[forwardRef(()=>PlayerModule), forwardRef(()=>AuthModule)],
    controllers:[FaceitController],
    providers:[
        {
            provide:IFaceitService,
            useClass:FaceitService,
        },
        {
            provide:IFaceitRepository,
            useClass:FaceitRepository,
        },
        FaceitOAuthService
    ],
    exports:[IFaceitService]
})
export class FaceitModule{}