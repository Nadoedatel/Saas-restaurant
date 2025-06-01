// // prisma/seed.ts
// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   const existing = await prisma.table.findMany()
//   if (existing.length > 0) {
//     console.log('Столы уже существуют')
//     return
//   }

//   const tableCount = 10 // Сколько столов нужно
//   for (let i = 1; i <= tableCount; i++) {
//     await prisma.table.create({
//       data: {
//         number: i,
//       },
//     })
//   }

//   console.log(`Создано ${tableCount} столов`)
// }

// main()
//   .then(() => prisma.$disconnect())
//   .catch((e) => {
//     console.error(e)
//     prisma.$disconnect()
//   })
