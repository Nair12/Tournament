import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { IResumeRepository } from "./IResume.repository";
import { Inject } from "@nestjs/common";
import { PrismaService } from "prisma/PrismaClient";
import { Resume } from "@prisma/client";



export class ResumeRepository extends IResumeRepository{
    
    constructor(
       private  prisma:PrismaService
    ){
     super()
    }


    async registerResume(payload: ResumeRegisterRequest,id:string):Promise<Resume> {
         const resume = await this.prisma.resume.create({
            data:{
                description:payload.description,
                language:payload.language,
                player:{
                    connect:{
                        id:id
                    }
                },
                roles: {
                    connect: payload.roles.map(roleId =>({ id: roleId.id}))
                },
                type:payload.type
            }
         })
         return resume 
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