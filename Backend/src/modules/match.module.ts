import { Module } from "@nestjs/common";
import { MatchController } from "src/Controllers/Match.controller";
import { IMatchRepository } from "src/Repository/IMatch.repository";
import { MatchRepository } from "src/Repository/Match.repository";
import { IMatchSerivce } from "src/Services/IMatch.service";
import { MatchSerivce } from "src/Services/Match.service";




@Module(
    {
        controllers: [MatchController],
        providers: [
            {
                provide: IMatchRepository,
                useClass: MatchRepository
            },
            {
                provide: IMatchSerivce,
                useClass: MatchSerivce
            }
        ],
        exports: [IMatchSerivce]
    })
export class MatchModule { }