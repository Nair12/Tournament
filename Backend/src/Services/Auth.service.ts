import { BadRequestException, forwardRef, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { ITokenService } from "./IToken.service";
import { LoginRequest } from "src/DTO/LoginRequest.dto";
import * as bcrypt from 'bcrypt'
import { IPlayerService } from "./IPlayer.service";



@Injectable()
export class AuthService {
    constructor(
        @Inject(ITokenService)
        private tokenService: ITokenService,
        @Inject(forwardRef(()=>IPlayerService))
        private playerService: IPlayerService) { }

    async validate(payload: LoginRequest) {

        const player = await this.playerService.findByEmail(payload.email)

        if (player == null) throw new BadRequestException("User not found")

        const passwordMatch = await bcrypt.compare(payload.password,player.password)
        if(!passwordMatch){
            throw new UnauthorizedException("Invalid password")
        }
        return await this.tokenService.generateToken(player)
     
    }

}

