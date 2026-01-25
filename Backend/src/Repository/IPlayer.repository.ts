import { Injectable } from "@nestjs/common";
import { PlayerAddRequest } from "../DTO/PlayerAddRequset";
import { PlayerResponse } from "../DTO/PlayerResponse";
import { Player } from "@prisma/client";



export abstract class IPlayerRepository{
    abstract getPlayer(id:string):Promise<Player | null>

    abstract  addPlayer(payload:PlayerAddRequest):Promise<void>

    abstract playerExists(email:string):Promise<boolean>

    abstract findByName(name:string):Promise<Player | null>
  

    

}