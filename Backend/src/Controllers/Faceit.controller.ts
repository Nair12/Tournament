import { Controller, Get, Inject, Post, Query, Req, Res, Session, UseGuards } from "@nestjs/common";
import { IFaceitService } from "src/Services/IFaceitService";
import { AuthGuard } from "@nestjs/passport";
import * as express from 'express';
import { FaceitOAuthService } from "src/Services/FaceitOAuthService";
import { session } from "passport";
import { AuthService } from "src/Services/Auth.service";

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

    @Get()
    async faceitLogin(@Res({ passthrough: true }) res: express.Response, @Session() session) {
        const { url, codeVerifier } = this.oAuthService.getAuthUrl()
        session.faceitVerifier = codeVerifier;
        res.redirect(url)

    }


    @Get("callback")
    async loginCallback(@Res({ passthrough: true }) res: express.Response, @Req() req, @Query('code') code: string,
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
        })



        return res.redirect("http://localhost:3000/dashboard")


    }

  

}
