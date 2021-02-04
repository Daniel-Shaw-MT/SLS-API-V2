require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')


app.use(cors({
  
}))
var helmet = require('helmet')
const port = 8000

app.use(helmet.hidePoweredBy())

mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to DB'))

// Middlewares
app.use(express.json())

// Routes
const flightRouter = require('./routes/flights')
app.use('/flights', flightRouter)

app.listen(port, () => {
  console.log(`SLS API Started at http://localhost:${port}`)
})