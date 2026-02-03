import { FaceitProfile } from "@prisma/client";
import { FaceitStatsDto } from "src/DTO/Faceit/FaceitStatsReponse.dto";



export abstract class IFaceitService{



    abstract getOrCreate(payload: any): Promise<FaceitProfile>;
    abstract getStats():Promise<FaceitStatsDto>
    
    
}