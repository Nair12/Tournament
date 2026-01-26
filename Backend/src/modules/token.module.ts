import { Global, Module } from "@nestjs/common";
import { ITokenService } from "src/Services/IToken.service";
import { TokenService } from "src/Services/Token.service";
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    imports:[JwtModule.register({
          secret: process.env.JWT_SECRET_KEY,
          signOptions: { expiresIn: '1h' },
        }),],
    providers:[
        {
            provide:ITokenService,
            useClass:TokenService
        }
    ],
    exports:[ITokenService,JwtModule]
})
export class TokenModule{}