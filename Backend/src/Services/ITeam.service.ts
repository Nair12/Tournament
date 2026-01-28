import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest.dto'
import { TeamResponse } from '../DTO/TeamReponse.dto'

export abstract class ITeamService {
  abstract getTeam(id: string): Promise<TeamResponse | null>

  abstract createTeam(payload: TeamCreateRequest): Promise<TeamResponse>

  abstract deleteTeam(id: string): Promise<TeamResponse | null>
   abstract getByQuery(query:string):Promise<TeamResponse[]>
}