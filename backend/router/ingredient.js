const express = require('express')
const router = express.Router()
const Ingredient = require('../schema/ingredient')

router.get('/', async (req, res) => {
	const allIngredients = await Ingredient.find()
	res.json(allIngredients)
})

router.post('/', async (req, res) => {
	const { name, unit } = req.body
	const newIngredient = new Ingredient({ name, unit })
	await newIngredient.save()
	res.status(200).json(newIngredient)
})

module.exports = router
