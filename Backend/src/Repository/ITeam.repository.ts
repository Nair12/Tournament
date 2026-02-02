import { Prisma, Team } from '@prisma/client'
import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest.dto'

export abstract class ITeamRepository {
  abstract getTeam(id: string): Promise<Team | null>

  abstract createTeam(payload: TeamCreateRequest,userId:string, avatar: string,tx?:Prisma.TransactionClient): Promise<Team>

  abstract deleteTeam(id: string): Promise<Team | null>

  abstract getByQuery(query:string):Promise<Team[]>

  abstract transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>) 

}