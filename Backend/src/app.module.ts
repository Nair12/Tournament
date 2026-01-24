import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'prisma/prisma.module';
import { PlayerService } from './Services/Player.service';
import { IPlayerRepository } from './Repository/IPlayer.repository';
import { PlayerRepository } from './Repository/Player.repository';
import { PlayerController } from './Controllers/Player.controller';
import { IPlayerSerivce } from './Services/IPlayer.service';
import { TournamentSerivce } from './Services/Tournament.service';
import { ITournamentRepository } from './Repository/ITournament.repository';
import { TournamentRepository } from './Repository/Tournament.repository';
import { TournamentController } from './Controllers/Tournament.controller';
import { ITournamentService } from './Services/ITournament.service';
import { MatchSerivce } from './Services/Match.service';
import { MatchController } from './Controllers/Match.controller';
import { IMatchRepository } from './Repository/IMatch.repository';
import { MatchRepository } from './Repository/Match.repository';
import { IMatchSerivce } from './Services/IMatch.service';
import { PlayerModule } from './modules/player.module';
import { TeamModule } from './modules/team.module';
import { ToruanamentModule } from './modules/tournament.module';
import { MatchModule } from './modules/match.module';

@Module({
  imports: [PrismaModule,PlayerModule,TeamModule,ToruanamentModule,MatchModule],
  controllers: [AppController,TournamentController,MatchController],
  providers: [AppService]
})
export class AppModule {}
