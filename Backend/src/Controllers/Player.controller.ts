import { BadRequestException, Body, Controller, Get, HttpCode, Inject, NotFoundException, Param, Res, Post, UseGuards, UseInterceptors, Req } from "@nestjs/common";
import * as express from 'express';
import { ok } from "assert";
import { LoginRequest } from "src/DTO/LoginRequest.dto";
import { PlayerAddRequest } from "src/DTO/Player/PlayerAddRequset.dto";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";
import { IPlayerService } from "src/Services/IPlayer.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { randomUUID } from "crypto";
import { diskStorage } from "multer";
import { extname } from "path";
import { AuthGuard } from "@nestjs/passport";
import { PlayerResponse } from "src/DTO/Player/PlayerResponse.dto";


@Controller("Player")
export class PlayerController {
  constructor(
    @Inject(IPlayerService)
    private readonly playerService: IPlayerService
  ) { }



  @Get('faceit')
  @UseGuards(AuthGuard('faceit'))
  async faceitLogin() {
    //initiates the Faceit OAuth2 login flow
  }

  

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getUserData(@Req() req) {
    const user = req.user
    const data = await this.playerService.getPlayer(user.userId)
    console.log(data)
    return data 


  }



  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<PlayerResponse | null> {

    const player = await this.playerService.getPlayer(id)
    if (player == null) {
      throw new NotFoundException("Player not found")
    }
    return player
  }


  @Post()
  @UseInterceptors(FileInterceptor("avatar", {
    storage: diskStorage({
      destination: './uploads/players',
      filename: (req, file, cb) => {
        const uuid = randomUUID()
        const ext = extname(file.originalname)
        const filename = `${uuid}${ext}`
        cb(null, filename)
      }
    })


  }))
  async register(@Body() payload: PlayerAddRequest) {

    await this.playerService.registerPlayer(payload)
    return { message: "player has been registered succsessfully" }

  }

  @Post("login")
  async login(@Body() payload: LoginRequest, @Res({ passthrough: true }) res: express.Response) {
    const loginResponse = await this.playerService.login(payload)

    res.cookie("access_token", loginResponse.access_token, {
      httpOnly: true,
      maxAge: 3600000,
      sameSite: 'lax',
      secure: false,
    })
    return { message: "Login successful" }
  }


}