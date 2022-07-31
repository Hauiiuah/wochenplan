const mongoose = require('mongoose')
const { Schema } = mongoose

const unitSchema = new Schema({ name: String })

const Unit = mongoose.model('Unit', unitSchema)

module.exports = Unit
