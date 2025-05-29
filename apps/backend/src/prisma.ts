import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function connectToDB() {
  try {
    await prisma.$connect();
    console.log('✅ Подключено к базе данных!');
  } catch (e) {
    console.error('❌ Ошибка подключения к базе:', e);
    process.exit(1);
  }
}

connectToDB();

export default prisma