const express = require('express')
const unitRouter = require("./units");
const ingredientRouter = require("./ingredient");
const recipeRouter = require("./recipes");
const router = express.Router()


router.use('/units', unitRouter)
router.use('/ingredients', ingredientRouter)
router.use('/recipes',recipeRouter)

module.exports = router