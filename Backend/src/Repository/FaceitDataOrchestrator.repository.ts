import { FaceitProfile, FaceitStats } from "@prisma/client";
import { FaceitUserRequstDto } from "src/DTO/Faceit/FaceitUserRequest.dto";
import { IFaceitRepository } from "./IFaceit.repository";
import { FaceitRedisRepository } from "./FaceitRedis.repository";
import { Inject } from "@nestjs/common";
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";
import { IFaceitApiService } from "src/Services/Faceit/IFaceitApi.service";



export class FaceitDataOrchestrator extends IFaceitRepository {
   

    constructor(
        @Inject(FaceitRedisRepository)
        private redis: FaceitRedisRepository,
        @Inject(IFaceitApiService)
        private faceitApi: IFaceitApiService
    ) { super() }


    async updateStats(payload:FaceitStatsDto): Promise<FaceitStats> {
        return this.redis.updateStats(payload);
    }

    async getOrCreate(payload: FaceitUserRequstDto): Promise<FaceitProfile> {
        const res = await this.redis.getOrCreate(payload)
        return res
    }
    async findByFaceitId(faceitId: string): Promise<FaceitProfile | null> {
        const res = await this.redis.findByFaceitId(faceitId)
        return res
    }
    async getStats(faceitId: string): Promise<FaceitStats | null> {
        console.log("orchestrator start")
        const res = await this.redis.getStats(faceitId)
        if(!res){
           const statsFromApi = await this.faceitApi.getUserStats(faceitId)  // if we dont have row in db making request to get stats
           if(statsFromApi){
           const stats = this.redis.updateStats(statsFromApi)
           return stats
           }
        }


     

        const diffInMinutes = (new Date().getTime() - new Date(res?.updatedAt!).getTime()) / (1000*60)
        if(diffInMinutes > 20){
            const statsFromApi = await this.faceitApi.getUserStats(faceitId)
            if(!statsFromApi) return res // returning old data from db if Faceit api request rejected

            const stats = await this.redis.updateStats(statsFromApi)
            return stats   
        }
        return res // if data actual


        
    }

}