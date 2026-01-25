import { ITokenService } from "./IToken.service";



export class TokenService extends ITokenService{
    generateToken(): string {
        throw new Error("Method not implemented.");
    }
    
}