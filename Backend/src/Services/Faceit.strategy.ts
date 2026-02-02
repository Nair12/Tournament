import { PassportStrategy } from "@nestjs/passport";
import { StateStore, StateStoreStoreCallback, StateStoreVerifyCallback, Strategy } from "passport-oauth2";
import { AuthService } from "./Auth.service";
import { Inject, Injectable } from "@nestjs/common";



@Injectable()
export class FaceitStrategy extends PassportStrategy(Strategy, 'faceit') {
    constructor(@Inject(AuthService) private authService: AuthService) {
        super({
            authorizationURL: 'https://accounts.faceit.com/oauth/authorize',
            tokenURL: 'https://accounts.faceit.com/oauth/token',

            clientID: process.env.FACEIT_CLIENT_ID!,
            clientSecret: process.env.FACEIT_CLIENT_SECRET!,
            callbackURL: process.env.CALLBACK_URL!,

            scope: ['openid', 'profile', 'email'],
            state: true,

            pkce: false,
        });
    }


    authorizationParams() {
        return {
            redirect_uri: process.env.CALLBACK_URL,
        };
    }
    
    async userProfile(accessToken: string, done: (err?: Error | null, profile?: any) => void) {
        try {
            // 3. ОБЯЗАТЕЛЬНО полный путь к userinfo
            const response = await fetch('https://api.faceit.com', {
                headers: { Authorization: `Bearer ${accessToken}` }
            });
            const data = await response.json();
            done(null, data);
        } catch (err) {
            done(err);
        }
    }

    async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
        if (!profile) return null;
        const token = await this.authService.validateViaFaceit(profile);
        return { access_token: token };
    }
}
