const express = require('express')
const router = express.Router()
const Recipes = require('../schema/recipes')

router.get('/', async(req,res) =>{
    const allRecipes = await Recipes.find()
    res.json(allRecipes)
})


module.exports = router