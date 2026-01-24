import { Team } from '@prisma/client'
import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest'

export abstract class ITeamRepository {
  abstract getTeam(id: string): Promise<Team | null>

  abstract createTeam(payload: TeamCreateRequest): Promise<Team>

  abstract deleteTeam(id: string): Promise<Team | null>
}