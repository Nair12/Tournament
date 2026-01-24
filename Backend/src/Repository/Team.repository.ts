import { Team } from '@prisma/client'
import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest'
import { ITeamRepository } from './ITeam.repository'
import { PrismaService } from 'prisma/PrismaClient'
import { Injectable } from '@nestjs/common'

@Injectable()
export class TeamRepository extends ITeamRepository {
  constructor(private readonly prisma: PrismaService) {
    super()
  }

  async getTeam(id: string): Promise<Team | null> {
    return this.prisma.team.findUnique({
      where: { id },
      include: {
        players: true,
      },
    })
  }

  async createTeam(payload: TeamCreateRequest): Promise<Team> {
    return this.prisma.team.create({
       data:{
        name:String(payload.name),
        captain:{
            connect:{
                id:String(payload.captainId)
            }
        }
    
       }
    })
        
    
  }

  async deleteTeam(id: string): Promise<Team | null> {
    return this.prisma.team.delete({
      where: { id },
    })
  }
}