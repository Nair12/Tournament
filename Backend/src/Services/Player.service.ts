import { IPlayerRepository } from "src/Repository/IPlayer.repository";
import { IPlayerSerivce } from "./IPlayer.service";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";
import { Inject, Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";


@Injectable()
export class PlayerService extends IPlayerSerivce{
   
    constructor(
        @Inject(IPlayerRepository)
        private playerRepository:IPlayerRepository
    ){
        super()
    }


    async getUser(id: string): Promise<PlayerResponse | null> {
      
      const player =  await this.playerRepository.getUser(id)
      if(!player){
        return null
      }
      
      return plainToInstance(PlayerResponse,player,{excludeExtraneousValues:true})


    }
    async addUser(payload: PlayerAddRequest): Promise<void> {
        try{
            await this.playerRepository.addUser(payload)
        }
        catch(error){
            console.log(error)
        }

    }
}