const mongoose = require('mongoose')
const {Schema} = mongoose

const recipeSchema =new Schema({
    name: String,
    cals: Number,
    duration: Number,
    img: String,
    ingredients: Array
})

const Recipe = mongoose.model('Recipe',recipeSchema)

module.exports = Recipe