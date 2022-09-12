const mongoose = require('mongoose')
const {Schema} = mongoose
const Recipe = require('./recipes')

const menuSchema = new Schema({
    week: {type:String, unique:true},
    meals: [{_id: false,type: Recipe.schema , default:{}}]
})

const Menu = mongoose.model('Menu',menuSchema)

module.exports = Menu