import { FaceitProfile, FaceitStats } from "@prisma/client";
import { FaceitUser } from "faceit-visa";
import { FaceitUserRequstDto } from "src/DTO/FaceitUserRequest.dto";



export abstract class IFaceitRepository{
   
    abstract getOrCreate(payload:FaceitUserRequstDto): Promise<FaceitProfile>;

    abstract findByFaceitId(faceitId: string): Promise<FaceitProfile | null>;

    abstract getStats(faceitId: string): Promise<FaceitStats | null>;
     
}