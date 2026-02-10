import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { IResumeRepository } from "./IResume.repository";
import { Inject } from "@nestjs/common";
import { PrismaService } from "prisma/PrismaClient";
import { Resume, Role } from "@prisma/client";



export class ResumeRepository extends IResumeRepository {



    constructor(
        @Inject(PrismaService)
        private prisma: PrismaService
    ) {
        super()
    }
    async getRoles(): Promise<Role[]> {
        const roles = await this.prisma.role.findMany()
        return roles
    }


    async registerResume(payload: ResumeRegisterRequest, id: string): Promise<Resume> {
        const resume = await this.prisma.resume.create({
            data: {
                description: payload.description,
                language: payload.language,
                player: {
                    connect: {
                        id: id
                    }
                },
                roles: {
                    connect: payload.roles.map(roleID => ({ id: roleID }))
                },
                type: payload.type
            },
            include: {
                player: true
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

    async getResumes(): Promise<Resume[]> {
       return await this.prisma.resume.findMany({include:{player:{include:{faceitProfile:true}}}})

    }

}