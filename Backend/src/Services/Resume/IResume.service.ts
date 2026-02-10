import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { RoleDto } from "../../DTO/Resume/Role.dto";
import { ResumeResponse } from "src/DTO/Resume/ResumeResponse.dto";


export abstract class IResumeService {

    abstract registerResume(payload:ResumeRegisterRequest,id:string):Promise<ResumeResponse>

    abstract getResume(id:string)

    abstract deleteResume(id:string)
    
    abstract actualizeResume(id:string)

    abstract getRoles():Promise<RoleDto[]>

    abstract getResumes():Promise<ResumeResponse[]>
    


}