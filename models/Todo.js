// talk to db using mongoose
const mongoose = require('mongoose')

// we have schema
const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

// exporting model
module.exports = mongoose.model('Todo', TodoSchema)
