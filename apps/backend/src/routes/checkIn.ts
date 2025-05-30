import express from "express";
import prisma from "../prisma";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, phone, bookingId } = req.body;

  try {
    const booking = await prisma.booking.findUnique({
      where: { token: bookingId },
    });

    if (!booking) {
      res.status(404).json({ error: "Бронирование не найдено" });
    }
    res.status(200).json({ message: "Проверка успешна", booking });
  } catch (err) {
    console.error("Ошибка при check-in:", err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

export default router;