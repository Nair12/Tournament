import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { RoleDto } from "../../DTO/Resume/Role.dto";
import { ResumeResponse } from "src/DTO/Resume/ResumeResponse.dto";
import { ResumeFiltedDto } from "src/DTO/Resume/ResumeFilter.dto";


export abstract class IResumeService {

    abstract registerResume(payload:ResumeRegisterRequest,id:string):Promise<ResumeResponse>

    abstract getResume(id:string)

    abstract deleteResume(id:string)
    
    abstract actualizeResume(id:string)

    abstract getRoles():Promise<RoleDto[]>

    abstract getResumes(filters:ResumeFiltedDto):Promise<ResumeResponse[]>
    


}