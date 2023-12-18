const mongoose = require('mongoose')
const Schema = mongoose.Schema
const publicSchema = new Schema({
    todo: { type: String }
})

module.exports = mongoose.model('Public', publicSchema)