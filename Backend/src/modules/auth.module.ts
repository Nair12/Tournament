// auth.module.ts
import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from '../Services/Auth.service'
import { JwtStrategy } from '../Services/jwt.strategy'
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TokenModule } from './token.module';
import { PlayerModule } from './player.module';
import { FaceitStrategy } from 'src/Services/Faceit.strategy';
import { FaceitModule } from './faceit.module';

@Module({
  imports: [
    TokenModule,
    forwardRef(()=>PlayerModule),
    PassportModule,
   forwardRef(() => FaceitModule),
    
  ],
  providers: [AuthService, JwtStrategy,FaceitStrategy],

  exports: [AuthService]
})
export class AuthModule{}