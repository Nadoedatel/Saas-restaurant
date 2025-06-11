import express from "express"
import prisma from "../prisma"

const router = express.Router()

// Получить все столы
router.get("/:tableId", async (req, res) => {
  try {
    const tableId = parseInt(req.params.tableId);

    const table = await prisma.table.findUnique({
      where: {
        id: tableId,
      },
    })

    res.json(table)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Ошибка при получении столиков" })
  }
})

router.get("/", async (req, res) => {
  try {
    const table = await prisma.table.findMany()

    res.json(table)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Ошибка при получении столиков" })
  }
})

export default router