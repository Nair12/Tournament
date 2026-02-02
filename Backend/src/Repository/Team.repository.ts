import { Prisma, Team } from '@prisma/client'
import { TeamCreateRequest } from 'src/DTO/TeamCreateRequest.dto'
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

  async createTeam(payload: TeamCreateRequest, userId: string, avatar: string, tx?: Prisma.TransactionClient): Promise<Team> {

    const dbClient = tx ? tx : this.prisma

    return await dbClient.team.create({
      data: {
        name: String(payload.name),
        avatar: avatar,
        captain: {
          connect: {
            id: String(userId)
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
          mode: "insensitive"
        }
      }
    })
    if (!teams) return []

    return teams

  }
  async transaction<T>(fn: (tx: Prisma.TransactionClient) => Promise<T>) {
    return await this.prisma.$transaction(fn);
  }


}