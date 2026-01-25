import { Module } from "@nestjs/common";
import { ITokenService } from "src/Services/IToken.service";
import { TokenService } from "src/Services/Token.service";


@Module({
    providers:[
        {
            provide:ITokenService,
            useClass:TokenService
        }
    ],
    exports:[ITokenService]
})
export class TokenModule{}