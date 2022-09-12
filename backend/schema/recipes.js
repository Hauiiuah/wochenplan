const mongoose = require('mongoose')
const {Schema} = mongoose


const recipeSchema =new Schema({
    name: String,
    cals: Number,
    duration: Number,
    img: String,
    ingredients: [{
        _id: false,
        amount: Number,
        name: String,
        unit: String
    }]
})

const Recipe = mongoose.model('Recipe',recipeSchema)

module.exports = Recipe