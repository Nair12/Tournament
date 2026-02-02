import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PlayerModule } from './modules/player.module';
import { TeamModule } from './modules/team.module';
import { ToruanamentModule } from './modules/tournament.module';
import { MatchModule } from './modules/match.module';
import { FaceitModule } from './modules/faceit.module';

@Module({
  imports: [PrismaModule,PlayerModule,TeamModule,ToruanamentModule,MatchModule,FaceitModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
