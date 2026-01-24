import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest'
import { TeamResponse } from '../DTO/TeamReponse'

export abstract class ITeamService {
  abstract getTeam(id: string): Promise<TeamResponse | null>

  abstract createTeam(payload: TeamCreateRequest): Promise<TeamResponse>

  abstract deleteTeam(id: string): Promise<TeamResponse | null>
}