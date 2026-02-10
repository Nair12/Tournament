import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";


export abstract class IResumeService {

    abstract registerResume(payload:ResumeRegisterRequest)

    abstract getResume(id:string)

    abstract deleteResume(id:string)
    
    abstract actualizeResume(id:string)


}