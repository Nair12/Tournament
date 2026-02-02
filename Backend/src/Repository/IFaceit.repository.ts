import { FaceitProfile, FaceitStats } from "@prisma/client";
import { FaceitUser } from "faceit-visa";
import { FaceitUserDto } from "src/DTO/FaceitUser.dto";



export abstract class IFaceitRepository{
   
    abstract getOrCreate(payload:FaceitUserDto): Promise<FaceitProfile>;

    abstract findByFaceitId(faceitId: string): Promise<FaceitProfile | null>;

    abstract getStats(faceitId: string): Promise<FaceitStats | null>;
     
}