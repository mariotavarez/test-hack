import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.pedido.createMany({
    data: [
      { title: 'Pedido Alpha', description: 'Primary pedido overview.', status: 'active' },
      { title: 'Pedido Beta', description: 'Secondary pedido context.', status: 'draft' },
      { title: 'Pedido Gamma', description: 'Additional pedido integration.', status: 'inactive' },
    ],
    skipDuplicates: true,
  })

  console.log('Seed complete')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
