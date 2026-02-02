import { FaceitProfile } from "@prisma/client";



export abstract class IFaceitService{



    abstract getOrCreate(payload: any): Promise<FaceitProfile>;
    

    
}