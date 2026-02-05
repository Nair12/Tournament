import { Injectable } from "@nestjs/common";
import { ITokenService } from "./IToken.service";
import { JwtService } from "@nestjs/jwt";
import { Player } from "@prisma/client";
import { PlayerWithProfile } from "src/Repository/Player.repository";


@Injectable()
export class TokenService extends ITokenService{

    constructor(private jwtService:JwtService){super()}

    async generateToken(player:PlayerWithProfile) {
        const payload = {
            sub: player.id,
            faceitId: player.faceitProfile?.faceitId
        }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }
         
     

    }
    
}