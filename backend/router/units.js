const express = require('express')
const router = express.Router()
const Unit = require('../schema/units')

router.get('/', async (req, res) => {
	const allUnits = await Unit.find()
	res.json(allUnits)
})
router.post('/', async (req, res) => {
	const { name } = req.body
	const newUnit = new Unit({ name })
	await newUnit.save()
	res.status(200).json(newUnit)
})
module.exports = router
