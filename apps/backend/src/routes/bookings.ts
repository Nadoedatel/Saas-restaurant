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
    const table = await prisma.table.findUnique({
      where: { number: tableNumber },
    })

    const qrUrl = `http://localhost:5173/checkIn/${table?.token}`

    const qrCodeSvgString: string = await new Promise((resolve, reject) => {
      QRCode.toString(qrUrl, {
        type: 'svg',
        width: 500,
        margin: 2,
        color: {
          dark: '#000000FF',
          light: '#FFFFFFFF'
        }
      }, function (err, svg) {
        if (err) return reject(err);
        resolve(svg);
      });
    });

    const booking = await prisma.booking.create({
      data: { name: name, phone: phone, time: parsedTime, token: table?.token, linkQr: qrCodeSvgString, tableId: table?.id },
    })
    
    await prisma.table.update({
      where: { id: table?.id },
      data: { isOccupied: true },
    })
    res.status(201).json({ booking, qrCodeSvgString, success: true })
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Ошибка при бронировании" })
  }
})

router.get("/:token", async (req, res) => {
  try {
    const { token } = req.params

    const bookingQr = await prisma.booking.findUnique({
      where: { token: token },
    })

    res.json(bookingQr)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: "Ошибка при бронировании" })
  }
})
export default router // Экспортируем роутер, чтобы использовать в index.ts
