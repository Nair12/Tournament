import { FaceitStats } from "@prisma/client";
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";
import { FaceitUserResponse } from "src/DTO/Faceit/FaceitUserResponse.dto";


export abstract class IFaceitApiService{

    abstract getUserData(faceitId:string):Promise<any>
    abstract getUserStats(faceitId:string):Promise<FaceitStatsDto | null>
    abstract getFullPlayerDetails(faceitId:string):Promise<any>
    
}