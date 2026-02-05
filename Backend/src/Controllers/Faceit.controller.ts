import { Controller, Get, Inject, Param, Post, Query, Req, Res, Session, UseGuards } from "@nestjs/common";
import { IFaceitService } from "src/Services/Faceit/IFaceitService";
import { AuthGuard } from "@nestjs/passport";
import * as express from 'express';
import { FaceitOAuthService } from "src/Services/Faceit/FaceitOAuthService";
import { session } from "passport";
import { AuthService } from "src/Services/Auth.service";
import { JwtAuthGuard } from "src/Guard/jwt.auth.guard";

@Controller("faceit")
export class FaceitController {

    constructor(
        @Inject(IFaceitService)
        private readonly faceitServie: IFaceitService,
        @Inject(FaceitOAuthService)
        private readonly oAuthService: FaceitOAuthService,
        @Inject(AuthService)
        private readonly authService: AuthService
    ) { }

    @Get("me/stats")
    @UseGuards(JwtAuthGuard)
    async getStats(@Req()req)
    {
      const id = req.user.faceitId
      const res = await this.faceitServie.getStats(id)
      return res 
    }

    @Get("stats/:id")
    async getStatsById(@Param('id') id:string)
    {
        const res = await this.faceitServie.getStats(id)
        return res 
    }
   

    @Get()
    async faceitLogin(@Res({ passthrough: true }) res: express.Response, @Session() session) {
        const { url, codeVerifier } = this.oAuthService.getAuthUrl()
        session.faceitVerifier = codeVerifier;
        res.redirect(url)

    }
    
    

    


    @Get("callback")
    async loginCallback(@Res() res: express.Response, @Req() req, @Query('code') code: string,
        @Session() session) {


        const tokens = await this.oAuthService.exchangeCode(
            code,
            session.faceitVerifier,
        );

        const profile = await this.oAuthService.getProfile(tokens?.access_token || "")
        const loginResponse = await this.authService.validateViaFaceit(profile)
        console.log(loginResponse.access_token)

        res.cookie("access_token", loginResponse.access_token, {
            httpOnly: true,
            maxAge: 3600000,
            sameSite: 'lax',
            secure: false,
            path: '/',
        })



        return res.redirect("http://localhost:3000/dashboard")


    }



}
