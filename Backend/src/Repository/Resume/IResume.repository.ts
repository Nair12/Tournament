import { Resume } from "@prisma/client";
import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";




export abstract class IResumeRepository {
    
    abstract registerResume(payload: ResumeRegisterRequest,id:string):Promise<Resume>

    abstract getResume(id: string)

    abstract deleteResume(id: string)

    abstract actualizeResume(id: string)
}