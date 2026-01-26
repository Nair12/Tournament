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
    return await this.prisma.team.findUnique({
      where: { id },
      include: {
        players: true,
      },
    })
  }

  async createTeam(payload: TeamCreateRequest): Promise<Team> {
    return await this.prisma.team.create({
      data: {
        name: String(payload.name),
        avatar:"File.jpg",
        captain: {
          connect: {
            id: String(payload.captainId)
          }
        }

      }
    })


  }

  async deleteTeam(id: string): Promise<Team | null> {
    return await this.prisma.team.delete({
      where: { id: String(id) },
    })
  }


  async getByQuery(query: string): Promise<Team[]> {
    const teams = this.prisma.team.findMany({
      where: {
        name: {
          contains: query,
          mode:"insensitive"
        }
      }
    })
    if(!teams) return []

    return teams

  }


}