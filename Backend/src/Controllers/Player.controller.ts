import { BadRequestException, Body, Controller, Get, HttpCode, Inject, NotFoundException, Param, Post } from "@nestjs/common";
import { ok } from "assert";
import { PlayerAddRequest } from "src/DTO/PlayerAddRequset";
import { PlayerResponse } from "src/DTO/PlayerResponse";
import { IPlayerService } from "src/Services/IPlayer.service";



@Controller("Player")
export class PlayerController {
  constructor(
    @Inject(IPlayerService)
    private readonly playerService: IPlayerService
  ) { }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<PlayerResponse | null> {

    const player = await this.playerService.getPlayer(id)
    if (player == null) {
      throw new NotFoundException("Player not found")
    }
    return player




  }

  @Post()
  async register(@Body() payload: PlayerAddRequest) {

    await this.playerService.registerPlayer(payload)
    return { message: "player has been registered succsessfully" }

  }


}