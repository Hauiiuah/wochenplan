const express = require('express')
const unitRouter = require("./units");
const ingredientRouter = require("./ingredient");
const recipeRouter = require("./recipes");
const menuRouter = require('./menus')
const router = express.Router()


router.use('/units', unitRouter)
router.use('/ingredients', ingredientRouter)
router.use('/recipes',recipeRouter)
router.use('/menus',menuRouter)

module.exports = router