import express from 'express'
import cors from 'cors'
import bookingsRouter from './routes/bookings'
import QRCode from 'qrcode';

const app = express()
const PORT = process.env.PORT || 3000

const qrUrl = `api/check-in/${booking.token}`;
const qrCodeDataUrl = await QRCode.toDataURL(qrUrl);
app.use(cors())
app.use(express.json())
app.use('/api/bookings', bookingsRouter)

app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong' })
})

app.post('/api/bookings', (req, res) => {
  const { tableId, name, phone, time } = req.body
  console.log('New booking:', req.body)
  // В будущем — сохранить в базу данных
  res.status(201).json({ success: true })
})


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
