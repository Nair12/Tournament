import { Inject } from "@nestjs/common";
import { MatchRegisterRequest } from "src/DTO/MatchRegisterRequest.dto";
import { MatchResponse } from "src/DTO/MatchResponse.dto";
import { IMatchRepository } from "src/Repository/IMatch.repository";


export abstract class IMatchSerivce{
       
    abstract getMatch(id:string): Promise<MatchResponse | null>

    abstract registerMatch(payload:MatchRegisterRequest):Promise<void>

    abstract deleteMatch(id:string):Promise<MatchResponse | null>



}