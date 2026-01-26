import { Injectable } from "@nestjs/common";
import { ITokenService } from "./IToken.service";
import { JwtService } from "@nestjs/jwt";
import { Player } from "@prisma/client";


@Injectable()
export class TokenService extends ITokenService{

    constructor(private jwtService:JwtService){super()}

    async generateToken(player:Player) {
        const payload = {
            sub: player.id
        }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
         
     

    }
    
}