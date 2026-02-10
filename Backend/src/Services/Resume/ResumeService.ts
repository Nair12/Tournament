import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { IResumeService } from "./IResume.service";
import { RoleDto } from "src/DTO/Resume/Role.dto";
import { Inject, NotFoundException } from "@nestjs/common";
import { IResumeRepository } from "src/Repository/Resume/IResume.repository";
import { plainToInstance } from "class-transformer";
import { ResumeResponse } from "src/DTO/Resume/ResumeResponse.dto";
import { ApiNoContentResponse } from "@nestjs/swagger";


export class ResumeService extends IResumeService {


    constructor(
        @Inject(IResumeRepository)
        private repository: IResumeRepository
    ) { super() }


    async getRoles(): Promise<RoleDto[]> {
        const roles = await this.repository.getRoles()

        return plainToInstance(RoleDto, roles, { excludeExtraneousValues: true })
    }

    async getResumes(): Promise<ResumeResponse[]> {
       const resumes =  await this.repository.getResumes()
       return plainToInstance(ResumeResponse,resumes,{excludeExtraneousValues:true})
    }

    async registerResume(payload: ResumeRegisterRequest, id: string): Promise<ResumeResponse> {
        const res = await this.repository.registerResume(payload, id)

        return plainToInstance(ResumeResponse, res, { excludeExtraneousValues: true })
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