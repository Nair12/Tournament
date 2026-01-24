import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";
import { IPlayerRepository } from "./IPlayer.repository";
import { PrismaService } from "prisma/PrismaClient";
import { Player } from "@prisma/client";
import { Injectable } from "@nestjs/common";



@Injectable()
export class PlayerRepository extends IPlayerRepository{

    constructor(private prisma:PrismaService){
        super()
    }

    async getUser(id: string): Promise<Player| null>  {
       
      const player =  await this.prisma.player.findUnique({where:{id: id},include:{team:true}})

      if(!player){
        return null
      }

       return player

    }
    async addUser(payload: PlayerAddRequest): Promise<void> {

        const res = await this.prisma.player.create({data:{
            name:String(payload.name),
            password:String(payload.password),
            email: String(payload.email)
        }})

        console.log("Result:"+res)


        
    }

}