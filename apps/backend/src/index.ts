import express from 'express' // Подключаем Express — фреймворк для создания сервера
import cors from 'cors'       // Позволяет принимать запросы с другого домена (для связи фронта и бэка)
import bookingsRouter from './routes/bookings' // Импортируем отдельный файл, где логика бронирования
import checkIn from './routes/checkIn'

const app = express() // Создаём приложение Express
const PORT = process.env.PORT || 3000 // Указываем порт, можно задать через .env

app.use(cors()) // Включаем CORS, чтобы фронтенд мог обращаться к серверу
app.use(express.json()) // Позволяет Express понимать JSON в теле запроса (req.body)

app.use('/api/bookings', bookingsRouter) 
app.use('/api/checkIn', checkIn) 
// Все запросы на /api/bookings идут в файл routes/bookings.ts

app.get('/api/ping', (_req, res) => {
  // Простой тестовый эндпоинт для проверки, жив ли сервер
  res.json({ message: 'pong' })
})

app.listen(PORT, () => {
  // Запускаем сервер и слушаем указанный порт
  console.log(`Server running on http://localhost:${PORT}`)
})
