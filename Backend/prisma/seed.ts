import { PrismaClient } from '@prisma/client'
import { PrismaService } from './PrismaClient'

const prisma = new PrismaService()

export const ROLES = [
  "AWP", 
  "Entry", 
  "IGL", 
  "Support", 
  "Lurker",
  "Coach",
  "B-site anchor",
  "A-site anchor",
  "Middle player",
  "Riffler"
]

async function main() {
  console.log('Start seeding roles...')


  await prisma.role.createMany({
    data: ROLES.map((roleName) => ({
      name: roleName,
    })),
    skipDuplicates: true, 
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
