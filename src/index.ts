import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Handle not found routes
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    code: 404,
    message: 'route not found',
  })
})

app.listen(PORT, () => {
  console.log(`⚡️ Server is running on port http://localhost:${PORT}`)
})
