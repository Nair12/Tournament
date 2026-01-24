import { Injectable } from "@nestjs/common";
import { PlayerAddRequest } from "../DTO/PlayerAddRequset";
import { PlayerResponse } from "../DTO/PlayerResponse";
import { Player } from "@prisma/client";



export abstract class IPlayerRepository{
    abstract getUser(id:string):Promise<Player | null>

    abstract  addUser(payload:PlayerAddRequest):Promise<void>

    

}