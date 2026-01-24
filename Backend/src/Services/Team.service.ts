// Team.service.ts
import { Injectable, Inject } from '@nestjs/common'
import { ITeamService } from './ITeam.service'
import { ITeamRepository } from 'src/Repository/ITeam.repository'
import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest'
import { TeamResponse } from '../DTO/TeamReponse'
import { plainToInstance } from 'class-transformer'

@Injectable()
export class TeamService extends ITeamService {
  constructor(
    @Inject(ITeamRepository)
    private readonly repository: ITeamRepository,
  ) {
    super()
  }

  async getTeam(id: string): Promise<TeamResponse | null> {
    const team = await this.repository.getTeam(id)

    if (!team) {
      return null
    }

    return plainToInstance(
      TeamResponse,
      {
        team
      },
      { excludeExtraneousValues: true },
    )
  }

  async createTeam(payload: TeamCreateRequest): Promise<TeamResponse> {
    const team = await this.repository.createTeam(payload)

    return plainToInstance(
      TeamResponse,
      {
        team
      },
      { excludeExtraneousValues: true },
    )
  }

  async deleteTeam(id: string): Promise<TeamResponse | null> {
    const team = await this.repository.deleteTeam(id)

    if (!team) {
      return null
    }

    return plainToInstance(
      TeamResponse,
      {
       team
      },
      { excludeExtraneousValues: true },
    )
  }
}
