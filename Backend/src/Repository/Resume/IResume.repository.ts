import { Resume, Role } from "@prisma/client";
import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { ResumeResponse } from "src/DTO/Resume/ResumeResponse.dto";




export abstract class IResumeRepository {
    
    abstract registerResume(payload: ResumeRegisterRequest,id:string):Promise<Resume>

    abstract getResumes():Promise<Resume[]>
    
    abstract getRoles():Promise<Role[]>

    abstract getResume(id: string)

    abstract deleteResume(id: string)

    abstract actualizeResume(id: string)
}