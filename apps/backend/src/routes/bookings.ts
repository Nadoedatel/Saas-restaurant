
import express from 'express'
import prisma from '../prisma'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, phone, time } = req.body

  const parsedTime = new Date(time);
  
  try {
    const booking = await prisma.booking.create({
      data: { name, phone, time: parsedTime },
    })
    res.status(201).json(booking)
  } catch (e) {
    console.error(e)
    res.status(500).json({ error: 'Ошибка при бронировании' })
  }
})

export default router
