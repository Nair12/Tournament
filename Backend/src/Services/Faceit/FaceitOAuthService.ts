import FaceitVisa from 'faceit-visa';
import { Injectable } from '@nestjs/common';
import { FaceitUserRequstDto } from 'src/DTO/Faceit/FaceitUserRequest.dto';
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';

@Injectable()
export class FaceitOAuthService {
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
        const profile =  await this.faceit.getUserProfile(accessToken);
        const mappedProfile = this.mapVisaProfileToDto(profile)
        if (!mappedProfile) return null 
        return mappedProfile
    }

    private mapVisaProfileToDto(profile: any): FaceitUserRequstDto | null {

        if (!profile) return null;
        return {
            guid: profile.guid,
            nickname: profile.nickname,
            email: profile.email,
            picture: profile.picture ?? null,
            skillLevel: profile.skill_level,
            elo: profile.elo,
        };
    }
}