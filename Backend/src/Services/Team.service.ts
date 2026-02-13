// Team.service.ts
import { Injectable, Inject, NotFoundException, BadRequestException } from '@nestjs/common'
import { ITeamService } from './ITeam.service'
import { ITeamRepository } from 'src/Repository/ITeam.repository'
import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest.dto'
import { TeamResponse } from '../DTO/TeamReponse.dto'
import { plainToInstance } from 'class-transformer'
import { ITeamValidator } from 'src/Validators/ITeamValidator'
import { IPlayerFassade } from 'src/Fassade/IPlayerFassade'

@Injectable()
export class TeamService extends ITeamService {
  constructor(
    @Inject(ITeamRepository)
    private readonly repository: ITeamRepository,
    @Inject(ITeamValidator)
    private readonly validator: ITeamValidator,
    @Inject(IPlayerFassade)
    private readonly playerFassade: IPlayerFassade
  ) {
    super()
  }

  async getTeam(teamId: string,requestId:string): Promise<TeamResponse | null> {
    const team = await this.repository.getTeam(teamId)

    if (!team) {
      return null
    }
     console.log("Team before mapping: " +  JSON.stringify(team))
    return plainToInstance(
      TeamResponse,{...team, canEdit:this.validator.canEdit(team,requestId).isValid}, { excludeExtraneousValues: true },
      
    )
  }

  async createTeam(payload: TeamCreateRequest, userId: string,avatar:string): Promise<TeamResponse> {

    
    
    const player = await this.playerFassade.getPlayer(userId)

    if(!player) throw new NotFoundException('Player not found')

    const validation = this.validator.canCreateTeam(player)
    if(!validation.isValid) throw new BadRequestException(validation.message)

    
    
    
    const team =  await this.repository.transaction(async (tx)=>{

     const team = await  this.repository.createTeam(payload,userId,avatar,tx)
     await this.playerFassade.updateTeam(team.id,userId,tx)
     return team 
    }) 

    return plainToInstance(
      TeamResponse, team, { excludeExtraneousValues: true },
    )
  }

  async deleteTeam(id: string): Promise<TeamResponse | null> {
    const team = await this.repository.deleteTeam(id)

    if (!team) {
      return null
    }

    return plainToInstance(
      TeamResponse, team, { excludeExtraneousValues: true },
    )
  }

  async getByQuery(query: string): Promise<TeamResponse[]> {
    const teams = await this.repository.getByQuery(query)

    if (!teams) return []

    return plainToInstance(TeamResponse, teams, { excludeExtraneousValues: true })
  }


}
