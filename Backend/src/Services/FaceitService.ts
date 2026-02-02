import { Inject, Injectable, NotImplementedException } from "@nestjs/common";
import { FaceitProfile } from "@prisma/client";
import { IFaceitService } from "./IFaceitService";
import { IFaceitRepository } from "src/Repository/IFaceit.repository";
import { IPlayerService } from "./IPlayer.service";
import { randomUUID } from "node:crypto";
import { FaceitUser } from "faceit-visa";
import { FaceitUserRequstDto } from "src/DTO/FaceitUserRequest.dto";


@Injectable()
export class FaceitService extends IFaceitService {

    constructor
        (@Inject(IFaceitRepository) private faceitRepository: IFaceitRepository,
         @Inject(IPlayerService) private playerService: IPlayerService

        ) {
        super()
    }

    async getOrCreate(payload:FaceitUserRequstDto): Promise<FaceitProfile> {
          const player = await this.playerService.findByEmail(payload.email ||'')
          
          if(!player){
                await this.playerService.registerPlayer({
                    email: payload.email || '',
                    password: randomUUID()
                })
          }
         return await this.faceitRepository.getOrCreate(payload);
          

    }
}