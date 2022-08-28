const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date
  },
  tag: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
