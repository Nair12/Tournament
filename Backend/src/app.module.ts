import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PlayerModule } from './modules/player.module';
import { TeamModule } from './modules/team.module';
import { ToruanamentModule } from './modules/tournament.module';
import { MatchModule } from './modules/match.module';

@Module({
  imports: [PrismaModule,PlayerModule,TeamModule,ToruanamentModule,MatchModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
