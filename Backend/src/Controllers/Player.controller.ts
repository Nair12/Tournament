import { BadRequestException, Body, Controller, Get, HttpCode, Inject, NotFoundException, Param, Post } from "@nestjs/common";
import { ok } from "assert";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";
import { IPlayerSerivce } from "src/Services/IPlayer.service";



@Controller("Player")
export class PlayerController
{
  constructor(
    @Inject(IPlayerSerivce)
     private readonly playerService:IPlayerSerivce
  ){}

  @Get(':id')
 async getUser(@Param('id') id:string):Promise<PlayerResponse | null>
  {

      const player =   await this.playerService.getUser(id)
      if(player == null){
        throw new NotFoundException("Player not found")
      }
      return player 
       
    
   

  }

  @Post()
  async addUser(@Body()payload:PlayerAddRequest){
    try{
        await this.playerService.addUser(payload)
        return {message:"User added succsessfully"}
        
    }
    catch(error){
        throw new BadRequestException("Failed to add user")
    }
      

  }
   





}