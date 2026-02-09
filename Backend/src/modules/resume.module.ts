import { Module } from "@nestjs/common";
import { ResumeController } from "src/Controllers/Resume.controller";
import { IResumeRepository } from "src/Repository/Resume/IResume.repository";
import { ResumeRepository } from "src/Repository/Resume/Resume.repository";
import { IResumeService } from "src/Services/Resume/IResume.service";
import { ResumeService } from "src/Services/Resume/ResumeService";


@Module({
    controllers:[ResumeController],
    providers:[
        {
            provide:IResumeService,
            useClass:ResumeService
        },
        {
            provide:IResumeRepository,
            useClass:ResumeRepository
        }
    ],
    exports:[IResumeService]
})
export class ResumeModule{}