import { FaceitStats } from "@prisma/client";
import { FaceitUserResponse } from "src/DTO/Faceit/FaceitUserResponse.dto";


export abstract class IFaceitApiService{

    abstract getUserData(faceitId:string):Promise<any>
    abstract getUserStats(faceitId:string):Promise<FaceitStats | null>
    
}