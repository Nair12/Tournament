// auth.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from '../Services/Auth.service'
import { JwtStrategy } from '../Services/jwt.strategy'
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ITokenService } from 'src/Services/IToken.service';
import { TokenModule } from './token.module';
import { PlayerModule } from './player.module';

@Module({
  imports: [
    TokenModule,
    forwardRef(()=>PlayerModule),
    PassportModule,
  ],
  providers: [AuthService, JwtStrategy],

  exports: [AuthService]
})
export class AuthModule{}