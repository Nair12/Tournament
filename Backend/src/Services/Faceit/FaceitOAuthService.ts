import FaceitVisa from 'faceit-visa';
import { Inject, Injectable } from '@nestjs/common';
import { FaceitUserRequstDto } from 'src/DTO/Faceit/FaceitUserRequest.dto';
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';
import { IFaceitApiService } from './IFaceitApi.service';

@Injectable()
export class FaceitOAuthService {

    constructor(
        @Inject(IFaceitApiService)
        private faceitApi: IFaceitApiService
    ) { }

    private faceit = new FaceitVisa({
        clientId: process.env.FACEIT_CLIENT_ID!,
        redirectUri: process.env.CALLBACK_URL!,
        clientSecret: process.env.FACEIT_CLIENT_SECRET!
    });

    getAuthUrl() {
        return this.faceit.getAuthUrl();
    }

    async exchangeCode(code: string, codeVerifier: string) {
        return this.faceit.exchangeCode(code, codeVerifier);
    }

    async getProfile(accessToken: string): Promise<FaceitUserRequstDto | null> {
        const oauthProfile = await this.faceit.getUserProfile(accessToken);
        if (!oauthProfile || !oauthProfile.guid) return null;


        const fullData = await this.faceitApi.getFullPlayerDetails(oauthProfile.guid);

        // 3. Склеиваем данные из двух источников в один DTO
        return this.mapProfileData(oauthProfile, fullData)
    }

    private mapProfileData(oauth: any, full: any): FaceitUserRequstDto {
        const cs2 = full?.games?.cs2;

        return {
            guid: oauth.guid,
            nickname: oauth.nickname,
            email: oauth.email,
            picture: oauth.picture || full.avatar || null,

            // (Full Data API)
            skillLevel: cs2?.skill_level || 0,
            elo: cs2?.faceit_elo || 0,
            country:full.country
        };
    }
}