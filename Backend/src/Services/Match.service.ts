import { Inject } from "@nestjs/common";
import { IMatchSerivce } from "./IMatch.service";
import { IMatchRepository } from "src/Repository/IMatch.repository";
import { MatchRegisterRequest } from "src/DTO/MatchRegisterRequest.dto";
import { MatchResponse } from "src/DTO/MatchResponse.dto";
import { plainToInstance } from "class-transformer";



export class MatchSerivce extends IMatchSerivce{
   
     constructor(
        @Inject(IMatchRepository)
        private repository:IMatchRepository
    ){super()}


     async  getMatch(id: string):Promise<MatchResponse | null> {
           const match = await this.repository.getMatch(id)

           if(!match){
            return null
           }
           return plainToInstance(MatchResponse,match,{excludeExtraneousValues:true})

      }
      async registerMatch(payload: MatchRegisterRequest): Promise<void> {
         await this.repository.registerMatch(payload,"akoakakoaoka")
        
      }
      async deleteMatch(id: string): Promise<MatchResponse | null> {
         
        const match =  await this.repository.deleteMatch(id)
        
        return plainToInstance(MatchResponse,match,{excludeExtraneousValues:true})

         
      }

     
    
}

