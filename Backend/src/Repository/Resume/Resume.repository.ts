import { ResumeRegisterRequest } from "src/DTO/Resume/ResumeRegisterRequest.dto";
import { IResumeRepository } from "./IResume.repository";
import { Inject } from "@nestjs/common";
import { PrismaService } from "prisma/PrismaClient";
import { Resume, ResumeType, Role } from "@prisma/client";
import { ResumeFiltedDto } from "src/DTO/Resume/ResumeFilter.dto";
import { last } from "rxjs";



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

    async getResume(id: string) {
        const resume = await this.prisma.resume.findFirst({
            where: { id: id }
        })

    }
    async deleteResume(id: string) {
        const deletedResume = await this.prisma.resume.delete({
            where: { id: id }
        })
    }
    async actualizeResume(id: string) {
        const updatedResume = await this.prisma.resume.update({
            where: { id: id },
            data: {
                actualizedAt: new Date().toUTCString()
            }
        })
        return updatedResume

    }

    async getResumes(filters: ResumeFiltedDto): Promise<Resume[]> {

        const conditionals = {
            minLevel: filters.levelRange ? Number(filters.levelRange[0]) : undefined,
            maxLevel: filters.levelRange ? Number(filters.levelRange[1]) : undefined,
            type: filters.type == "Casual" ? "Casual"
                : filters.type == "Professional" ? "Professional" : undefined,
            language: filters.language
        }

        return await this.prisma.resume.findMany({
            include: {
                player: {
                    include: {
                        faceitProfile: true
                    }
                },
                roles: true
            },
            where: {
                player: {
                    faceitProfile: {
                        skillLevel: { gte: conditionals.minLevel, lte: conditionals.maxLevel },
                    }
                },
                type:conditionals.type as ResumeType,              
            }
        })
    }

}