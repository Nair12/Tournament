import { Injectable } from "@nestjs/common";
import { PlayerAddRequest } from "../DTO/PlayerAddRequset.dto";
import { PlayerResponse } from "../DTO/PlayerResponse.dto";
import { Player, Prisma } from "@prisma/client";



export abstract class IPlayerRepository{
    abstract getPlayer(id:string):Promise<Player | null>

    abstract  addPlayer(payload:PlayerAddRequest):Promise<void>

    abstract playerExists(email:string):Promise<boolean>

    abstract findByName(name:string):Promise<Player | null>

    abstract findByEmail(email:string):Promise<Player | null>
  
   abstract updateTeamId(teamId: string, playerId: string,tx?:Prisma.TransactionClient):Promise<Player>
    

}