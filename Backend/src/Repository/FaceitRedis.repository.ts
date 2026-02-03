import { FaceitProfile, FaceitStats } from "@prisma/client";
import { FaceitUserRequstDto } from "src/DTO/Faceit/FaceitUserRequest.dto";
import { IFaceitRepository } from "./IFaceit.repository";
import { FaceitRepository } from "./Faceit.repository";
import { Inject } from "@nestjs/common";



export class FaceitRedisRepository extends IFaceitRepository{
   
    
    constructor(
        @Inject(FaceitRepository)
        private readonly dbrepo:FaceitRepository
    ){
        super()
    }

     updateStats(payload:FaceitStats): Promise<void> {
        throw new Error("Method not implemented.");
    }


    async getOrCreate(payload: FaceitUserRequstDto): Promise<FaceitProfile> {
       const result  = await this.dbrepo.getOrCreate(payload)
       return result
    }
    async findByFaceitId(faceitId: string): Promise<FaceitProfile | null> {
        const result = await this.dbrepo.findByFaceitId(faceitId)
        return result
    }
    async getStats(faceitId: string): Promise<FaceitStats | null> {
        return null 
    }

}