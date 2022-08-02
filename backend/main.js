require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


const apiRouter = require('./router/api')
try {
	mongoose.connect(process.env.DB_CONNECT)
	console.log(`db connected to ${process.env.DB_CONNECT}`)
} catch (err) {
	console.log(err)
}

const port = 1337

app.use(cors())
app.use(bodyParser.json())

app.use(express.static("build")) // Serve react app
app.use('/api',apiRouter)

app.listen(port, () => {
	console.log(`Backend listening on ${port}`)
})
