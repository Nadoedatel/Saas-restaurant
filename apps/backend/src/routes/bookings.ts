import express from "express"
import prisma from "../prisma" // Подключаем клиент Prisma — для работы с базой
import QRCode from "qrcode"    // Библиотека для генерации QR-кодов

const router = express.Router()

// POST-запрос на создание бронирования
router.post("/", async (req, res) => {
  // Получаем данные из формы
  const { name, phone, time, tableNumber } = req.body
  const parsedTime = new Date(time) // Преобразуем строку времени в объект Date

  try {
     // 1. Находим нужный стол по номеру
    const table = await prisma.table.findUnique({
      where: { number: tableNumber },
    })

    // Генерируем URL для QR-кода (пользователь потом по нему перейдёт)
    const qrUrl = `http://localhost:5173/checkIn/${table?.token}`

    // Генерируем QR в виде изображения (data URL)
    const qrCode = await QRCode.toDataURL(qrUrl)

    // Создаём запись в базе данных
    const booking = await prisma.booking.create({
      data: { name: name, phone: phone, time: parsedTime, token: table?.token, linkQr: qrCode, tableId: table?.id },
    })
    
    await prisma.table.update({
      where: { id: table?.id },
      data: { isOccupied: true },
    })
    // Отправляем обратно созданную запись и QR-код
    res.status(201).json({ booking, qrCode, success: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Ошибка при бронировании" })
  }
})

export default router // Экспортируем роутер, чтобы использовать в index.ts
