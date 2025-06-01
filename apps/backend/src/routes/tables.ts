import express from "express"
import prisma from "../prisma"

const router = express.Router()

// Получить все столы
router.get("/", async (req, res) => {
  try {
    const tables = await prisma.table.findMany()
    res.json(tables)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Ошибка при получении столиков" })
  }
})

export default router