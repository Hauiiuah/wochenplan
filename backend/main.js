require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const ingredientRouter = require('./router/ingredient')
const unitRouter = require('./router/units')
const recipeRouter  = require('./router/recipes')

try {
	mongoose.connect(process.env.DB_CONNECT)
	console.log(`db connected to ${process.env.DB_CONNECT}`)
} catch (err) {
	console.log(err)
}

const port = 1337

app.use(cors())
app.use(bodyParser.json())

app.get('/', async (req, res) => {
	res.status(403).end()
})
app.use('/units', unitRouter)
app.use('/ingredients', ingredientRouter)
app.use('/recipes',recipeRouter)

app.listen(port, () => {
	console.log(`Backend listening on ${port}`)
})
