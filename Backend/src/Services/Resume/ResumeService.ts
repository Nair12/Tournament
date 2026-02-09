import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { IResumeService } from "./IResume.service";


export class ResumeService extends IResumeService{

    


    registerResume(payload: ResumeRegisterRequest) {
        throw new Error("Method not implemented.");
    }
    getResume(id: string) {
        throw new Error("Method not implemented.");
    }
    deleteResume(id: string) {
        throw new Error("Method not implemented.");
    }
    actualizeResume(id: string) {
        throw new Error("Method not implemented.");
    }
    
}